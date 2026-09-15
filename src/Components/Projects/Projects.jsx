import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import AnimatedSection from "../AnimatedSection";
import { projects } from "./ProjectList";

function getProjectSummary(project) {
    const firstSentence = project.description.split(". ")[0];
    return firstSentence.endsWith(".") ? firstSentence : `${firstSentence}.`;
}

function ProjectScreenshots({ project }) {
    const photos = project.photos?.filter(Boolean) || [];
    const [activeIndex, setActiveIndex] = useState(0);
    if (photos.length === 0) return null;
    const imageIndex = activeIndex % photos.length;
    const previousImage = () => setActiveIndex((index) => (index - 1 + photos.length) % photos.length);
    const nextImage = () => setActiveIndex((index) => (index + 1) % photos.length);

    return (
        <div className="project-carousel relative rounded-2xl overflow-hidden">
            <img
                src={photos[imageIndex]}
                aria-hidden="true"
                className="absolute inset-0 h-full w-full scale-110 object-cover blur-2xl opacity-45"
            />
            <div className="absolute inset-0 bg-[#0a0514]/55" />
            <div className="relative flex items-center justify-center" style={{ aspectRatio: "16/10" }}>
                <img
                    src={photos[imageIndex]}
                    alt={`${project.title} screenshot ${imageIndex + 1}`}
                    className="h-full w-full object-contain"
                />

                {photos.length > 1 && (
                    <>
                        <button
                            type="button"
                            onClick={previousImage}
                            className="carousel-arrow absolute left-3 top-1/2 z-10 -translate-y-1/2"
                            aria-label="Previous image"
                        >
                            ‹
                        </button>
                        <button
                            type="button"
                            onClick={nextImage}
                            className="carousel-arrow absolute right-3 top-1/2 z-10 -translate-y-1/2"
                            aria-label="Next image"
                        >
                            ›
                        </button>
                        <div className="absolute left-3 top-3 z-10 rounded-full border border-white/20 bg-black/65 px-2.5 py-1 text-[11px] font-bold tracking-[0.16em] text-white backdrop-blur-md">
                            {imageIndex + 1} / {photos.length}
                        </div>
                        <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
                            {photos.map((src, index) => (
                                <button
                                    key={src}
                                    type="button"
                                    onClick={() => setActiveIndex(index)}
                                    className={`carousel-dot ${index === imageIndex ? "active" : ""}`}
                                    aria-label={`Go to image ${index + 1}`}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export function ProjectLinks({ project, onActivate }) {
    return (
        <div className="flex items-center gap-2" onClick={onActivate}>
            {project.live && (
                <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="project-card-link project-card-link-primary"
                >
                    Live
                </a>
            )}
            {project.repo && (
                <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="project-card-link"
                >
                    Repo
                </a>
            )}
        </div>
    );
}

export function ProjectDetailModal({ project, onClose }) {
    useEffect(() => {
        const onKey = (event) => {
            if (event.key === "Escape") onClose();
        };
        document.addEventListener("keydown", onKey);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = "";
        };
    }, [onClose]);

    return createPortal(
        <div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8"
            onClick={onClose}
        >
            <div className="absolute inset-0 bg-black/80" />
            <div
                className="project-modal relative z-10 w-full max-w-5xl max-h-[88vh] overflow-y-auto glass-card rounded-2xl border border-white/12 p-5 md:p-8"
                onClick={(event) => event.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-labelledby="project-detail-title"
            >
                <div className="flex items-start justify-between gap-6 mb-6">
                    <div>
                        <p className="hud-text mb-2">Project detail</p>
                        <h3 id="project-detail-title" className="gradient-text text-4xl md:text-5xl font-black leading-tight">
                            {project.title}
                        </h3>
                    </div>
                    <button
                        type="button"
                        onClick={onClose}
                        className="project-modal-muted hover:text-white text-sm font-semibold transition-colors"
                    >
                        Close
                    </button>
                </div>

                <ProjectScreenshots project={project} />

                <p className="project-modal-copy mt-7 text-base md:text-lg leading-relaxed max-w-3xl mb-7">
                    {project.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-3 text-sm font-semibold">
                    {project.live && (
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noreferrer"
                            className="px-4 py-2 rounded-xl bg-gradient-to-r from-violet-600/30 to-pink-500/30 border border-purple-500/35 text-purple-100 hover:from-violet-600/50 hover:to-pink-500/50 transition-all"
                        >
                            Live
                        </a>
                    )}
                    {project.repo && (
                        <a
                            href={project.repo}
                            target="_blank"
                            rel="noreferrer"
                            className="px-4 py-2 rounded-xl border border-white/18 project-modal-muted hover:bg-white/8 hover:text-white transition-all"
                        >
                            Repo
                        </a>
                    )}
                </div>
            </div>
        </div>,
        document.body
    );
}

function ProjectCard({ item, index, onOpen }) {
    return (
        <div
            role="button"
            tabIndex="0"
            onClick={() => onOpen(item)}
            onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") onOpen(item);
            }}
            className="glass-card card-glow rounded-2xl p-6 md:p-7 h-full flex flex-col text-left"
        >
            <div className="flex items-start justify-between gap-3 mb-4">
                <div>
                    <p className="hud-text mb-2">Project 0{index + 1}</p>
                    <h3 className="gradient-text text-3xl font-black leading-tight">{item.title}</h3>
                </div>
            </div>

            <p className="text-white/58 text-sm md:text-base leading-relaxed mb-6 max-w-[58ch]">
                {getProjectSummary(item)}
            </p>

            <div className="mt-auto flex items-center justify-between gap-4 pt-5">
                <span className="text-sm font-semibold text-purple-200">View details</span>
                <ProjectLinks project={item} onActivate={(event) => event.stopPropagation()} />
            </div>
        </div>
    );
}

export default function Projects() {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeProject, setActiveProject] = useState(null);

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
                            <div key={item.title} className="h-full">
                                <ProjectCard item={item} index={index} onOpen={setActiveProject} />
                            </div>
                        ))}
                    </div>

                    {filteredProjects.length === 0 && (
                        <p className="text-white/40 text-lg font-medium mt-8">
                            No projects found. Try a different keyword.
                        </p>
                    )}
                </section>
            </div>

            {activeProject && (
                <ProjectDetailModal
                    project={activeProject}
                    onClose={() => setActiveProject(null)}
                />
            )}
        </div>
    );
}
