(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/AppShell.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppShell",
    ()=>AppShell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/theme.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Visualizers$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Visualizers.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sidebar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Sidebar.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PlayerBar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/PlayerBar.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NowPlaying$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/NowPlaying.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Modals$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Modals.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AuthScreen$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/AuthScreen.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function AppShell({ children }) {
    _s();
    const { authed, audioRef, getAnalyser, playing, track, expanded, toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayer"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
                ref: audioRef,
                crossOrigin: "anonymous",
                preload: "none"
            }, void 0, false, {
                fileName: "[project]/components/AppShell.jsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Visualizers$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AmbientBackground"], {
                getAnalyser: getAnalyser,
                playing: playing
            }, void 0, false, {
                fileName: "[project]/components/AppShell.jsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            !authed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AuthScreen$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthScreen"], {}, void 0, false, {
                fileName: "[project]/components/AppShell.jsx",
                lineNumber: 25,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex h-screen w-full overflow-hidden font-sans",
                style: {
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].text,
                    zIndex: 10
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sidebar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sidebar"], {}, void 0, false, {
                        fileName: "[project]/components/AppShell.jsx",
                        lineNumber: 28,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "flex-1 flex flex-col min-w-0",
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/components/AppShell.jsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PlayerBar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlayerBar"], {}, void 0, false, {
                        fileName: "[project]/components/AppShell.jsx",
                        lineNumber: 30,
                        columnNumber: 11
                    }, this),
                    expanded && track && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NowPlaying$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NowPlaying"], {}, void 0, false, {
                        fileName: "[project]/components/AppShell.jsx",
                        lineNumber: 31,
                        columnNumber: 33
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Modals$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlays"], {}, void 0, false, {
                        fileName: "[project]/components/AppShell.jsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this),
                    toast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed left-1/2 -translate-x-1/2 px-4 py-2.5 rounded-xl text-[13px] font-medium shadow-lg",
                        style: {
                            bottom: track ? 96 : 24,
                            zIndex: 70,
                            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frost"])("rgba(26,26,31,0.9)"),
                            border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].line}`,
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].text
                        },
                        children: toast
                    }, void 0, false, {
                        fileName: "[project]/components/AppShell.jsx",
                        lineNumber: 34,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/AppShell.jsx",
                lineNumber: 27,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/AppShell.jsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_s(AppShell, "55vu1b2A0/xz9WudFIDrzIRV6DY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayer"]
    ];
});
_c = AppShell;
var _c;
__turbopack_context__.k.register(_c, "AppShell");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/AuthScreen.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthScreen",
    ()=>AuthScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/theme.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function AuthScreen() {
    _s();
    const { handleAuth } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayer"])();
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("login");
    const [plan, setPlan] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("basic");
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const submit = ()=>handleAuth({
            email,
            password,
            plan,
            mode
        });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative min-h-screen flex items-center justify-center px-5",
        style: {
            zIndex: 10
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2.5 mb-8 justify-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logo"], {}, void 0, false, {
                            fileName: "[project]/components/AuthScreen.jsx",
                            lineNumber: 23,
                            columnNumber: 72
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xl font-semibold tracking-tight",
                            children: "RADDMP"
                        }, void 0, false, {
                            fileName: "[project]/components/AuthScreen.jsx",
                            lineNumber: 23,
                            columnNumber: 80
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/AuthScreen.jsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-2xl p-6",
                    style: {
                        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frost"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].panel),
                        border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].line}`
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-lg font-semibold mb-1",
                            children: mode === "login" ? "Welcome back" : "Create your account"
                        }, void 0, false, {
                            fileName: "[project]/components/AuthScreen.jsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[13px] mb-5",
                            style: {
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].sub
                            },
                            children: mode === "login" ? "Sign in to keep listening." : "Free plan — upgrade any time."
                        }, void 0, false, {
                            fileName: "[project]/components/AuthScreen.jsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "block text-[11px] font-medium mb-1.5",
                            style: {
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].sub
                            },
                            children: "Email"
                        }, void 0, false, {
                            fileName: "[project]/components/AuthScreen.jsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                type: "email",
                                value: email,
                                onChange: (e)=>setEmail(e.target.value),
                                placeholder: "you@example.com"
                            }, void 0, false, {
                                fileName: "[project]/components/AuthScreen.jsx",
                                lineNumber: 29,
                                columnNumber: 33
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/AuthScreen.jsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "block text-[11px] font-medium mb-1.5",
                            style: {
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].sub
                            },
                            children: "Password"
                        }, void 0, false, {
                            fileName: "[project]/components/AuthScreen.jsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                type: "password",
                                value: password,
                                onChange: (e)=>setPassword(e.target.value),
                                placeholder: "••••••••"
                            }, void 0, false, {
                                fileName: "[project]/components/AuthScreen.jsx",
                                lineNumber: 31,
                                columnNumber: 33
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/AuthScreen.jsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this),
                        mode === "signup" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-[11px] font-medium mb-2",
                                    style: {
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].sub
                                    },
                                    children: "Choose a plan"
                                }, void 0, false, {
                                    fileName: "[project]/components/AuthScreen.jsx",
                                    lineNumber: 35,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-2",
                                    children: [
                                        {
                                            k: "basic",
                                            t: "Free",
                                            d: "3 playlists · 5 songs"
                                        },
                                        {
                                            k: "premium",
                                            t: "Premium",
                                            d: "Unlimited · all effects"
                                        }
                                    ].map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setPlan(p.k),
                                            className: "rounded-xl p-3 text-left transition-all focus-visible:outline-none focus-visible:ring-2",
                                            style: {
                                                background: plan === p.k ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].bg2 : "transparent",
                                                border: `1px solid ${plan === p.k ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].a2 : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].line}`
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[13px] font-semibold",
                                                    children: p.t
                                                }, void 0, false, {
                                                    fileName: "[project]/components/AuthScreen.jsx",
                                                    lineNumber: 40,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[10px] mt-0.5",
                                                    style: {
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].faint
                                                    },
                                                    children: p.d
                                                }, void 0, false, {
                                                    fileName: "[project]/components/AuthScreen.jsx",
                                                    lineNumber: 40,
                                                    columnNumber: 75
                                                }, this)
                                            ]
                                        }, p.k, true, {
                                            fileName: "[project]/components/AuthScreen.jsx",
                                            lineNumber: 38,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/AuthScreen.jsx",
                                    lineNumber: 36,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/AuthScreen.jsx",
                            lineNumber: 34,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: submit,
                            className: "w-full rounded-lg py-2.5 text-sm font-semibold transition-transform hover:scale-[1.01] focus-visible:outline-none focus-visible:ring-2",
                            style: {
                                background: `linear-gradient(90deg, ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].a1}, ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].a2})`,
                                color: "#0a0a0a"
                            },
                            children: mode === "login" ? "Sign in" : "Create account"
                        }, void 0, false, {
                            fileName: "[project]/components/AuthScreen.jsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center text-[12px] mt-4",
                            style: {
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].sub
                            },
                            children: [
                                mode === "login" ? "New here? " : "Already have an account? ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "font-semibold",
                                    style: {
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].a1
                                    },
                                    onClick: ()=>setMode(mode === "login" ? "signup" : "login"),
                                    children: mode === "login" ? "Create one" : "Sign in"
                                }, void 0, false, {
                                    fileName: "[project]/components/AuthScreen.jsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/AuthScreen.jsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/AuthScreen.jsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-center text-[11px] mt-5",
                    style: {
                        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].faint
                    },
                    children: "Shell — auth is not connected yet."
                }, void 0, false, {
                    fileName: "[project]/components/AuthScreen.jsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/AuthScreen.jsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/AuthScreen.jsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_s(AuthScreen, "ajIj6SSNwMrgEaylkjutnLVlHyY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayer"]
    ];
});
_c = AuthScreen;
var _c;
__turbopack_context__.k.register(_c, "AuthScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Modals.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Overlays",
    ()=>Overlays
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/theme.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Overlays() {
    _s();
    const { modal, menu } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayer"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            modal?.type === "createPlaylist" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CreatePlaylistModal, {}, void 0, false, {
                fileName: "[project]/components/Modals.jsx",
                lineNumber: 14,
                columnNumber: 44
            }, this),
            modal?.type === "upload" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(UploadModal, {}, void 0, false, {
                fileName: "[project]/components/Modals.jsx",
                lineNumber: 15,
                columnNumber: 36
            }, this),
            modal?.type === "addSongs" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AddSongsModal, {
                playlistId: modal.playlistId
            }, void 0, false, {
                fileName: "[project]/components/Modals.jsx",
                lineNumber: 16,
                columnNumber: 38
            }, this),
            modal?.type === "queue" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(QueueModal, {}, void 0, false, {
                fileName: "[project]/components/Modals.jsx",
                lineNumber: 17,
                columnNumber: 35
            }, this),
            menu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TrackMenu, {}, void 0, false, {
                fileName: "[project]/components/Modals.jsx",
                lineNumber: 18,
                columnNumber: 16
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Modals.jsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_s(Overlays, "sQFAXBCE51dUDssthK7SQYf6pmI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayer"]
    ];
});
_c = Overlays;
function CreatePlaylistModal() {
    _s1();
    const { closeModal, createPlaylist } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayer"])();
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
        title: "Create playlist",
        onClose: closeModal,
        footer: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BtnGhost"], {
                    onClick: closeModal,
                    children: "Cancel"
                }, void 0, false, {
                    fileName: "[project]/components/Modals.jsx",
                    lineNumber: 27,
                    columnNumber: 67
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BtnPrimary"], {
                    onClick: ()=>createPlaylist(name.trim()),
                    children: "Create"
                }, void 0, false, {
                    fileName: "[project]/components/Modals.jsx",
                    lineNumber: 27,
                    columnNumber: 115
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Modals.jsx",
            lineNumber: 27,
            columnNumber: 65
        }, this),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block text-[11px] font-medium mb-1.5",
                style: {
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].sub
                },
                children: "Name"
            }, void 0, false, {
                fileName: "[project]/components/Modals.jsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                autoFocus: true,
                value: name,
                onChange: (e)=>setName(e.target.value),
                placeholder: "e.g. Study Session",
                onKeyDown: (e)=>e.key === "Enter" && createPlaylist(name.trim())
            }, void 0, false, {
                fileName: "[project]/components/Modals.jsx",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Modals.jsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_s1(CreatePlaylistModal, "rs28ZFNytbZDTcv3Ii78ocHyI0o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayer"]
    ];
});
_c1 = CreatePlaylistModal;
function UploadModal() {
    _s2();
    const { closeModal, uploadTrack } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayer"])();
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [artist, setArtist] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
        title: "Add a song",
        onClose: closeModal,
        footer: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BtnGhost"], {
                    onClick: closeModal,
                    children: "Cancel"
                }, void 0, false, {
                    fileName: "[project]/components/Modals.jsx",
                    lineNumber: 38,
                    columnNumber: 62
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BtnPrimary"], {
                    onClick: ()=>uploadTrack({
                            title: title.trim(),
                            artist: artist.trim()
                        }),
                    children: "Add to library"
                }, void 0, false, {
                    fileName: "[project]/components/Modals.jsx",
                    lineNumber: 38,
                    columnNumber: 110
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Modals.jsx",
            lineNumber: 38,
            columnNumber: 60
        }, this),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl border border-dashed flex flex-col items-center justify-center py-7 mb-4",
                style: {
                    borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].line,
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].faint
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlusIcon"], {
                        c: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].faint
                    }, void 0, false, {
                        fileName: "[project]/components/Modals.jsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[12px] mt-2",
                        children: "Drop an MP3 here (wire the upload later)"
                    }, void 0, false, {
                        fileName: "[project]/components/Modals.jsx",
                        lineNumber: 40,
                        columnNumber: 33
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Modals.jsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block text-[11px] font-medium mb-1.5",
                style: {
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].sub
                },
                children: "Title"
            }, void 0, false, {
                fileName: "[project]/components/Modals.jsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                    autoFocus: true,
                    value: title,
                    onChange: (e)=>setTitle(e.target.value),
                    placeholder: "Track title"
                }, void 0, false, {
                    fileName: "[project]/components/Modals.jsx",
                    lineNumber: 42,
                    columnNumber: 123
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Modals.jsx",
                lineNumber: 42,
                columnNumber: 101
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block text-[11px] font-medium mb-1.5",
                style: {
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].sub
                },
                children: "Artist"
            }, void 0, false, {
                fileName: "[project]/components/Modals.jsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                value: artist,
                onChange: (e)=>setArtist(e.target.value),
                placeholder: "Artist name"
            }, void 0, false, {
                fileName: "[project]/components/Modals.jsx",
                lineNumber: 43,
                columnNumber: 102
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Modals.jsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_s2(UploadModal, "k7rCGOAPTV3mYxU9MSK9KSiFo0w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayer"]
    ];
});
_c2 = UploadModal;
function AddSongsModal({ playlistId }) {
    _s3();
    const { closeModal, library, playlists, addToPlaylist, removeFromPlaylist } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayer"])();
    const playlist = playlists.find((p)=>p.id === playlistId);
    if (!playlist) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
        wide: true,
        title: `Add songs · ${playlist.name}`,
        onClose: closeModal,
        footer: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BtnPrimary"], {
            onClick: closeModal,
            children: "Done"
        }, void 0, false, {
            fileName: "[project]/components/Modals.jsx",
            lineNumber: 53,
            columnNumber: 85
        }, this),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-1 max-h-80 overflow-y-auto radd-scroll",
            children: [
                library.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[13px] text-center py-6",
                    style: {
                        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].sub
                    },
                    children: "Your library is empty."
                }, void 0, false, {
                    fileName: "[project]/components/Modals.jsx",
                    lineNumber: 55,
                    columnNumber: 34
                }, this),
                library.map((t)=>{
                    const inList = playlist.tracks.includes(t.id);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-white/5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-9 h-9 rounded-md shrink-0",
                                style: {
                                    background: `linear-gradient(135deg, ${t.g1}, ${t.g2})`
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/Modals.jsx",
                                lineNumber: 60,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[13px] font-medium truncate",
                                        children: t.title
                                    }, void 0, false, {
                                        fileName: "[project]/components/Modals.jsx",
                                        lineNumber: 61,
                                        columnNumber: 47
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[11px] truncate",
                                        style: {
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].sub
                                        },
                                        children: t.artist
                                    }, void 0, false, {
                                        fileName: "[project]/components/Modals.jsx",
                                        lineNumber: 61,
                                        columnNumber: 112
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Modals.jsx",
                                lineNumber: 61,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>inList ? removeFromPlaylist(t.id, playlist.id) : addToPlaylist(t.id, playlist.id),
                                className: "text-[12px] font-medium px-2.5 py-1 rounded-md",
                                style: {
                                    color: inList ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].faint : "#0a0a0a",
                                    background: inList ? "transparent" : `linear-gradient(90deg, ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].a1}, ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].a2})`,
                                    border: inList ? `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].line}` : "none"
                                },
                                children: inList ? "Remove" : "Add"
                            }, void 0, false, {
                                fileName: "[project]/components/Modals.jsx",
                                lineNumber: 62,
                                columnNumber: 15
                            }, this)
                        ]
                    }, t.id, true, {
                        fileName: "[project]/components/Modals.jsx",
                        lineNumber: 59,
                        columnNumber: 13
                    }, this);
                })
            ]
        }, void 0, true, {
            fileName: "[project]/components/Modals.jsx",
            lineNumber: 54,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Modals.jsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_s3(AddSongsModal, "voApL6Is5gvOoiXuuGxAIIsZQbM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayer"]
    ];
});
_c3 = AddSongsModal;
function QueueModal() {
    _s4();
    const { closeModal, queue, library, playTrack } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayer"])();
    const tracks = queue.map((id)=>library.find((t)=>t.id === id)).filter(Boolean);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
        title: `Queue · ${tracks.length}`,
        onClose: closeModal,
        children: tracks.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[13px] text-center py-6",
            style: {
                color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].sub
            },
            children: "Nothing queued yet. Use a track's ⋯ menu to add."
        }, void 0, false, {
            fileName: "[project]/components/Modals.jsx",
            lineNumber: 76,
            columnNumber: 30
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-1 max-h-80 overflow-y-auto radd-scroll",
            children: tracks.map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>{
                        playTrack(t.id);
                        closeModal();
                    },
                    className: "flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-white/5 text-left",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[12px] font-mono w-5 text-center",
                            style: {
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].faint
                            },
                            children: i + 1
                        }, void 0, false, {
                            fileName: "[project]/components/Modals.jsx",
                            lineNumber: 79,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-8 h-8 rounded-md shrink-0",
                            style: {
                                background: `linear-gradient(135deg, ${t.g1}, ${t.g2})`
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/Modals.jsx",
                            lineNumber: 80,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "min-w-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-[13px] font-medium truncate",
                                    children: t.title
                                }, void 0, false, {
                                    fileName: "[project]/components/Modals.jsx",
                                    lineNumber: 81,
                                    columnNumber: 38
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-[11px] truncate",
                                    style: {
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].sub
                                    },
                                    children: t.artist
                                }, void 0, false, {
                                    fileName: "[project]/components/Modals.jsx",
                                    lineNumber: 81,
                                    columnNumber: 103
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Modals.jsx",
                            lineNumber: 81,
                            columnNumber: 13
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/components/Modals.jsx",
                    lineNumber: 78,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/components/Modals.jsx",
            lineNumber: 77,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Modals.jsx",
        lineNumber: 75,
        columnNumber: 5
    }, this);
}
_s4(QueueModal, "OrGm/pBWPpnI16AeGV+yYXPaZx4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayer"]
    ];
});
_c4 = QueueModal;
function TrackMenu() {
    _s5();
    const { menu, closeMenu, playlists, playTrack, addToQueue, addToPlaylist } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayer"])();
    const [sub, setSub] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const x = Math.min(menu.x, window.innerWidth - 210), y = Math.min(menu.y, window.innerHeight - 220);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed",
        style: {
            left: x,
            top: y,
            zIndex: 65
        },
        onClick: (e)=>e.stopPropagation(),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-52 rounded-xl overflow-hidden py-1",
            style: {
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frost"])("rgba(26,26,31,0.96)"),
                border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].line}`
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuItem"], {
                    label: "Play now",
                    onClick: ()=>{
                        playTrack(menu.trackId);
                        closeMenu();
                    }
                }, void 0, false, {
                    fileName: "[project]/components/Modals.jsx",
                    lineNumber: 95,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuItem"], {
                    label: "Add to queue",
                    onClick: ()=>{
                        addToQueue(menu.trackId);
                        closeMenu();
                    }
                }, void 0, false, {
                    fileName: "[project]/components/Modals.jsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuItem"], {
                    label: "Add to playlist ▸",
                    onClick: ()=>setSub((s)=>!s)
                }, void 0, false, {
                    fileName: "[project]/components/Modals.jsx",
                    lineNumber: 97,
                    columnNumber: 9
                }, this),
                sub && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-1 mx-1 rounded-lg py-1",
                    style: {
                        background: "rgba(0,0,0,0.25)"
                    },
                    children: [
                        playlists.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-3 py-1.5 text-[12px]",
                            style: {
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].faint
                            },
                            children: "No playlists"
                        }, void 0, false, {
                            fileName: "[project]/components/Modals.jsx",
                            lineNumber: 100,
                            columnNumber: 40
                        }, this),
                        playlists.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuItem"], {
                                small: true,
                                label: p.name,
                                onClick: ()=>{
                                    addToPlaylist(menu.trackId, p.id);
                                    closeMenu();
                                }
                            }, p.id, false, {
                                fileName: "[project]/components/Modals.jsx",
                                lineNumber: 101,
                                columnNumber: 35
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Modals.jsx",
                    lineNumber: 99,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Modals.jsx",
            lineNumber: 94,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Modals.jsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
_s5(TrackMenu, "umdnDNXKBNgQXJS2xAyyUiQNuy4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayer"]
    ];
});
_c5 = TrackMenu;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "Overlays");
__turbopack_context__.k.register(_c1, "CreatePlaylistModal");
__turbopack_context__.k.register(_c2, "UploadModal");
__turbopack_context__.k.register(_c3, "AddSongsModal");
__turbopack_context__.k.register(_c4, "QueueModal");
__turbopack_context__.k.register(_c5, "TrackMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/NowPlaying.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NowPlaying",
    ()=>NowPlaying
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/theme.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Visualizers$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Visualizers.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function NowPlaying() {
    _s();
    const { track, playing, elapsed, togglePlay, collapse, getAnalyser, eq, setEqBand, resetEq, fx, toggleFx, vol, setVol, isPremium, shareLink } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayer"])();
    if (!track) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 flex flex-col",
        style: {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frost"])("rgba(8,8,10,0.72)"),
            zIndex: 40
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between px-5 md:px-8 h-16 shrink-0",
                style: {
                    borderBottom: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].lineSoft}`
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[11px] font-semibold uppercase tracking-wider",
                        style: {
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].faint
                        },
                        children: "Now playing"
                    }, void 0, false, {
                        fileName: "[project]/components/NowPlaying.jsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: collapse,
                        className: "text-sm px-3 py-1.5 rounded-lg hover:bg-white/5",
                        style: {
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].sub,
                            border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].line}`
                        },
                        children: "Close ↓"
                    }, void 0, false, {
                        fileName: "[project]/components/NowPlaying.jsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/NowPlaying.jsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto radd-scroll grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 md:p-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative rounded-2xl overflow-hidden flex-1 min-h-[280px]",
                                style: {
                                    background: `linear-gradient(135deg, ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexA"])(track.g1, 0.15)}, ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexA"])(track.g2, 0.15)})`,
                                    border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].line}`
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Visualizers$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Spectrum"], {
                                            getAnalyser: getAnalyser,
                                            playing: playing,
                                            big: true
                                        }, void 0, false, {
                                            fileName: "[project]/components/NowPlaying.jsx",
                                            lineNumber: 25,
                                            columnNumber: 47
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/NowPlaying.jsx",
                                        lineNumber: 25,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-0 left-0 right-0 p-6",
                                        style: {
                                            background: "linear-gradient(180deg, transparent, rgba(8,8,10,0.85))"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-2xl font-bold tracking-tight",
                                                children: track.title
                                            }, void 0, false, {
                                                fileName: "[project]/components/NowPlaying.jsx",
                                                lineNumber: 26,
                                                columnNumber: 149
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm",
                                                style: {
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].sub
                                                },
                                                children: track.artist
                                            }, void 0, false, {
                                                fileName: "[project]/components/NowPlaying.jsx",
                                                lineNumber: 26,
                                                columnNumber: 219
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/NowPlaying.jsx",
                                        lineNumber: 26,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/NowPlaying.jsx",
                                lineNumber: 24,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4 mt-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: togglePlay,
                                        className: "w-12 h-12 rounded-full flex items-center justify-center hover:scale-105 transition-transform",
                                        style: {
                                            background: "#fff"
                                        },
                                        children: playing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PauseIcon"], {}, void 0, false, {
                                            fileName: "[project]/components/NowPlaying.jsx",
                                            lineNumber: 29,
                                            columnNumber: 189
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlayIcon"], {}, void 0, false, {
                                            fileName: "[project]/components/NowPlaying.jsx",
                                            lineNumber: 29,
                                            columnNumber: 205
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/NowPlaying.jsx",
                                        lineNumber: 29,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[11px] font-mono",
                                                style: {
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].faint
                                                },
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fmtTime"])(elapsed)
                                            }, void 0, false, {
                                                fileName: "[project]/components/NowPlaying.jsx",
                                                lineNumber: 30,
                                                columnNumber: 61
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 h-1.5 rounded-full overflow-hidden",
                                                style: {
                                                    background: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].line
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-full",
                                                    style: {
                                                        width: `${elapsed / track.dur * 100}%`,
                                                        background: `linear-gradient(90deg, ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].a1}, ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].a2})`
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/NowPlaying.jsx",
                                                    lineNumber: 30,
                                                    columnNumber: 243
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/NowPlaying.jsx",
                                                lineNumber: 30,
                                                columnNumber: 153
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[11px] font-mono",
                                                style: {
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].faint
                                                },
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fmtTime"])(track.dur)
                                            }, void 0, false, {
                                                fileName: "[project]/components/NowPlaying.jsx",
                                                lineNumber: 30,
                                                columnNumber: 384
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/NowPlaying.jsx",
                                        lineNumber: 30,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/NowPlaying.jsx",
                                lineNumber: 28,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 mt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[11px]",
                                        style: {
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].faint
                                        },
                                        children: "Volume"
                                    }, void 0, false, {
                                        fileName: "[project]/components/NowPlaying.jsx",
                                        lineNumber: 33,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "range",
                                        min: 0,
                                        max: 1,
                                        step: 0.01,
                                        value: vol,
                                        onChange: (e)=>setVol(parseFloat(e.target.value)),
                                        className: "radd-hrange flex-1",
                                        "aria-label": "Volume"
                                    }, void 0, false, {
                                        fileName: "[project]/components/NowPlaying.jsx",
                                        lineNumber: 34,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/NowPlaying.jsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/NowPlaying.jsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl p-5",
                                style: {
                                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frost"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].panel),
                                    border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].line}`
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-sm font-semibold",
                                                children: "Equalizer"
                                            }, void 0, false, {
                                                fileName: "[project]/components/NowPlaying.jsx",
                                                lineNumber: 40,
                                                columnNumber: 69
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: resetEq,
                                                className: "text-[11px] font-mono hover:underline",
                                                style: {
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].faint
                                                },
                                                children: "reset"
                                            }, void 0, false, {
                                                fileName: "[project]/components/NowPlaying.jsx",
                                                lineNumber: 40,
                                                columnNumber: 121
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/NowPlaying.jsx",
                                        lineNumber: 40,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Visualizers$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EQCurve"], {
                                        gains: eq
                                    }, void 0, false, {
                                        fileName: "[project]/components/NowPlaying.jsx",
                                        lineNumber: 41,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2 mt-4",
                                        style: {
                                            height: 150
                                        },
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EQ_BANDS"].map((b, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VSlider"], {
                                                label: b.label,
                                                min: -12,
                                                max: 12,
                                                step: 0.5,
                                                value: eq[i],
                                                readout: `${eq[i] > 0 ? "+" : ""}${eq[i]}`,
                                                onChange: (v)=>setEqBand(i, v)
                                            }, b.label, false, {
                                                fileName: "[project]/components/NowPlaying.jsx",
                                                lineNumber: 42,
                                                columnNumber: 95
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/NowPlaying.jsx",
                                        lineNumber: 42,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/NowPlaying.jsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl p-5",
                                style: {
                                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frost"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].panel),
                                    border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].line}`
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-semibold mb-3",
                                        children: "Effects"
                                    }, void 0, false, {
                                        fileName: "[project]/components/NowPlaying.jsx",
                                        lineNumber: 45,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 gap-2.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toggle"], {
                                                label: "Reverb",
                                                on: fx.reverb,
                                                onClick: ()=>toggleFx("reverb")
                                            }, void 0, false, {
                                                fileName: "[project]/components/NowPlaying.jsx",
                                                lineNumber: 47,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toggle"], {
                                                label: "Chorus",
                                                on: fx.chorus,
                                                onClick: ()=>toggleFx("chorus")
                                            }, void 0, false, {
                                                fileName: "[project]/components/NowPlaying.jsx",
                                                lineNumber: 48,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toggle"], {
                                                label: isPremium ? "Distortion" : "Distortion — Premium",
                                                on: fx.distortion,
                                                onClick: ()=>isPremium && toggleFx("distortion"),
                                                locked: !isPremium
                                            }, void 0, false, {
                                                fileName: "[project]/components/NowPlaying.jsx",
                                                lineNumber: 49,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/NowPlaying.jsx",
                                        lineNumber: 46,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/NowPlaying.jsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/NowPlaying.jsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/NowPlaying.jsx",
                lineNumber: 22,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/NowPlaying.jsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_s(NowPlaying, "RZfRni8F5cMc4lySIPTHYmOa1gs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayer"]
    ];
});
_c = NowPlaying;
var _c;
__turbopack_context__.k.register(_c, "NowPlaying");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/PlayerBar.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PlayerBar",
    ()=>PlayerBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/theme.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Visualizers$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Visualizers.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function PlayerBar() {
    _s();
    const { track, playing, elapsed, togglePlay, queue, openModal, expand, getAnalyser, seek } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayer"])();
    if (!track) {
        return null;
    }
    const onScrub = (e)=>{
        const bar = e.currentTarget;
        const rect = bar.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const newTime = clickX / rect.width * track.dur;
        seek(newTime);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed bottom-0 left-0 right-0 h-20 flex items-center gap-4 px-4 md:px-6",
        style: {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frost"])("rgba(16,16,20,0.72)"),
            borderTop: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].line}`,
            zIndex: 20
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 w-1/4 min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-12 h-12 rounded-lg shrink-0",
                        style: {
                            background: `linear-gradient(135deg, ${track.g1}, ${track.g2})`
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/PlayerBar.jsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[13px] font-semibold truncate",
                                children: track.title
                            }, void 0, false, {
                                fileName: "[project]/components/PlayerBar.jsx",
                                lineNumber: 29,
                                columnNumber: 34
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[11px] truncate",
                                style: {
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].sub
                                },
                                children: track.artist
                            }, void 0, false, {
                                fileName: "[project]/components/PlayerBar.jsx",
                                lineNumber: 29,
                                columnNumber: 105
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PlayerBar.jsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PlayerBar.jsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col items-center gap-1.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: togglePlay,
                        className: "w-9 h-9 rounded-full flex items-center justify-center transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2",
                        style: {
                            background: "#fff"
                        },
                        children: playing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PauseIcon"], {
                            s: 18
                        }, void 0, false, {
                            fileName: "[project]/components/PlayerBar.jsx",
                            lineNumber: 33,
                            columnNumber: 231
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlayIcon"], {
                            s: 18
                        }, void 0, false, {
                            fileName: "[project]/components/PlayerBar.jsx",
                            lineNumber: 33,
                            columnNumber: 254
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/PlayerBar.jsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 w-full max-w-md",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] font-mono",
                                style: {
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].faint
                                },
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fmtTime"])(elapsed)
                            }, void 0, false, {
                                fileName: "[project]/components/PlayerBar.jsx",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: onScrub,
                                className: "flex-1 h-1 rounded-full overflow-hidden cursor-pointer",
                                style: {
                                    background: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].line
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-full rounded-full",
                                    style: {
                                        width: `${elapsed / track.dur * 100}%`,
                                        background: `linear-gradient(90deg, ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].a1}, ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].a2})`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/PlayerBar.jsx",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/PlayerBar.jsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] font-mono",
                                style: {
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].faint
                                },
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fmtTime"])(track.dur)
                            }, void 0, false, {
                                fileName: "[project]/components/PlayerBar.jsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PlayerBar.jsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PlayerBar.jsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-1/4 flex justify-end items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>openModal({
                                type: "queue"
                            }),
                        className: "flex items-center gap-1.5 text-[12px] font-medium px-2.5 py-1.5 rounded-lg hover:bg-white/5 transition-colors",
                        style: {
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].sub,
                            border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].line}`
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueueIcon"], {
                                c: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].sub
                            }, void 0, false, {
                                fileName: "[project]/components/PlayerBar.jsx",
                                lineNumber: 44,
                                columnNumber: 240
                            }, this),
                            " ",
                            queue.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono",
                                children: queue.length
                            }, void 0, false, {
                                fileName: "[project]/components/PlayerBar.jsx",
                                lineNumber: 44,
                                columnNumber: 285
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PlayerBar.jsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden lg:block w-20 h-8 rounded-md overflow-hidden",
                        style: {
                            background: "rgba(255,255,255,0.03)"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Visualizers$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Spectrum"], {
                            getAnalyser: getAnalyser,
                            playing: playing,
                            big: false
                        }, void 0, false, {
                            fileName: "[project]/components/PlayerBar.jsx",
                            lineNumber: 45,
                            columnNumber: 127
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/PlayerBar.jsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: expand,
                        className: "text-[12px] font-medium px-3 py-1.5 rounded-lg hover:bg-white/5 transition-colors",
                        style: {
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].sub,
                            border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].line}`
                        },
                        children: "Open ↑"
                    }, void 0, false, {
                        fileName: "[project]/components/PlayerBar.jsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PlayerBar.jsx",
                lineNumber: 43,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PlayerBar.jsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_s(PlayerBar, "3yvl+YsCDyFHjaOTPluu7/S/7zw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayer"]
    ];
});
_c = PlayerBar;
var _c;
__turbopack_context__.k.register(_c, "PlayerBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Sidebar.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sidebar",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/theme.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Sidebar() {
    _s();
    const { playlists, plan, openModal } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayer"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "hidden md:flex flex-col w-60 shrink-0 px-3 py-4",
        style: {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frost"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].bg2 + "cc"),
            borderRight: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].lineSoft}`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2.5 px-2 mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logo"], {}, void 0, false, {
                        fileName: "[project]/components/Sidebar.jsx",
                        lineNumber: 17,
                        columnNumber: 60
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-semibold tracking-tight",
                        children: "RADDMP"
                    }, void 0, false, {
                        fileName: "[project]/components/Sidebar.jsx",
                        lineNumber: 17,
                        columnNumber: 68
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Sidebar.jsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "flex flex-col gap-0.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavLink, {
                        href: "/",
                        label: "Library",
                        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HomeIcon"],
                        active: pathname === "/"
                    }, void 0, false, {
                        fileName: "[project]/components/Sidebar.jsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavLink, {
                        href: "/search",
                        label: "Search",
                        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchIcon"],
                        active: pathname === "/search"
                    }, void 0, false, {
                        fileName: "[project]/components/Sidebar.jsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Sidebar.jsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between px-2 mt-6 mb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[11px] font-semibold tracking-wide uppercase",
                        style: {
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].faint
                        },
                        children: "Playlists"
                    }, void 0, false, {
                        fileName: "[project]/components/Sidebar.jsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>openModal({
                                type: "createPlaylist"
                            }),
                        className: "rounded-md w-5 h-5 flex items-center justify-center hover:bg-white/5",
                        style: {
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].sub
                        },
                        "aria-label": "New playlist",
                        children: "+"
                    }, void 0, false, {
                        fileName: "[project]/components/Sidebar.jsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Sidebar.jsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-0.5 overflow-y-auto radd-scroll flex-1",
                children: playlists.map((p)=>{
                    const active = pathname === `/playlist/${p.id}`;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: `/playlist/${p.id}`,
                        className: "text-left px-3 py-2 rounded-lg text-[13px] truncate hover:bg-white/5 transition-colors",
                        style: {
                            color: active ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].text : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].sub,
                            background: active ? "rgba(255,255,255,0.05)" : "transparent"
                        },
                        children: [
                            p.name,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ml-1.5 text-[11px] font-mono",
                                style: {
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].faint
                                },
                                children: p.tracks.length
                            }, void 0, false, {
                                fileName: "[project]/components/Sidebar.jsx",
                                lineNumber: 35,
                                columnNumber: 23
                            }, this)
                        ]
                    }, p.id, true, {
                        fileName: "[project]/components/Sidebar.jsx",
                        lineNumber: 33,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/Sidebar.jsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlanBadge, {}, void 0, false, {
                fileName: "[project]/components/Sidebar.jsx",
                lineNumber: 41,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Sidebar.jsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_s(Sidebar, "mGEf6Ac9bXPlp5rrjmvfxlQcrRU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayer"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Sidebar;
function NavLink({ href, label, Icon, active }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: href,
        className: "flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2",
        style: {
            background: active ? "rgba(255,255,255,0.06)" : "transparent",
            color: active ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].text : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].sub
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                c: active ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].text : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].sub
            }, void 0, false, {
                fileName: "[project]/components/Sidebar.jsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            " ",
            label
        ]
    }, void 0, true, {
        fileName: "[project]/components/Sidebar.jsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_c1 = NavLink;
function PlanBadge() {
    _s1();
    const { plan, upgrade } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayer"])();
    if (plan === "premium") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl p-3 mt-2",
        style: {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frost"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].panel),
            border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].line}`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-[12px] font-semibold",
                children: "Premium"
            }, void 0, false, {
                fileName: "[project]/components/Sidebar.jsx",
                lineNumber: 57,
                columnNumber: 133
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-[10px] mt-0.5",
                style: {
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].faint
                },
                children: "Unlimited everything"
            }, void 0, false, {
                fileName: "[project]/components/Sidebar.jsx",
                lineNumber: 57,
                columnNumber: 189
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Sidebar.jsx",
        lineNumber: 57,
        columnNumber: 35
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl p-3 mt-2",
        style: {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frost"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].panel),
            border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].line}`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-[12px] font-semibold mb-1",
                children: "Free plan"
            }, void 0, false, {
                fileName: "[project]/components/Sidebar.jsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-[10px] mb-2.5",
                style: {
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].faint
                },
                children: "3 playlists · 5 songs · limited effects"
            }, void 0, false, {
                fileName: "[project]/components/Sidebar.jsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: upgrade,
                className: "w-full rounded-lg py-1.5 text-[12px] font-semibold hover:scale-[1.01] transition-transform",
                style: {
                    background: `linear-gradient(90deg, ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].a1}, ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].a2})`,
                    color: "#0a0a0a"
                },
                children: "Upgrade"
            }, void 0, false, {
                fileName: "[project]/components/Sidebar.jsx",
                lineNumber: 62,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Sidebar.jsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
_s1(PlanBadge, "wNSI8/MJUH939WGjof9lzQu1Ch4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayer"]
    ];
});
_c2 = PlanBadge;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Sidebar");
__turbopack_context__.k.register(_c1, "NavLink");
__turbopack_context__.k.register(_c2, "PlanBadge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Visualizers.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AmbientBackground",
    ()=>AmbientBackground,
    "EQCurve",
    ()=>EQCurve,
    "Spectrum",
    ()=>Spectrum
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/theme.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
function AmbientBackground({ getAnalyser, playing }) {
    _s();
    const cvs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const raf = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const st = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AmbientBackground.useEffect": ()=>{
            const canvas = cvs.current;
            if (!canvas) return;
            const ctx = canvas.getContext("2d");
            const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            const blobs = [
                {
                    x: 0.16,
                    y: 0.22,
                    color: "#22d3ee",
                    band: [
                        0.00,
                        0.06
                    ],
                    seed: Math.random() * 99
                },
                {
                    x: 0.84,
                    y: 0.28,
                    color: "#3b82f6",
                    band: [
                        0.06,
                        0.16
                    ],
                    seed: Math.random() * 99
                },
                {
                    x: 0.82,
                    y: 0.80,
                    color: "#d946ef",
                    band: [
                        0.16,
                        0.40
                    ],
                    seed: Math.random() * 99
                },
                {
                    x: 0.18,
                    y: 0.78,
                    color: "#a855f7",
                    band: [
                        0.40,
                        0.75
                    ],
                    seed: Math.random() * 99
                }
            ];
            if (!st.current) st.current = {
                t: 0,
                sm: [
                    0,
                    0,
                    0,
                    0
                ],
                flick: [
                    0,
                    0,
                    0,
                    0
                ],
                wx: [
                    0,
                    0,
                    0,
                    0
                ],
                wy: [
                    0,
                    0,
                    0,
                    0
                ],
                tx: [
                    0,
                    0,
                    0,
                    0
                ],
                ty: [
                    0,
                    0,
                    0,
                    0
                ]
            };
            const s = st.current;
            const draw = {
                "AmbientBackground.useEffect.draw": ()=>{
                    const dpr = Math.min(window.devicePixelRatio || 1, 2);
                    const w = window.innerWidth, h = window.innerHeight;
                    if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
                        canvas.width = w * dpr;
                        canvas.height = h * dpr;
                    }
                    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
                    ctx.fillStyle = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].bg;
                    ctx.fillRect(0, 0, w, h);
                    const an = getAnalyser();
                    const energies = [
                        0,
                        0,
                        0,
                        0
                    ];
                    if (an && playing) {
                        const buf = new Uint8Array(an.frequencyBinCount);
                        an.getByteFrequencyData(buf);
                        const N = an.frequencyBinCount;
                        blobs.forEach({
                            "AmbientBackground.useEffect.draw": (b, i)=>{
                                const lo = Math.floor(b.band[0] * N), hi = Math.max(lo + 1, Math.floor(b.band[1] * N));
                                let sum = 0;
                                for(let k = lo; k < hi; k++)sum += buf[k];
                                energies[i] = sum / (hi - lo) / 255;
                            }
                        }["AmbientBackground.useEffect.draw"]);
                    }
                    s.t += reduce ? 0 : 0.006;
                    const t = s.t, base = Math.min(w, h);
                    ctx.globalCompositeOperation = "lighter";
                    blobs.forEach({
                        "AmbientBackground.useEffect.draw": (b, i)=>{
                            const boosted = Math.pow(energies[i], 0.65) * 1.25;
                            s.sm[i] += (boosted - s.sm[i]) * 0.3;
                            const e = s.sm[i];
                            s.flick[i] = Math.max(-1, Math.min(1, (s.flick[i] + (Math.random() - 0.5) * 0.25) * 0.93));
                            const flick = s.flick[i];
                            if (Math.random() < 0.012) {
                                s.tx[i] = (Math.random() - 0.5) * 0.13;
                                s.ty[i] = (Math.random() - 0.5) * 0.13;
                            }
                            s.wx[i] += (s.tx[i] - s.wx[i]) * 0.02;
                            s.wy[i] += (s.ty[i] - s.wy[i]) * 0.02;
                            const drift = reduce ? 0 : 0.038;
                            const cx = (b.x + Math.sin(t * 0.7 + b.seed) * drift + s.wx[i]) * w;
                            const cy = (b.y + Math.cos(t * 0.6 + b.seed * 1.3) * drift + s.wy[i]) * h;
                            const breathe = playing ? 0.11 * Math.sin(t * 2.3 + b.seed) : 0.05 * Math.sin(t + b.seed);
                            const R = base * (0.17 + e * 0.32 + breathe * 0.05 + flick * 0.03);
                            const idleA = playing ? 0.10 : 0.045;
                            const A = Math.max(0, Math.min(0.6, idleA + e * 0.55 + flick * 0.05));
                            const rr = Math.max(1, R);
                            const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, rr);
                            grad.addColorStop(0, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexA"])(b.color, A));
                            grad.addColorStop(0.5, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexA"])(b.color, A * 0.45));
                            grad.addColorStop(1, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexA"])(b.color, 0));
                            ctx.fillStyle = grad;
                            ctx.beginPath();
                            ctx.arc(cx, cy, rr, 0, Math.PI * 2);
                            ctx.fill();
                        }
                    }["AmbientBackground.useEffect.draw"]);
                    ctx.globalCompositeOperation = "source-over";
                    raf.current = requestAnimationFrame(draw);
                }
            }["AmbientBackground.useEffect.draw"];
            draw();
            return ({
                "AmbientBackground.useEffect": ()=>cancelAnimationFrame(raf.current)
            })["AmbientBackground.useEffect"];
        }
    }["AmbientBackground.useEffect"], [
        getAnalyser,
        playing
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: cvs,
        className: "fixed inset-0 pointer-events-none",
        style: {
            zIndex: 0
        }
    }, void 0, false, {
        fileName: "[project]/components/Visualizers.jsx",
        lineNumber: 61,
        columnNumber: 10
    }, this);
}
_s(AmbientBackground, "dOFbU/xeEQs15rxDMOKkYMuQBYA=");
_c = AmbientBackground;
function Spectrum({ getAnalyser, playing, big, colors = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BRAND"] }) {
    _s1();
    const cvs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const raf = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Spectrum.useEffect": ()=>{
            const canvas = cvs.current;
            if (!canvas) return;
            const ctx = canvas.getContext("2d");
            const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            let phase = 0;
            const [g1, g2] = colors;
            const draw = {
                "Spectrum.useEffect.draw": ()=>{
                    const dpr = window.devicePixelRatio || 1;
                    const w = canvas.clientWidth, h = canvas.clientHeight;
                    if (w <= 0 || h <= 0) {
                        raf.current = requestAnimationFrame(draw);
                        return;
                    }
                    if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
                        canvas.width = w * dpr;
                        canvas.height = h * dpr;
                    }
                    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
                    ctx.clearRect(0, 0, w, h);
                    const an = getAnalyser();
                    const N = big ? 72 : 34;
                    let mags = new Array(N).fill(0);
                    let signal = false;
                    if (an && playing) {
                        const buf = new Uint8Array(an.frequencyBinCount);
                        an.getByteFrequencyData(buf);
                        let tot = 0;
                        for(let i = 0; i < buf.length; i++)tot += buf[i];
                        if (tot > 400) {
                            signal = true;
                            const usable = Math.floor(an.frequencyBinCount * 0.62);
                            for(let i = 0; i < N; i++){
                                const idx = Math.floor(Math.pow(i / N, 1.35) * usable);
                                mags[i] = buf[idx] / 255;
                            }
                        }
                    }
                    if (!signal) {
                        phase += reduce ? 0 : 0.03;
                        for(let i = 0; i < N; i++)mags[i] = 0.05 + 0.04 * (Math.sin(phase + i * 0.5) * 0.5 + 0.5);
                    }
                    const gap = big ? 4 : 2.5;
                    const bw = Math.max(0, (w - gap * (N - 1)) / N);
                    const mid = h / 2;
                    for(let i = 0; i < N; i++){
                        const m = mags[i];
                        const bh = Math.max(2, m * h * (big ? 0.92 : 0.8));
                        const x = i * (bw + gap);
                        const col = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lerpColor"])(g1, g2, i / (N - 1));
                        const grad = ctx.createLinearGradient(0, mid - bh / 2, 0, mid + bh / 2);
                        grad.addColorStop(0, col);
                        grad.addColorStop(1, col + "44");
                        ctx.fillStyle = grad;
                        ctx.shadowColor = col;
                        ctx.shadowBlur = big ? 10 : 4;
                        ctx.globalAlpha = (0.5 + m * 0.4) * (0.92 + Math.random() * 0.08);
                        roundRect(ctx, x, mid - bh / 2, bw, bh, Math.min(bw / 2, 3));
                        ctx.fill();
                    }
                    ctx.globalAlpha = 1;
                    ctx.shadowBlur = 0;
                    raf.current = requestAnimationFrame(draw);
                }
            }["Spectrum.useEffect.draw"];
            draw();
            return ({
                "Spectrum.useEffect": ()=>cancelAnimationFrame(raf.current)
            })["Spectrum.useEffect"];
        }
    }["Spectrum.useEffect"], [
        getAnalyser,
        playing,
        big,
        colors
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: cvs,
        className: "w-full h-full block"
    }, void 0, false, {
        fileName: "[project]/components/Visualizers.jsx",
        lineNumber: 98,
        columnNumber: 10
    }, this);
}
_s1(Spectrum, "mQAMU5C4DZAxTn+DdVpEVLHOQyg=");
_c1 = Spectrum;
function roundRect(ctx, x, y, w, h, r) {
    r = Math.max(0, Math.min(r, Math.abs(w) / 2, Math.abs(h) / 2));
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
}
function EQCurve({ gains, colors = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BRAND"] }) {
    const W = 260, H = 64, pad = 6;
    const [g1, g2] = colors;
    const pts = [];
    const n = 60;
    for(let i = 0; i <= n; i++){
        const t = i / n;
        let v = 0;
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EQ_BANDS"].forEach((b, bi)=>{
            const bx = Math.log10(b.hz / 40) / Math.log10(16000 / 40);
            v += gains[bi] * Math.exp(-Math.pow((t - bx) / 0.16, 2));
        });
        const y = H / 2 - v / 12 * (H / 2 - pad);
        pts.push([
            pad + t * (W - pad * 2),
            Math.max(pad, Math.min(H - pad, y))
        ]);
    }
    const d = pts.map((p, i)=>(i ? "L" : "M") + p[0].toFixed(1) + " " + p[1].toFixed(1)).join(" ");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: `0 0 ${W} ${H}`,
        className: "w-full",
        style: {
            height: 64
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                    id: "eqg",
                    x1: "0",
                    y1: "0",
                    x2: "1",
                    y2: "0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "0",
                            stopColor: g1
                        }, void 0, false, {
                            fileName: "[project]/components/Visualizers.jsx",
                            lineNumber: 106,
                            columnNumber: 143
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "1",
                            stopColor: g2
                        }, void 0, false, {
                            fileName: "[project]/components/Visualizers.jsx",
                            lineNumber: 106,
                            columnNumber: 177
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Visualizers.jsx",
                    lineNumber: 106,
                    columnNumber: 90
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Visualizers.jsx",
                lineNumber: 106,
                columnNumber: 84
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: pad,
                y1: H / 2,
                x2: W - pad,
                y2: H / 2,
                stroke: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].line,
                strokeDasharray: "2 3"
            }, void 0, false, {
                fileName: "[project]/components/Visualizers.jsx",
                lineNumber: 106,
                columnNumber: 235
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: d,
                fill: "none",
                stroke: "url(#eqg)",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/components/Visualizers.jsx",
                lineNumber: 106,
                columnNumber: 325
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Visualizers.jsx",
        lineNumber: 106,
        columnNumber: 11
    }, this);
}
_c2 = EQCurve;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "AmbientBackground");
__turbopack_context__.k.register(_c1, "Spectrum");
__turbopack_context__.k.register(_c2, "EQCurve");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BtnGhost",
    ()=>BtnGhost,
    "BtnPrimary",
    ()=>BtnPrimary,
    "Empty",
    ()=>Empty,
    "Field",
    ()=>Field,
    "GradientBtn",
    ()=>GradientBtn,
    "HomeIcon",
    ()=>HomeIcon,
    "LockIcon",
    ()=>LockIcon,
    "Logo",
    ()=>Logo,
    "MenuItem",
    ()=>MenuItem,
    "Modal",
    ()=>Modal,
    "MoreIcon",
    ()=>MoreIcon,
    "PageBody",
    ()=>PageBody,
    "PauseIcon",
    ()=>PauseIcon,
    "PlanChip",
    ()=>PlanChip,
    "PlayIcon",
    ()=>PlayIcon,
    "PlusIcon",
    ()=>PlusIcon,
    "QueueIcon",
    ()=>QueueIcon,
    "SearchIcon",
    ()=>SearchIcon,
    "Toggle",
    ()=>Toggle,
    "TopBar",
    ()=>TopBar,
    "VSlider",
    ()=>VSlider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/theme.js [app-client] (ecmascript)");
