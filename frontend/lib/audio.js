import { useRef, useCallback, useEffect } from "react";

/* Attaches a Web Audio AnalyserNode to a real <audio> element so the visualizer
   can react to whatever is playing. This is plumbing only — it reads levels, it
   does not process sound. The graph is created lazily on the first `resume()`
   (browsers require a user gesture before audio can start).

   Returns:
     audioRef     – attach to your <audio ref={audioRef} />
     resume()     – call inside a click handler before .play()
     getAnalyser  – () => AnalyserNode | null, passed to the visualizer         */

const EQUALIZER_BANDS = [
  { type: "lowshelf",  frequency: 80   },
  { type: "peaking",   frequency: 250  },
  { type: "peaking",   frequency: 500  },
  { type: "peaking",   frequency: 1000 },
  { type: "highshelf", frequency: 2000 }
];

const EFFECT_LEVELS = {
  reverb: 2.5,
  chorus: 0.5,
  distortion: 1.0,
};

function makeImpulseResponse(ctx, duration_seconds, decay) {
  const rate = ctx.sampleRate;
  const length = rate * duration_seconds;
  const impulse = ctx.createBuffer(2, length, rate);

  for(let channel = 0; channel < impulse.numberOfChannels; channel++) {
    const channelData = impulse.getChannelData(channel);
    for(let i = 0; i < length; i++) {
      channelData[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / length, decay);
    }
  }

  return impulse;
}

function makeDistortionCurve(amount) {
  const upperBound = 44100;
  const curve = new Float32Array(upperBound);

  for(let i = 0; i < upperBound; i++) {
    const x = (i * 2) / upperBound - 1;
    curve[i] = ((3 + amount) * x * 20 * Math.PI / 180) / (Math.PI + amount * Math.abs(x));
  }

  return curve;
}

function buildReverb(ctx, input, output) {
  const reverb = ctx.createConvolver();
  reverb.buffer = makeImpulseResponse(ctx, 3.0, 1.2);
  
  const wet = ctx.createGain();
  wet.gain.value = 0;

  input.connect(reverb).connect(wet).connect(output);

  return wet;
}

function buildChorus(ctx, input, output) {
  const delay = ctx.createDelay();
  delay.delayTime.value = 0.03;

  const lfo = ctx.createOscillator();
  lfo.type = "sine";
  lfo.frequency.value = 0.75;

  const lfoGain = ctx.createGain();
  lfoGain.gain.value = 0.0045;

  lfo.connect(lfoGain).connect(delay.delayTime);
  lfo.start();

  const wet = ctx.createGain();
  wet.gain.value = 0;

  input.connect(delay).connect(wet).connect(output);

  return wet;
}

function buildDistortion(ctx, input, output) {
  const distortion = ctx.createWaveShaper();
  distortion.curve = makeDistortionCurve(50);
  distortion.oversample = "4x";

  const wet = ctx.createGain();
  wet.gain.value = 0;

  input.connect(distortion).connect(wet).connect(output);

  return wet;
}

function buildEqulizer(ctx, savedEq, input) {
  const equalizerBands = EQUALIZER_BANDS.map((band) => {
    const filter = ctx.createBiquadFilter();
    filter.type = band.type;
    filter.frequency.value = band.frequency;
    filter.gain.value = 0;

    return filter;
  });

        
    input.connect(equalizerBands[0]);
    for (let i = 0; i < equalizerBands.length - 1; i++) {
      equalizerBands[i].connect(equalizerBands[i + 1]);
    }

    if (savedEq) {
      savedEq.forEach((gain, i) => {
        equalizerBands[i].gain.value = gain;
      });
    }

  return equalizerBands;
}

export function useAnalyser(getInitialBands) {
  const audioRef = useRef(null);
  const graph = useRef(null);

  const ensure = useCallback(() => {
    if (graph.current || !audioRef.current) {
      return graph.current;
    }

    try {
      const AC = window.AudioContext || window.webkitAudioContext;
      const ctx = new AC();
      
      const src = ctx.createMediaElementSource(audioRef.current);
      const bands = buildEqulizer(ctx, getInitialBands?.(), src);
      const eqOut = bands[bands.length - 1];

      const mix = ctx.createGain();
      eqOut.connect(mix);

      const effects = {
        reverb: buildReverb(ctx, eqOut, mix),
        chorus: buildChorus(ctx, eqOut, mix),
        distortion: buildDistortion(ctx, eqOut, mix)
      };

      const analyser = ctx.createAnalyser();
      analyser.fftSize = 2048;
      analyser.smoothingTimeConstant = 0.82;
      mix.connect(analyser).connect(ctx.destination);

      graph.current = { ctx, analyser, bands, effects};
    }
    catch { 
      /* ignore if unsupported */ 
    }
    
    return graph.current;
  }, []);

  const resume = useCallback(async () => {
    const graph = ensure();
    if (graph && graph.ctx.state === "suspended") { 
      try { 
        await graph.ctx.resume(); 
      }
      catch {

      } 
    }
  }, [ensure]);

  const setBandGain = useCallback((bandIndex, gain) => {
    const currGraph = graph.current;
    if (!currGraph) {
      return;
    }

    const band = currGraph.bands[bandIndex];
    if (!band) {
      return;
    }

    band.gain.value = gain;
  }, []);

  const setEffect = useCallback((name, on) => {
    const currGraph = graph.current;
    if (!currGraph) {
      return;
    }

    const wet = currGraph.effects[name];
    if (!wet) {
      return;
    }

    wet.gain.value = on ? (EFFECT_LEVELS[name] ?? 1) : 0;
  }, []);

  const getAnalyser = useCallback(() => (graph.current ? graph.current.analyser : null), []);
  
  useEffect(() => () => {
    if (graph.current) { 
      try {
        graph.current.ctx.close(); 
      } 
      catch {} 
    } 
  }, []);

  return { audioRef, resume, getAnalyser, setBandGain, setEffect };
}
