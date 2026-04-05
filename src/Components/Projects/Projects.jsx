import { useMemo, useState, useRef, useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import AnimatedSection from "../AnimatedSection";
import { projects } from "./ProjectList";

/* ─── 3D tilt hook ─── */
function useTilt(strength = 6) {
    const ref = useRef(null);
    const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

    const handleMouseMove = useCallback((e) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width  - 0.5;
        const y = (e.clientY - rect.top)  / rect.height - 0.5;
        setTilt({ rotateX: -y * strength, rotateY: x * strength });
    }, [strength]);

    const handleMouseLeave = useCallback(() => setTilt({ rotateX: 0, rotateY: 0 }), []);

    return { ref, tilt, handleMouseMove, handleMouseLeave };
}

/* ─── Lightbox portal ─── */
function Lightbox({ photos, idx, title, onClose, onPrev, onNext, onGoTo }) {
    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "Escape")      onClose();
            if (e.key === "ArrowLeft")   onPrev();
            if (e.key === "ArrowRight")  onNext();
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
        <div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8"
            onClick={onClose}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

            {/* Panel */}
            <div
                className="relative z-10 w-full max-w-5xl flex flex-col gap-4"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Image */}
                <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "16/10" }}>
                    {/* Blurred ambient bg */}
                    <img
                        src={photos[idx]}
                        aria-hidden="true"
                        className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-50"
                    />
                    <div className="absolute inset-0 bg-[#0a0514]/40 pointer-events-none" />

                    {/* Main image */}
                    <img
                        src={photos[idx]}
                        alt={`${title} screenshot ${idx + 1}`}
                        className="absolute inset-0 w-full h-full object-contain"
                    />

                    {/* Prev / Next arrows */}
                    {n > 1 && (
                        <>
                            <button
                                onClick={onPrev}
                                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/55 border border-white/18 text-white/85 hover:bg-black/75 hover:text-white flex items-center justify-center text-xl transition-all backdrop-blur-sm"
                                aria-label="Previous image"
                            >‹</button>
                            <button
                                onClick={onNext}
                                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/55 border border-white/18 text-white/85 hover:bg-black/75 hover:text-white flex items-center justify-center text-xl transition-all backdrop-blur-sm"
                                aria-label="Next image"
                            >›</button>
                        </>
                    )}

                    {/* Counter */}
                    {n > 1 && (
                        <div className="absolute top-3 left-3 z-20 inline-flex items-center justify-center min-w-10 h-6 px-2.5 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold tracking-[0.16em] shadow-[0_0_16px_rgba(0,0,0,0.35)]">
                            {idx + 1} / {n}
                        </div>
                    )}
                </div>

                {/* Bottom row: dots + close */}
                <div className="flex items-center justify-between px-1">
                    {n > 1 ? (
                        <div className="flex gap-2">
                            {photos.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => onGoTo(i)}
                                    className={`rounded-full transition-all duration-200 ${
                                        i === idx
                                            ? "w-5 h-2 bg-purple-400 shadow-[0_0_8px_rgba(192,132,252,0.9)]"
                                            : "w-2 h-2 bg-white/30 hover:bg-white/55"
                                    }`}
                                    aria-label={`Image ${i + 1}`}
                                />
                            ))}
                        </div>
                    ) : <div />}

                    <button
                        onClick={onClose}
                        className="flex items-center gap-1.5 text-white/50 hover:text-white text-sm font-medium transition-colors"
                    >
                        <span>Close</span>
                        <kbd className="hud-text text-[10px] px-1.5 py-0.5 rounded border border-white/15 bg-white/5">ESC</kbd>
                    </button>
                </div>
            </div>
        </div>,
        document.body
    );
}

