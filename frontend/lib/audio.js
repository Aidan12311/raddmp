import { useRef, useCallback, useEffect } from "react";

/* Attaches a Web Audio AnalyserNode to a real <audio> element so the visualizer
   can react to whatever is playing. This is plumbing only — it reads levels, it
   does not process sound. The graph is created lazily on the first `resume()`
   (browsers require a user gesture before audio can start).

   Returns:
     audioRef     – attach to your <audio ref={audioRef} />
     resume()     – call inside a click handler before .play()
     getAnalyser  – () => AnalyserNode | null, passed to the visualizer         */
export function useAnalyser() {
  const audioRef = useRef(null);
  const graph = useRef(null);

  const ensure = useCallback(() => {
    if (graph.current || !audioRef.current) return graph.current;
    try {
      const AC = window.AudioContext || window.webkitAudioContext;
      const ctx = new AC();
      const src = ctx.createMediaElementSource(audioRef.current);
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 2048;
      analyser.smoothingTimeConstant = 0.82;
      src.connect(analyser);
      analyser.connect(ctx.destination);
      graph.current = { ctx, analyser };
    } catch { /* ignore if unsupported */ }
    return graph.current;
  }, []);

  const resume = useCallback(async () => {
    const g = ensure();
    if (g && g.ctx.state === "suspended") { try { await g.ctx.resume(); } catch {} }
  }, [ensure]);

  const getAnalyser = useCallback(() => (graph.current ? graph.current.analyser : null), []);

  useEffect(() => () => { if (graph.current) { try { graph.current.ctx.close(); } catch {} } }, []);

  return { audioRef, resume, getAnalyser };
}