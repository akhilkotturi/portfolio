import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "./ProjectList";
import { ProjectDetailModal, ProjectLinks } from "./Projects";
import AnimatedSection from "../AnimatedSection";

function getProjectSummary(project) {
    const firstSentence = project.description.split(". ")[0];
    return firstSentence.endsWith(".") ? firstSentence : `${firstSentence}.`;
}

function ProjectSummaryCard({ project, index, onOpen }) {
    return (
        <motion.article
            className="h-full"
            initial={{ opacity: 0.96, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
            <div
                role="button"
                tabIndex="0"
                onClick={() => onOpen(project)}
                onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") onOpen(project);
                }}
                className="h-full w-full holographic-card card-glow rounded-2xl p-6 md:p-7 scan-container flex flex-col text-left"
            >
                <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-start justify-between gap-5 mb-5">
                        <h3 className="text-2xl md:text-3xl font-black gradient-text leading-tight">
                            {project.title}
                        </h3>
                        <span className="hud-text shrink-0 pt-1">0{index + 1}</span>
                    </div>

                    <p className="text-white/58 text-sm leading-relaxed mb-6">
                        {getProjectSummary(project)}
                    </p>

                    <div className="mt-auto flex items-center justify-between gap-4 pt-5">
                        <span className="text-sm font-semibold text-purple-200">View details</span>
                        <ProjectLinks project={project} onActivate={(event) => event.stopPropagation()} />
                    </div>
                </div>
            </div>
        </motion.article>
    );
}

export default function FeaturedProjects() {
    const featured = projects.slice(0, 3);
    const [activeProject, setActiveProject] = useState(null);

    return (
        <section className="py-24 bg-transparent">
            <div className="wrapper-n">
                <AnimatedSection className="text-center mb-14">
                    <span className="section-label mb-4 inline-flex">Selected Work</span>
                    <h2 className="text-5xl md:text-6xl font-black gradient-text mt-4 cosmic-glow">
                        Things I've Built
                    </h2>
                    <p className="text-white/45 mt-4 text-lg max-w-xl mx-auto leading-relaxed">
                        Short notes on a few projects. Open one if you want the screenshots and full build notes.
                    </p>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                    {featured.map((project, i) => (
                        <ProjectSummaryCard
                            key={project.title}
                            project={project}
                            index={i}
                            onOpen={setActiveProject}
                        />
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

            {activeProject && (
                <ProjectDetailModal
                    project={activeProject}
                    onClose={() => setActiveProject(null)}
                />
            )}
        </section>
    );
}
