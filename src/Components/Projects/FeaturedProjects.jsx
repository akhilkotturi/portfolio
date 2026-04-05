import { useState, useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "./ProjectList";
import AnimatedSection from "../AnimatedSection";

/* ─── Lightbox portal ─── */
function Lightbox({ photos, idx, title, onClose, onPrev, onNext, onGoTo }) {
    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "Escape")     onClose();
            if (e.key === "ArrowLeft")  onPrev();
            if (e.key === "ArrowRight") onNext();
        };
        document.addEventListener("keydown", onKey);
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = "";
        };
    }, [onClose, onPrev, onNext]);

    const n = photos.length;

    return createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8" onClick={onClose}>
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />
            <div className="relative z-10 w-full max-w-5xl flex flex-col gap-4" onClick={(e) => e.stopPropagation()}>
                <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "16/10" }}>
                    <img src={photos[idx]} aria-hidden="true" className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-50" />
                    <div className="absolute inset-0 bg-[#0a0514]/40 pointer-events-none" />
                    <img src={photos[idx]} alt={`${title} screenshot ${idx + 1}`} className="absolute inset-0 w-full h-full object-contain" />
                    {n > 1 && (
                        <>
                            <button onClick={onPrev} className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/55 border border-white/18 text-white/85 hover:bg-black/75 hover:text-white flex items-center justify-center text-xl transition-all backdrop-blur-sm">‹</button>
                            <button onClick={onNext} className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/55 border border-white/18 text-white/85 hover:bg-black/75 hover:text-white flex items-center justify-center text-xl transition-all backdrop-blur-sm">›</button>
                            <div className="absolute top-3 left-3 z-20 hud-text text-[11px] bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/10">{idx + 1} / {n}</div>
                        </>
                    )}
                </div>
                <div className="flex items-center justify-between px-1">
                    {n > 1 ? (
                        <div className="flex gap-2">
                            {photos.map((_, i) => (
                                <button key={i} onClick={() => onGoTo(i)}
                                    className={`rounded-full transition-all duration-200 ${i === idx ? "w-5 h-2 bg-purple-400 shadow-[0_0_8px_rgba(192,132,252,0.9)]" : "w-2 h-2 bg-white/30 hover:bg-white/55"}`} />
                            ))}
                        </div>
                    ) : <div />}
                    <button onClick={onClose} className="flex items-center gap-1.5 text-white/50 hover:text-white text-sm font-medium transition-colors">
                        <span>Close</span>
                        <kbd className="hud-text text-[10px] px-1.5 py-0.5 rounded border border-white/15 bg-white/5">ESC</kbd>
                    </button>
                </div>
            </div>
        </div>,
        document.body
    );
}

