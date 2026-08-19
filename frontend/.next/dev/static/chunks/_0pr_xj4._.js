(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LibraryPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// The library. It reads `library` from the store — which was filled by the
// server in layout.jsx — so on first load the list is already in the HTML.
// (This is a client component so it can use the store, but it is STILL
// server-rendered on the first request. "use client" only adds browser
// interactivity on top.)
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TrackList$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/TrackList.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function LibraryPage() {
    _s();
    const { library, loading, isPremium, openModal } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayer"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TopBar"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-lg font-semibold tracking-tight flex-1",
                        children: "Your Library"
                    }, void 0, false, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GradientBtn"], {
                        onClick: ()=>openModal({
                                type: "upload"
                            }),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlusIcon"], {}, void 0, false, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 19,
                                columnNumber: 68
                            }, this),
                            " Add song"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlanChip"], {
                        premium: isPremium
                    }, void 0, false, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PageBody"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TrackList$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TrackList"], {
                    tracks: library,
                    loading: loading,
                    emptyMsg: "Your library is empty — connect your catalog service."
                }, void 0, false, {
                    fileName: "[project]/app/page.jsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 22,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.jsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_s(LibraryPage, "VdvQwAUUcRZEGAl33ANBdb27K84=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayer"]
    ];
});
_c = LibraryPage;
var _c;
__turbopack_context__.k.register(_c, "LibraryPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/TrackList.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TrackList",
    ()=>TrackList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/theme.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function TrackList({ tracks, loading = false, emptyMsg = "No songs here yet." }) {
    _s();
    const { current, playing, playTrack, togglePlay, openMenu } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayer"])();
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Empty"], {
        msg: "Loading…"
    }, void 0, false, {
        fileName: "[project]/components/TrackList.jsx",
        lineNumber: 11,
        columnNumber: 23
    }, this);
    if (!tracks.length) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Empty"], {
        msg: emptyMsg
    }, void 0, false, {
        fileName: "[project]/components/TrackList.jsx",
        lineNumber: 12,
        columnNumber: 30
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col",
        children: tracks.map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
                t: t,
                idx: i + 1,
                active: current === t.id,
                playing: playing && current === t.id,
                onClick: ()=>current === t.id ? togglePlay() : playTrack(t.id),
                onMenu: openMenu
            }, t.id, false, {
                fileName: "[project]/components/TrackList.jsx",
                lineNumber: 16,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/TrackList.jsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_s(TrackList, "MO0q1WDNPnclTB0wqn7568bZvKc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayer"]
    ];
});
_c = TrackList;
function Row({ t, idx, active, playing, onClick, onMenu }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "group grid items-center gap-4 px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors",
        style: {
            gridTemplateColumns: "24px 1fr auto auto"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onClick,
                className: "contents text-left",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[13px] font-mono text-center",
                    style: {
                        color: active ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].a1 : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].faint
                    },
                    children: playing ? "♪" : idx
                }, void 0, false, {
                    fileName: "[project]/components/TrackList.jsx",
                    lineNumber: 29,
                    columnNumber: 64
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/TrackList.jsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onClick,
                className: "flex items-center gap-3 min-w-0 text-left",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-10 h-10 rounded-md shrink-0",
                        style: {
                            background: `linear-gradient(135deg, ${t.g1}, ${t.g2})`
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/TrackList.jsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[14px] font-medium truncate",
                                children: t.title
                            }, void 0, false, {
                                fileName: "[project]/components/TrackList.jsx",
                                lineNumber: 32,
                                columnNumber: 34
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[12px] truncate",
                                style: {
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].sub
                                },
                                children: t.artist
                            }, void 0, false, {
                                fileName: "[project]/components/TrackList.jsx",
                                lineNumber: 32,
                                columnNumber: 99
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/TrackList.jsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/TrackList.jsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: (e)=>onMenu(t.id, e),
                className: "opacity-0 group-hover:opacity-100 transition-opacity w-8 h-8 rounded-md flex items-center justify-center hover:bg-white/10",
                "aria-label": "Track menu",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MoreIcon"], {
                    c: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].sub
                }, void 0, false, {
                    fileName: "[project]/components/TrackList.jsx",
                    lineNumber: 34,
                    columnNumber: 207
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/TrackList.jsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[12px] font-mono",
                style: {
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"].faint
                },
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fmtTime"])(t.dur)
            }, void 0, false, {
                fileName: "[project]/components/TrackList.jsx",
                lineNumber: 35,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/TrackList.jsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_c1 = Row;
var _c, _c1;
__turbopack_context__.k.register(_c, "TrackList");
__turbopack_context__.k.register(_c1, "Row");
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
function useAnalyser() {
    _s();
    const audioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const graph = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const ensure = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAnalyser.useCallback[ensure]": ()=>{
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
                graph.current = {
                    ctx,
                    analyser
                };
            } catch  {}
            return graph.current;
        }
    }["useAnalyser.useCallback[ensure]"], []);
    const resume = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAnalyser.useCallback[resume]": async ()=>{
            const g = ensure();
            if (g && g.ctx.state === "suspended") {
                try {
                    await g.ctx.resume();
                } catch  {}
            }
        }
    }["useAnalyser.useCallback[resume]"], [
        ensure
    ]);
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
        getAnalyser
    };
}
_s(useAnalyser, "YuCpoCwyUSrZlkXGumwlL8aSpDk=");
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
const PREVIEW = false;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$audio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/audio.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sample$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/sample.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.js [app-client] (ecmascript)");
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
    const [plan, setPlan] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("basic");
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
    const { audioRef, resume, getAnalyser } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$audio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnalyser"])();
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
                        if (!alive) return;
                        setLibrary(tracks);
                        setPlaylists(lists);
                    } finally{
                        if (alive) setLoading(false);
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
            if (!playing || !track) return;
            const id = setInterval({
                "PlayerProvider.useEffect.id": ()=>setElapsed({
                        "PlayerProvider.useEffect.id": (e)=>e + 1 > track.dur ? 0 : e + 1
                    }["PlayerProvider.useEffect.id"])
            }["PlayerProvider.useEffect.id"], 1000);
            return ({
                "PlayerProvider.useEffect": ()=>clearInterval(id)
            })["PlayerProvider.useEffect"];
        }
    }["PlayerProvider.useEffect"], [
        playing,
        track
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PlayerProvider.useEffect": ()=>{
            if (audioRef.current) audioRef.current.volume = vol;
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
    /* ═══ CONNECT THESE — inert stubs. Fill with lib/api.js calls. ═══════════ */ const handleAuth = async ({ email, password, plan: chosen, mode })=>{
    // TODO: const user = await (mode === "signup"
    //   ? api.signup({ email, password, plan: chosen })
    //   : api.login({ email, password }));
    // setPlan(user.plan); setAuthed(true);
    };
    const playTrack = (id)=>{
    // TODO: const t = library.find((x) => x.id === id);
    //       audioRef.current.src = t.streamUrl; resume(); audioRef.current.play();
    //       setCurrent(id); setElapsed(0); setPlaying(true);
    };
    const togglePlay = ()=>{
    // TODO: playing ? audioRef.current.pause() : audioRef.current.play();
    //       setPlaying(!playing);
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
    const setEqBand = (i, v)=>setEq((p)=>p.map((x, xi)=>xi === i ? v : x)); // TODO: send to DSP
    const resetEq = ()=>setEq([
            0,
            0,
            0,
            0,
            0
        ]);
    const toggleFx = (key)=>setFx((f)=>({
                ...f,
                [key]: !f[key]
            })); // TODO: send to DSP
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
        lineNumber: 136,
        columnNumber: 10
    }, this);
}
_s1(PlayerProvider, "3VJpZy3osLj+GddVJuIId/oHhFc=", false, function() {
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
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=_0pr_xj4._.js.map