"use client";
;
;
function TopBar({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "flex items-center gap-3 px-5 md:px-8 h-16 shrink-0",
        style: {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frost"])("rgba(8,8,10,0.35)"),
            borderBottom: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].lineSoft}`
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui.jsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = TopBar;
function PageBody({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "flex-1 overflow-y-auto radd-scroll px-5 md:px-8 py-6",
        style: {
            paddingBottom: 112
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui.jsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = PageBody;
function PlanChip({ premium }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "text-[11px] font-mono px-2.5 py-1 rounded-md",
        style: {
            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].sub,
            background: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].bg2,
            border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].line}`
        },
        children: premium ? "PREMIUM" : "FREE"
    }, void 0, false, {
        fileName: "[project]/components/ui.jsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_c2 = PlanChip;
function Modal({ title, onClose, children, footer, wide }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 flex items-center justify-center px-4",
        style: {
            zIndex: 60,
            background: "rgba(0,0,0,0.55)"
        },
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `w-full ${wide ? "max-w-lg" : "max-w-md"} rounded-2xl overflow-hidden`,
            style: {
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frost"])("rgba(19,19,23,0.94)"),
                border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].line}`
            },
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between px-5",
                    style: {
                        height: 54,
                        borderBottom: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].lineSoft}`
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-sm font-semibold",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/components/ui.jsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "w-7 h-7 rounded-lg flex items-center justify-center hover:bg-white/5",
                            style: {
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].sub
                            },
                            "aria-label": "Close",
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/components/ui.jsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ui.jsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-5",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/components/ui.jsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this),
                footer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-end gap-2 px-5 py-4",
                    style: {
                        borderTop: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].lineSoft}`
                    },
                    children: footer
                }, void 0, false, {
                    fileName: "[project]/components/ui.jsx",
                    lineNumber: 45,
                    columnNumber: 20
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui.jsx",
            lineNumber: 38,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui.jsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_c3 = Modal;
const Field = (p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        ...p,
        className: "w-full rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-2",
        style: {
            background: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].bg2,
            border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].line}`,
            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].text
        }
    }, void 0, false, {
        fileName: "[project]/components/ui.jsx",
        lineNumber: 52,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c4 = Field;
const BtnPrimary = ({ children, ...p })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        ...p,
        className: "rounded-lg px-4 py-2 text-sm font-semibold hover:scale-[1.02] transition-transform focus-visible:outline-none focus-visible:ring-2",
        style: {
            background: `linear-gradient(90deg, ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].a1}, ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].a2})`,
            color: "#0a0a0a"
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui.jsx",
        lineNumber: 56,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c5 = BtnPrimary;
const BtnGhost = ({ children, ...p })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        ...p,
        className: "rounded-lg px-4 py-2 text-sm font-medium hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2",
        style: {
            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].sub,
            border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].line}`
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui.jsx",
        lineNumber: 60,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c6 = BtnGhost;
const GradientBtn = ({ children, ...p })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        ...p,
        className: "flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-[12px] font-semibold",
        style: {
            background: `linear-gradient(90deg, ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].a1}, ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].a2})`,
            color: "#0a0a0a"
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui.jsx",
        lineNumber: 64,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c7 = GradientBtn;
function VSlider({ value, min, max, step, onChange, label, readout }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center gap-2 flex-1",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-[10px] font-mono tracking-wider",
                style: {
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].faint
                },
                children: readout
            }, void 0, false, {
                fileName: "[project]/components/ui.jsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "range",
                min: min,
                max: max,
                step: step,
                value: value,
                onChange: (e)=>onChange(parseFloat(e.target.value)),
                className: "radd-vrange",
                style: {
                    writingMode: "vertical-lr"
                },
                "aria-label": label
            }, void 0, false, {
                fileName: "[project]/components/ui.jsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-[11px] font-medium",
                style: {
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].sub
                },
                children: label
            }, void 0, false, {
                fileName: "[project]/components/ui.jsx",
                lineNumber: 74,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui.jsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
_c8 = VSlider;
function Toggle({ on, onClick, label, locked }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: "flex items-center justify-between rounded-xl px-3.5 py-3 transition-all w-full text-left focus-visible:outline-none focus-visible:ring-2",
        style: {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frost"])(on ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].panel2 : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].panel),
            border: `1px solid ${on ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].a1 : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].line}`,
            opacity: locked ? 0.5 : 1
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[13px] font-medium",
                style: {
                    color: on ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].text : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].sub
                },
                children: label
            }, void 0, false, {
                fileName: "[project]/components/ui.jsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            locked ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LockIcon, {}, void 0, false, {
                fileName: "[project]/components/ui.jsx",
                lineNumber: 84,
                columnNumber: 17
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "relative inline-block rounded-full transition-all",
                style: {
                    width: 34,
                    height: 20,
                    background: on ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].a1 : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].line
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "absolute rounded-full transition-all",
                    style: {
                        width: 14,
                        height: 14,
                        top: 3,
                        left: on ? 17 : 3,
                        background: on ? "#0a0a0a" : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].sub
                    }
                }, void 0, false, {
                    fileName: "[project]/components/ui.jsx",
                    lineNumber: 86,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui.jsx",
                lineNumber: 85,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui.jsx",
        lineNumber: 81,
        columnNumber: 5
    }, this);
}
_c9 = Toggle;
function Empty({ msg }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center justify-center py-24 text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-12 h-12 rounded-full flex items-center justify-center mb-3",
                style: {
                    background: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].bg2,
                    border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].line}`
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SearchIcon, {
                    c: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].faint
                }, void 0, false, {
                    fileName: "[project]/components/ui.jsx",
                    lineNumber: 96,
                    columnNumber: 146
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui.jsx",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm",
                style: {
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].sub
                },
                children: msg
            }, void 0, false, {
                fileName: "[project]/components/ui.jsx",
                lineNumber: 97,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui.jsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_c10 = Empty;
const MenuItem = ({ label, onClick, small })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: `w-full text-left px-3 ${small ? "py-1.5 text-[12px]" : "py-2 text-[13px]"} hover:bg-white/5 transition-colors`,
        style: {
            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].text
        },
        children: label
    }, void 0, false, {
        fileName: "[project]/components/ui.jsx",
        lineNumber: 103,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c11 = MenuItem;
const LockIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "14",
        height: "14",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].faint,
        strokeWidth: "2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "5",
                y: "11",
                width: "14",
                height: "10",
                rx: "2"
            }, void 0, false, {
                fileName: "[project]/components/ui.jsx",
                lineNumber: 107,
                columnNumber: 125
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 11V7a4 4 0 0 1 8 0v4"
            }, void 0, false, {
                fileName: "[project]/components/ui.jsx",
                lineNumber: 107,
                columnNumber: 176
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui.jsx",
        lineNumber: 107,
        columnNumber: 32
    }, ("TURBOPACK compile-time value", void 0));