/* ─── Mini image carousel ─── */
function MiniCarousel({ photos, title }) {
    const [idx, setIdx]           = useState(0);
    const [lightbox, setLightbox] = useState(false);
    const n = photos.length;

    const prev    = (e) => { e.preventDefault(); e.stopPropagation(); setIdx(i => (i - 1 + n) % n); };
    const next    = (e) => { e.preventDefault(); e.stopPropagation(); setIdx(i => (i + 1) % n); };
    const lbPrev  = useCallback(() => setIdx(i => (i - 1 + n) % n), [n]);
    const lbNext  = useCallback(() => setIdx(i => (i + 1) % n), [n]);
    const lbClose = useCallback(() => setLightbox(false), []);

    return (
        <>
            <div className="relative shrink-0 overflow-hidden" style={{ aspectRatio: "16/10" }}>
                {photos.map((src, i) => (
                    <img key={`bg-${i}`} src={src} aria-hidden="true"
                        className={`absolute inset-0 w-full h-full object-cover scale-110 blur-2xl transition-opacity duration-300 ${i === idx ? "opacity-40" : "opacity-0"}`} />
                ))}
                <div className="absolute inset-0 bg-[#0a0514]/50 pointer-events-none" />

                {photos.map((src, i) => (
                    <img key={i} src={src} alt={`${title} screenshot ${i + 1}`}
                        className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-300 ${i === idx ? "opacity-100" : "opacity-0 pointer-events-none"}`} />
                ))}

                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#0a0514]/60 to-transparent pointer-events-none" />

                {/* Expand button */}
                <button
                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); setLightbox(true); }}
                    className="absolute top-2 right-2 z-20 w-6 h-6 rounded-md bg-black/50 border border-white/15 text-white/70 hover:bg-black/70 hover:text-white flex items-center justify-center transition-all backdrop-blur-sm"
                    aria-label="View full image"
                >
                    <svg viewBox="0 0 16 16" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                        <path d="M10 2h4v4M6 14H2v-4M14 2l-5 5M2 14l5-5" />
                    </svg>
                </button>

                {n > 1 && (
                    <>
                        <button onClick={prev} className="absolute left-1.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-black/50 border border-white/15 text-white/80 hover:bg-black/70 flex items-center justify-center text-base transition-all backdrop-blur-sm">‹</button>
                        <button onClick={next} className="absolute right-1.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-black/50 border border-white/15 text-white/80 hover:bg-black/70 flex items-center justify-center text-base transition-all backdrop-blur-sm">›</button>
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
                            {photos.map((_, i) => (
                                <button key={i} onClick={(e) => { e.preventDefault(); e.stopPropagation(); setIdx(i); }}
                                    className={`rounded-full transition-all duration-200 ${i === idx ? "w-3.5 h-1.5 bg-purple-400 shadow-[0_0_6px_rgba(192,132,252,0.9)]" : "w-1.5 h-1.5 bg-white/30"}`} />
                            ))}
                        </div>
                    </>
                )}
            </div>

            {lightbox && (
                <Lightbox photos={photos} idx={idx} title={title}
                    onClose={lbClose} onPrev={lbPrev} onNext={lbNext} onGoTo={setIdx} />
            )}
        </>
    );
}

function MiniProjectCard({ project, index }) {
    return (
        <motion.div
            className="h-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8 }}
        >
            <Link to="/projects" className="flex flex-col holographic-card card-glow rounded-2xl overflow-hidden group h-full scan-container">
                <MiniCarousel photos={project.photos} title={project.title} />

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                    {/* Number + Live badges */}
                    <div className="flex items-center justify-between mb-2">
                        <span className="inline-flex items-center justify-center min-w-8 h-6 px-2 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold tracking-[0.16em] shadow-[0_0_16px_rgba(0,0,0,0.35)]">
                            0{index + 1}
                        </span>
                        {project.live && (
                            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/12 border border-emerald-500/28">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.9)] animate-data-pulse" />
                                <span className="text-emerald-300 text-[10px] font-bold tracking-wide">LIVE</span>
                            </div>
                        )}
                    </div>

                    <h3 className="text-white font-bold text-lg mb-1.5 leading-tight">
                        {project.title}
                    </h3>
                    <p className="text-white/45 text-xs leading-relaxed line-clamp-2 mb-3">
                        {project.description}
                    </p>

                    <div className="flex gap-1.5 flex-wrap mt-auto">
                        {project.skills.slice(0, 3).map((s, j) => (
                            <span
                                key={j}
                                className="text-[10px] px-2 py-0.5 rounded-full bg-purple-500/15 text-purple-300/85 border border-purple-500/22"
                            >
                                {s.title}
                            </span>
                        ))}
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}

export default function FeaturedProjects() {
    const featured = projects.slice(0, 3);

    return (
        <>
            <section className="py-24 bg-transparent">
                <div className="wrapper-n">
                    <AnimatedSection className="text-center mb-14">
                        <span className="section-label mb-4 inline-flex">Selected Work</span>
                        <h2 className="text-5xl md:text-6xl font-black gradient-text mt-4 cosmic-glow">
                            Things I've Built
                        </h2>
                        <p className="text-white/45 mt-4 text-lg max-w-xl mx-auto leading-relaxed">
                            A few projects that show what I can do.
                        </p>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                        {featured.map((project, i) => (
                            <MiniProjectCard key={i} project={project} index={i} />
                        ))}
                    </div>

                    <AnimatedSection className="flex justify-center mt-14" delay={0.2}>
                        <Link
                            to="/projects"
                            className="group flex items-center gap-3 px-8 py-4 rounded-2xl border border-purple-500/35 text-white font-semibold hover:bg-purple-500/12 hover:border-purple-400/65 hover:shadow-[0_0_35px_rgba(192,132,252,0.28)] hover:scale-105 transition-all duration-300"
                        >
                            View All Projects
                            <motion.span
                                animate={{ x: [0, 4, 0] }}
                                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                            >
                                →
                            </motion.span>
                        </Link>
                    </AnimatedSection>
                </div>
            </section>
        </>
    );
}