/* ─── Image carousel ─── */
function ImageCarousel({ photos, title }) {
    const [idx, setIdx]         = useState(0);
    const [lightbox, setLightbox] = useState(false);
    const n = photos.length;

    const prev    = (e) => { e.stopPropagation(); setIdx(i => (i - 1 + n) % n); };
    const next    = (e) => { e.stopPropagation(); setIdx(i => (i + 1) % n); };
    const lbPrev  = useCallback(() => setIdx(i => (i - 1 + n) % n), [n]);
    const lbNext  = useCallback(() => setIdx(i => (i + 1) % n), [n]);
    const lbClose = useCallback(() => setLightbox(false), []);

    return (
        <>
            <div className="relative shrink-0 overflow-hidden" style={{ aspectRatio: "16/10" }}>
                {/* Blurred ambient backdrop */}
                {photos.map((src, i) => (
                    <img
                        key={`bg-${i}`}
                        src={src}
                        aria-hidden="true"
                        className={`absolute inset-0 w-full h-full object-cover scale-110 blur-2xl transition-opacity duration-300 ${
                            i === idx ? "opacity-40" : "opacity-0"
                        }`}
                    />
                ))}
                <div className="absolute inset-0 bg-[#0a0514]/50 pointer-events-none" />

                {/* Foreground images */}
                {photos.map((src, i) => (
                    <img
                        key={i}
                        src={src}
                        alt={`${title} screenshot ${i + 1}`}
                        className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-300 ${
                            i === idx ? "opacity-100" : "opacity-0 pointer-events-none"
                        }`}
                    />
                ))}

                {/* Bottom fade */}
                <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#0a0514]/60 to-transparent pointer-events-none" />

                {/* Expand button */}
                <button
                    onClick={(e) => { e.stopPropagation(); setLightbox(true); }}
                    className="absolute top-2.5 right-2.5 z-20 w-7 h-7 rounded-lg bg-black/50 border border-white/15 text-white/70 hover:bg-black/70 hover:text-white flex items-center justify-center transition-all backdrop-blur-sm"
                    aria-label="View full image"
                >
                    <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                        <path d="M10 2h4v4M6 14H2v-4M14 2l-5 5M2 14l5-5" />
                    </svg>
                </button>

                {n > 1 && (
                    <>
                        <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/50 border border-white/15 text-white/80 hover:bg-black/70 hover:text-white flex items-center justify-center text-lg transition-all backdrop-blur-sm" aria-label="Previous image">‹</button>
                        <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/50 border border-white/15 text-white/80 hover:bg-black/70 hover:text-white flex items-center justify-center text-lg transition-all backdrop-blur-sm" aria-label="Next image">›</button>

                        <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
                            {photos.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={(e) => { e.stopPropagation(); setIdx(i); }}
                                    className={`rounded-full transition-all duration-200 ${
                                        i === idx
                                            ? "w-4 h-1.5 bg-purple-400 shadow-[0_0_6px_rgba(192,132,252,0.9)]"
                                            : "w-1.5 h-1.5 bg-white/30 hover:bg-white/55"
                                    }`}
                                    aria-label={`Go to image ${i + 1}`}
                                />
                            ))}
                        </div>

                        <div className="absolute top-2.5 left-2.5 z-20 hud-text text-[10px]">{idx + 1}/{n}</div>
                    </>
                )}
            </div>

            {lightbox && (
                <Lightbox
                    photos={photos}
                    idx={idx}
                    title={title}
                    onClose={lbClose}
                    onPrev={lbPrev}
                    onNext={lbNext}
                    onGoTo={setIdx}
                />
            )}
        </>
    );
}

/* ─── Project card ─── */
function ProjectCard({ item }) {
    const { ref, tilt, handleMouseMove, handleMouseLeave } = useTilt(4);

    return (
        <div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="glass-card card-glow rounded-2xl overflow-hidden group h-full flex flex-col"
            style={{
                transform: `perspective(900px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
                transition: "transform 0.18s ease-out",
                transformStyle: "preserve-3d",
            }}
        >
            <ImageCarousel photos={item.photos} title={item.title} />

            {/* Skill tags */}
            <div className="px-5 pt-4 flex gap-1.5 flex-wrap">
                {item.skills.slice(0, 4).map((s, i) => (
                    <span key={i} className="text-[11px] px-2 py-0.5 rounded-full bg-purple-500/18 text-purple-200/85 border border-purple-500/22 font-medium">
                        {s.title}
                    </span>
                ))}
            </div>

            {/* Content */}
            <div className="p-5 pt-3 flex flex-col flex-1">
                <h3 className="gradient-text text-2xl font-black mb-2 leading-tight">{item.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed mb-5">{item.description}</p>

                <div className="flex gap-2.5 mt-auto">
                    {item.live && (
                        <a href={item.live} target="_blank" rel="noreferrer"
                            className="flex-1 py-2.5 text-center text-sm font-semibold rounded-xl bg-gradient-to-r from-violet-600/30 to-pink-500/30 border border-purple-500/35 text-purple-200 hover:from-violet-600/50 hover:to-pink-500/50 hover:shadow-[0_0_20px_rgba(192,132,252,0.25)] transition-all duration-200">
                            Live ↗
                        </a>
                    )}
                    {item.repo && (
                        <a href={item.repo} target="_blank" rel="noreferrer"
                            className="flex-1 py-2.5 text-center text-sm font-semibold rounded-xl border border-white/18 text-white/60 hover:bg-white/8 hover:text-white/90 hover:border-white/35 transition-all duration-200">
                            Repo ↗
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

export default function Projects() {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredProjects = useMemo(() => {
        const q = searchQuery.trim().toLowerCase();
        if (!q) return projects;
        return projects.filter((p) =>
            [p.title, p.description, ...(p.tags || []), ...p.skills.map((s) => s.title)]
                .join(" ").toLowerCase().includes(q)
        );
    }, [searchQuery]);

    return (
        <div className="bg-transparent">
            <div className="wrapper-n text-white">
                <section className="pt-8 pb-10 flex flex-col">

                    <AnimatedSection className="w-full mb-10">
                        <div className="glass-card card-glow rounded-2xl p-2">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search by title, tech, or tags…"
                                className="w-full text-white bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-purple-400/50 placeholder:text-white/30"
                                aria-label="Search projects"
                            />
                        </div>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                        {filteredProjects.map((item, index) => (
                            <AnimatedSection key={index} delay={index * 0.06} className="h-full">
                                <ProjectCard item={item} />
                            </AnimatedSection>
                        ))}
                    </div>

                    {filteredProjects.length === 0 && (
                        <p className="text-white/40 text-lg font-medium mt-8">
                            No projects found. Try a different keyword.
                        </p>
                    )}
                </section>
            </div>
        </div>
    );
}