_c12 = LockIcon;
const PlayIcon = ({ s = 22 })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: s,
        height: s,
        viewBox: "0 0 24 24",
        fill: "#0a0a0a",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M8 5v14l11-7z"
        }, void 0, false, {
            fileName: "[project]/components/ui.jsx",
            lineNumber: 108,
            columnNumber: 103
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/ui.jsx",
        lineNumber: 108,
        columnNumber: 42
    }, ("TURBOPACK compile-time value", void 0));
_c13 = PlayIcon;
const PauseIcon = ({ s = 22 })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: s,
        height: s,
        viewBox: "0 0 24 24",
        fill: "#0a0a0a",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M6 5h4v14H6zM14 5h4v14h-4z"
        }, void 0, false, {
            fileName: "[project]/components/ui.jsx",
            lineNumber: 109,
            columnNumber: 104
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/ui.jsx",
        lineNumber: 109,
        columnNumber: 43
    }, ("TURBOPACK compile-time value", void 0));
_c14 = PauseIcon;
const MoreIcon = ({ c = "#fff" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 24 24",
        fill: c,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "5",
                cy: "12",
                r: "1.6"
            }, void 0, false, {
                fileName: "[project]/components/ui.jsx",
                lineNumber: 110,
                columnNumber: 103
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "1.6"
            }, void 0, false, {
                fileName: "[project]/components/ui.jsx",
                lineNumber: 110,
                columnNumber: 136
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "19",
                cy: "12",
                r: "1.6"
            }, void 0, false, {
                fileName: "[project]/components/ui.jsx",
                lineNumber: 110,
                columnNumber: 170
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui.jsx",
        lineNumber: 110,
        columnNumber: 46
    }, ("TURBOPACK compile-time value", void 0));
