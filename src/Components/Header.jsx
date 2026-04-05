import { useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion, useScroll, useTransform } from "framer-motion";

/* ─── Cosmic dust particles ─── */
function CosmicDust() {
    const particles = useMemo(() => Array.from({ length: 10 }, (_, i) => ({
        id: i,
        left:     (Math.random() * 80 + 10),
        size:     (Math.random() * 2.5 + 0.8),
        delay:    (Math.random() * 12),
        duration: (Math.random() * 8 + 6),
        color:    ['rgba(192,132,252,0.7)', 'rgba(236,72,153,0.6)', 'rgba(167,139,250,0.65)', 'rgba(186,230,253,0.55)'][Math.floor(Math.random() * 4)],
        startY:   (Math.random() * 40 + 60),
    })), []);

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {particles.map((p) => (
                <div
                    key={p.id}
                    className="absolute rounded-full animate-float-up"
                    style={{
                        left:              `${p.left}%`,
                        bottom:            `${p.startY - 60}%`,
                        width:             `${p.size}px`,
                        height:            `${p.size}px`,
                        background:        p.color,
                        boxShadow:         `0 0 ${p.size * 3}px ${p.color}`,
                        animationDelay:    `${p.delay}s`,
                        animationDuration: `${p.duration}s`,
                        willChange:        'transform, opacity',
                    }}
                />
            ))}
        </div>
    );
}

/* ─── Constellation dots ─── */
const DOTS = [
    { x: 8,  y: 20, s: 3, o: 0.55, d: 0 },
    { x: 15, y: 38, s: 2, o: 0.4,  d: 0.9 },
    { x: 23, y: 13, s: 2, o: 0.5,  d: 1.7 },
    { x: 80, y: 22, s: 3, o: 0.6,  d: 0.4 },
    { x: 87, y: 45, s: 2, o: 0.45, d: 1.3 },
    { x: 92, y: 14, s: 2, o: 0.55, d: 2.1 },
    { x: 65, y: 72, s: 2, o: 0.35, d: 2.5 },
    { x: 40, y: 78, s: 3, o: 0.45, d: 3.1 },
];

/* ─── Mountain silhouette ─── */
function Mountains() {
    return (
        <svg
            viewBox="0 0 1440 170"
            preserveAspectRatio="none"
            className="mountain-svg"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <path
                d="M0,170 L0,120 L60,72 L100,98 L155,38 L210,82 L268,48 L330,88 L395,22 L460,68 L530,34 L605,78 L675,40 L752,88 L826,46 L898,92 L965,38 L1038,82 L1110,42 L1184,86 L1260,48 L1340,92 L1395,60 L1440,95 L1440,170 Z"
                fill="#160830"
                opacity="0.85"
            />
            <path
                d="M0,170 L0,148 L55,115 L100,138 L162,96 L218,128 L278,100 L355,142 L420,110 L492,136 L568,94 L645,125 L722,98 L800,138 L876,104 L950,148 L1025,112 L1100,146 L1175,110 L1252,148 L1322,118 L1394,148 L1440,128 L1440,170 Z"
                fill="#0a0514"
            />
        </svg>
    );
}

