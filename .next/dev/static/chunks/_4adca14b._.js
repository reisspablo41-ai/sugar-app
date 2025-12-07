(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9",
            "icon-sm": "size-8",
            "icon-lg": "size-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroSection",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
"use client";
;
;
;
;
;
function HeroSection({ title, subtitle = "Excellence in Every Grain", description, ctaText = "Get Started", ctaLink = "#", secondaryCtaText, secondaryCtaLink }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative overflow-hidden py-20 md:py-32 lg:py-40",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                        autoPlay: true,
                        loop: true,
                        muted: true,
                        playsInline: true,
                        className: "absolute inset-0 w-full h-full object-cover",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                            src: "https://cdn.pixabay.com/video/2025/07/11/290778_large.mp4",
                            type: "video/mp4"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/hero.tsx",
                            lineNumber: 38,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sections/hero.tsx",
                        lineNumber: 31,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black/60"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/hero.tsx",
                        lineNumber: 41,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-secondary/30"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/hero.tsx",
                        lineNumber: 43,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/hero.tsx",
                lineNumber: 30,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl opacity-20 animate-pulse z-0"
            }, void 0, false, {
                fileName: "[project]/components/sections/hero.tsx",
                lineNumber: 47,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-3xl opacity-20 animate-pulse z-0",
                style: {
                    animationDelay: '1s'
                }
            }, void 0, false, {
                fileName: "[project]/components/sections/hero.tsx",
                lineNumber: 48,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto text-center space-y-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.5
                            },
                            className: "inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                    className: "h-4 w-4 text-secondary"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/hero.tsx",
                                    lineNumber: 59,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-semibold text-white",
                                    children: subtitle
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/hero.tsx",
                                    lineNumber: 60,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/hero.tsx",
                            lineNumber: 53,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.6,
                                delay: 0.1
                            },
                            className: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white drop-shadow-2xl",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/components/sections/hero.tsx",
                            lineNumber: 64,
                            columnNumber: 21
                        }, this),
                        description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.6,
                                delay: 0.2
                            },
                            className: "text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-lg",
                            children: description
                        }, void 0, false, {
                            fileName: "[project]/components/sections/hero.tsx",
                            lineNumber: 75,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.6,
                                delay: 0.3
                            },
                            className: "flex flex-col sm:flex-row gap-4 justify-center items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: ctaLink,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        size: "lg",
                                        className: "text-base px-8 group shadow-2xl hover:shadow-primary/50",
                                        children: [
                                            ctaText,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                className: "ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/hero.tsx",
                                                lineNumber: 95,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/hero.tsx",
                                        lineNumber: 93,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/hero.tsx",
                                    lineNumber: 92,
                                    columnNumber: 25
                                }, this),
                                secondaryCtaText && secondaryCtaLink && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: secondaryCtaLink,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        size: "lg",
                                        variant: "outline",
                                        className: "text-base px-8 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 hover:text-white shadow-xl",
                                        children: secondaryCtaText
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/hero.tsx",
                                        lineNumber: 100,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/hero.tsx",
                                    lineNumber: 99,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/hero.tsx",
                            lineNumber: 86,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/hero.tsx",
                    lineNumber: 51,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/hero.tsx",
                lineNumber: 50,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/hero.tsx",
        lineNumber: 28,
        columnNumber: 9
    }, this);
}
_c = HeroSection;
var _c;
__turbopack_context__.k.register(_c, "HeroSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c4 = CardAction;
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c5 = CardContent;
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center px-6 [.border-t]:pt-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/features.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FeaturesSection",
    ()=>FeaturesSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/award.js [app-client] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$leaf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Leaf$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/leaf.js [app-client] (ecmascript) <export default as Leaf>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TruckIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/truck.js [app-client] (ecmascript) <export default as TruckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
const features = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"],
        title: "Premium Quality",
        description: "Highest quality refined sugar meeting international standards with rigorous quality control."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"],
        title: "Global Reach",
        description: "Exporting to over 50 countries worldwide with reliable logistics and timely delivery."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$leaf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Leaf$3e$__["Leaf"],
        title: "Sustainable Practices",
        description: "Eco-friendly production methods and responsible sourcing to minimize environmental impact."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TruckIcon$3e$__["TruckIcon"],
        title: "Efficient Logistics",
        description: "Streamlined supply chain ensuring your products arrive safely and on schedule."
    }
];
function FeaturesSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-16 md:py-24 bg-background",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true
                    },
                    transition: {
                        duration: 0.6
                    },
                    className: "text-center mb-12 md:mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl sm:text-4xl md:text-5xl font-bold mb-4",
                            children: "Why Choose Brazil Global Sugar"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/features.tsx",
                            lineNumber: 41,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-muted-foreground max-w-2xl mx-auto",
                            children: "Leading the industry with excellence, sustainability, and global service"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/features.tsx",
                            lineNumber: 44,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/features.tsx",
                    lineNumber: 34,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8",
                    children: features.map((feature, index)=>{
                        const Icon = feature.icon;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                duration: 0.5,
                                delay: index * 0.1
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                className: "p-6 h-full hover:shadow-lg transition-shadow duration-300 border-2 hover:border-primary/20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                            className: "h-6 w-6 text-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/features.tsx",
                                            lineNumber: 62,
                                            columnNumber: 41
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/features.tsx",
                                        lineNumber: 61,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-bold mb-2",
                                        children: feature.title
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/features.tsx",
                                        lineNumber: 64,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-muted-foreground leading-relaxed",
                                        children: feature.description
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/features.tsx",
                                        lineNumber: 65,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/features.tsx",
                                lineNumber: 60,
                                columnNumber: 33
                            }, this)
                        }, feature.title, false, {
                            fileName: "[project]/components/sections/features.tsx",
                            lineNumber: 53,
                            columnNumber: 29
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/components/sections/features.tsx",
                    lineNumber: 49,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/features.tsx",
            lineNumber: 33,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/sections/features.tsx",
        lineNumber: 32,
        columnNumber: 9
    }, this);
}
_c = FeaturesSection;
var _c;
__turbopack_context__.k.register(_c, "FeaturesSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/constants/products.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "products",
    ()=>products
]);
const products = [
    {
        id: "1",
        slug: "icumsa-45-white-refined-sugar",
        name: "ICUMSA 45 White Refined Sugar",
        description: "The highest quality refined sugar available in the global market. Known for its pure white color, fine granulation, and exceptional sweetness.",
        icumsa: "45",
        category: "refined",
        image: "/images/products/white-refined-sugar.png",
        features: [
            "Pure white color",
            "Fine granulation",
            "Highest quality standard",
            "Ideal for food and beverage industry"
        ],
        specifications: [
            {
                label: "ICUMSA",
                value: "45 max"
            },
            {
                label: "Polarization",
                value: "99.8% min"
            },
            {
                label: "Moisture",
                value: "0.04% max"
            },
            {
                label: "Ash Content",
                value: "0.04% max"
            }
        ]
    },
    {
        id: "2",
        slug: "icumsa-100-cane-sugar",
        name: "ICUMSA 100 Cane Sugar",
        description: "Premium quality cane sugar with excellent color and taste characteristics, perfect for various industrial applications.",
        icumsa: "100",
        category: "refined",
        image: "/images/products/crystal-sugar.png",
        features: [
            "Light golden color",
            "Rich flavor profile",
            "High sucrose content",
            "Versatile applications"
        ],
        specifications: [
            {
                label: "ICUMSA",
                value: "100 max"
            },
            {
                label: "Polarization",
                value: "99.5% min"
            },
            {
                label: "Moisture",
                value: "0.10% max"
            },
            {
                label: "Ash Content",
                value: "0.10% max"
            }
        ]
    },
    {
        id: "3",
        slug: "icumsa-150-cane-sugar",
        name: "ICUMSA 150 Cane Sugar",
        description: "High-quality cane sugar with a slightly darker color, offering excellent sweetness and natural flavor.",
        icumsa: "150",
        category: "refined",
        image: "/images/brown-sugar-5847979_1920.jpg",
        features: [
            "Golden color",
            "Natural sweetness",
            "Premium quality",
            "Cost-effective solution"
        ]
    },
    {
        id: "4",
        slug: "icumsa-600-1200-cane-sugar",
        name: "ICUMSA 600-1200 Cane Sugar",
        description: "Raw cane sugar with a rich, natural flavor and distinctive brown color, ideal for specialty applications.",
        icumsa: "600-1200",
        category: "raw",
        image: "/images/products/raw-sugar.png",
        features: [
            "Brown color",
            "Rich molasses flavor",
            "Natural nutrients",
            "Specialty applications"
        ]
    },
    {
        id: "5",
        slug: "fine-crystal-sugar",
        name: "Fine Crystal Sugar",
        description: "Precisely refined sugar with fine crystal structure, perfect for baking and confectionery applications.",
        category: "refined",
        image: "/images/candy-sugar-764743_1920.jpg",
        features: [
            "Fine crystal structure",
            "Quick dissolving",
            "Perfect for baking",
            "Consistent quality"
        ]
    },
    {
        id: "6",
        slug: "extra-fine-crystal-sugar",
        name: "Extra Fine Crystal Sugar",
        description: "Ultra-fine refined sugar with exceptional dissolving properties, ideal for premium applications.",
        category: "refined",
        image: "/images/brown-and-white-sugar-in-powder-form.jpg",
        features: [
            "Ultra-fine crystals",
            "Instant dissolving",
            "Premium applications",
            "Smooth texture"
        ]
    },
    {
        id: "7",
        slug: "big-granulated-sugar",
        name: "Big Granulated Sugar",
        description: "Large crystal sugar with excellent flow properties, perfect for industrial and food service applications.",
        category: "specialty",
        image: "/images/brown-sugar-1048255_1920.jpg",
        features: [
            "Large crystals",
            "Excellent flow",
            "Industrial grade",
            "Long shelf life"
        ]
    },
    {
        id: "8",
        slug: "sugar-powder",
        name: "Sugar Powder",
        description: "Finely ground sugar perfect for confectionery, icing, and decorative applications.",
        category: "specialty",
        image: "/images/powder-sugar.jpg",
        features: [
            "Fine powder texture",
            "Quick mixing",
            "Perfect for icing",
            "Premium quality"
        ]
    },
    {
        id: "9",
        slug: "raw-sugar",
        name: "Raw Sugar",
        description: "Minimally processed sugar retaining natural molasses, offering rich flavor and natural color.",
        category: "raw",
        image: "/images/brown-sugar-4918707_1920.jpg",
        features: [
            "Minimal processing",
            "Natural molasses",
            "Rich flavor",
            "Natural nutrients"
        ]
    },
    {
        id: "10",
        slug: "white-granulated-sugar",
        name: "White Granulated Sugar",
        description: "Classic white granulated sugar for everyday use, offering consistent quality and sweetness.",
        category: "refined",
        image: "/images/white-cubes-of-sugar.jpg",
        features: [
            "Pure white color",
            "Standard granulation",
            "Versatile use",
            "Reliable quality"
        ]
    },
    {
        id: "11",
        slug: "crystal-white-sugar",
        name: "Crystal White Sugar",
        description: "Premium white sugar with distinctive crystal clarity and exceptional purity.",
        category: "refined",
        image: "/images/white-powder-sugar-on-teaspoon.jpg",
        features: [
            "Crystal clarity",
            "Exceptional purity",
            "Premium grade",
            "Perfect for beverages"
        ]
    },
    {
        id: "12",
        slug: "brazil-refined-cane-sugar",
        name: "Brazil Refined Cane Sugar ICUMSA 45",
        description: "Premium Brazilian refined cane sugar meeting the highest international standards.",
        icumsa: "45",
        category: "refined",
        image: "/images/pexels-plato-terentev-3804555-5909686.jpg",
        features: [
            "Brazilian origin",
            "International standards",
            "Premium quality",
            "Sustainable sourcing"
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
            secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
            destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "span";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "badge",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/badge.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/utils/image-map.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Image mapping helper - maps descriptive filenames to usage locations
__turbopack_context__.s([
    "getProductImage",
    ()=>getProductImage,
    "imageMap",
    ()=>imageMap
]);
const imageMap = {
    // Product images
    products: {
        whiteRefinedSugar: "/images/white-cubes-of-sugar.jpg",
        brownSugar: "/images/brown-sugar-5847979_1920.jpg",
        crystalSugar: "/images/candy-sugar-764743_1920.jpg",
        powderSugar: "/images/powder-sugar.jpg",
        whitePowderSugar: "/images/white-powder-sugar-on-teaspoon.jpg",
        brownSugarPowder: "/images/brown-and-white-sugar-in-powder-form.jpg",
        rawSugar: "/images/brown-sugar-4918707_1920.jpg",
        granulatedSugar: "/images/brown-sugar-1048255_1920.jpg"
    },
    // Sugar cane field images
    fields: {
        sugarCaneField1: "/images/sugarcane-farm.jpg",
        sugarCaneField2: "/images/sugar-cane-stems-in-sugar-cane-field.jpg",
        sugarCaneField3: "/images/suragr-cane-farm-with-a-tree-infront.jpg",
        sugarCaneField4: "/images/sugarcane-2857972_1920.jpg",
        sugarCaneStem: "/images/sugarcane-stem-vclose-up.jpg"
    },
    // People/workers
    people: {
        farmerPortrait1: "/images/man-in-sugar-cane-field-portrait.jpg",
        farmerPortrait2: "/images/man-in-sugarcane-field-protrait.jpg",
        farmerWithStem: "/images/man-insugar-cane0field-holding-suagrcane-stem.jpg"
    },
    // Facilities
    facilities: {
        productionFacility: "/images/production-facility.png"
    },
    // Blog images (check if exists)
    blog: {
        generic1: "/images/blog/pexels-plato-terentev-3804555-5909686.jpg"
    }
};
function getProductImage(productSlug) {
    const map = {
        "icumsa-45-white-refined-sugar": imageMap.products.whiteRefinedSugar,
        "white-refined-brazil-sugar": imageMap.products.whiteRefinedSugar,
        "icumsa-100-cane-sugar": imageMap.products.crystalSugar,
        "icumsa-150-cane-sugar": imageMap.products.granulatedSugar,
        "icumsa-600-1200-cane-sugar": imageMap.products.rawSugar,
        "fine-crystal-sugar": imageMap.products.crystalSugar,
        "extra-fine-crystal-sugar": imageMap.products.crystalSugar,
        "big-granulated-sugar": imageMap.products.granulatedSugar,
        "sugar-powder": imageMap.products.powderSugar,
        "raw-sugar": imageMap.products.brownSugar,
        "white-granulated-sugar": imageMap.products.whiteRefinedSugar,
        "crystal-white-sugar": imageMap.products.whiteRefinedSugar,
        "brazil-refined-cane-sugar": imageMap.products.whiteRefinedSugar
    };
    return map[productSlug] || imageMap.products.whiteRefinedSugar;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/product-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductCard",
    ()=>ProductCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$image$2d$map$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/image-map.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
function ProductCard({ product }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: `/products/${product.slug}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            whileHover: {
                y: -4
            },
            transition: {
                duration: 0.2
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "h-full overflow-hidden group cursor-pointer border-2 hover:border-primary/30 hover:shadow-xl transition-all duration-300",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative h-48 overflow-hidden bg-muted",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: product.image || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$image$2d$map$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProductImage"])(product.slug),
                                alt: product.name,
                                fill: true,
                                className: "object-cover group-hover:scale-110 transition-transform duration-500",
                                sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/product-card.tsx",
                                lineNumber: 27,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/product-card.tsx",
                                lineNumber: 34,
                                columnNumber: 25
                            }, this),
                            product.icumsa && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-4 right-4 z-10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                    variant: "secondary",
                                    className: "font-bold shadow-lg",
                                    children: [
                                        "ICUMSA ",
                                        product.icumsa
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/product-card.tsx",
                                    lineNumber: 37,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/sections/product-card.tsx",
                                lineNumber: 36,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-4 left-4 z-10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                    variant: "outline",
                                    className: "bg-background/90 backdrop-blur-sm capitalize shadow-lg",
                                    children: product.category
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/product-card.tsx",
                                    lineNumber: 43,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/sections/product-card.tsx",
                                lineNumber: 42,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/product-card.tsx",
                        lineNumber: 26,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                className: "line-clamp-2 group-hover:text-primary transition-colors",
                                children: product.name
                            }, void 0, false, {
                                fileName: "[project]/components/sections/product-card.tsx",
                                lineNumber: 50,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                className: "line-clamp-2",
                                children: product.description
                            }, void 0, false, {
                                fileName: "[project]/components/sections/product-card.tsx",
                                lineNumber: 53,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/product-card.tsx",
                        lineNumber: 49,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-1 mb-4",
                                children: product.features.slice(0, 3).map((feature, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "text-sm text-muted-foreground flex items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-1.5 h-1.5 rounded-full bg-primary mr-2"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/product-card.tsx",
                                                lineNumber: 62,
                                                columnNumber: 37
                                            }, this),
                                            feature
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/components/sections/product-card.tsx",
                                        lineNumber: 61,
                                        columnNumber: 33
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/sections/product-card.tsx",
                                lineNumber: 59,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                className: "w-full group/btn",
                                children: [
                                    "Learn More",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        className: "ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/product-card.tsx",
                                        lineNumber: 69,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/product-card.tsx",
                                lineNumber: 67,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/product-card.tsx",
                        lineNumber: 58,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/product-card.tsx",
                lineNumber: 24,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/sections/product-card.tsx",
            lineNumber: 20,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/sections/product-card.tsx",
        lineNumber: 19,
        columnNumber: 9
    }, this);
}
_c = ProductCard;
var _c;
__turbopack_context__.k.register(_c, "ProductCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/products-grid.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductsGrid",
    ()=>ProductsGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants/products.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$product$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sections/product-card.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
function ProductsGrid({ limit, category }) {
    let filteredProducts = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"];
    if (category) {
        filteredProducts = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].filter((p)=>p.category === category);
    }
    if (limit) {
        filteredProducts = filteredProducts.slice(0, limit);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-16 md:py-24 bg-muted/20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true
                    },
                    transition: {
                        duration: 0.6
                    },
                    className: "text-center mb-12 md:mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl sm:text-4xl md:text-5xl font-bold mb-4",
                            children: "Our Premium Products"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/products-grid.tsx",
                            lineNumber: 33,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-muted-foreground max-w-2xl mx-auto",
                            children: "Discover our comprehensive range of high-quality sugar products"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/products-grid.tsx",
                            lineNumber: 36,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/products-grid.tsx",
                    lineNumber: 26,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8",
                    children: filteredProducts.map((product, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                duration: 0.5,
                                delay: index * 0.05
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$product$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductCard"], {
                                product: product
                            }, void 0, false, {
                                fileName: "[project]/components/sections/products-grid.tsx",
                                lineNumber: 50,
                                columnNumber: 29
                            }, this)
                        }, product.id, false, {
                            fileName: "[project]/components/sections/products-grid.tsx",
                            lineNumber: 43,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/sections/products-grid.tsx",
                    lineNumber: 41,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/products-grid.tsx",
            lineNumber: 25,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/sections/products-grid.tsx",
        lineNumber: 24,
        columnNumber: 9
    }, this);
}
_c = ProductsGrid;
var _c;
__turbopack_context__.k.register(_c, "ProductsGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/about-preview.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AboutPreview",
    ()=>AboutPreview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
"use client";
;
;
;
;
;
;
function AboutPreview() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-16 md:py-24 bg-background",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 sm:px-6 lg:px-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid md:grid-cols-2 gap-12 lg:gap-16 items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            x: -20
                        },
                        whileInView: {
                            opacity: 1,
                            x: 0
                        },
                        viewport: {
                            once: true
                        },
                        transition: {
                            duration: 0.6
                        },
                        className: "relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/images/sugarcane-farm.jpg",
                            alt: "Sugar cane plantation in Brazil",
                            fill: true,
                            className: "object-cover",
                            priority: true
                        }, void 0, false, {
                            fileName: "[project]/components/sections/about-preview.tsx",
                            lineNumber: 22,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sections/about-preview.tsx",
                        lineNumber: 15,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            x: 20
                        },
                        whileInView: {
                            opacity: 1,
                            x: 0
                        },
                        viewport: {
                            once: true
                        },
                        transition: {
                            duration: 0.6,
                            delay: 0.2
                        },
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold",
                                children: "About Us"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/about-preview.tsx",
                                lineNumber: 39,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl sm:text-4xl md:text-5xl font-extrabold",
                                children: "25+ Years of Sugar Excellence"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/about-preview.tsx",
                                lineNumber: 42,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-muted-foreground leading-relaxed",
                                children: "From the fertile soils of Brazil to tables around the world, we've been crafting premium sugar products that meet the highest international standards. Our commitment to quality, sustainability, and customer satisfaction has made us a global leader in sugar manufacturing and export."
                            }, void 0, false, {
                                fileName: "[project]/components/sections/about-preview.tsx",
                                lineNumber: 45,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-3xl font-bold text-primary",
                                                children: "50+"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/about-preview.tsx",
                                                lineNumber: 50,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-muted-foreground",
                                                children: "Countries Served"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/about-preview.tsx",
                                                lineNumber: 51,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/about-preview.tsx",
                                        lineNumber: 49,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-3xl font-bold text-primary",
                                                children: "10K+"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/about-preview.tsx",
                                                lineNumber: 54,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-muted-foreground",
                                                children: "Tons Monthly"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/about-preview.tsx",
                                                lineNumber: 55,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/about-preview.tsx",
                                        lineNumber: 53,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/about-preview.tsx",
                                lineNumber: 48,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/about",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    size: "lg",
                                    className: "mt-4",
                                    children: [
                                        "Learn More About Us",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            className: "ml-2 h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/about-preview.tsx",
                                            lineNumber: 61,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/about-preview.tsx",
                                    lineNumber: 59,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/sections/about-preview.tsx",
                                lineNumber: 58,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/about-preview.tsx",
                        lineNumber: 32,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/about-preview.tsx",
                lineNumber: 13,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/sections/about-preview.tsx",
            lineNumber: 12,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/sections/about-preview.tsx",
        lineNumber: 11,
        columnNumber: 9
    }, this);
}
_c = AboutPreview;
var _c;
__turbopack_context__.k.register(_c, "AboutPreview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/stats.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StatsSection",
    ()=>StatsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
const stats = [
    {
        value: "50+",
        label: "Countries Served"
    },
    {
        value: "25+",
        label: "Years Experience"
    },
    {
        value: "10K+",
        label: "Tons Monthly"
    },
    {
        value: "99.9%",
        label: "Customer Satisfaction"
    }
];
function StatsSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-16 md:py-24 bg-gradient-to-br from-primary to-primary/80 text-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true
                    },
                    transition: {
                        duration: 0.6
                    },
                    className: "text-center mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl sm:text-4xl font-bold mb-4",
                            children: "Our Impact in Numbers"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/stats.tsx",
                            lineNumber: 23,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-white/90 max-w-2xl mx-auto",
                            children: "Delivering excellence globally with proven results"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/stats.tsx",
                            lineNumber: 26,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/stats.tsx",
                    lineNumber: 16,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 md:grid-cols-4 gap-8",
                    children: stats.map((stat, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                duration: 0.5,
                                delay: index * 0.1
                            },
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-4xl md:text-5xl font-extrabold mb-2",
                                    children: stat.value
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/stats.tsx",
                                    lineNumber: 41,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-white/80 font-medium",
                                    children: stat.label
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/stats.tsx",
                                    lineNumber: 44,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, stat.label, true, {
                            fileName: "[project]/components/sections/stats.tsx",
                            lineNumber: 33,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/sections/stats.tsx",
                    lineNumber: 31,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/stats.tsx",
            lineNumber: 15,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/sections/stats.tsx",
        lineNumber: 14,
        columnNumber: 9
    }, this);
}
_c = StatsSection;
var _c;
__turbopack_context__.k.register(_c, "StatsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/testimonials.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TestimonialsSection",
    ()=>TestimonialsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Quote$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/quote.js [app-client] (ecmascript) <export default as Quote>");
"use client";
;
;
;
;
const testimonials = [
    {
        id: "1",
        name: "Maria Silva",
        company: "Global Foods International",
        role: "Procurement Director",
        content: "Brazil Global Sugar has been our trusted supplier for over 5 years. Their ICUMSA 45 sugar quality is consistently excellent, and their logistics team ensures timely delivery every time."
    },
    {
        id: "2",
        name: "John Anderson",
        company: "Sweet Delights Beverages",
        role: "CEO",
        content: "The quality and purity of their refined sugar products are unmatched. We've tried other suppliers, but Brazil Global Sugar stands out for reliability and superior customer service."
    },
    {
        id: "3",
        name: "Ahmed Hassan",
        company: "ME Trading Group",
        role: "Supply Chain Manager",
        content: "Working with Brazil Global Sugar has transformed our supply chain. Their competitive pricing and flexible terms have significantly improved our margins while maintaining top-quality products."
    }
];
function TestimonialsSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-16 md:py-24 bg-muted/20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true
                    },
                    transition: {
                        duration: 0.6
                    },
                    className: "text-center mb-12 md:mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl sm:text-4xl md:text-5xl font-bold mb-4",
                            children: "What Our Clients Say"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/testimonials.tsx",
                            lineNumber: 42,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-muted-foreground max-w-2xl mx-auto",
                            children: "Trusted by leading companies worldwide for premium quality and exceptional service"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/testimonials.tsx",
                            lineNumber: 45,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/testimonials.tsx",
                    lineNumber: 35,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                    children: testimonials.map((testimonial, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                duration: 0.5,
                                delay: index * 0.1
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                className: "h-full border-2 hover:border-primary/30 hover:shadow-lg transition-all duration-300",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "p-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Quote$3e$__["Quote"], {
                                            className: "h-8 w-8 text-primary mb-4"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/testimonials.tsx",
                                            lineNumber: 61,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-muted-foreground leading-relaxed mb-6",
                                            children: [
                                                '"',
                                                testimonial.content,
                                                '"'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/testimonials.tsx",
                                            lineNumber: 62,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-semibold text-base",
                                                    children: testimonial.name
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/testimonials.tsx",
                                                    lineNumber: 66,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-muted-foreground",
                                                    children: testimonial.role
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/testimonials.tsx",
                                                    lineNumber: 67,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-primary font-medium mt-1",
                                                    children: testimonial.company
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/testimonials.tsx",
                                                    lineNumber: 70,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/testimonials.tsx",
                                            lineNumber: 65,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/testimonials.tsx",
                                    lineNumber: 60,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/sections/testimonials.tsx",
                                lineNumber: 59,
                                columnNumber: 29
                            }, this)
                        }, testimonial.id, false, {
                            fileName: "[project]/components/sections/testimonials.tsx",
                            lineNumber: 52,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/sections/testimonials.tsx",
                    lineNumber: 50,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/testimonials.tsx",
            lineNumber: 34,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/sections/testimonials.tsx",
        lineNumber: 33,
        columnNumber: 9
    }, this);
}
_c = TestimonialsSection;
var _c;
__turbopack_context__.k.register(_c, "TestimonialsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/constants/blog.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "blogPosts",
    ()=>blogPosts
]);
const blogPosts = [
    {
        id: "1",
        slug: "icumsa-45-sugar-for-sale-buy-premium-brazilian-sugar",
        title: "ICUMSA 45 Sugar for Sale – Buy Premium Brazilian Sugar at the Best Price",
        excerpt: "ICUMSA 45 sugar is one of the highest quality refined sugars available in the global market. Known for its pure white color, fine granulation, and exceptional sweetness, it's the preferred choice for food and beverage manufacturers worldwide.",
        image: "/images/white-cubes-of-sugar.jpg",
        content: `
# ICUMSA 45 Sugar for Sale – Buy Premium Brazilian Sugar at the Best Price

ICUMSA 45 sugar is one of the highest quality refined sugars available in the global market. Known for its pure white color, fine granulation, and exceptional sweetness, it is the preferred choice for manufacturers in the food and beverage industry worldwide.

## What is ICUMSA 45 Sugar?

ICUMSA stands for International Commission for Uniform Methods of Sugar Analysis. The ICUMSA value indicates the level of whiteness and purity of sugar. ICUMSA 45 represents the highest level of refinement, with minimal color and impurities.

### Key Characteristics of ICUMSA 45 Sugar:

- **Color**: Pure white, sparkling appearance
- **Polarization**: 99.8% minimum
- **Moisture**: 0.04% maximum
- **Ash Content**: 0.04% maximum
- **Solubility**: 100% dry and free-flowing

## Why Choose Brazilian ICUMSA 45 Sugar?

Brazil is the world's largest producer and exporter of sugar, with a rich tradition of sugarcane cultivation spanning centuries. Brazilian ICUMSA 45 sugar offers several advantages:

1. **Superior Quality**: State-of-the-art refining processes ensure the highest purity levels
2. **Consistent Supply**: Year-round production capabilities with massive production volumes
3. **Competitive Pricing**: Economies of scale and efficient production methods result in excellent value
4. **Sustainable Sourcing**: Commitment to environmentally responsible farming practices
5. **International Standards**: Compliance with all global food safety and quality certifications

## Applications of ICUMSA 45 Sugar

ICUMSA 45 sugar is incredibly versatile and used across numerous industries:

- **Food Manufacturing**: Confectionery, baked goods, dairy products
- **Beverage Industry**: Soft drinks, juices, energy drinks
- **Pharmaceutical**: Tablet coatings, syrups, and medications
- **Cosmetics**: Beauty and personal care products
- **Industrial**: Chemical processes and bio-ethanol production

## Quality Assurance and Certification

At Brazil Global Sugar Manufacturers, we maintain rigorous quality control throughout the production process. Our ICUMSA 45 sugar meets and exceeds international standards, with comprehensive testing at every stage.

### Our Certifications Include:

- ISO 9001:2015 Quality Management
- HACCP Food Safety
- Halal and Kosher Certifications
- FDA Approved
- SGS Certified

## Packaging and Delivery

We offer flexible packaging options to meet your specific requirements:

- 25 kg or 50 kg polypropylene bags
- 1 ton jumbo bags
- Bulk shipments in containers
- Custom packaging upon request

Our global logistics network ensures timely delivery to ports worldwide, with full documentation and tracking support.

## Get Your Quote Today

Contact Brazil Global Sugar Manufacturers for competitive pricing on premium ICUMSA 45 sugar. Our experienced team is ready to help you with:

- Custom quotes for bulk orders
- Sample shipments for quality verification
- Documentation and certification support
- Logistics and shipping arrangements

Experience the sweetness of quality with Brazilian ICUMSA 45 sugar – the global standard for refined sugar excellence.
    `,
        author: "Brazil Global Sugar Team",
        date: "2024-11-15",
        category: "Products",
        readTime: "5 min read"
    },
    {
        id: "2",
        slug: "benefits-of-raw-sugar-vs-refined-sugar",
        title: "Understanding the Difference: Raw Sugar vs Refined Sugar",
        excerpt: "Explore the key differences between raw and refined sugar, their production processes, nutritional profiles, and best use cases in cooking and manufacturing.",
        image: "/images/brown-sugar-5847979_1920.jpg",
        content: `
# Understanding the Difference: Raw Sugar vs Refined Sugar

When it comes to sugar, consumers and manufacturers often face the choice between raw and refined options. Understanding the differences can help you make the best decision for your needs.

## What is Raw Sugar?

Raw sugar is minimally processed sugar that retains some of the natural molasses from sugarcane. It has a golden to brown color and contains trace amounts of minerals and nutrients.

### Characteristics of Raw Sugar:

- Light to dark brown color
- Contains natural molasses (1-3%)
- Slightly higher mineral content
- Rich, complex flavor profile
- ICUMSA values typically 600-1200

## What is Refined Sugar?

Refined sugar undergoes extensive processing to remove all molasses and impurities, resulting in pure white crystals with neutral sweetness.

### Characteristics of Refined Sugar:

- Pure white color
- 99.9% sucrose content
- Neutral flavor
- Longer shelf life
- ICUMSA values 45-150

## Production Process Differences

### Raw Sugar Production:
1. Sugarcane extraction
2. Initial clarification
3. Evaporation and crystallization
4. Centrifugation (partial molasses removal)
5. Drying and packaging

### Refined Sugar Production:
1. All steps of raw sugar production
2. Affination (washing with syrup)
3. Carbonation or phosphatation
4. Filtration
5. Decolorization
6. Final crystallization
7. Drying and grading

## Nutritional Comparison

While both types provide similar calories, raw sugar contains trace amounts of:
- Calcium
- Iron
- Potassium
- Magnesium

However, these differences are minimal in typical consumption amounts.

## Best Uses

### Raw Sugar is Ideal For:
- Specialty baking for flavor depth
- Coffee and tea (for flavor enthusiasts)
- Artisanal food products
- Natural and organic product lines
- Decorative toppings

### Refined Sugar is Ideal For:
- Commercial food production
- Beverages requiring neutral sweetness
- Pharmaceutical applications
- White or light-colored products
- Extended shelf-life requirements

## Making the Right Choice

Your choice between raw and refined sugar depends on:

1. **Application Requirements**: Product color, flavor profile, shelf life
2. **Cost Considerations**: Raw sugar is typically less expensive
3. **Processing Capabilities**: Equipment compatibility
4. **Market Positioning**: Natural vs. conventional products
5. **Regulatory Requirements**: Industry-specific standards

## Brazil Global Sugar Manufacturers

We offer both premium raw and refined sugar options to meet diverse industry needs. Contact our team to discuss which option best suits your application and to receive competitive bulk pricing.
    `,
        author: "Brazil Global Sugar Team",
        date: "2024-10-28",
        category: "Education",
        readTime: "7 min read"
    },
    {
        id: "3",
        slug: "sustainable-sugar-production-brazil",
        title: "Sustainable Sugar Production: Brazil's Commitment to the Future",
        excerpt: "Discover how Brazilian sugar manufacturers are leading the way in sustainable agriculture, renewable energy, and environmental responsibility.",
        image: "/images/powder-sugar.jpg",
        content: `
# Sustainable Sugar Production: Brazil's Commitment to the Future

As the world's largest sugar producer, Brazil has a unique responsibility to lead in sustainable agricultural practices. At Brazil Global Sugar Manufacturers, sustainability isn't just a buzzword—it's at the core of everything we do.

## Our Sustainability Initiatives

### 1. Responsible Land Use

- Zero deforestation policy
- Protection of native vegetation
- Sustainable land management practices
- Biodiversity conservation programs

### 2. Water Conservation

- Efficient irrigation systems
- Water recycling and treatment
- Watershed protection
- Rainwater harvesting

### 3. Renewable Energy

- Biomass energy from sugarcane bagasse
- Solar power installations
- Energy self-sufficiency
- Excess power sold to national grid

### 4. Emissions Reduction

- Modern, efficient machinery
- Optimized transportation logistics
- Carbon footprint monitoring
- Participation in carbon offset programs

## The Sweet Side of Sugarcane: Renewable Energy

One of the most exciting aspects of sugar production is its potential for renewable energy generation. Sugarcane bagasse, the fibrous residue after juice extraction, is an excellent fuel source.

### Bagasse Benefits:

- Powers entire production facilities
- Reduces fossil fuel dependence
- Carbon-neutral energy source
- Creates energy independence

## Social Responsibility

Sustainability extends beyond environmental concerns:

- Fair labor practices
- Community development programs
- Employee training and education
- Healthcare and safety initiatives
- Support for local economies

## Certifications and Standards

Our commitment to sustainability is verified through:

- Bonsucro Certification
- ISO 14001 Environmental Management
- Rainforest Alliance Certified
- Fair Trade Partnerships
- Global GAP Standards

## The Future of Sugar Production

We're continually investing in:

- Advanced agricultural technologies
- Precision farming techniques
- Genetic research for better yields
- Water and energy efficiency improvements
- Circular economy principles

## Partner with a Sustainable Supplier

When you choose Brazil Global Sugar Manufacturers, you're not just getting premium quality sugar—you're supporting sustainable practices that protect our planet for future generations.

Contact us to learn more about our sustainability programs and how we can meet your needs while maintaining our environmental commitments.
    `,
        author: "Brazil Global Sugar Team",
        date: "2024-09-20",
        category: "Sustainability",
        readTime: "6 min read"
    },
    {
        id: "4",
        slug: "sugar-packaging-and-logistics-best-practices",
        title: "Sugar Packaging and Logistics: Best Practices for Global Export",
        excerpt: "Learn about the critical importance of proper packaging, storage, and logistics in maintaining sugar quality during international shipping and distribution.",
        image: "/images/production-facility.png",
        content: `
# Sugar Packaging and Logistics: Best Practices for Global Export

In the global sugar trade, maintaining product quality from production to delivery is paramount. Proper packaging and logistics are essential to ensure that premium sugar products reach customers in perfect condition.

## Packaging Options for Different Needs

### Bulk Packaging

**50kg Polypropylene Bags**
- Industry standard for wholesale distribution
- UV-resistant and moisture-proof materials
- Easy handling and stacking
- Cost-effective for large volumes

**1-Ton Jumbo Bags (FIBC)**
- Ideal for industrial buyers
- Reduced handling and labor costs
- Space-efficient storage
- Custom printing available

**Container Loads**
- Maximum volume for bulk buyers
- Direct loading without individual bags
- Specialized liner bags for protection
- Most economical for large orders

### Retail Packaging

- 1kg, 2kg, 5kg consumer packs
- Branded packaging options
- Resealable pouches
- Private label services available

## Quality Preservation During Transport

### Moisture Control

Sugar is hygroscopic, meaning it absorbs moisture from the environment. Our packaging solutions include:
- Multi-layer moisture barriers
- Desiccant sachets when needed
- Climate-controlled container options
- Sealed pallets with protective wrapping

### Temperature Management

- Avoid extreme temperature fluctuations
- Proper ventilation in storage areas
- Insulated containers for sensitive climates
- Temperature monitoring during transit

### Contamination Prevention

- Food-grade packaging materials only
- Clean, dedicated containers
- Protection from external odors
- Pest prevention measures

## Global Logistics Network

### Shipping Methods

**Sea Freight**
- Most common for bulk sugar shipments
- 20ft and 40ft container options
- Full Container Load (FCL) and Less than Container Load (LCL)
- Regular sailing schedules to major ports

**Air Freight**
- For urgent or small shipments
- Sample delivery
- High-value specialty products
- Time-sensitive orders

### Documentation and Compliance

We handle all necessary documentation:
- Commercial invoices
- Packing lists
- Certificates of origin
- Quality certificates (SGS, ISO)
- Phytosanitary certificates
- Bill of lading
- Custom clearance support

### Port Capabilities

Brazil's modern port infrastructure ensures efficient loading:
- Santos Port - Primary sugar export terminal
- Paranaguá Port - Southern region exports
- Direct access to major shipping routes
- Advanced cargo handling equipment

## Storage Best Practices

### Warehouse Conditions

- Temperature: 20-25°C (68-77°F)
- Humidity: Below 65% relative humidity
- Well-ventilated facilities
- Elevated storage (off ground)
- Regular rotation (FIFO - First In, First Out)

### Shelf Life Optimization

Properly stored sugar has excellent shelf life:
- Refined white sugar: 24+ months
- Raw sugar: 18-24 months
- Specialty sugars: 12-18 months

## Transportation Insurance

We recommend comprehensive coverage including:
- Marine cargo insurance
- All-risk coverage
- Protection against:
  - Physical damage
  - Moisture damage
  - Contamination
  - Delays and spoilage

## Tracking and Transparency

Modern logistics tracking provides:
- Real-time shipment monitoring
- GPS container tracking
- Automated status updates
- Estimated delivery times
- Document management portal

## Cost Optimization Strategies

### Consolidation Benefits

- Combine shipments to reduce costs
- Shared container options
- Regular scheduled shipments
- Long-term partnership discounts

### Route Optimization

- Direct shipping routes when possible
- Strategic port selection
- Avoiding peak season premiums
- Flexible shipping schedules

## Quality Assurance Upon Arrival

We provide:
- Pre-shipment inspection reports
- Sample retention for verification
- Quality guarantee programs
- Rapid response to any concerns

## Partner with Experienced Exporters

Brazil Global Sugar Manufacturers has decades of experience in international sugar logistics. Our comprehensive approach ensures:

- Product integrity from factory to destination
- Competitive shipping rates
- Reliable delivery schedules
- Complete documentation support
- Expert guidance on import regulations

Contact us today to discuss your specific packaging and logistics requirements. Our team is ready to design a customized solution that meets your needs and budget.
        `,
        author: "Brazil Global Sugar Team",
        date: "2024-08-15",
        category: "Industry Insights",
        readTime: "8 min read"
    },
    {
        id: "5",
        slug: "global-sugar-market-trends-2024",
        title: "Global Sugar Market Trends and Export Opportunities in 2024",
        excerpt: "Analyze current trends in the global sugar market, emerging opportunities, and how Brazilian exporters are positioned to meet growing international demand.",
        image: "/images/sugarcane-farm.jpg",
        content: `
# Global Sugar Market Trends and Export Opportunities in 2024

The global sugar market continues to evolve, presenting new opportunities and challenges for producers and buyers alike. Understanding these trends is essential for making informed business decisions.

## Global Sugar Consumption Overview

### Market Size and Growth

- Global sugar consumption: ~180 million tonnes annually
- Projected growth: 1.5-2% per year
- Largest consuming regions: Asia-Pacific, Americas, Europe
- Emerging markets driving demand growth

### Consumption Patterns by Region

**Asia-Pacific**
- China: 15.5 million tonnes
- India: 27 million tonnes (largest consumer)
- Indonesia: 7 million tonnes
- Growing middle class driving beverage consumption

**Middle East and North Africa**
- Rapid population growth
- Increasing per capita consumption
- Heavy reliance on imports
- Preference for premium refined sugar

**Africa**
- Fastest growing market
- Rising urbanization
- Expanding food processing industry
- Significant import dependency

## Brazil's Position in Global Trade

### Production Leadership

- World's largest sugar producer
- Annual production: 35-40 million tonnes
- Export leader with 50% global market share
- Competitive advantages:
  - Ideal climate for sugarcane
  - Advanced milling technology
  - Efficient logistics infrastructure
  - Cost-competitive production

### Export Destinations

**Top Import Markets:**

1. **China** - Largest Brazilian sugar importer
2. **Bangladesh** - Consistent demand for refined sugar
3. **United Arab Emirates** - Re-export hub
4. **Algeria** - Major North African buyer
5. **Nigeria** - Growing West African market
6. **Indonesia** - Supplementing domestic production
7. **Malaysia** - Industrial and consumer demand
8. **Saudi Arabia** - Stable long-term buyer
9. **Egypt** - Government tenders and contracts
10. **India** - Periodic imports during shortfalls

## Emerging Trends Shaping the Industry

### 1. Sustainability and Certification

- Increasing demand for certified sustainable sugar
- Bonsucro and Fair Trade certifications gaining importance
- Corporate sustainability commitments
- Traceability and transparency requirements

### 2. Organic and Natural Products

- Growing market for organic sugar
- Premium pricing for certified organic
- Non-GMO verification
- Natural and minimally processed options

### 3. Direct Trade Relationships

- Buyers seeking long-term supplier partnerships
- Reduced reliance on traders and intermediaries
- Direct factory-to-buyer relationships
- Customized supply agreements

### 4. Technology and Innovation

- Blockchain for supply chain transparency
- IoT monitoring of storage and transport
- Automated quality testing
- Digital trading platforms

### 5. Renewable Energy Integration

- Sugar mills as energy producers
- Co-generation from bagasse
- Bioethanol production
- Carbon-negative production claims

## Price Dynamics and Forecasting

### Factors Influencing Sugar Prices

**Supply-Side Factors:**
- Weather conditions in major producing regions
- Production costs (fuel, labor, fertilizers)
- Government policies and subsidies
- Ethanol production competition

**Demand-Side Factors:**
- Population growth
- Economic development
- Changing dietary habits
- Food industry expansion

### Price Outlook 2024-2025

- Moderate price stability expected
- Supply-demand balance improving
- Currency fluctuations affecting competitiveness
- Weather patterns creating short-term volatility

## Trade Policy Landscape

### Tariffs and Trade Agreements

- EU quota system and preferential access
- US tariff rate quotas (TRQ)
- Regional trade agreements
- WTO compliance requirements

### Export Incentives

Brazil offers:
- Port infrastructure improvements
- Export financing programs
- Quality certification support
- Market development assistance

## Opportunities for Buyers

### Strategic Sourcing Benefits

**Direct Sourcing from Brazil:**
- Competitive pricing
- Reliable supply chain
- Flexible contract terms
- Quality assurance programs

**Value-Added Services:**
- Custom packaging and labeling
- Private label programs
- Blending and specifications
- Inventory management

### Risk Mitigation Strategies

1. **Diversified Sourcing** - Multiple suppliers and origins
2. **Long-Term Contracts** - Price stability and supply security
3. **Quality Guarantees** - Third-party inspection and testing
4. **Flexible Payment Terms** - Letters of credit, advance payment discounts
5. **Hedging Strategies** - Futures market participation

## Industrial Applications Growth

### Expanding Use Cases

**Food and Beverage:**
- Soft drink production expansion
- Confectionery market growth
- Bakery and dairy products
- Energy drinks and sports nutrition

**Non-Food Industries:**
- Pharmaceutical applications
- Cosmetics and personal care
- Bio-based chemicals
- Ethanol and biofuels

**Specialty Products:**
- Liquid sugar and syrups
- Sugar cubes and tablets
- Colored and flavored sugars
- Decorative and artisanal products

## Competitive Landscape

### Major Producing Countries

- **Brazil**: Cost leader, largest exporter
- **India**: Largest consumer, variable exporter
- **Thailand**: Consistent Asia-Pacific supplier
- **EU**: Protected market, limited exports
- **Australia**: Quality focus, niche markets

### Brazil's Competitive Advantages

1. **Scale and Efficiency** - Massive production capacity
2. **Cost Structure** - Low production costs
3. **Quality Standards** - International certifications
4. **Logistics** - Modern port facilities
5. **Flexibility** - Raw and refined capabilities
6. **Sustainability** - Renewable energy leadership

## Future Outlook and Opportunities

### Growth Drivers

- Urbanization in developing markets
- Processed food consumption growth
- Rising incomes in emerging economies
- Expanding middle class globally

### Challenges and Solutions

**Challenge**: Price volatility
**Solution**: Long-term contracts, hedging strategies

**Challenge**: Sustainability requirements
**Solution**: Certification programs, renewable practices

**Challenge**: Logistics costs
**Solution**: Efficient planning, consolidated shipments

**Challenge**: Competition from alternatives
**Solution**: Value-added services, quality differentiation

## Partner with Brazil Global Sugar

As a leading Brazilian sugar exporter, we offer:

- Competitive global pricing
- Reliable supply chain management
- Comprehensive quality assurance
- Flexible contract structures
- Expert market insights
- Dedicated customer support

Contact us to discuss how we can meet your sugar sourcing needs and help you capitalize on current market opportunities. Our team provides customized solutions tailored to your specific requirements and market conditions.
        `,
        author: "Brazil Global Sugar Team",
        date: "2024-07-22",
        category: "Market Analysis",
        readTime: "10 min read"
    },
    {
        id: "6",
        slug: "quality-control-sugar-manufacturing",
        title: "Quality Control in Sugar Manufacturing: Standards and Testing",
        excerpt: "Explore the comprehensive quality control processes, testing methods, and international standards that ensure the delivery of premium sugar products.",
        image: "/images/white-powder-sugar-on-teaspoon.jpg",
        content: `
# Quality Control in Sugar Manufacturing: Standards and Testing

Quality control is the cornerstone of sugar manufacturing, ensuring that every shipment meets the highest standards of purity, safety, and consistency. At Brazil Global Sugar Manufacturers, quality isn't just checked—it's built into every step of the process.

## Quality Management Framework

### ISO 9001:2015 Certification

Our quality management system follows international best practices:
- Documented procedures and processes
- Continuous improvement methodology
- Customer focus and satisfaction
- Risk-based thinking
- Evidence-based decision making

### Quality Policy Principles

1. Zero tolerance for contamination
2. Compliance with all regulatory requirements
3. Continuous monitoring and testing
4. Traceability throughout production
5. Customer satisfaction as primary goal

## Raw Material Quality Control

### Sugarcane Selection

Quality begins in the field:
- Optimal harvest timing (sucrose peak)
- Maturity assessment
- Brix level testing
- Purity analysis
- Fiber content evaluation

### Reception and Sampling

- Representative sampling protocols
- Foreign matter detection
- Moisture content checks
- Microbiological screening
- Traceability documentation

## Production Process Monitoring

### Critical Control Points (HACCP)

**Extraction Phase:**
- Juice purity monitoring
- pH level control
- Temperature management
- Continuous filtration checks

**Clarification Phase:**
- Settling efficiency
- Turbidity measurements
- Chemical addition precision
- Suspended solids removal

**Evaporation Phase:**
- Brix level progression
- Energy efficiency
- Concentration uniformity
- Equipment calibration

**Crystallization Phase:**
- Crystal size distribution
- Syrup quality
- Supersaturation levels
- Nucleation control

**Centrifugation Phase:**
- Moisture content
- Color specifications
- Crystal separation efficiency
- Wash water quality

**Drying and Conditioning:**
- Final moisture content
- Temperature control
- Cooling processes
- Dust suppression

## Laboratory Testing Procedures

### Physical Parameters

**Color Analysis (ICUMSA Method)**
- Spectrophotometric measurement
- Attenuation coefficient calculation
- ICUMSA units determination
- Color consistency verification

**Granulation Analysis**
- Sieve analysis (MA coefficient)
- Crystal size distribution
- Uniformity assessment
- Flow characteristics

**Moisture Content**
- Loss on drying method
- Automated moisture meters
- Specification: ≤0.04% for ICUMSA 45
- Climate-adjusted testing

### Chemical Parameters

**Polarization (Sucrose Content)**
- Polarimetric analysis
- International Sugar Scale
- Specification: ≥99.80%
- Temperature compensation

**Ash Content**
- Conductivity ash method
- Sulfated ash determination
- Specification: ≤0.04%
- Mineral impurity indicator

**Sulfur Dioxide (SO₂)**
- Residual SO₂ testing
- Specification: ≤20 mg/kg
- Safety compliance verification

**pH Level**
- Solution pH measurement
- Specification: 6.0-7.5
- Indicator of refinement quality

**Reducing Sugars**
- Lane-Eynon method
- Specification: ≤0.05%
- Quality and shelf life indicator

### Microbiological Testing

**Bacterial Analysis:**
- Total plate count
- Coliform detection
- Pathogen screening (Salmonella, E. coli)
- Yeast and mold counts

**Specification Limits:**
- Total count: <200 CFU/10g
- Coliforms: Absent
- Pathogens: Absent
- Yeast/Mold: <10 CFU/10g

### Heavy Metals and Contaminants

- Lead (Pb): <0.5 mg/kg
- Arsenic (As): <0.5 mg/kg
- Copper (Cu): <2.0 mg/kg
- Mercury (Hg): <0.03 mg/kg

## International Standards Compliance

### ICUMSA Standards

The International Commission for Uniform Methods of Sugar Analysis provides globally recognized testing methods:
- Method GS1/3-7: Polarization
- Method GS2/3-9: Color determination
- Method GS2/3-10: pH measurement
- Method GS4/3-13: Moisture content
- Method GS2/3-9: Ash content

### Food Safety Certifications

**HACCP (Hazard Analysis Critical Control Points)**
- Identification of critical control points
- Monitoring procedures
- Corrective actions
- Verification processes
- Record keeping

**FDA Compliance**
- Good Manufacturing Practices (GMP)
- Food Safety Modernization Act (FSMA)
- Preventive controls
- Foreign supplier verification

**Halal Certification**
- Islamic dietary law compliance
- Halal production processes
- Regular audits and inspections
- Certificate renewal procedures

**Kosher Certification**
- Rabbinical supervision
- Ingredient verification
- Production line dedication
- Annual certification renewal

## Packaging Quality Assurance

### Material Standards

- Food-grade polypropylene bags
- New, unused packaging only
- Moisture barrier properties
- Strength and durability testing
- Supplier qualification programs

### Packaging Integrity Checks

- Seal quality inspection
- Weight accuracy verification
- Leak testing
- Label accuracy and legibility
- Batch code traceability

## Storage and Handling Quality Control

### Warehouse Conditions

**Environmental Monitoring:**
- Temperature: 20-25°C continuous monitoring
- Humidity: <65% RH with hygrometers
- Ventilation: Regular air circulation
- Cleanliness: Daily inspection and cleaning

**Inventory Management:**
- FIFO (First In, First Out) system
- Batch segregation
- Regular stock rotation
- Expiry date tracking

### Pest Control

- Integrated Pest Management (IPM)
- Regular fumigation schedules
- Trap monitoring
- Vendor certification
- Documentation and records

## Pre-Shipment Inspection

### Final Product Verification

**Sample Collection:**
- Representative sampling from each batch
- Multiple sample points
- Chain of custody documentation
- Sample retention for traceability

**Laboratory Re-Testing:**
- Complete parameter verification
- Comparison with specifications
- Certificate of Analysis (CoA) generation
- Independent third-party testing option

### Documentation Review

- Quality certificates
- Test reports
- Batch traceability records
- Compliance declarations
- Customer-specific requirements

## Third-Party Verification

### SGS Inspection Services

- Independent quality verification
- Pre-shipment inspection
- Loading supervision
- Sampling and testing
- Internationally recognized reports

### Bureau Veritas

- Quality control audits
- Quantity verification
- Container loading supervision
- Certification services

## Continuous Improvement Programs

### Statistical Process Control (SPC)

- Real-time quality monitoring
- Trend analysis and charting
- Process capability studies
- Root cause analysis
- Preventive action implementation

### Quality Audits

**Internal Audits:**
- Monthly process reviews
- Checklist-based assessments
- Non-conformance tracking
- Corrective action follow-up

**External Audits:**
- Annual certification audits
- Customer audits and inspections
- Regulatory compliance audits
- Supplier audits

### Staff Training and Competency

- Regular quality training programs
- Standard operating procedure (SOP) education
- Testing methodology training
- Certification and qualification
- Continuous education initiatives

## Customer Quality Support

### Specification Customization

We can meet specific customer requirements:
- Custom ICUMSA color specifications
- Particle size requirements
- Packaging specifications
- Labeling and branding
- Special certifications

### Quality Complaints Handling

**Our Process:**
1. Immediate acknowledgment
2. Sample analysis and investigation
3. Root cause determination
4. Corrective action implementation
5. Prevention of recurrence
6. Customer communication and resolution

### Sampling for Verification

We provide:
- Pre-shipment samples
- Retained samples for disputes
- Sample shipping to customer labs
- Collaborative testing programs

## Traceability and Documentation

### Complete Chain of Custody

From field to delivery:
- Sugarcane source identification
- Processing batch records
- Quality test results
- Packaging details
- Storage and handling records
- Shipping documentation

### Digital Quality Records

- Electronic quality management system
- Real-time data accessibility
- Historical trend analysis
- Audit trail maintenance
- Regulatory compliance documentation

## Commitment to Excellence

At Brazil Global Sugar Manufacturers, quality control is not just a department—it's a culture embedded in our organization. Our comprehensive testing, certification, and continuous improvement ensure that every shipment meets or exceeds international standards.

Contact us to learn more about our quality assurance programs and how we guarantee the premium quality of our sugar products. We welcome customer audits and third-party inspections as part of our commitment to transparency and excellence.
        `,
        author: "Brazil Global Sugar Team",
        date: "2024-06-10",
        category: "Quality Standards",
        readTime: "12 min read"
    },
    {
        id: "7",
        slug: "sugar-storage-best-practices-shelf-life",
        title: "Sugar Storage Best Practices: Maximizing Shelf Life and Quality",
        excerpt: "Learn the essential techniques for proper sugar storage to maintain quality, prevent contamination, and maximize shelf life in various environments.",
        image: "/images/brown-sugar-4918707_1920.jpg",
        content: `
# Sugar Storage Best Practices: Maximizing Shelf Life and Quality

Proper storage is critical to maintaining sugar quality after production and throughout distribution. Understanding the best practices for sugar storage can prevent quality degradation, contamination, and financial losses.

## Understanding Sugar Properties

### Hygroscopic Nature

Sugar naturally absorbs moisture from the environment:
- Affects free-flowing properties
- Can cause clumping and hardening
- May lead to color changes
- Impacts dissolution characteristics

### Stability Factors

When stored correctly, sugar is remarkably stable:
- Refined white sugar: Indefinite shelf life
- Raw sugar: 18-24 months optimal quality
- Specialty sugars: 12-24 months depending on type

## Optimal Storage Conditions

### Temperature Control

**Ideal Range: 20-25°C (68-77°F)**

- Avoid temperature fluctuations
- Prevent condensation formation
- Keep away from heat sources
- Monitor continuously with sensors

**Temperature Effects:**
- Too high: Increased moisture absorption risk
- Too low with humidity: Condensation problems
- Fluctuations: Moisture migration within packaging

### Humidity Management

**Target: Below 65% Relative Humidity**

- Use dehumidifiers in humid climates
- Monitor with hygrometers
- Avoid storage in basements or near water sources
- Ensure proper ventilation

**Humidity Impact:**
- >70% RH: Significant clumping risk
- >80% RH: Possible microbial growth
- <40% RH: Optimal for long-term storage

### Ventilation Requirements

**Importance of Air Circulation:**
- Prevents moisture accumulation
- Maintains consistent temperature
- Reduces mold and bacterial growth risk
- Freshens storage environment

**Ventilation Best Practices:**
- Air circulation without direct drafts
- Filtered air intake to prevent contamination
- Regular air quality monitoring
- Dust control measures

## Facility Requirements

### Warehouse Infrastructure

**Building Specifications:**
- Weatherproof construction
- Sealed windows and doors
- Vermin-proof design
- Elevated flooring or pallets
- Adequate lighting
- Pest control measures

**Floor Requirements:**
- Clean, dry, and sealed surface
- Even and level for stacking
- No water pooling potential
- Easy to clean and maintain

### Storage Layout

**Organization Principles:**
- FIFO (First In, First Out) system
- Batch segregation
- Clear labeling and identification
- Adequate aisle space for access
- Emergency access paths
- Fire safety compliance

### Elevation and Spacing

**Pallet Storage:**
- Minimum 10 cm (4 inches) from floor
- Space between pallets for air circulation
- Clearance from walls (15-30 cm)
- Stack height limits based on bag strength
- Maximum stack height: 8-12 bags typically

## Packaging Considerations

### Original Packaging Integrity

- Keep sugar in original sealed packaging
- Inspect for tears or damage
- Reseal opened packages properly
- Transfer to airtight containers if necessary

### Bulk Storage

**For Large Volumes:**
- Food-grade storage silos
- Proper ventilation systems
- Dust collection equipment
- Regular cleaning protocols
- Moisture monitoring sensors

### Retail Package Storage

**Small Quantities:**
- Airtight containers recommended
- Keep away from strong odors
- Seal containers properly after each use
- Store in cool, dry cabinets

## Contamination Prevention

### Physical Contamination

**Sources and Prevention:**
- **Dust**: Regular cleaning, filters, sealed packaging
- **Foreign Objects**: Inspections, controlled access
- **Packaging Materials**: Food-grade materials only
- **Equipment**: Clean, dedicated handling tools

### Chemical Contamination

**Avoidance Strategies:**
- Separate from chemicals, fuels, cleaners
- No storage near paint or solvents
- Dedicated handling equipment
- No shared warehouses with chemicals
- Proper staff training

### Biological Contamination

**Pest Control:**
- Integrated Pest Management program
- Regular inspections and monitoring
- Sealed entry points
- Bait stations and traps
- Professional pest control services

**Microbial Control:**
- Low humidity maintenance
- Proper ventilation
- Regular cleaning schedules
- No wet cleaning near sugar storage
- Contamination response protocols

## Inventory Management

### FIFO Implementation

**First In, First Out System:**
- Date all incoming shipments
- Organize by production/receive date
- Use older stock first
- Regular rotation inspections
- Digital inventory tracking

### Batch Traceability

- Maintain batch records
- Segregate different batches
- Track production dates
- Document storage locations
- Quality test records retention

### Stock Taking

**Regular Inventory Checks:**
- Weekly visual inspections
- Monthly detailed counts
- Quarterly quality inspections
- Annual comprehensive audits
- Discrepancy investigation

## Quality Monitoring During Storage

### Regular Inspections

**Visual Checks:**
- Package integrity
- Signs of moisture
- Clumping or hardening
- Color changes
- Pest activity

**Frequency:**
- Daily: General conditions
- Weekly: Detailed package inspection
- Monthly: Sample testing
- Quarterly: Comprehensive audit

### Testing Protocols

**Periodic Quality Testing:**
- Moisture content analysis
- Color measurement
- Microbiological testing
- Granulation assessment
- Contaminant screening

**Sampling Methods:**
- Random sampling from various locations
- Representative samples
- Proper sampling tools
- Chain of custody documentation

## Common Storage Problems and Solutions

### Problem: Sugar Clumping

**Causes:**
- Moisture absorption
- Temperature fluctuations
- Humidity exposure

**Solutions:**
- Improve humidity control
- CHECK ventilation
- Use moisture barriers
- Store in airtight containers
- Add food-grade anti-caking agents

### Problem: Color Changes

**Causes:**
- Light exposure
- High temperatures
- Long storage periods
- Chemical contamination

**Solutions:**
- Protect from direct sunlight
- Control temperature
- Use FIFO system
- Proper chemical separation
- Monitor storage duration

### Problem: Pest Infestation

**Types:**
- Ants, rodents, insects
- Stored product pests

**Solutions:**
- Enhanced pest control program
- Seal all entry points
- Regular inspections
- Professional fumigation
- Proper waste management

### Problem: Package Damage

**Causes:**
- Improper handling
- Excessive stacking
- Moisture exposure
- Forklift damage

**Solutions:**
- Staff training
- Stack height limits
- Protective corner guards
- Proper handling equipment
- Regular package inspection

## Transportation and Handling

### Loading and Unloading

**Best Practices:**
- Use clean, dry vehicles
- Inspect containers before loading
- Avoid rough handling
- Use proper lifting equipment
- Secure loads to prevent shifting
- Document condition

### In-Transit Storage

**Considerations:**
- Climate-controlled transportation when possible
- Avoid prolonged transit times
- Protect from weather exposure
- Monitor temperature if equipped
- Verify storage conditions at stops

## Specialized Storage Requirements

### Organic Sugar

- Segregated storage from conventional
- Certified organic compliant facilities
- Documented handling procedures
- No cross-contamination with non-organic
- Regular organic certification audits

### Specialty Sugars

**Different Types:**
- Brown sugar: Higher moisture, shorter shelf life
- Liquid sugar: Temperature sensitive, crystallization risk
- Colored sugars: Light protection required
- Flavored sugars: Odor separation needed

## Regulatory Compliance

### Food Safety Standards

- FDA Good Manufacturing Practices (GMP)
- FSMA preventive controls
- HACCP compliance
- Local health department requirements
- Regular inspections and audits

### Documentation Requirements

**Record Keeping:**
- Storage temperature logs
- Humidity readings
- Inspection reports
- Batch location records
- Pest control activities
- Cleaning schedules
- Quality test results

## Cost-Effective Storage Strategies

### Space Optimization

- Vertical storage solutions
- Efficient shelving and racking
- Narrow aisles with appropriate equipment
- Consolidation of partial packages
- Seasonal flexibility planning

### Energy Efficiency

- Natural ventilation when climate permits
- Energy-efficient HVAC systems
- LED lighting
- Insulated buildings
- Smart sensors and automation

### Loss Prevention

**Minimizing Waste:**
- Proper FIFO implementation
- Quality monitoring
- Damage prevention
- Accurate inventory management
- Staff training

## Emergency Preparedness

### Contingency Planning

**Potential Issues:**
- Power outages
- HVAC failure
- Flooding or water damage
- Fire
- Extreme weather

**Response Plans:**
- Backup power for critical systems
- Emergency contact lists
- Evacuation procedures
- Alternative storage arrangements
- Insurance coverage verification

### Disaster Recovery

- Damage assessment protocols
- Quick response teams
- Insurance claim procedures
- Salvage evaluation
- Replacement stock procedures

## Staff Training and Awareness

### Training Topics

- Proper handling techniques
- Storage requirements and specifications
- Quality inspection procedures
- Pest recognition and reporting
- Emergency procedures
- Documentation requirements

### Safety Considerations

- Proper lifting techniques
- Equipment operation
- Protective equipment use
- Spill response
- Chemical safety

## Buyer Recommendations

### Receiving Inspection

**Upon Delivery:**
- Check packaging integrity
- Verify quantities
- Inspect for damage
- Document conditions
- Report discrepancies immediately

### Home and Retail Storage

**For Consumers:**
- Keep in original packaging or airtight containers
- Store in cool, dry location
- Away from strong-smelling items
- Sealed after each use
- Use within recommended timeframe

## Partner with Quality-Focused Suppliers

At Brazil Global Sugar Manufacturers, we don't just deliver quality sugar—we provide guidance on maintaining that quality through proper storage and handling. Our team offers:

- Storage best practice consultation
- Custom packaging solutions
- Extended shelf life products
- Quality monitoring support
- Technical assistance

Contact us to learn more about our products and how to optimize your sugar storage strategy for maximum quality retention and cost efficiency.
        `,
        author: "Brazil Global Sugar Team",
        date: "2024-05-18",
        category: "Best Practices",
        readTime: "11 min read"
    },
    {
        id: "8",
        slug: "innovation-sugar-industry-technology",
        title: "Innovation in the Sugar Industry: Technology and Future Trends",
        excerpt: "Explore cutting-edge technologies and innovations transforming sugar production, from precision agriculture to biorefinery concepts and digital transformation.",
        image: "/images/sugar-cane-stems-in-sugar-cane-field.jpg",
        content: `
# Innovation in the Sugar Industry: Technology and Future Trends

The sugar industry is experiencing a technological revolution. From smart farming to biorefinery concepts, innovation is reshaping how sugar is produced, processed, and distributed globally.

## Precision Agriculture Revolution

### Smart Farming Technologies

**GPS and Mapping Systems:**
- Variable rate application of fertilizers
- Precise planting patterns
- Yield mapping and analysis
- Field zoning for optimal management
- Automated guidance systems

**Drone Technology:**
- Aerial crop monitoring
- Multispectral imaging
- Plant health assessment
- Irrigation management
- Pest and disease detection

**IoT Sensors:**
- Soil moisture monitoring
- Nutrient level tracking
- Weather station integration
- Real-time data collection
- Automated irrigation control

### Data Analytics and AI

**Predictive Agriculture:**
- Yield forecasting models
- Disease prediction algorithms
- Optimal harvest timing
- Resource optimization
- Risk management tools

**Machine Learning Applications:**
- Pattern recognition in crop health
- Automated quality assessment
- Equipment maintenance prediction
- Supply chain optimization
- Market trend analysis

## Advanced Processing Technologies

### Extraction and Milling

**High-Efficiency Mills:**
- Improved juice extraction rates (>97%)
- Reduced energy consumption
- Automated fiber control
- Real-time performance monitoring
- Predictive maintenance systems

**Ultrasound-Assisted Extraction:**
- Enhanced sugar recovery
- Shorter processing time
- Lower energy requirements
- Gentler processing
- Improved final product quality

### Purification Innovations

**Membrane Filtration:**
- Microfiltration and ultrafiltration
- Reduced chemical usage
- Higher purity products
- Lower environmental impact
- Energy efficiency

**Advanced Clarification:**
- Enhanced settling technology
- Improved suspended solids removal
- Reduced clarification time
- Better color removal
- Higher juice purity

### Crystallization Control

**Automated Crystal Size Management:**
- Precise nucleation control
- Consistent crystal size distribution
- Real-time monitoring
- Automated adjustment systems
- Quality optimization

**Continuous Crystallization:**
- Reduced batch time
- Consistent product quality
- Lower energy consumption
- Improved efficiency
- Reduced labor requirements

## Energy and Sustainability Innovations

### Cogeneration Advances

**High-Pressure Boilers:**
- Increased electricity generation
- Improved thermal efficiency
- Reduced fuel consumption
- Grid export capabilities
- Revenue diversification

**Combined Heat and Power (CHP):**
- Bagasse utilization
- Energy self-sufficiency
- Carbon-neutral operations
- Waste-to-energy conversion
- Economic benefits

### Renewable Energy Integration

**Solar Power:**
- Photovoltaic installations
- Hybrid power systems
- Peak demand management
- Energy storage solutions
- Grid independence

**Biogas Production:**
- Anaerobic digestion of waste
- Methane capture and utilization
- Vinasse treatment
- Additional revenue stream
- Environmental benefits

### Water Management Technology

**Water Recycling Systems:**
- Multi-effect evaporators
- Closed-loop cooling systems
- Wastewater treatment
- Zero liquid discharge goals
- Resource conservation

**Smart Irrigation:**
- Precision water application
- Soil moisture sensors
- Weather-based controllers
- Drip irrigation systems
- Water use efficiency

## Digital Transformation

### Industry 4.0 Integration

**Manufacturing Execution Systems (MES):**
- Real-time production monitoring
- Quality tracking
- Inventory management
- Equipment efficiency
- Data integration

**SCADA and Automation:**
- Process control and optimization
- Remote monitoring capabilities
- Alarm management
- Historical data analysis
- Predictive analytics

### Blockchain Applications

**Supply Chain Transparency:**
- Product traceability from farm to consumer
- Authenticity verification
- Quality assurance documentation
- Tamper-proof records
- Enhanced consumer trust

**Smart Contracts:**
- Automated trade execution
- Payment automation
- Reduced transaction costs
- Dispute minimization
- Faster settlements

### Digital Platforms

**E-Commerce and Trading:**
- Online quotation systems
- Digital marketplaces
- Real-time pricing
- Streamlined ordering
- Direct buyer-seller connections

**Customer Portal Systems:**
- Order tracking
- Quality certificate access
- Shipment monitoring
- Document management
- Communication tools

## Product Innovation

### Specialty Sugars

**Functional Sugars:**
- Low glycemic index options
- Sugar blends for specific applications
- Enhanced solubility products
- Texture-modified sugars
- Colored and flavored varieties

**Organic and Premium:**
- Certified organic production
- Fair trade options
- Single-origin products
- Heritage varieties
- Artisanal approaches

### Value-Added Products

**Liquid Sugars and Syrups:**
- Customized formulations
- Easy-to-use formats
- Reduced crystallization
- Industrial applications
- Extended shelf life

**Modified Sugars:**
- Fine powdered sugars
- Coarse specialty crystals
- Sugar decorations
- Compressed products
- Custom particle sizes

## Biorefinery Concepts

### Integrated Production

**Multi-Product Facilities:**
- Sugar as primary product
- Ethanol production
- Electricity generation
- Biochemical manufacturing
- Animal feed production

**Circular Economy:**
- Zero-waste objectives
- By-product valorization
- Resource recovery
- Waste minimization
- Sustainable practices

### Biochemical Production

**High-Value Chemicals:**
- Bio-based polymers
- Organic acids
- Enzymes and proteins
- Nutraceuticals
- Pharmaceutical intermediates

**Bioplastics:**
- Sugarcane-based plastics
- Renewable alternatives
- Reduced carbon footprint
- Biodegradable options
- Market growth potential

## Laboratory and Quality Control Innovation

### Rapid Testing Technologies

**Near-Infrared (NIR) Spectroscopy:**
- Instant composition analysis
- Non-destructive testing
- Real-time quality monitoring
- Reduced chemical usage
- Automated quality control

**Online Analyzers:**
- Continuous monitoring
- Immediate feedback
- Process optimization
- Reduced sampling frequency
- Enhanced consistency

### Automated Sampling

**Representative Sampling:**
- Automated sample collection
- Reduced human error
- Chain of custody tracking
- Digital documentation
- Improved accuracy

## Logistics and Distribution Innovation

### Smart Logistics

**Route Optimization:**
- AI-powered routing
- Real-time traffic integration
- Fuel efficiency
- Delivery time optimization
- Cost reduction

**Fleet Management:**
- GPS tracking
- Vehicle diagnostics
- Driver behavior monitoring
- Maintenance scheduling
- Performance analytics

### Packaging Innovation

**Smart Packaging:**
- QR codes and NFC tags
- Freshness indicators
- Tamper-evident features
- Interactive labels
- Consumer engagement

**Sustainable Packaging:**
- Biodegradable materials
- Reduced plastic use
- Recyclable options
- Lightweight designs
- Carbon footprint reduction

## Robotics and Automation

### Warehouse Automation

**Automated Storage and Retrieval:**
- Robotic warehouses
- Automated guided vehicles (AGVs)
- Inventory optimization
- Space utilization
- Labor efficiency

**Picking and Packing:**
- Robotic palletizing
- Automated packaging lines
- Quality inspection systems
- Label application
- Order fulfillment

### Field Robotics

**Autonomous Vehicles:**
- Self-driving tractors
- Automated harvesting equipment
- Planting and maintenance robots
- Reduced labor dependency
- Precision operations

## Genetic Research and Breeding

### Crop Improvement

**Selective Breeding:**
- Higher sucrose content varieties
- Disease-resistant cultivars
- Drought tolerance
- Pest resistance
- Faster maturation

**Genomic Research:**
- DNA sequencing
- Marker-assisted selection
- Trait identification
- Breeding efficiency
- Future variety development

## Environmental Monitoring

### Emissions Tracking

**Carbon Footprint Management:**
- Continuous emissions monitoring
- Carbon accounting systems
- Reduction target tracking
- Offset programs
- Sustainability reporting

**Environmental Sensors:**
- Air quality monitoring
- Water quality testing
- Biodiversity tracking
- Ecosystem health assessment
- Compliance verification

## Collaboration and Knowledge Sharing

### Research Partnerships

- University collaborations
- Government research programs
- Industry consortiums
- International cooperation
- Technology transfer

### Innovation Ecosystems

- Startup incubators
- Venture capital investment
- Pilot projects
- Demonstration facilities
- Knowledge exchange platforms

## Future Trends and Opportunities

### Artificial Intelligence

**Next-Generation AI:**
- Autonomous operations
- Complex decision making
- Pattern recognition at scale
- Continuous learning systems
- Predictive capabilities

### Advanced Biotechnology

**Synthetic Biology:**
- Engineered microorganisms
- Enhanced fermentation
- Novel product creation
- Efficiency improvements
- New revenue streams

### Quantum Computing Applications

**Potential Uses:**
- Complex optimization problems
- Supply chain management
- Molecular modeling
- Climate prediction
- Market analytics

### Virtual and Augmented Reality

**Training and Operations:**
- Virtual plant tours
- Maintenance training
- Remote assistance
- Design visualization
- Safety training

## Challenges and Solutions

### Technology Adoption Barriers

**Challenges:**
- High capital investment
- Technical expertise requirements
- Integration complexity
- Change management

**Solutions:**
- Phased implementation
- Training programs
- Partnership models
- Government incentives
- Demonstrated ROI

### Data Security

**Cybersecurity Measures:**
- Robust firewalls
- Encryption protocols
- Regular security audits
- Staff awareness training
- Incident response plans

## Partner with Innovation Leaders

Brazil Global Sugar Manufacturers invests heavily in technology and innovation to provide our customers with:

- Highest quality products
- Consistent supply reliability
- Competitive pricing
- Sustainable practices
- Cutting-edge solutions
- Technical expertise

Contact us to learn how our innovative approaches can benefit your business and provide you with a competitive advantage in your market.
        `,
        author: "Brazil Global Sugar Team",
        date: "2024-04-25",
        category: "Innovation",
        readTime: "14 min read"
    },
    {
        id: "9",
        slug: "sugar-health-nutrition-facts",
        title: "Sugar, Health, and Nutrition: Understanding the Facts",
        excerpt: "An evidence-based look at sugar in the diet, nutritional considerations, health implications, and how the sugar industry is responding to consumer health trends.",
        image: "/images/brown-and-white-sugar-in-powder-form.jpg",
        content: `
# Sugar, Health, and Nutrition: Understanding the Facts

Sugar plays a central role in the modern diet, but it's also surrounded by controversy and misconceptions. Let's examine the nutritional science, health considerations, and industry responses to evolving consumer preferences.

## Understanding Sugar Basics

### What is Sugar?

**Chemical Composition:**
- Sucrose: Glucose + Fructose disaccharide
- Molecular formula: C₁₂H₂₂O₁₁
- Simple carbohydrate
- Highly soluble in water
- Rapidly digestible energy source

**Types of Sugar:**
- **Sucrose**: Table sugar from cane or beet
- **Glucose**: Simplest sugar, blood sugar
- **Fructose**: Fruit sugar
- **Lactose**: Milk sugar
- **Maltose**: Malt sugar

### Nutritional Profile

**Per 100g of White Sugar:**
- Calories: 387 kcal
- Carbohydrates: 100g
- Sugars: 100g
- Protein: 0g
- Fat: 0g
- Fiber: 0g
- Vitamins/Minerals: Trace amounts

**Energy Source:**
- 4 calories per gram
- Quick energy availability
- Complete glucose absorption
- Rapid blood sugar response

## Sugar in the Human Diet

### Historical Perspective

**Evolution of Consumption:**
- Ancient times: Natural sources only (fruit, honey)
- 18th-19th century: Luxury commodity
- 20th century: Mass production and availability
- Modern era: Ubiquitous ingredient

**Global Consumption Trends:**
- Average: 20-25 kg per person annually
- Varies significantly by country
- Highest: 40-50 kg per capita (some developed nations)
- Lowest: <10 kg per capita (some developing nations)

### Dietary Sources

**Direct Sources:**
- Table sugar in beverages
- Added to foods at home
- Confectionery and sweets
- Baking and desserts

**Hidden Sources:**
- Processed foods
- Condiments and sauces
- Bread and baked goods
- Breakfast cereals
- Flavored yogurts
- Soft drinks and juices

## Health Considerations

### Energy and Metabolism

**Positive Aspects:**
- Quick energy source for physical activity
- Fuel for brain function
- Glycogen replenishment
- Athletic performance support

**Metabolic Process:**
- Digestion into glucose and fructose
- Glucose absorption into bloodstream
- Insulin regulation
- Energy utilization or storage

### Dental Health

**Cavity Formation:**
- Bacterial fermentation of sugar
- Acid production on teeth
- Enamel demineralization
- Cavity development

**Prevention Strategies:**
- Moderated consumption frequency
- Proper oral hygiene
- Regular dental care
- Sugar-free alternatives
- Fluoride use

### Weight Management

**Caloric Balance:**
- Sugar provides calories without satiety
- Excess calories lead to weight gain
- Balance is key for weight management
- Total diet matters more than single nutrients

**Evidence-Based Recommendations:**
- Focus on overall diet quality
- Portion control
- Physical activity balance
- Mindful consumption
- Whole food emphasis

### Health Conditions

**Diabetes:**
- All carbohydrates affect blood sugar
- Sugar is not unique in this regard
- Total carbohydrate intake matters most
- Individual tolerance varies
- Medical guidance essential

**Cardiovascular Health:**
- Excessive sugar linked to risk factors
- Part of overall dietary pattern
- Moderation recommended
- Whole diet approach important

## Dietary Guidelines and Recommendations

### World Health Organization (WHO)

**Added Sugar Recommendations:**
- Less than 10% of total energy intake
- Ideally less than 5% for additional benefits
- Applies to added sugars and natural sugars in honey, syrups, juices

**Reasoning:**
- Dental health protection
- Healthy weight maintenance
- Chronic disease prevention
- Nutrient-dense diet promotion

### Other Health Organizations

**American Heart Association:**
- Women: Max 25g (6 teaspoons) added sugar daily
- Men: Max 36g (9 teaspoons) added sugar daily
- Children: Varies by age, generally lower

**Dietary Guidelines (Various Countries):**
- Limit added sugars to 10% of calories
- Read nutrition labels
- Choose whole foods
- Monitor intake

## Industry Response to Health Trends

### Product Innovation

**Reduced-Sugar Products:**
- Lower sugar formulations
- Natural sweetener blends
- Portion control packaging
- Sugar-free alternatives

**Functional Sugars:**
- Slower digestion rates
- Added fiber content
- Lower glycemic index options
- Fortified products

### Transparency and Labeling

**Clear Information:**
- Prominent sugar content labels
- Added sugar differentiation
- Serving size accuracy
- Nutritional education

**Consumer Empowerment:**
- Informed choice enablement
- Recipe and usage guidance
- Portion recommendations
- Health information resources

### Sustainable and Ethical Production

**Health-Adjacent Practices:**
- Organic certification
- Minimal processing
- No artificial additives
- Sustainable sourcing
- Fair trade options

## Alternative Sweeteners

### Natural Alternatives

**Stevia:**
- Zero calorie
- Plant-based
- Much sweeter than sugar
- Some flavor differences

**Monk Fruit:**
- Zero calorie
- Natural origin
- No blood sugar impact
- Growing popularity

**Honey and Maple Syrup:**
- Natural sugars
- Contains trace nutrients
- Similar metabolic effects to sugar
- Distinctive flavors

### Artificial Sweeteners

**Common Types:**
- Aspartame
- Sucralose
- Saccharin
- Acesulfame-K

**Considerations:**
- Regulated and approved
- Zero or very low calorie
- Different taste profiles
- Individual preferences vary

### Sugar Alcohols

**Examples:**
- Erythritol
- Xylitol
- Sorbitol
- Maltitol

**Characteristics:**
- Reduced calorie content
- Lower glycemic impact
- May cause digestive issues in large amounts
- Used in "sugar-free" products

## Balanced Perspective

### Moderation is Key

**Practical Approach:**
- Sugar is not inherently "harmful"
- Excess of anything is problematic
- Context and quantity matter
- Individual needs vary
- Overall diet pattern is most important

### Whole Diet Quality

**Focus Areas:**
- Variety of whole foods
- Adequate fruits and vegetables
- Whole grains
- Lean proteins
- Healthy fats
- Appropriate portions

### Lifestyle Factors

**Holistic Health:**
- Regular physical activity
- Adequate sleep
- Stress management
- Hydration
- Social connections

## Sugar in Food Manufacturing

### Functional Benefits

**Beyond Sweetness:**
- Texture and body
- Preservation
- Browning and color
- Fermentation support
- Moisture retention
- Flavor enhancement

### Quality and Safety

**Food Processing:**
- Extends shelf life
- Inhibits microbial growth
- Improves palatability
- Standardizes products
- Enables food diversity

## Consumer Education

### Reading Labels

**Understanding Nutrition Facts:**
- Total carbohydrates
- Total sugars
- Added sugars
- Serving sizes
- Ingredient lists

**Hidden Sugar Names:**
- Corn syrup
- Dextrose
- Maltose
- Cane juice
- Agave nectar
- And many more

### Making Informed Choices

**Practical Tips:**
- Compare product labels
- Choose whole foods primarily
- Monitor portion sizes
- Cook at home more often
- Be mindful of beverages
- Balance treats with nutrition

## Global Health Initiatives

### Industry Partnerships

**Collaborative Efforts:**
- Reformulation commitments
- Public health campaigns
- Research funding
- Policy dialogue
- Stakeholder engagement

### Government Programs

**Public Health Measures:**
- Nutrition education
- School meal standards
- Food labeling requirements
- Sugar taxation (some countries)
- Agricultural policies

## The Science of Sweet

### Taste Perception

**Why Humans Crave Sweet:**
- Evolutionary adaptation
- Energy-dense food signaling
- Pleasure response
- Learned preferences
- Cultural influences

### Behavioral Aspects

**Consumption Patterns:**
- Habitual behaviors
- Emotional connections
- Social contexts
- Marketing influences
- Personal control

## Moving Forward

### Personal Responsibility

**Individual Choices:**
- Self-awareness
- Goal setting
- Gradual changes
- Sustainable habits
- Seeking support

### Industry Accountability

**Continuing Evolution:**
- Product reformulation
- Transparent communication
- Health-oriented innovation
- Responsible marketing
- Consumer partnership

## Conclusion: Balance and Context

Sugar is neither a villain nor a necessity. It's a food ingredient and energy source that, like all aspects of nutrition, requires context, balance, and moderation.

**Key Takeaways:**
- Total diet quality matters most
- Moderation is essential
- Individual needs vary
- Whole foods should be prioritized
- Lifestyle factors contribute significantly
- Informed choices empower health

## Brazil Global Sugar Manufacturers' Commitment

We recognize our role in the food system and are committed to:

- Producing the highest quality products
- Providing transparent information
- Supporting consumer education
- Innovating for health trends
- Sustainable and ethical practices
- Partnering with health organizations

Contact us to learn more about our products, quality standards, and how we're contributing to a balanced, health-conscious food supply.
        `,
        author: "Brazil Global Sugar Team",
        date: "2024-03-30",
        category: "Health & Nutrition",
        readTime: "15 min read"
    },
    {
        id: "10",
        slug: "what-does-sugar-do-in-baking-comprehensive-guide",
        title: "What Does Sugar Do in Baking? A Comprehensive Guide to Sugar's Vital Role",
        excerpt: "Discover the essential functions of sugar in baking beyond sweetness. Learn how sugar affects texture, color, leavening, flavor, and stability in your baked goods.",
        image: "/images/white-cubes-of-sugar.jpg",
        content: `
# What Does Sugar Do in Baking? A Comprehensive Guide to Sugar's Vital Role

Sugar is one of the most fundamental ingredients in baking, but its role extends far beyond simply adding sweetness. Understanding what sugar does in baking can transform your recipes and help you create better baked goods. This comprehensive guide explores the multiple functions of sugar in baking and why it's so vital to successful baking.

## Different Types of Sugar for Baking

Before diving into sugar's functions, it's important to understand the different types of sugar available and how each affects your baked goods.

### Granulated Sugar

Granulated sugar is the most common type used in baking. Characterized by its fine, white crystals, it's versatile and used in everything from cookies to muffins. This is the standard sugar most recipes call for when they simply say "sugar."

### Brown Sugar

Brown sugar contains molasses, giving it a distinctive brown color and richer flavor. It comes in light and dark varieties, with dark brown sugar containing more molasses. Brown sugar is excellent for cookies, cakes, and recipes where you want a deeper, more complex flavor profile.

### Powdered Sugar (Confectioners' Sugar)

Powdered sugar is finely ground granulated sugar with a small amount of cornstarch added to prevent clumping. It's primarily used for frosting, glazing, and dusting baked goods. Its fine texture makes it ideal for creating smooth icings and decorative finishes.

### Raw Sugar and Turbinado Sugar

Raw sugar and turbinado sugar are less refined options that retain more of the natural molasses. These are often used in professional kitchens for their distinctive flavor and texture.

## The Five Essential Functions of Sugar in Baking

### 1. Texture Enhancement

One of sugar's most important roles in baking is its impact on texture. Different types of sugar create different textural experiences:

- **Granulated Sugar**: Creates a crumbly, tender texture in cakes and cookies. It helps break down gluten formation, resulting in softer baked goods.
- **Brown Sugar**: Produces a chewier texture due to its higher moisture content from molasses. This makes it perfect for chewy cookies and dense cakes.
- **Powdered Sugar**: Doesn't significantly affect texture but is used for smooth finishes.

The amount of sugar you use directly impacts texture. More sugar typically results in softer, more tender baked goods, while less sugar can lead to a drier, more crumbly texture.

### 2. Leavening and Aeration

Sugar plays a crucial role in leavening, which is the process that makes baked goods rise:

- **Air Trapping**: When you cream butter and sugar together, sugar crystals create tiny air pockets. These expand during baking, helping your baked goods rise.
- **Yeast Activation**: In yeast breads, sugar feeds the yeast, helping it produce carbon dioxide gas that makes the dough rise.
- **Chemical Leavening**: Sugar interacts with baking soda and baking powder, enhancing their effectiveness.

Granulated and brown sugar are both effective for leavening, while powdered sugar doesn't contribute to this function.

### 3. Color Development

Sugar is responsible for the beautiful golden-brown color we associate with perfectly baked goods:

- **Caramelization**: When sugar is heated, it caramelizes, creating rich brown colors and complex flavors. This is especially noticeable in cookies and the crusts of cakes.
- **Maillard Reaction**: Sugar participates in the Maillard reaction with proteins, creating the golden-brown color and rich flavors in baked goods.
- **Brown Sugar**: Adds a deeper caramel color due to its molasses content.

The amount of sugar affects color intensity. More sugar typically results in darker, more golden-brown baked goods.

### 4. Flavor Enhancement

While sugar obviously adds sweetness, it does much more for flavor:

- **Flavor Balance**: Sugar balances other flavors, reducing bitterness and enhancing other taste components.
- **Flavor Complexity**: Brown sugar adds molasses flavor, while different types of sugar can add subtle flavor notes.
- **Flavor Preservation**: Sugar helps preserve and enhance the flavors of other ingredients.

### 5. Stability and Moisture Retention

Sugar helps maintain the structure and moisture of baked goods:

- **Moisture Binding**: Sugar is hygroscopic, meaning it attracts and holds moisture. This keeps baked goods soft and fresh longer.
- **Structure Support**: Sugar helps maintain the structure of baked goods, preventing them from becoming too dense or collapsing.
- **Shelf Life**: The moisture-retaining properties of sugar help extend the shelf life of baked goods.

## How Adjusting Sugar Affects Your Baked Goods

### Increasing Sugar

When you increase the amount of sugar in a recipe:

- **Softer Texture**: Baked goods become more tender and crumbly
- **Darker Color**: More caramelization occurs, creating deeper golden-brown colors
- **Sweeter Taste**: Obviously, more sweetness
- **Altered Consistency**: Batter or dough may become thinner or thicker depending on the recipe
- **Extended Shelf Life**: More moisture retention means longer freshness

### Decreasing Sugar

When you reduce sugar:

- **Drier Texture**: Less moisture retention leads to drier baked goods
- **Lighter Color**: Less caramelization means lighter-colored results
- **Less Sweetness**: Reduced sweet flavor
- **Altered Structure**: May affect how the baked good rises and holds its shape

## Using Sugar for Decoration

Sugar serves important decorative functions in baking:

- **Powdered Sugar Dusting**: Creates elegant finishes on cakes, pastries, and cookies
- **Granulated Sugar Topping**: Adds sparkle and texture to muffins and scones
- **Colored Sugar**: Festive decoration for special occasions
- **Sugar Glazes**: Creates shiny, attractive finishes

## Can You Substitute Sugar in Baking?

Yes, but substitutions require careful consideration:

### Natural Alternatives

- **Honey**: Adds moisture and distinct flavor, but may require recipe adjustments
- **Maple Syrup**: Provides unique flavor but can affect texture
- **Agave Syrup**: Similar to honey but with a milder flavor
- **Coconut Sugar**: Natural option with caramel-like flavor

### Artificial Sweeteners

- **Stevia**: Much sweeter than sugar, requires significant recipe adjustments
- **Sucralose**: Can work in some recipes but may affect texture

### Important Considerations

When substituting sugar, remember that:
- Sugar provides more than just sweetness
- Texture, color, and moisture will be affected
- Recipe adjustments are usually necessary
- Results may differ from the original recipe

## Professional Baking Tips

1. **Creaming Method**: Properly creaming butter and sugar is essential for light, airy baked goods
2. **Temperature Matters**: Room temperature ingredients cream better
3. **Don't Overmix**: Once flour is added, mix just until combined to avoid tough textures
4. **Measure Accurately**: Use proper measuring techniques for consistent results
5. **Understand Your Sugar**: Different sugars serve different purposes

## Conclusion

Sugar is far more than just a sweetener in baking. It's a multi-functional ingredient that affects texture, color, flavor, leavening, and stability. Understanding these functions helps you become a better baker and allows you to make informed decisions when modifying recipes.

Whether you're making cookies, cakes, breads, or pastries, sugar plays a vital role in creating the perfect baked good. By understanding what sugar does in baking, you can create more consistent, delicious results every time.

At Brazil Global Sugar Manufacturers, we provide premium quality sugar products perfect for all your baking needs. Contact us to learn more about our sugar products and how they can enhance your baking endeavors.
        `,
        author: "Brazil Global Sugar Team",
        date: "2024-02-15",
        category: "Baking & Cooking",
        readTime: "12 min read"
    },
    {
        id: "11",
        slug: "comprehensive-guide-sweetener-sugar-types",
        title: "A Comprehensive Guide to Sweetener and Sugar Types: Everything You Need to Know",
        excerpt: "Explore the complete world of sweeteners and sugar types. Learn about granulated, brown, raw, and specialty sugars, plus natural and artificial sweetener alternatives.",
        image: "/images/brown-sugar-5847979_1920.jpg",
        content: `
# A Comprehensive Guide to Sweetener and Sugar Types: Everything You Need to Know

The world of sweeteners is vast and complex, with numerous types of sugar and sweetener alternatives available. Whether you're a home baker, professional chef, or food manufacturer, understanding the different types of sugar and sweeteners is essential for creating the perfect products. This comprehensive guide covers everything you need to know about sweeteners and sugar types.

## Understanding Sugar Basics

Sugar, scientifically known as sucrose, is a carbohydrate that occurs naturally in many plants, most notably sugarcane and sugar beets. The sugar we use in cooking and baking is extracted and refined from these sources.

### The Sugar Production Process

1. **Extraction**: Sugar is extracted from sugarcane or sugar beets
2. **Purification**: The raw juice is purified to remove impurities
3. **Crystallization**: Sugar crystals are formed through evaporation
4. **Refinement**: Further processing creates different grades and types of sugar

## Types of Granulated Sugar

### White Granulated Sugar

The most common type of sugar, white granulated sugar is highly refined and consists of pure sucrose crystals. It's the standard sugar used in most recipes.

**Characteristics:**
- Fine, uniform crystals
- Pure white color
- Neutral flavor
- Versatile for all types of cooking and baking

**Best Uses:**
- General baking and cooking
- Sweetening beverages
- Making syrups and preserves

### Superfine Sugar (Caster Sugar)

Superfine sugar has smaller crystals than regular granulated sugar, making it dissolve faster.

**Characteristics:**
- Very fine crystals
- Quick dissolving
- Smooth texture

**Best Uses:**
- Meringues
- Cocktails
- Delicate baked goods

### Coarse Sugar

Also known as decorating sugar, coarse sugar has large crystals that don't dissolve easily.

**Characteristics:**
- Large, visible crystals
- Sparkling appearance
- Slow to dissolve

**Best Uses:**
- Decorating baked goods
- Topping muffins and scones
- Creating texture

## Brown Sugar Varieties

### Light Brown Sugar

Light brown sugar contains a small amount of molasses, giving it a light caramel color and subtle molasses flavor.

**Characteristics:**
- Light golden-brown color
- Moist texture
- Mild molasses flavor
- 3.5% molasses content

**Best Uses:**
- Cookies
- Cakes
- Glazes

### Dark Brown Sugar

Dark brown sugar contains more molasses than light brown sugar, resulting in a deeper color and stronger flavor.

**Characteristics:**
- Deep brown color
- Rich molasses flavor
- Very moist
- 6.5% molasses content

**Best Uses:**
- Gingerbread
- Rich desserts
- Barbecue sauces
- Baked beans

### Demerara Sugar

Demerara sugar is a type of raw cane sugar with large, golden crystals and a subtle molasses flavor.

**Characteristics:**
- Large, golden crystals
- Slight crunch
- Natural molasses flavor
- Less refined

**Best Uses:**
- Coffee and tea
- Topping for baked goods
- Caramel recipes

### Turbinado Sugar

Turbinado sugar is partially refined raw sugar with a light brown color and subtle molasses flavor.

**Characteristics:**
- Light brown color
- Large crystals
- Natural flavor
- Slight crunch

**Best Uses:**
- Sweetening beverages
- Topping desserts
- Natural sweetening option

## Raw and Unrefined Sugars

### Raw Sugar

Raw sugar is the product that results from the initial processing of sugarcane. It's less refined than white sugar but more processed than unrefined options.

**Characteristics:**
- Light brown color
- Natural molasses content
- Coarser texture
- More complex flavor

**Best Uses:**
- Natural sweetening
- Specialty baking
- Health-conscious recipes

### Muscovado Sugar

Muscovado sugar is an unrefined cane sugar with a strong molasses flavor and dark color.

**Characteristics:**
- Very dark brown
- Strong molasses flavor
- Sticky texture
- Rich, complex taste

**Best Uses:**
- Rich desserts
- Spiced baked goods
- Barbecue sauces

## Specialty Sugars

### Powdered Sugar (Confectioners' Sugar)

Powdered sugar is granulated sugar that has been ground to a fine powder and mixed with a small amount of cornstarch.

**Characteristics:**
- Very fine powder
- Contains 3% cornstarch
- Quick dissolving
- Smooth texture

**Best Uses:**
- Frostings and icings
- Dusting desserts
- Making fondant
- Glazes

### Sanding Sugar

Sanding sugar has large, clear crystals that don't dissolve when baked, creating a sparkling effect.

**Characteristics:**
- Large, clear crystals
- Sparkling appearance
- Doesn't dissolve
- Decorative purpose

**Best Uses:**
- Cookie decoration
- Cake decoration
- Creating visual appeal

### Pearl Sugar

Pearl sugar consists of large, white sugar pellets that don't melt during baking.

**Characteristics:**
- Large, round pellets
- White color
- Doesn't melt
- Crunchy texture

**Best Uses:**
- Belgian waffles
- Scandinavian pastries
- Decorative toppings

## Liquid Sweeteners

### Honey

Honey is a natural sweetener produced by bees from flower nectar.

**Characteristics:**
- Varies by flower source
- Distinctive flavor
- Antibacterial properties
- Higher sweetness than sugar

**Best Uses:**
- Baking
- Glazes
- Natural sweetening
- Health applications

### Maple Syrup

Maple syrup is made from the sap of maple trees.

**Characteristics:**
- Distinctive maple flavor
- Liquid form
- Grades vary by color and flavor
- Natural sweetener

**Best Uses:**
- Pancakes and waffles
- Baking
- Glazes
- Natural sweetening

### Agave Nectar

Agave nectar comes from the agave plant and is sweeter than sugar.

**Characteristics:**
- Very sweet
- Low glycemic index
- Mild flavor
- Liquid form

**Best Uses:**
- Beverages
- Baking (with adjustments)
- Vegan recipes

### Corn Syrup

Corn syrup is made from cornstarch and comes in light and dark varieties.

**Characteristics:**
- Prevents crystallization
- Adds moisture
- Light or dark varieties
- Thick consistency

**Best Uses:**
- Candy making
- Ice cream
- Preventing sugar crystallization

## Artificial and Alternative Sweeteners

### Stevia

Stevia is a natural, zero-calorie sweetener derived from the stevia plant.

**Characteristics:**
- Very sweet (200-300 times sweeter than sugar)
- Zero calories
- Natural origin
- May have aftertaste

**Best Uses:**
- Beverages
- Low-calorie recipes
- Diabetic-friendly options

### Sucralose

Sucralose is an artificial sweetener that's heat-stable and calorie-free.

**Characteristics:**
- 600 times sweeter than sugar
- Zero calories
- Heat stable
- No aftertaste

**Best Uses:**
- Baking (with adjustments)
- Beverages
- Low-calorie products

### Erythritol

Erythritol is a sugar alcohol that occurs naturally in some fruits.

**Characteristics:**
- 70% as sweet as sugar
- Very low calories
- No aftertaste
- Doesn't cause blood sugar spikes

**Best Uses:**
- Low-calorie baking
- Diabetic-friendly recipes
- Keto diets

## Choosing the Right Sugar for Your Needs

### For Baking

- **Cakes**: Granulated or superfine sugar
- **Cookies**: Brown sugar for chewy, granulated for crisp
- **Pastries**: Granulated sugar
- **Frostings**: Powdered sugar

### For Cooking

- **Sauces**: Granulated or brown sugar
- **Glazes**: Brown sugar or honey
- **Preserves**: Granulated sugar
- **Caramel**: Granulated or demerara sugar

### For Beverages

- **Hot drinks**: Granulated or raw sugar
- **Cold drinks**: Superfine sugar or simple syrup
- **Cocktails**: Simple syrup or superfine sugar

## Storage and Handling

### Storage Tips

- Store sugar in airtight containers
- Keep in a cool, dry place
- Brown sugar should be kept moist
- Powdered sugar should be sifted if clumpy

### Substitution Guidelines

When substituting sugars, consider:
- Sweetness level differences
- Moisture content variations
- Flavor profile changes
- Texture impacts

## Health Considerations

### Natural vs. Refined

- Natural sugars retain some nutrients
- Refined sugars are pure sucrose
- Both provide calories and energy
- Moderation is key for all sugars

### Glycemic Index

Different sugars have different effects on blood sugar:
- White sugar: High glycemic index
- Raw sugar: Similar to white sugar
- Honey: Moderate glycemic index
- Agave: Lower glycemic index

## Conclusion

Understanding the different types of sugar and sweeteners is essential for successful cooking and baking. Each type has unique characteristics that make it suitable for specific applications. Whether you're looking for the perfect sugar for your recipe or exploring healthier alternatives, this guide provides the knowledge you need to make informed choices.

At Brazil Global Sugar Manufacturers, we offer a wide range of premium sugar products to meet all your needs. From ICUMSA 45 white refined sugar to raw sugar varieties, we provide the highest quality products for your culinary endeavors.
        `,
        author: "Brazil Global Sugar Team",
        date: "2024-01-28",
        category: "Education",
        readTime: "14 min read"
    },
    {
        id: "12",
        slug: "how-is-sugar-made-complete-production-process",
        title: "How is Sugar Made? The Complete Production Process from Field to Table",
        excerpt: "Discover the fascinating journey of sugar from sugarcane fields to your table. Learn about harvesting, extraction, refining, and the complete sugar production process.",
        image: "/images/sugarcane-farm.jpg",
        content: `
# How is Sugar Made? The Complete Production Process from Field to Table

Sugar is one of the world's most important agricultural products, but few people understand the complex process that transforms raw sugarcane into the refined sugar we use every day. This comprehensive guide takes you through the complete journey of sugar production, from the fields to your table.

## The Source: Sugarcane

Sugarcane (Saccharum officinarum) is a tall, perennial grass that thrives in tropical and subtropical climates. Brazil, India, China, and Thailand are among the world's largest producers. The plant stores sucrose in its stalks, which can grow up to 20 feet tall.

### Growing Conditions

Sugarcane requires:
- Tropical or subtropical climate
- Abundant rainfall or irrigation
- Rich, well-drained soil
- 12-18 months to mature
- Full sun exposure

## Step 1: Harvesting

### When to Harvest

Sugarcane is typically harvested when:
- The plant reaches 12-18 months of age
- Sugar content (Brix) is at its peak
- Weather conditions are optimal
- The cane is at maximum sucrose concentration

### Harvesting Methods

**Manual Harvesting:**
- Traditional method using machetes
- Selective cutting of mature stalks
- Labor-intensive but precise
- Still used in many regions

**Mechanical Harvesting:**
- Modern combine harvesters
- Efficient for large-scale operations
- Cuts and loads cane simultaneously
- Reduces labor costs

### Post-Harvest Handling

After harvesting:
- Leaves and tops are removed
- Cane must be processed quickly (within 24-48 hours)
- Delayed processing reduces sugar yield
- Transported to processing facilities

## Step 2: Extraction

### Washing and Preparation

Upon arrival at the mill:
- Cane is washed to remove dirt and debris
- Foreign materials are removed
- Prepared for crushing

### Crushing and Milling

The extraction process:
1. **Cane is crushed** between heavy rollers
2. **Juice is extracted** from the fibrous material (bagasse)
3. **Multiple passes** through rollers maximize extraction
4. **Bagasse is separated** for other uses (fuel, paper, etc.)

### Juice Collection

The extracted juice contains:
- 10-15% sucrose
- Water
- Impurities
- Natural plant materials

## Step 3: Purification

### Clarification

The raw juice undergoes clarification:

**Heating:**
- Juice is heated to kill bacteria
- Prevents fermentation
- Prepares for chemical treatment

**Chemical Treatment:**
- Lime (calcium hydroxide) is added
- Forms precipitates with impurities
- Adjusts pH for optimal processing

**Settling:**
- Impurities settle to the bottom
- Clear juice is drawn off the top
- Mud (impurities) is filtered out

### Filtration

Multiple filtration stages:
- Coarse filtration removes large particles
- Fine filtration removes smaller impurities
- Results in clear, purified juice

## Step 4: Evaporation

### Concentration

The clarified juice is concentrated:

**Multiple Effect Evaporators:**
- Series of evaporators use steam efficiently
- Each stage uses steam from the previous stage
- Reduces energy consumption
- Concentrates juice to 60-70% solids

**Result:**
- Thick syrup called "massecuite"
- Ready for crystallization
- High sucrose concentration

## Step 5: Crystallization

### Boiling

The concentrated syrup is boiled:
- In vacuum pans (reduces boiling point)
- Under controlled conditions
- Sugar crystals begin to form
- Process is carefully monitored

### Crystal Formation

**Nucleation:**
- Tiny crystals form as "seeds"
- Controlled addition of seed crystals
- Determines final crystal size

**Growth:**
- Crystals grow as syrup is added
- Size is controlled by temperature and time
- Uniform crystals are desired
- Process takes several hours

### Centrifugation

**Separation:**
- Crystals are separated from molasses
- Centrifugal force spins out liquid
- White sugar crystals remain
- Molasses is collected for other uses

## Step 6: Refining (For White Sugar)

### Affination

Raw sugar is washed:
- With saturated sugar syrup
- Removes remaining molasses film
- Prepares for further refining

### Melting and Clarification

**Dissolving:**
- Raw sugar is dissolved in water
- Creates a syrup for further processing

**Clarification:**
- Carbonation or phosphatation process
- Removes remaining impurities
- Results in very clear syrup

### Decolorization

**Bone Char or Activated Carbon:**
- Filters remove color compounds
- Creates pure white sugar
- Multiple filtration stages
- Achieves desired whiteness (ICUMSA rating)

### Recrystallization

**Final Crystallization:**
- Pure syrup is recrystallized
- Forms uniform white crystals
- Dried and cooled
- Ready for packaging

## Step 7: Drying and Packaging

### Drying

**Process:**
- Sugar crystals are dried
- Removes excess moisture
- Prevents clumping
- Ensures free-flowing product

### Grading and Sizing

**Classification:**
- Sugar is graded by crystal size
- Different grades for different uses
- Fine, medium, coarse crystals
- Powdered sugar is ground further

### Packaging

**Final Steps:**
- Packaged in various sizes
- From small consumer packages to bulk bags
- Protected from moisture
- Labeled with specifications

## By-Products of Sugar Production

### Bagasse

**Uses:**
- Fuel for power generation
- Paper and board production
- Animal feed
- Biofuel production

### Molasses

**Uses:**
- Animal feed
- Fermentation (alcohol, vinegar)
- Food flavoring
- Industrial applications

### Filter Mud

**Uses:**
- Fertilizer
- Soil amendment
- Compost material

## Quality Control

### Testing Throughout Process

**Brix Measurement:**
- Sugar content monitoring
- Ensures optimal processing
- Quality assurance

**Purity Testing:**
- Sucrose content verification
- Meets specifications
- ICUMSA rating determination

**Color Analysis:**
- Whiteness measurement
- Quality grading
- Specification compliance

## Modern Technology

### Automation

- Computer-controlled processes
- Precise temperature and pressure control
- Consistent quality
- Efficient operations

### Energy Efficiency

- Co-generation from bagasse
- Waste heat recovery
- Sustainable practices
- Reduced environmental impact

## Environmental Considerations

### Sustainable Practices

- Water recycling
- Waste reduction
- Energy efficiency
- Carbon footprint reduction

### Organic Production

- No synthetic chemicals
- Natural processing methods
- Certified organic standards
- Environmental stewardship

## From Factory to Consumer

### Distribution

**Transportation:**
- Bulk shipping
- Container loads
- Proper handling
- Quality maintenance

### Storage

**Requirements:**
- Cool, dry conditions
- Protection from moisture
- Proper ventilation
- Quality preservation

## Types of Sugar Produced

### Raw Sugar

- Less refined
- Natural color
- Retains some molasses
- ICUMSA 600-1200

### Refined White Sugar

- Highly refined
- Pure white
- ICUMSA 45 (highest quality)
- Standard granulated

### Specialty Sugars

- Various crystal sizes
- Different grades
- Specific applications
- Custom specifications

## Conclusion

The journey of sugar from field to table is a complex process involving multiple stages of extraction, purification, crystallization, and refining. Modern sugar production combines traditional knowledge with advanced technology to create high-quality products efficiently and sustainably.

Understanding how sugar is made helps us appreciate this essential ingredient and make informed choices about the products we use. At Brazil Global Sugar Manufacturers, we're committed to producing the highest quality sugar through careful attention to every step of the production process.

Contact us to learn more about our sugar production methods and premium quality products.
        `,
        author: "Brazil Global Sugar Team",
        date: "2024-01-10",
        category: "Production",
        readTime: "13 min read"
    },
    {
        id: "13",
        slug: "10-most-common-types-sugar-uses",
        title: "10 Most Common Types of Sugar and Their Uses: A Complete Guide",
        excerpt: "Explore the 10 most common types of sugar used in cooking and baking. Learn about granulated, brown, raw, and specialty sugars and when to use each one.",
        image: "/images/candy-sugar-764743_1920.jpg",
        content: `
# 10 Most Common Types of Sugar and Their Uses: A Complete Guide

Sugar comes in many forms, each with unique characteristics that make it suitable for specific culinary applications. Understanding the different types of sugar and their uses is essential for successful cooking and baking. This guide covers the 10 most common types of sugar and how to use them effectively.

## 1. Granulated White Sugar

Granulated white sugar is the most common and versatile type of sugar. It's made from refined sugarcane or sugar beets and consists of pure sucrose crystals.

**Characteristics:**
- Fine, uniform white crystals
- Neutral flavor
- Free-flowing texture
- Highly refined

**Best Uses:**
- General baking (cakes, cookies, muffins)
- Sweetening beverages
- Making preserves and jams
- Standard recipe requirements
- Creating syrups

**Substitution:** Can be used in place of most other sugars, though texture and flavor may vary.

## 2. Brown Sugar (Light and Dark)

Brown sugar is granulated sugar with molasses added back in. Light brown sugar contains about 3.5% molasses, while dark brown sugar contains about 6.5%.

**Characteristics:**
- Moist, clumpy texture
- Caramel-like flavor
- Rich brown color
- Higher moisture content

**Best Uses:**
- Chewy cookies (chocolate chip, oatmeal)
- Rich cakes and quick breads
- Barbecue sauces and glazes
- Baked beans
- Caramel recipes
- Gingerbread and spiced baked goods

**Storage Tip:** Keep in an airtight container with a piece of bread or apple to maintain moisture.

## 3. Powdered Sugar (Confectioners' Sugar)

Powdered sugar is granulated sugar that has been ground to a fine powder and mixed with about 3% cornstarch to prevent clumping.

**Characteristics:**
- Very fine powder texture
- Quick dissolving
- Smooth consistency
- Contains anti-caking agent

**Best Uses:**
- Frostings and icings
- Whipped cream sweetening
- Dusting desserts
- Making fondant
- Glazes for donuts and pastries
- No-bake desserts

**Tip:** Always sift before using to remove any lumps.

## 4. Raw Sugar (Turbinado/Demerara)

Raw sugar is less refined than white sugar, retaining some of the natural molasses and minerals from sugarcane.

**Characteristics:**
- Large, golden crystals
- Slight molasses flavor
- Natural appearance
- Slight crunch when used as topping

**Best Uses:**
- Sweetening coffee and tea
- Topping for muffins and scones
- Decorative purposes
- Natural sweetening option
- Caramel making
- Health-conscious recipes

**Note:** While often marketed as "healthier," raw sugar has similar nutritional value to white sugar.

## 5. Superfine Sugar (Caster Sugar)

Superfine sugar has smaller crystals than regular granulated sugar, making it dissolve more quickly.

**Characteristics:**
- Very fine crystals
- Quick dissolving
- Smooth texture
- Similar to granulated but finer

**Best Uses:**
- Meringues (dissolves completely)
- Cocktails and beverages
- Delicate baked goods
- Making simple syrups
- Recipes requiring quick dissolution

**DIY Tip:** You can make superfine sugar by processing regular granulated sugar in a food processor.

## 6. Coarse Sugar (Sanding Sugar)

Coarse sugar has large crystals that don't dissolve easily, making it perfect for decoration.

**Characteristics:**
- Large, visible crystals
- Sparkling appearance
- Slow to dissolve
- Decorative purpose

**Best Uses:**
- Decorating cookies
- Topping muffins and scones
- Creating texture on baked goods
- Visual appeal in desserts
- Sparkling effects

**Varieties:** Available in white and various colors for festive decorations.

## 7. Muscovado Sugar

Muscovado sugar is an unrefined cane sugar with a strong molasses flavor and dark, sticky texture.

**Characteristics:**
- Very dark brown color
- Strong molasses flavor
- Sticky, moist texture
- Rich, complex taste
- Less refined

**Best Uses:**
- Rich, dark desserts
- Spiced baked goods
- Barbecue sauces
- Marinades
- Recipes requiring deep molasses flavor
- Specialty baking

**Substitution:** Can replace dark brown sugar, but has a stronger flavor.

## 8. Pearl Sugar (Nib Sugar)

Pearl sugar consists of large, white sugar pellets that don't melt during baking.

**Characteristics:**
- Large, round pellets
- White color
- Doesn't melt
- Crunchy texture
- Decorative

**Best Uses:**
- Belgian waffles (traditional)
- Scandinavian pastries
- Decorative toppings
- Creating texture
- Specialty European baking

**Availability:** May be harder to find but available in specialty stores.

## 9. Coconut Sugar

Coconut sugar is made from the sap of coconut palm trees and has gained popularity as a natural alternative.

**Characteristics:**
- Light brown color
- Caramel-like flavor
- Lower glycemic index than white sugar
- Natural origin
- Granular texture

**Best Uses:**
- Natural sweetening
- Health-conscious baking
- Asian-inspired recipes
- Alternative to brown sugar
- Vegan recipes

**Note:** Has a distinct flavor that may not work in all recipes.

## 10. Liquid Sugar (Simple Syrup)

While not a "type" of sugar in the traditional sense, simple syrup is an important sugar preparation used in many applications.

**Characteristics:**
- Liquid form
- Easy to mix
- Quick dissolving
- Various concentrations

**Best Uses:**
- Cocktails and beverages
- Icing cakes
- Sweetening cold drinks
- Making sorbets
- Professional baking applications

**Making Simple Syrup:**
- Equal parts sugar and water
- Heat until sugar dissolves
- Cool before using
- Can be stored in refrigerator

## Choosing the Right Sugar

### For Texture

- **Tender/Crumbly:** Granulated sugar
- **Chewy:** Brown sugar
- **Smooth:** Powdered sugar
- **Crispy:** Granulated sugar

### For Flavor

- **Neutral:** White granulated sugar
- **Caramel/Molasses:** Brown sugar, muscovado
- **Natural:** Raw sugar, coconut sugar
- **Complex:** Dark brown sugar, muscovado

### For Appearance

- **White/Neutral:** Granulated, powdered
- **Golden:** Raw sugar, light brown
- **Dark:** Dark brown, muscovado
- **Decorative:** Coarse, pearl sugar

## Storage Tips

### General Guidelines

- Store in airtight containers
- Keep in cool, dry place
- Protect from moisture
- Brown sugar needs extra moisture
- Powdered sugar should be sifted if clumpy

### Brown Sugar Storage

- Keep in airtight container
- Add bread or apple slice to maintain moisture
- Can be revived if hardened by microwaving with damp paper towel

## Substitution Guide

### Common Substitutions

- **1 cup granulated = 1 cup superfine** (with texture differences)
- **1 cup granulated = 1 cup raw sugar** (with flavor differences)
- **1 cup brown = 1 cup white + 1-2 tbsp molasses**
- **1 cup powdered = 1 cup granulated** (ground, but affects texture)

### Important Notes

- Substitutions may affect texture, flavor, and appearance
- Some recipes are sensitive to sugar type
- Test substitutions in small batches first
- Consider the role of sugar in the recipe

## Health Considerations

### Nutritional Differences

- All sugars provide similar calories (about 4 per gram)
- Raw sugar contains trace minerals (negligible amounts)
- Processing level doesn't significantly affect nutrition
- Moderation is key for all types

### Glycemic Impact

- Most sugars have similar glycemic indexes
- Coconut sugar may have slightly lower GI
- Overall impact depends on quantity consumed
- Consider total carbohydrate intake

## Professional Tips

1. **Measure Accurately:** Use proper measuring techniques
2. **Understand Function:** Know why each sugar is used
3. **Don't Over-Substitute:** Some recipes need specific sugars
4. **Store Properly:** Maintain quality through proper storage
5. **Experiment Carefully:** Test substitutions in small batches

## Conclusion

Understanding the different types of sugar and their specific uses is essential for successful cooking and baking. Each type brings unique characteristics to your recipes, affecting texture, flavor, appearance, and overall quality. By choosing the right sugar for each application, you can achieve better results and create more delicious baked goods and dishes.

At Brazil Global Sugar Manufacturers, we offer a wide range of premium sugar products to meet all your culinary needs. From ICUMSA 45 white refined sugar to raw sugar varieties, we provide the highest quality products for professional and home use.

Contact us to learn more about our sugar products and find the perfect type for your specific needs.
        `,
        author: "Brazil Global Sugar Team",
        date: "2023-12-20",
        category: "Education",
        readTime: "11 min read"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/blog-preview.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BlogPreview",
    ()=>BlogPreview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$blog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants/blog.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
function BlogPreview() {
    const featuredPosts = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$blog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["blogPosts"].slice(0, 9);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-16 md:py-24 bg-muted/20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true
                    },
                    transition: {
                        duration: 0.6
                    },
                    className: "text-center mb-12 md:mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl sm:text-4xl md:text-5xl font-bold mb-4",
                            children: "Latest Insights"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/blog-preview.tsx",
                            lineNumber: 25,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-muted-foreground max-w-2xl mx-auto",
                            children: "Expert knowledge and industry updates from sugar manufacturing professionals"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/blog-preview.tsx",
                            lineNumber: 28,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/blog-preview.tsx",
                    lineNumber: 18,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12",
                    children: featuredPosts.map((post, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                duration: 0.5,
                                delay: index * 0.1
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: `/blog/${post.slug}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "h-full hover:shadow-xl transition-shadow duration-300 border-2 hover:border-primary/30 cursor-pointer group overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative h-48 overflow-hidden",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: post.image || "/images/white-cubes-of-sugar.jpg",
                                                alt: post.title,
                                                fill: true,
                                                className: "object-cover group-hover:scale-110 transition-transform duration-500"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/blog-preview.tsx",
                                                lineNumber: 45,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/blog-preview.tsx",
                                            lineNumber: 44,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 mb-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                            variant: "secondary",
                                                            children: post.category
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/blog-preview.tsx",
                                                            lineNumber: 54,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center text-xs text-muted-foreground",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                    className: "h-3 w-3 mr-1"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/sections/blog-preview.tsx",
                                                                    lineNumber: 56,
                                                                    columnNumber: 49
                                                                }, this),
                                                                post.readTime
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/sections/blog-preview.tsx",
                                                            lineNumber: 55,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/sections/blog-preview.tsx",
                                                    lineNumber: 53,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                    className: "line-clamp-2 text-lg group-hover:text-primary transition-colors",
                                                    children: post.title
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/blog-preview.tsx",
                                                    lineNumber: 60,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                    className: "flex items-center text-xs",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                            className: "h-3 w-3 mr-1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/blog-preview.tsx",
                                                            lineNumber: 64,
                                                            columnNumber: 45
                                                        }, this),
                                                        new Date(post.date).toLocaleDateString('en-US', {
                                                            month: 'short',
                                                            day: 'numeric',
                                                            year: 'numeric'
                                                        })
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/sections/blog-preview.tsx",
                                                    lineNumber: 63,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/blog-preview.tsx",
                                            lineNumber: 52,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted-foreground line-clamp-2",
                                                children: post.excerpt
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/blog-preview.tsx",
                                                lineNumber: 73,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/blog-preview.tsx",
                                            lineNumber: 72,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/blog-preview.tsx",
                                    lineNumber: 43,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/sections/blog-preview.tsx",
                                lineNumber: 42,
                                columnNumber: 29
                            }, this)
                        }, post.id, false, {
                            fileName: "[project]/components/sections/blog-preview.tsx",
                            lineNumber: 35,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/sections/blog-preview.tsx",
                    lineNumber: 33,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/blog",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            size: "lg",
                            children: [
                                "View All Articles",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                    className: "ml-2 h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/blog-preview.tsx",
                                    lineNumber: 87,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/blog-preview.tsx",
                            lineNumber: 85,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sections/blog-preview.tsx",
                        lineNumber: 84,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/sections/blog-preview.tsx",
                    lineNumber: 83,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/blog-preview.tsx",
            lineNumber: 17,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/sections/blog-preview.tsx",
        lineNumber: 16,
        columnNumber: 9
    }, this);
}
_c = BlogPreview;
var _c;
__turbopack_context__.k.register(_c, "BlogPreview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/accordion.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Accordion",
    ()=>Accordion,
    "AccordionContent",
    ()=>AccordionContent,
    "AccordionItem",
    ()=>AccordionItem,
    "AccordionTrigger",
    ()=>AccordionTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-accordion/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDownIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function Accordion({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "accordion",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/accordion.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = Accordion;
function AccordionItem({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
        "data-slot": "accordion-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-b last:border-b-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/accordion.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = AccordionItem;
function AccordionTrigger({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {
        className: "flex",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
            "data-slot": "accordion-trigger",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180", className),
            ...props,
            children: [
                children,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
                    className: "text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200"
                }, void 0, false, {
                    fileName: "[project]/components/ui/accordion.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/accordion.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/accordion.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_c2 = AccordionTrigger;
function AccordionContent({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
        "data-slot": "accordion-content",
        className: "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("pt-0 pb-4", className),
            children: children
        }, void 0, false, {
            fileName: "[project]/components/ui/accordion.tsx",
            lineNumber: 61,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/accordion.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
_c3 = AccordionContent;
;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "Accordion");
__turbopack_context__.k.register(_c1, "AccordionItem");
__turbopack_context__.k.register(_c2, "AccordionTrigger");
__turbopack_context__.k.register(_c3, "AccordionContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/constants/faq.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "faqs",
    ()=>faqs
]);
const faqs = [
    {
        question: "What sets Brazil Global Sugar Manufacturers apart in the sugar industry?",
        answer: "Brazil Global Sugar Manufacturers distinguishes itself as a comprehensive entity, serving as wholesale suppliers, manufacturers, and exporters of sugar worldwide. Our commitment to quality, innovation, and global excellence positions us as leaders in the industry."
    },
    {
        question: "What types of sugar products does Brazil Global Sugar offer?",
        answer: "Our diverse product portfolio includes ICUMSA 100 Cane Sugar, ICUMSA 600-1200 Cane Sugar, ICUMSA 150 Cane Sugar, ICUMSA 45 White Refined Sugar, Fine Crystal Sugar, Big Granulated Sugar, Extra Fine Crystal Sugar, and Sugar Powder. Each variant caters to unique culinary needs."
    },
    {
        question: "How can I trust the quality of Brazil Global Sugar products?",
        answer: "Quality is at the core of our offerings. As manufacturers, we adhere to stringent quality control measures throughout the production process. Our sugar undergoes rigorous testing to ensure it meets and exceeds global standards."
    },
    {
        question: "Does Brazil Global Sugar Manufacturers offer customized solutions?",
        answer: "Yes, we understand that different clients have unique requirements. As wholesale suppliers, we provide customizable solutions to meet specific needs, including packaging, quantity, and other specifications."
    },
    {
        question: "What services does Brazil Global Sugar Manufacturers provide besides sugar supply?",
        answer: "Beyond sugar manufacturing and supply, we offer a range of services, including efficient logistics, timely delivery, and personalized support. Our commitment extends to providing a comprehensive and seamless experience for our clients worldwide."
    },
    {
        question: "How does the exporting process work?",
        answer: "As exporters, we handle the logistics and documentation required for international shipments. We ensure that our sugar products reach our global clients safely and on time. Our export processes comply with international trade regulations."
    },
    {
        question: "Can Brazil Global Sugar accommodate bulk orders?",
        answer: "Absolutely. Whether you are a distributor, retailer, or part of the food industry, we have the capacity to fulfill bulk orders efficiently. Our production capabilities and global network allow us to cater to varying order sizes."
    },
    {
        question: "Is Brazil Global Sugar environmentally conscious in its manufacturing processes?",
        answer: "Yes, we prioritize sustainability in our operations. From responsible sourcing of raw materials to eco-friendly production practices, we strive to minimize our environmental impact. Our commitment to sustainability aligns with global best practices."
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/faq.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FAQSection",
    ()=>FAQSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/accordion.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$faq$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants/faq.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function FAQSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-16 md:py-24 bg-background",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true
                    },
                    transition: {
                        duration: 0.6
                    },
                    className: "text-center mb-12 md:mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl sm:text-4xl md:text-5xl font-bold mb-4",
                            children: "Frequently Asked Questions"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/faq.tsx",
                            lineNumber: 18,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-muted-foreground max-w-2xl mx-auto",
                            children: "Find answers to common questions about our products and services"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/faq.tsx",
                            lineNumber: 21,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/faq.tsx",
                    lineNumber: 11,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true
                    },
                    transition: {
                        duration: 0.6,
                        delay: 0.2
                    },
                    className: "max-w-3xl mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Accordion"], {
                        type: "single",
                        collapsible: true,
                        className: "space-y-4",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$faq$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faqs"].map((faq, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionItem"], {
                                value: `item-${index}`,
                                className: "border rounded-lg px-6 bg-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionTrigger"], {
                                        className: "text-left font-semibold hover:no-underline py-4",
                                        children: faq.question
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/faq.tsx",
                                        lineNumber: 40,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionContent"], {
                                        className: "text-muted-foreground pb-4 leading-relaxed",
                                        children: faq.answer
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/faq.tsx",
                                        lineNumber: 43,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/components/sections/faq.tsx",
                                lineNumber: 35,
                                columnNumber: 29
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/sections/faq.tsx",
                        lineNumber: 33,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/sections/faq.tsx",
                    lineNumber: 26,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/faq.tsx",
            lineNumber: 10,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/sections/faq.tsx",
        lineNumber: 9,
        columnNumber: 9
    }, this);
}
_c = FAQSection;
var _c;
__turbopack_context__.k.register(_c, "FAQSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/sheet.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sheet",
    ()=>Sheet,
    "SheetClose",
    ()=>SheetClose,
    "SheetContent",
    ()=>SheetContent,
    "SheetDescription",
    ()=>SheetDescription,
    "SheetFooter",
    ()=>SheetFooter,
    "SheetHeader",
    ()=>SheetHeader,
    "SheetTitle",
    ()=>SheetTitle,
    "SheetTrigger",
    ()=>SheetTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function Sheet({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "sheet",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sheet.tsx",
        lineNumber: 10,
        columnNumber: 10
    }, this);
}
_c = Sheet;
function SheetTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "sheet-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sheet.tsx",
        lineNumber: 16,
        columnNumber: 10
    }, this);
}
_c1 = SheetTrigger;
function SheetClose({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
        "data-slot": "sheet-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sheet.tsx",
        lineNumber: 22,
        columnNumber: 10
    }, this);
}
_c2 = SheetClose;
function SheetPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "sheet-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sheet.tsx",
        lineNumber: 28,
        columnNumber: 10
    }, this);
}
_c3 = SheetPortal;
function SheetOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        "data-slot": "sheet-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sheet.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_c4 = SheetOverlay;
function SheetContent({ className, children, side = "right", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetOverlay, {}, void 0, false, {
                fileName: "[project]/components/ui/sheet.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                "data-slot": "sheet-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500", side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm", side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm", side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b", side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t", className),
                ...props,
                children: [
                    children,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {
                                className: "size-4"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/sheet.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/sheet.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/sheet.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/sheet.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/sheet.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
_c5 = SheetContent;
function SheetHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "sheet-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-1.5 p-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sheet.tsx",
        lineNumber: 86,
        columnNumber: 5
    }, this);
}
_c6 = SheetHeader;
function SheetFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "sheet-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-auto flex flex-col gap-2 p-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sheet.tsx",
        lineNumber: 96,
        columnNumber: 5
    }, this);
}
_c7 = SheetFooter;
function SheetTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        "data-slot": "sheet-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-foreground font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sheet.tsx",
        lineNumber: 109,
        columnNumber: 5
    }, this);
}
_c8 = SheetTitle;
function SheetDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        "data-slot": "sheet-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sheet.tsx",
        lineNumber: 122,
        columnNumber: 5
    }, this);
}
_c9 = SheetDescription;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Sheet");
__turbopack_context__.k.register(_c1, "SheetTrigger");
__turbopack_context__.k.register(_c2, "SheetClose");
__turbopack_context__.k.register(_c3, "SheetPortal");
__turbopack_context__.k.register(_c4, "SheetOverlay");
__turbopack_context__.k.register(_c5, "SheetContent");
__turbopack_context__.k.register(_c6, "SheetHeader");
__turbopack_context__.k.register(_c7, "SheetFooter");
__turbopack_context__.k.register(_c8, "SheetTitle");
__turbopack_context__.k.register(_c9, "SheetDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/layout/header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/sheet.tsx [app-client] (ecmascript)");
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
const navigation = [
    {
        name: "Home",
        href: "/"
    },
    {
        name: "Company Profile",
        href: "/about"
    },
    {
        name: "Our Products",
        href: "/products",
        dropdown: [
            {
                name: "ICUMSA 100 Cane Sugar",
                href: "/products/icumsa-100-cane-sugar"
            },
            {
                name: "ICUMSA 600 1200 Cane Sugar",
                href: "/products/icumsa-600-1200-cane-sugar"
            },
            {
                name: "ICUMSA 150 Cane Sugar",
                href: "/products/icumsa-150-cane-sugar"
            },
            {
                name: "ICUMSA 45 White Refined Sugar",
                href: "/products/icumsa-45-white-refined-sugar"
            },
            {
                name: "Fine Crystal Sugar",
                href: "/products/fine-crystal-sugar"
            },
            {
                name: "Big Granulated sugar",
                href: "/products/big-granulated-sugar"
            },
            {
                name: "Extra Fine Crystal Sugar",
                href: "/products/extra-fine-crystal-sugar"
            },
            {
                name: "Sugar Powder",
                href: "/products/sugar-powder"
            },
            {
                name: "Raw Sugar",
                href: "/products/raw-sugar"
            }
        ]
    },
    {
        name: "Sugar",
        href: "#",
        dropdown: [
            {
                name: "Refined Sugar",
                href: "/products?category=refined"
            },
            {
                name: "Raw Sugar",
                href: "/products?category=raw"
            },
            {
                name: "Specialty Sugar",
                href: "/products?category=specialty"
            }
        ]
    },
    {
        name: "Blog",
        href: "/blog"
    },
    {
        name: "Contact Us",
        href: "/contact"
    }
];
function Header() {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [openDropdown, setOpenDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].header, {
        initial: {
            y: -100
        },
        animate: {
            y: 0
        },
        transition: {
            duration: 0.6,
            ease: "easeOut"
        },
        className: "sticky top-0 z-50 w-full border-b bg-white shadow-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 sm:px-6 lg:px-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-20 items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "flex items-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/images/sugar-logo.png",
                            alt: "Brazil Global Sugar Manufacturers",
                            width: 180,
                            height: 60,
                            className: "h-14 w-auto",
                            priority: true
                        }, void 0, false, {
                            fileName: "[project]/components/layout/header.tsx",
                            lineNumber: 57,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/layout/header.tsx",
                        lineNumber: 56,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "hidden md:flex items-center space-x-4",
                        children: navigation.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative group",
                                onMouseEnter: ()=>item.dropdown && setOpenDropdown(item.name),
                                onMouseLeave: ()=>setOpenDropdown(null),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: item.href,
                                        className: "px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors rounded-md hover:bg-gray-50",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex items-center gap-1",
                                            children: [
                                                item.name,
                                                item.dropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/layout/header.tsx",
                                                    lineNumber: 82,
                                                    columnNumber: 59
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/layout/header.tsx",
                                            lineNumber: 80,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/header.tsx",
                                        lineNumber: 76,
                                        columnNumber: 33
                                    }, this),
                                    item.dropdown && openDropdown === item.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute left-0 top-full mt-1 w-64 bg-white border rounded-lg shadow-lg py-2 z-50",
                                        children: item.dropdown.map((dropdownItem)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: dropdownItem.href,
                                                className: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors",
                                                children: dropdownItem.name
                                            }, dropdownItem.name, false, {
                                                fileName: "[project]/components/layout/header.tsx",
                                                lineNumber: 90,
                                                columnNumber: 45
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/header.tsx",
                                        lineNumber: 88,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, item.name, true, {
                                fileName: "[project]/components/layout/header.tsx",
                                lineNumber: 70,
                                columnNumber: 29
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/layout/header.tsx",
                        lineNumber: 68,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:block",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/contact",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                className: "bg-primary hover:bg-primary/90",
                                children: "Get Quote"
                            }, void 0, false, {
                                fileName: "[project]/components/layout/header.tsx",
                                lineNumber: 107,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/layout/header.tsx",
                            lineNumber: 106,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/layout/header.tsx",
                        lineNumber: 105,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sheet"], {
                        open: isOpen,
                        onOpenChange: setIsOpen,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetTrigger"], {
                                asChild: true,
                                className: "md:hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    size: "icon",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                            className: "h-6 w-6"
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/header.tsx",
                                            lineNumber: 117,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "sr-only",
                                            children: "Toggle menu"
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/header.tsx",
                                            lineNumber: 118,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/layout/header.tsx",
                                    lineNumber: 116,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/layout/header.tsx",
                                lineNumber: 115,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetContent"], {
                                side: "right",
                                className: "w-[300px] sm:w-[400px]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                    className: "flex flex-col space-y-4 mt-8",
                                    children: [
                                        navigation.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: item.href,
                                                        className: "block py-2 text-base font-medium text-gray-700 hover:text-primary transition-colors",
                                                        onClick: ()=>!item.dropdown && setIsOpen(false),
                                                        children: item.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/layout/header.tsx",
                                                        lineNumber: 125,
                                                        columnNumber: 41
                                                    }, this),
                                                    item.dropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "ml-4 mt-2 space-y-2",
                                                        children: item.dropdown.map((dropdownItem)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: dropdownItem.href,
                                                                className: "block py-1 text-sm text-gray-600 hover:text-primary transition-colors",
                                                                onClick: ()=>setIsOpen(false),
                                                                children: dropdownItem.name
                                                            }, dropdownItem.name, false, {
                                                                fileName: "[project]/components/layout/header.tsx",
                                                                lineNumber: 135,
                                                                columnNumber: 53
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/layout/header.tsx",
                                                        lineNumber: 133,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, item.name, true, {
                                                fileName: "[project]/components/layout/header.tsx",
                                                lineNumber: 124,
                                                columnNumber: 37
                                            }, this)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/contact",
                                            onClick: ()=>setIsOpen(false),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                className: "w-full mt-4",
                                                children: "Get Quote"
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/header.tsx",
                                                lineNumber: 149,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/header.tsx",
                                            lineNumber: 148,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/layout/header.tsx",
                                    lineNumber: 122,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/layout/header.tsx",
                                lineNumber: 121,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/layout/header.tsx",
                        lineNumber: 114,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/layout/header.tsx",
                lineNumber: 54,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/layout/header.tsx",
            lineNumber: 53,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/layout/header.tsx",
        lineNumber: 47,
        columnNumber: 9
    }, this);
}
_s(Header, "fT+T6kPpSoFTeBAdpW9dNPXByk0=");
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/separator.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Separator",
    ()=>Separator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-separator/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function Separator({ className, orientation = "horizontal", decorative = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "separator",
        decorative: decorative,
        orientation: orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/separator.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = Separator;
;
var _c;
__turbopack_context__.k.register(_c, "Separator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Input;
;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/textarea.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Textarea",
    ()=>Textarea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
function Textarea({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
        "data-slot": "textarea",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/textarea.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Textarea;
;
var _c;
__turbopack_context__.k.register(_c, "Textarea");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/label.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-label/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function Label({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/label.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Label;
;
var _c;
__turbopack_context__.k.register(_c, "Label");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/contact-form.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContactForm",
    ()=>ContactForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hookform/resolvers/zod/dist/zod.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/schemas.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/textarea.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
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
;
;
;
const formSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"]({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().min(2, "Name must be at least 2 characters"),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().email("Invalid email address"),
    phone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().min(10, "Phone number must be at least 10 digits"),
    company: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().optional(),
    message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().min(10, "Message must be at least 10 characters")
});
function ContactForm({ variant = "dark" }) {
    _s();
    const [isSubmitted, setIsSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])({
        resolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zodResolver"])(formSchema)
    });
    const onSubmit = async (data)=>{
        // Simulate API call
        await new Promise((resolve)=>setTimeout(resolve, 1000));
        console.log(data);
        setIsSubmitted(true);
        reset();
        setTimeout(()=>setIsSubmitted(false), 5000);
    };
    if (isSubmitted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                scale: 0.95
            },
            animate: {
                opacity: 1,
                scale: 1
            },
            className: "max-w-2xl mx-auto text-center p-12 bg-primary/5 rounded-lg border-2 border-primary/20",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                    className: "h-16 w-16 text-primary mx-auto mb-4"
                }, void 0, false, {
                    fileName: "[project]/components/sections/contact-form.tsx",
                    lineNumber: 57,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-2xl font-bold mb-2",
                    children: "Thank You!"
                }, void 0, false, {
                    fileName: "[project]/components/sections/contact-form.tsx",
                    lineNumber: 58,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-muted-foreground",
                    children: "We've received your message and will get back to you shortly."
                }, void 0, false, {
                    fileName: "[project]/components/sections/contact-form.tsx",
                    lineNumber: 59,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/contact-form.tsx",
            lineNumber: 52,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid md:grid-cols-2 gap-8 lg:gap-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    x: -20
                },
                whileInView: {
                    opacity: 1,
                    x: 0
                },
                viewport: {
                    once: true
                },
                transition: {
                    duration: 0.6
                },
                className: "space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: `text-2xl font-bold mb-4 ${variant === "dark" ? "text-white" : ""}`,
                                children: "Get in Touch"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/contact-form.tsx",
                                lineNumber: 77,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `leading-relaxed ${variant === "dark" ? "text-white/90" : "text-muted-foreground"}`,
                                children: "Have questions about our products or need a custom quote? We're here to help. Fill out the form and our team will respond within 24 hours."
                            }, void 0, false, {
                                fileName: "[project]/components/sections/contact-form.tsx",
                                lineNumber: 78,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/contact-form.tsx",
                        lineNumber: 76,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                className: variant === "dark" ? "bg-white/10 backdrop-blur-sm border-white/20" : "",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                    className: "pb-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center space-x-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `p-2 rounded-lg ${variant === "dark" ? "bg-primary/20" : "bg-primary/10"}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                    className: `h-5 w-5 ${variant === "dark" ? "text-white" : "text-primary"}`
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/contact-form.tsx",
                                                    lineNumber: 89,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/contact-form.tsx",
                                                lineNumber: 88,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                        className: `text-base ${variant === "dark" ? "text-white" : ""}`,
                                                        children: "Email"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/contact-form.tsx",
                                                        lineNumber: 92,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                        className: variant === "dark" ? "text-white/80" : "",
                                                        children: "info@brazilsugar.com"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/contact-form.tsx",
                                                        lineNumber: 93,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/sections/contact-form.tsx",
                                                lineNumber: 91,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/contact-form.tsx",
                                        lineNumber: 87,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/contact-form.tsx",
                                    lineNumber: 86,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/sections/contact-form.tsx",
                                lineNumber: 85,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                className: variant === "dark" ? "bg-white/10 backdrop-blur-sm border-white/20" : "",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                    className: "pb-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center space-x-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `p-2 rounded-lg ${variant === "dark" ? "bg-primary/20" : "bg-primary/10"}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                    className: `h-5 w-5 ${variant === "dark" ? "text-white" : "text-primary"}`
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/contact-form.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/contact-form.tsx",
                                                lineNumber: 102,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                        className: `text-base ${variant === "dark" ? "text-white" : ""}`,
                                                        children: "Phone"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/contact-form.tsx",
                                                        lineNumber: 106,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                        className: variant === "dark" ? "text-white/80" : "",
                                                        children: "+55 (11) 1234-5678"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/contact-form.tsx",
                                                        lineNumber: 107,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/sections/contact-form.tsx",
                                                lineNumber: 105,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/contact-form.tsx",
                                        lineNumber: 101,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/contact-form.tsx",
                                    lineNumber: 100,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/sections/contact-form.tsx",
                                lineNumber: 99,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                className: variant === "dark" ? "bg-white/10 backdrop-blur-sm border-white/20" : "",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                    className: "pb-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center space-x-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `p-2 rounded-lg ${variant === "dark" ? "bg-primary/20" : "bg-primary/10"}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                    className: `h-5 w-5 ${variant === "dark" ? "text-white" : "text-primary"}`
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/contact-form.tsx",
                                                    lineNumber: 117,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/contact-form.tsx",
                                                lineNumber: 116,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                        className: `text-base ${variant === "dark" ? "text-white" : ""}`,
                                                        children: "Location"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/contact-form.tsx",
                                                        lineNumber: 120,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                        className: variant === "dark" ? "text-white/80" : "",
                                                        children: "São Paulo, Brazil"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/contact-form.tsx",
                                                        lineNumber: 121,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/sections/contact-form.tsx",
                                                lineNumber: 119,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/contact-form.tsx",
                                        lineNumber: 115,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/contact-form.tsx",
                                    lineNumber: 114,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/sections/contact-form.tsx",
                                lineNumber: 113,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/contact-form.tsx",
                        lineNumber: 84,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/contact-form.tsx",
                lineNumber: 69,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    x: 20
                },
                whileInView: {
                    opacity: 1,
                    x: 0
                },
                viewport: {
                    once: true
                },
                transition: {
                    duration: 0.6
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    className: variant === "dark" ? "bg-white/10 backdrop-blur-sm border-white/20" : "",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: variant === "dark" ? "text-white" : "",
                                    children: "Send us a Message"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/contact-form.tsx",
                                    lineNumber: 138,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                    className: variant === "dark" ? "text-white/80" : "",
                                    children: "Fill out the form below and we'll get back to you soon"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/contact-form.tsx",
                                    lineNumber: 139,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/contact-form.tsx",
                            lineNumber: 137,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleSubmit(onSubmit),
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                htmlFor: "name",
                                                className: variant === "dark" ? "text-white" : "",
                                                children: "Name *"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/contact-form.tsx",
                                                lineNumber: 146,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                id: "name",
                                                placeholder: "John Doe",
                                                ...register("name"),
                                                className: errors.name ? "border-destructive" : ""
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/contact-form.tsx",
                                                lineNumber: 147,
                                                columnNumber: 33
                                            }, this),
                                            errors.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-destructive",
                                                children: errors.name.message
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/contact-form.tsx",
                                                lineNumber: 154,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/contact-form.tsx",
                                        lineNumber: 145,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                htmlFor: "email",
                                                className: variant === "dark" ? "text-white" : "",
                                                children: "Email *"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/contact-form.tsx",
                                                lineNumber: 159,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                id: "email",
                                                type: "email",
                                                placeholder: "john@example.com",
                                                ...register("email"),
                                                className: errors.email ? "border-destructive" : ""
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/contact-form.tsx",
                                                lineNumber: 160,
                                                columnNumber: 33
                                            }, this),
                                            errors.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-destructive",
                                                children: errors.email.message
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/contact-form.tsx",
                                                lineNumber: 168,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/contact-form.tsx",
                                        lineNumber: 158,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                htmlFor: "phone",
                                                className: variant === "dark" ? "text-white" : "",
                                                children: "Phone *"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/contact-form.tsx",
                                                lineNumber: 173,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                id: "phone",
                                                placeholder: "+1 (555) 123-4567",
                                                ...register("phone"),
                                                className: errors.phone ? "border-destructive" : ""
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/contact-form.tsx",
                                                lineNumber: 174,
                                                columnNumber: 33
                                            }, this),
                                            errors.phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-destructive",
                                                children: errors.phone.message
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/contact-form.tsx",
                                                lineNumber: 181,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/contact-form.tsx",
                                        lineNumber: 172,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                htmlFor: "company",
                                                className: variant === "dark" ? "text-white" : "",
                                                children: "Company (Optional)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/contact-form.tsx",
                                                lineNumber: 186,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                id: "company",
                                                placeholder: "Your Company Name",
                                                ...register("company")
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/contact-form.tsx",
                                                lineNumber: 187,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/contact-form.tsx",
                                        lineNumber: 185,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                htmlFor: "message",
                                                className: variant === "dark" ? "text-white" : "",
                                                children: "Message *"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/contact-form.tsx",
                                                lineNumber: 195,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                                                id: "message",
                                                placeholder: "Tell us about your requirements...",
                                                rows: 4,
                                                ...register("message"),
                                                className: errors.message ? "border-destructive" : ""
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/contact-form.tsx",
                                                lineNumber: 196,
                                                columnNumber: 33
                                            }, this),
                                            errors.message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-destructive",
                                                children: errors.message.message
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/contact-form.tsx",
                                                lineNumber: 204,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/contact-form.tsx",
                                        lineNumber: 194,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        type: "submit",
                                        className: "w-full",
                                        disabled: isSubmitting,
                                        children: isSubmitting ? "Sending..." : "Send Message"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/contact-form.tsx",
                                        lineNumber: 208,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/contact-form.tsx",
                                lineNumber: 144,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/sections/contact-form.tsx",
                            lineNumber: 143,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/contact-form.tsx",
                    lineNumber: 136,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/contact-form.tsx",
                lineNumber: 130,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/contact-form.tsx",
        lineNumber: 67,
        columnNumber: 9
    }, this);
}
_s(ContactForm, "YR7K/fJ6ovG4b2+92bARMrld+Ng=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"]
    ];
});
_c = ContactForm;
var _c;
__turbopack_context__.k.register(_c, "ContactForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_4adca14b._.js.map