_c15 = MoreIcon;
const PlusIcon = ({ c = "#0a0a0a" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "15",
        height: "15",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: c,
        strokeWidth: "2.4",
        strokeLinecap: "round",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 5v14M5 12h14"
        }, void 0, false, {
            fileName: "[project]/components/ui.jsx",
            lineNumber: 111,
            columnNumber: 160
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/ui.jsx",
        lineNumber: 111,
        columnNumber: 49
    }, ("TURBOPACK compile-time value", void 0));
_c16 = PlusIcon;
const QueueIcon = ({ c = "#fff" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: c,
        strokeWidth: "2",
        strokeLinecap: "round",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M4 6h16M4 12h11M4 18h8M17 14v6l4-3z"
        }, void 0, false, {
            fileName: "[project]/components/ui.jsx",
            lineNumber: 112,
            columnNumber: 156
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/ui.jsx",
        lineNumber: 112,
        columnNumber: 47
    }, ("TURBOPACK compile-time value", void 0));
_c17 = QueueIcon;
const HomeIcon = ({ c = "#fff" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "17",
        height: "17",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: c,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3 9.5 12 3l9 6.5V21H3z"
            }, void 0, false, {
                fileName: "[project]/components/ui.jsx",
                lineNumber: 113,
                columnNumber: 178
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9 21v-7h6v7"
            }, void 0, false, {
                fileName: "[project]/components/ui.jsx",
                lineNumber: 113,
                columnNumber: 214
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui.jsx",
        lineNumber: 113,
        columnNumber: 46
    }, ("TURBOPACK compile-time value", void 0));