/* ─── Main Header ─── */
export default function Header() {
    const headerRef = useRef(null);

    const { scrollY } = useScroll();
    const textY       = useTransform(scrollY, [0, 600], [0, -120]);
    const textOpacity = useTransform(scrollY, [0, 500], [1, 0]);

    const [text] = useTypewriter({
        words: ["Student", "Full Stack Developer", "AI Engineer", "Web Designer", "NLP Researcher"],
        loop: {},
        typeSpeed: 145,
        deleteSpeed: 75,
    });

    return (
        <header
            ref={headerRef}
            className="relative w-full min-h-screen flex items-center overflow-hidden pt-16"
        >
            {/* ── Fine grid coordinate overlay ── */}
            <div className="grid-overlay" />

            {/* ── Rising cosmic dust particles ── */}
            <CosmicDust />

            {/* ── Background nebula orbs ── */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-32 left-[-5%] w-[50rem] h-[40rem] rounded-full bg-violet-600/28 blur-[160px] animate-nebula-pulse" />
                <div className="absolute top-[-10%] right-[-8%] w-[40rem] h-[38rem] rounded-full bg-pink-500/22 blur-[150px] animate-nebula-pulse" style={{ animationDelay: "3s" }} />
                <div className="absolute bottom-[-5%] left-[30%] w-[35rem] h-[30rem] rounded-full bg-purple-500/18 blur-[130px] animate-nebula-pulse" style={{ animationDelay: "5.5s" }} />
            </div>

            {/* ── Constellation overlay ── */}
            <div className="absolute inset-0 pointer-events-none">
                <svg className="absolute inset-0 w-full h-full" aria-hidden="true">
                    <line x1="8%"  y1="20%" x2="15%" y2="38%" stroke="rgba(255,255,255,0.15)" strokeWidth="0.6" />
                    <line x1="15%" y1="38%" x2="23%" y2="13%" stroke="rgba(255,255,255,0.15)" strokeWidth="0.6" />
                    <line x1="80%" y1="22%" x2="87%" y2="45%" stroke="rgba(255,255,255,0.15)" strokeWidth="0.6" />
                    <line x1="87%" y1="45%" x2="92%" y2="14%" stroke="rgba(255,255,255,0.15)" strokeWidth="0.6" />
                </svg>
                {DOTS.map((dot, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full bg-white animate-twinkle"
                        style={{ left: `${dot.x}%`, top: `${dot.y}%`, width: `${dot.s}px`, height: `${dot.s}px`, opacity: dot.o, animationDelay: `${dot.d}s`, animationDuration: `${3.2 + i * 0.4}s` }}
                    />
                ))}
            </div>

            {/* ── Hero text — centered, full width ── */}
            <div className="wrapper relative z-10 flex items-center justify-start pb-36 md:pb-28 w-full">
                <motion.div
                    className="max-w-2xl"
                    style={{ y: textY, opacity: textOpacity }}
                >
                    <motion.p
                        className="text-pink-400/90 font-semibold text-lg mb-3 tracking-wide"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    >
                        Hello, I'm
                    </motion.p>

                    <motion.h1
                        className="text-5xl md:text-6xl lg:text-8xl font-black leading-[1.06] tracking-tight"
                        initial={{ opacity: 0, y: 35 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.85, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <span className="gradient-text">Akhil</span>
                        <br />
                        <span className="text-white">Kotturi</span>
                    </motion.h1>

                    <motion.div
                        className="text-pink-300 text-xl md:text-2xl font-semibold mt-5 min-h-[2.2rem]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                    >
                        {text}<Cursor />
                    </motion.div>

                    {/* HUD coordinate strip */}
                    <motion.div
                        className="flex items-center gap-2 mt-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9, duration: 0.8 }}
                    >
                        <span className="hud-text">◈ SOL·III · SECTOR 7G · UT AUSTIN</span>
                        <span className="hud-text animate-data-pulse">·</span>
                        <span className="hud-text">30.2672°N 97.7431°W</span>
                    </motion.div>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 mt-9"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <Link
                            to="/projects"
                            className="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-violet-600 to-pink-500 text-white font-bold hover:from-violet-500 hover:to-pink-400 hover:scale-105 hover:shadow-[0_0_35px_rgba(192,132,252,0.45)] transition-all duration-200"
                        >
                            Explore Projects
                        </Link>
                        <a
                            href="https://drive.google.com/file/d/1YOPIxX_Xy8ptfE-N4-GZBaKavEeTL8u6/view?usp=sharing"
                            target="_blank"
                            rel="noreferrer"
                            className="px-7 py-3.5 rounded-2xl border border-white/35 text-white font-bold hover:bg-white/10 hover:border-white/60 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-200"
                        >
                            Download Resume
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            {/* ── Scroll chevron ── */}
            <motion.div
                className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer select-none z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6, duration: 0.8 }}
                onClick={() => window.scrollBy({ top: window.innerHeight * 0.85, behavior: "smooth" })}
                aria-label="Scroll down"
            >
                <span className="text-[9px] text-white/30 tracking-[0.22em] uppercase">scroll</span>
                <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}>
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-white/35" fill="none">
                        <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </motion.div>
            </motion.div>

            {/* ── Mountain silhouette at bottom ── */}
            <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
                <Mountains />
            </div>
        </header>
    );
}