_c18 = HomeIcon;
const SearchIcon = ({ c = "#fff" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: c,
        strokeWidth: "2",
        strokeLinecap: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "11",
                cy: "11",
                r: "7"
            }, void 0, false, {
                fileName: "[project]/components/ui.jsx",
                lineNumber: 114,
                columnNumber: 157
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m20 20-3-3"
            }, void 0, false, {
                fileName: "[project]/components/ui.jsx",
                lineNumber: 114,
                columnNumber: 189
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui.jsx",
        lineNumber: 114,
        columnNumber: 48
    }, ("TURBOPACK compile-time value", void 0));
_c19 = SearchIcon;
const Logo = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "inline-flex items-center justify-center rounded-lg",
        style: {
            width: 30,
            height: 30,
            background: `linear-gradient(135deg, ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].a1}, ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].a2})`
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "#0a0a0a",
            strokeWidth: "2.4",
            strokeLinecap: "round",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 14v-4M9 18V6M14 16V8M19 13v-2"
            }, void 0, false, {
                fileName: "[project]/components/ui.jsx",
                lineNumber: 115,
                columnNumber: 305
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/ui.jsx",
            lineNumber: 115,
            columnNumber: 188
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/ui.jsx",
        lineNumber: 115,
        columnNumber: 28
    }, ("TURBOPACK compile-time value", void 0));
_c20 = Logo;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20;
__turbopack_context__.k.register(_c, "TopBar");
__turbopack_context__.k.register(_c1, "PageBody");
__turbopack_context__.k.register(_c2, "PlanChip");
__turbopack_context__.k.register(_c3, "Modal");
__turbopack_context__.k.register(_c4, "Field");
__turbopack_context__.k.register(_c5, "BtnPrimary");
__turbopack_context__.k.register(_c6, "BtnGhost");
__turbopack_context__.k.register(_c7, "GradientBtn");
__turbopack_context__.k.register(_c8, "VSlider");
__turbopack_context__.k.register(_c9, "Toggle");
__turbopack_context__.k.register(_c10, "Empty");
__turbopack_context__.k.register(_c11, "MenuItem");
__turbopack_context__.k.register(_c12, "LockIcon");
__turbopack_context__.k.register(_c13, "PlayIcon");
__turbopack_context__.k.register(_c14, "PauseIcon");
__turbopack_context__.k.register(_c15, "MoreIcon");
__turbopack_context__.k.register(_c16, "PlusIcon");
__turbopack_context__.k.register(_c17, "QueueIcon");
__turbopack_context__.k.register(_c18, "HomeIcon");
__turbopack_context__.k.register(_c19, "SearchIcon");
__turbopack_context__.k.register(_c20, "Logo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/api.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addTrackToPlaylist",
    ()=>addTrackToPlaylist,
    "createListeningLink",
    ()=>createListeningLink,
    "createPlaylist",
    ()=>createPlaylist,
    "getStreamUrl",
    ()=>getStreamUrl,
    "listPlaylists",
    ()=>listPlaylists,
    "listTracks",
    ()=>listTracks,
    "login",
    ()=>login,
    "removeTrackFromPlaylist",
    ()=>removeTrackFromPlaylist,
    "searchTracks",
    ()=>searchTracks,
    "signup",
    ()=>signup,
    "uploadTrack",
    ()=>uploadTrack
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/* ════════════════════════════════════════════════════════════════════════════
   lib/api.js  —  THE DATA SEAM  (plain HTTP calls to your backend)

   Every network call the app makes lives here, and nowhere else. Each function
   is a normal `fetch` to one of your backend's URLs. There is no GraphQL and no
   proxy — the browser (or the server, during SSR) calls your API directly.

   POINT IT AT YOUR BACKEND ───────────────────────────────────────────────────
   In .env.local set:
     NEXT_PUBLIC_API_BASE=https://api.raddmp.example.com

   The paths below ("/tracks", "/playlists", …) are examples — rename them to
   match whatever your backend actually exposes. The rest of the app never
   changes; it only knows these function names.

   Notes:
   • Browser → backend calls need CORS headers on your backend.
   • Server → backend calls (SSR, from app/layout.jsx) do NOT.
   • While NEXT_PUBLIC_API_BASE is unset (or PREVIEW is on) the read functions
     return empty/sample data, so the app runs with no backend and never errors.
════════════════════════════════════════════════════════════════════════════ */ var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sample$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/sample.js [app-client] (ecmascript)");
;
const API_BASE = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_BASE || "";
// tiny wrapper so every call sends/parses JSON the same way
async function request(path, options = {}) {
    const res = await fetch(`${API_BASE}${path}`, {
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include",
        ...options
    });
    if (!res.ok) throw new Error(`Request failed: ${res.status}`);
    return res.status === 204 ? null : res.json();
}
async function listTracks() {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sample$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PREVIEW"]) return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sample$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SAMPLE_TRACKS"];
    if (!API_BASE) return [];
    try {
        return await request("/tracks");
    } catch  {
        return [];
    }
}
async function listPlaylists() {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sample$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PREVIEW"]) return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sample$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SAMPLE_PLAYLISTS"];
    if (!API_BASE) return [];
    try {
        return await request("/playlists");
    } catch  {
        return [];
    }
}
async function searchTracks(query) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sample$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PREVIEW"]) return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sample$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SAMPLE_TRACKS"].filter((t)=>(t.title + t.artist).toLowerCase().includes(query.toLowerCase()));
    if (!API_BASE) return [];
    return request(`/tracks?q=${encodeURIComponent(query)}`);
}
const login = (body)=>request("/auth/login", {
        method: "POST",
        body: JSON.stringify(body)
    });
const signup = (body)=>request("/auth/signup", {
        method: "POST",
        body: JSON.stringify(body)
    });
const uploadTrack = (body)=>request("/tracks", {
        method: "POST",
        body: JSON.stringify(body)
    });
const createPlaylist = (name)=>request("/playlists", {
        method: "POST",
        body: JSON.stringify({
            name
        })
    });
const addTrackToPlaylist = (playlistId, trackId)=>request(`/playlists/${playlistId}/tracks`, {
        method: "POST",
        body: JSON.stringify({
            trackId
        })
    });
const removeTrackFromPlaylist = (playlistId, trackId)=>request(`/playlists/${playlistId}/tracks/${trackId}`, {
        method: "DELETE"
    });
const createListeningLink = (trackId)=>request("/sessions", {
        method: "POST",
        body: JSON.stringify({
            trackId
        })
    });
const getStreamUrl = (id)=>request(`/tracks/${id}/stream-url`);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/audio.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAnalyser",
    ()=>useAnalyser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
/* Attaches a Web Audio AnalyserNode to a real <audio> element so the visualizer
   can react to whatever is playing. This is plumbing only — it reads levels, it
   does not process sound. The graph is created lazily on the first `resume()`
   (browsers require a user gesture before audio can start).

   Returns:
     audioRef     – attach to your <audio ref={audioRef} />
     resume()     – call inside a click handler before .play()
     getAnalyser  – () => AnalyserNode | null, passed to the visualizer         */ const EQUALIZER_BANDS = [
    {
        type: "lowshelf",
        frequency: 80
    },
    {
        type: "peaking",
        frequency: 250
    },
    {
        type: "peaking",
        frequency: 500
    },
    {
        type: "peaking",
        frequency: 1000
    },
    {
        type: "highshelf",
        frequency: 2000
    }
];
const EFFECT_LEVELS = {
    reverb: 2.5,
    chorus: 0.5,
    distortion: 1.0
};
function makeImpulseResponse(ctx, duration_seconds, decay) {
    const rate = ctx.sampleRate;
    const length = rate * duration_seconds;
    const impulse = ctx.createBuffer(2, length, rate);
    for(let channel = 0; channel < impulse.numberOfChannels; channel++){
        const channelData = impulse.getChannelData(channel);
        for(let i = 0; i < length; i++){
            channelData[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / length, decay);
        }
    }
    return impulse;
}
function makeDistortionCurve(amount) {
    const upperBound = 44100;
    const curve = new Float32Array(upperBound);
    for(let i = 0; i < upperBound; i++){
        const x = i * 2 / upperBound - 1;
        curve[i] = (3 + amount) * x * 20 * Math.PI / 180 / (Math.PI + amount * Math.abs(x));
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
    const equalizerBands = EQUALIZER_BANDS.map((band)=>{
        const filter = ctx.createBiquadFilter();
        filter.type = band.type;
        filter.frequency.value = band.frequency;
        filter.gain.value = 0;
        return filter;
    });
    input.connect(equalizerBands[0]);
    for(let i = 0; i < equalizerBands.length - 1; i++){
        equalizerBands[i].connect(equalizerBands[i + 1]);
    }
    if (savedEq) {
        savedEq.forEach((gain, i)=>{
            equalizerBands[i].gain.value = gain;
        });
    }
    return equalizerBands;
}
function useAnalyser(getInitialBands) {
    _s();
    const audioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const graph = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const ensure = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAnalyser.useCallback[ensure]": ()=>{
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
                graph.current = {
                    ctx,
                    analyser,
                    bands,
                    effects
                };
            } catch  {
            /* ignore if unsupported */ }
            return graph.current;
        }
    }["useAnalyser.useCallback[ensure]"], []);
    const resume = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAnalyser.useCallback[resume]": async ()=>{
            const graph = ensure();
            if (graph && graph.ctx.state === "suspended") {
                try {
                    await graph.ctx.resume();
                } catch  {}
            }
        }
    }["useAnalyser.useCallback[resume]"], [
        ensure
    ]);
    const setBandGain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAnalyser.useCallback[setBandGain]": (bandIndex, gain)=>{
            const currGraph = graph.current;
            if (!currGraph) {
                return;
            }
            const band = currGraph.bands[bandIndex];
            if (!band) {
                return;
            }
            band.gain.value = gain;
        }
    }["useAnalyser.useCallback[setBandGain]"], []);
    const setEffect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAnalyser.useCallback[setEffect]": (name, on)=>{
            const currGraph = graph.current;
            if (!currGraph) {
                return;
            }
            const wet = currGraph.effects[name];
            if (!wet) {
                return;
            }
            wet.gain.value = on ? EFFECT_LEVELS[name] ?? 1 : 0;
        }
    }["useAnalyser.useCallback[setEffect]"], []);
    const getAnalyser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAnalyser.useCallback[getAnalyser]": ()=>graph.current ? graph.current.analyser : null
    }["useAnalyser.useCallback[getAnalyser]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAnalyser.useEffect": ()=>({
                "useAnalyser.useEffect": ()=>{
                    if (graph.current) {
                        try {
                            graph.current.ctx.close();
                        } catch  {}
                    }
                }
            })["useAnalyser.useEffect"]
    }["useAnalyser.useEffect"], []);
    return {
        audioRef,
        resume,
        getAnalyser,
        setBandGain,
        setEffect
    };
}
_s(useAnalyser, "mSmkwJKTTbzG0m3eStaxnXA8rJY=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/sample.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* PREVIEW toggle + sample data.

   Kept in one file because BOTH the server (lib/api.js, during SSR) and the
   client (lib/store.jsx) need them. Default is the real dead shell: no data,
   nothing wired. Flip PREVIEW to true only to eyeball the UI — it injects the
   fake rows below and skips the login screen. Ship with it false. */ __turbopack_context__.s([
    "PREVIEW",
    ()=>PREVIEW,
    "SAMPLE_PLAYLISTS",
    ()=>SAMPLE_PLAYLISTS,
    "SAMPLE_TRACKS",
    ()=>SAMPLE_TRACKS
]);
const PREVIEW = true;
const SAMPLE_TRACKS = [
    {
        id: "s1",
        title: "Neon Drift",
        artist: "Aurora Sync",
        dur: 214,
        g1: "#67e8f9",
        g2: "#3b82f6",
        streamUrl: null
    },
    {
        id: "s2",
        title: "Glass Rain",
        artist: "Low Ceiling",
        dur: 268,
        g1: "#38bdf8",
        g2: "#c084fc",
        streamUrl: null
    },
    {
        id: "s3",
        title: "Voltage",
        artist: "Mainline",
        dur: 198,
        g1: "#22d3ee",
        g2: "#a855f7",
        streamUrl: null
    },
    {
        id: "s4",
        title: "Undertow",
        artist: "Deepfield",
        dur: 242,
        g1: "#2dd4bf",
        g2: "#6366f1",
        streamUrl: null
    },
    {
        id: "s5",
        title: "Halcyon",
        artist: "Softwave",
        dur: 226,
        g1: "#818cf8",
        g2: "#e879f9",
        streamUrl: null
    },
    {
        id: "s6",
        title: "Afterglow",
        artist: "Aurora Sync",
        dur: 205,
        g1: "#67e8f9",
        g2: "#c084fc",
        streamUrl: null
    }
];
const SAMPLE_PLAYLISTS = [
    {
        id: "sp1",
        name: "Late Night",
        tracks: [
            "s1",
            "s3"
        ]
    },
    {
        id: "sp2",
        name: "Focus",
        tracks: [
            "s2",
            "s5"
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/store.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PlayerProvider",
    ()=>PlayerProvider,
    "usePlayer",
    ()=>usePlayer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$audio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/audio.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sample$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/sample.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
/* ════════════════════════════════════════════════════════════════════════════
   The app store (client).

   Holds everything that must OUTLIVE navigation: the playing track, playlists,
   library, queue, auth, EQ/effects. Mounted once in app/layout.jsx, ABOVE the
   router, so moving between /, /search, /playlist/[id] never stops playback.

   DATA LOADING: this store loads the library + playlists once, in the browser,
   with useEffect (see below). The very first page shows a brief "Loading…";
   after that every navigation is instant because the data already lives here.

   Every ACTION is an inert stub. Fill each with a call to lib/api.js — the exact
   line is written in a comment right there. See README → "Connecting a backend".
   ────────────────────────────────────────────────────────────────────────── */ const PlayerContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
const usePlayer = ()=>{
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(PlayerContext);
};
_s(usePlayer, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
function PlayerProvider({ children }) {
    _s1();
    const [authed, setAuthed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sample$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PREVIEW"]);
    const [plan, setPlan] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("premium");
    const [library, setLibrary] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sample$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PREVIEW"] ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sample$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SAMPLE_TRACKS"] : []);
    const [playlists, setPlaylists] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sample$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PREVIEW"] ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sample$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SAMPLE_PLAYLISTS"] : []);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sample$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PREVIEW"]);
    const [queue, setQueue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [current, setCurrent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sample$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PREVIEW"] ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sample$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SAMPLE_TRACKS"][0]?.id ?? null : null);
    const [playing, setPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [elapsed, setElapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [eq, setEq] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        0,
        0,
        0,
        0,
        0
    ]);
    const [fx, setFx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        distortion: false,
        chorus: false,
        reverb: false
    });
    const [vol, setVol] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0.8);
    const [modal, setModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [menu, setMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [expanded, setExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [toast, setToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const notify = (m)=>{
        setToast(m);
        setTimeout(()=>setToast(null), 2600);
    };
    const eqRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(eq);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PlayerProvider.useEffect": ()=>{
            eqRef.current = eq;
        }
    }["PlayerProvider.useEffect"], [
        eq
    ]);
    const { audioRef, resume, getAnalyser, setBandGain, setEffect } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$audio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnalyser"])({
        "PlayerProvider.useAnalyser": ()=>eqRef.current
    }["PlayerProvider.useAnalyser"]);
    const isPremium = plan === "premium";
    const track = library.find((t)=>t.id === current) || null;
    /* ── INITIAL DATA LOAD (client-side). Runs once, after first paint. ──────
     With no backend configured, api.* returns [] so the app just shows empty
     lists. Point NEXT_PUBLIC_API_BASE at your backend and this fills in. ── */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PlayerProvider.useEffect": ()=>{
            if (__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sample$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PREVIEW"]) {
                setLoading(false);
                return;
            }
            let alive = true;
            ({
                "PlayerProvider.useEffect": async ()=>{
                    try {
                        const [tracks, lists] = await Promise.all([
                            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listTracks"](),
                            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listPlaylists"]()
                        ]);
                        if (!alive) {
                            return;
                        }
                        setLibrary(tracks);
                        w;
                        setPlaylists(lists);
                    } finally{
                        if (alive) {
                            setLoading(false);
                        }
                    }
                }
            })["PlayerProvider.useEffect"]();
            return ({
                "PlayerProvider.useEffect": ()=>{
                    alive = false;
                }
            })["PlayerProvider.useEffect"];
        }
    }["PlayerProvider.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PlayerProvider.useEffect": ()=>{
            const audioElement = audioRef.current;
            if (!audioElement) {
                return;
            }
            const currTime = {
                "PlayerProvider.useEffect.currTime": ()=>setElapsed(audioElement.currentTime)
            }["PlayerProvider.useEffect.currTime"];
            const onEnd = {
                "PlayerProvider.useEffect.onEnd": ()=>setPlaying(false)
            }["PlayerProvider.useEffect.onEnd"];
            audioElement.addEventListener("timeupdate", currTime);
            audioElement.addEventListener("ended", onEnd);
            return ({
                "PlayerProvider.useEffect": ()=>{
                    audioElement.removeEventListener("timeupdate", currTime);
                    audioElement.removeEventListener("ended", onEnd);
                }
            })["PlayerProvider.useEffect"];
        }
    }["PlayerProvider.useEffect"], [
        audioRef
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PlayerProvider.useEffect": ()=>{
            if (audioRef.current) {
                audioRef.current.volume = vol;
            }
        }
    }["PlayerProvider.useEffect"], [
        vol,
        audioRef
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PlayerProvider.useEffect": ()=>{
            const c = {
                "PlayerProvider.useEffect.c": ()=>setMenu(null)
            }["PlayerProvider.useEffect.c"];
            window.addEventListener("click", c);
            return ({
                "PlayerProvider.useEffect": ()=>window.removeEventListener("click", c)
            })["PlayerProvider.useEffect"];
        }
    }["PlayerProvider.useEffect"], []);
    const seek = (seconds)=>{
        const audioElement = audioRef.current;
        if (!audioElement) {
            return;
        }
        audioElement.currentTime = seconds;
        setElapsed(seconds);
    };
    /* ═══ CONNECT THESE — inert stubs. Fill with lib/api.js calls. ═══════════ */ const handleAuth = async ({ email, password, plan: chosen, mode })=>{
    // TODO: const user = await (mode === "signup"
    //   ? api.signup({ email, password, plan: chosen })
    //   : api.login({ email, password }));
    // setPlan(user.plan); setAuthed(true);
    };
    const playTrack = async (id)=>{
        // TODO: const t = library.find((x) => x.id === id);
        //       audioRef.current.src = t.streamUrl; resume(); audioRef.current.play();
        //       setCurrent(id); setElapsed(0); setPlaying(true);
        const track = library.find((track)=>track.id === id);
        if (!track) {
            return;
        }
        if (id === current && audioRef.current.src) {
            await resume();
            await audioRef.current.play().catch(()=>{});
            setPlaying(true);
            return;
        }
        // const { url } = await api.getStreamUrl(id);
        // audioRef.current.src = url;
        audioRef.current.src = "/test.mp3";
        await resume();
        await audioRef.current.play();
        setCurrent(id);
        setElapsed(0);
        setPlaying(true);
    };
    const togglePlay = async ()=>{
        const audioElement = audioRef.current;
        if (!audioElement) {
            return;
        }
        if (playing) {
            audioElement.pause();
            setPlaying(false);
        } else {
            await audioElement.play();
            setPlaying(true);
        }
    };
    const createPlaylist = async (name)=>{
        // TODO: await api.createPlaylist(name); setPlaylists(await api.listPlaylists());
        setModal(null);
    };
    const uploadTrack = async (data)=>{
        // TODO: await api.uploadTrack(data); setLibrary(await api.listTracks());
        setModal(null);
    };
    const addToPlaylist = async (trackId, playlistId)=>{
    // TODO: await api.addTrackToPlaylist(playlistId, trackId); setPlaylists(await api.listPlaylists());
    };
    const removeFromPlaylist = async (trackId, playlistId)=>{
    // TODO: await api.removeTrackFromPlaylist(playlistId, trackId); setPlaylists(await api.listPlaylists());
    };
    const addToQueue = (trackId)=>{
        setQueue((q)=>[
                ...q,
                trackId
            ]);
    };
    const shareLink = async ()=>{
    // TODO: const { shareUrl } = await api.createListeningLink(current);
    //       navigator.clipboard.writeText(shareUrl); notify("Link copied");
    };
    const upgrade = ()=>{};
    const setEqBand = (i, v)=>{
        setEq((p)=>p.map((x, xi)=>xi === i ? v : x));
        setBandGain(i, v);
    };
    const resetEq = ()=>{
        setEq([
            0,
            0,
            0,
            0,
            0
        ]);
        for(let i = 0; i < 5; i++){
            setBandGain(i, 0);
        }
    };
    const toggleFx = (key)=>{
        setFx((effect)=>{
            const newState = !effect[key];
            setEffect(key, newState);
            return {
                ...effect,
                [key]: newState
            };
        });
    };
    const value = {
        authed,
        plan,
        isPremium,
        loading,
        library,
        playlists,
        queue,
        current,
        track,
        playing,
        elapsed,
        seek,
        eq,
        fx,
        vol,
        setVol,
        modal,
        openModal: setModal,
        closeModal: ()=>setModal(null),
        menu,
        openMenu: (trackId, e)=>{
            e.stopPropagation();
            setMenu({
                trackId,
                x: e.clientX,
                y: e.clientY
            });
        },
        closeMenu: ()=>setMenu(null),
        expanded,
        expand: ()=>setExpanded(true),
        collapse: ()=>setExpanded(false),
        audioRef,
        getAnalyser,
        toast,
        notify,
        handleAuth,
        playTrack,
        togglePlay,
        createPlaylist,
        uploadTrack,
        addToPlaylist,
        removeFromPlaylist,
        addToQueue,
        shareLink,
        upgrade,
        setEqBand,
        resetEq,
        toggleFx
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlayerContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/lib/store.jsx",
        lineNumber: 241,
        columnNumber: 10
    }, this);
}
_s1(PlayerProvider, "eZvmOoull9+UXLJJB4jRYL/KMqM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$audio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnalyser"]
    ];
});
_c = PlayerProvider;
var _c;
__turbopack_context__.k.register(_c, "PlayerProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/theme.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Design tokens + tiny helpers shared across components.
// The color values here mirror the CSS variables in app/globals.css.
__turbopack_context__.s([
    "BRAND",
    ()=>BRAND,
    "C",
    ()=>C,
    "EQ_BANDS",
    ()=>EQ_BANDS,
    "fmtTime",
    ()=>fmtTime,
    "frost",
    ()=>frost,
    "hexA",
    ()=>hexA,
    "hexToRgb",
    ()=>hexToRgb,
    "lerpColor",
    ()=>lerpColor
]);
const C = {
    bg: "#08080a",
    bg2: "#0d0d10",
    panel: "rgba(19,19,23,0.62)",
    panelSolid: "#131317",
    panel2: "rgba(26,26,31,0.66)",
    line: "#26262d",
    lineSoft: "#1c1c22",
    text: "#f5f5f7",
    sub: "#9a9aa5",
    faint: "#63636e",
    a1: "#67e8f9",
    a2: "#c084fc"
};
const BRAND = [
    "#67e8f9",
    "#c084fc"
];
const EQ_BANDS = [
    {
        label: "Bass",
        hz: 80
    },
    {
        label: "Low mid",
        hz: 250
    },
    {
        label: "Mid",
        hz: 1000
    },
    {
        label: "High mid",
        hz: 3500
    },
    {
        label: "Treble",
        hz: 10000
    }
];
const frost = (bg)=>({
        background: bg,
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)"
    });
const fmtTime = (s)=>{
    if (!isFinite(s)) s = 0;
    return `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;
};
function hexToRgb(h) {
    const n = parseInt(h.slice(1), 16);
    return [
        n >> 16 & 255,
        n >> 8 & 255,
        n & 255
    ];
}
function hexA(h, a) {
    const [r, g, b] = hexToRgb(h);
    return `rgba(${r},${g},${b},${a})`;
}
function lerpColor(a, b, t) {
    const [ar, ag, ab] = hexToRgb(a), [br, bg, bb] = hexToRgb(b);
    return "#" + [
        Math.round(ar + (br - ar) * t),
        Math.round(ag + (bg - ag) * t),
        Math.round(ab + (bb - ab) * t)
    ].map((v)=>v.toString(16).padStart(2, "0")).join("");
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0b2mtc9._.js.map