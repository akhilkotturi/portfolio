import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AnimatedSection from "../AnimatedSection";
import { skillCategories } from "./SkillsList";

const chipVariants = {
    hidden:   { opacity: 0, x: -12, scale: 0.9 },
    visible:  { opacity: 1, x: 0,   scale: 1,
                transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] } },
};

function SkillRow({ category, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
            <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-10 py-7">
                {/* Category label */}
                <div className="md:w-28 shrink-0 pt-0.5">
                    <span
                        className="text-[11px] font-bold tracking-[0.18em] uppercase font-mono"
                        style={{ color: category.color }}
                    >
                        {category.label}
                    </span>
                </div>

                {/* Skill chips */}
                <motion.div
                    className="flex flex-wrap gap-2.5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={{
                        hidden:   {},
                        visible:  { transition: { staggerChildren: 0.055, delayChildren: 0.1 } },
                    }}
                >
                    {category.skills.map((skill, i) => (
                        <motion.div
                            key={i}
                            variants={chipVariants}
                            whileHover={{ scale: 1.07, y: -2 }}
                            transition={{ type: "spring", stiffness: 320, damping: 20 }}
                            className="flex items-center gap-2 px-3.5 py-2 rounded-xl holographic-card border border-white/8 hover:border-white/20 cursor-default transition-colors duration-200"
                        >
                            <img
                                src={skill.icon}
                                alt={skill.title}
                                style={skill.style}
                                className="w-[18px] h-[18px] shrink-0"
                            />
                            <span className="text-white/75 text-sm font-medium leading-none">
                                {skill.title}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Row divider */}
            <motion.div
                className="nebula-divider"
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.85, delay: index * 0.1 + 0.2, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: "left" }}
            />
        </motion.div>
    );
}

export default function Skills() {
    return (
        <section className="bg-transparent py-20 md:py-28">
            <div className="wrapper text-white">

                <AnimatedSection className="mb-14">
                    <span className="section-label mb-4 inline-flex">Tech Stack</span>
                    <h2 className="text-5xl md:text-6xl font-black gradient-text mt-4 cosmic-glow">
                        My Skills
                    </h2>
                    <p className="text-white/40 mt-4 text-lg max-w-xl leading-relaxed text-center mx-auto">
                        What I love to use when I build.
                    </p>
                </AnimatedSection>

                {/* Top divider */}
                <AnimatedSection>
                    <div className="nebula-divider mb-0" />
                </AnimatedSection>

                {skillCategories.map((cat, i) => (
                    <SkillRow key={i} category={cat} index={i} />
                ))}

                <AnimatedSection className="mt-10" delay={0.2}>
                    <Link
                        to="/projects"
                        className="inline-flex items-center gap-3 px-7 py-3.5 rounded-2xl border border-purple-500/35 text-white font-semibold hover:bg-purple-500/12 hover:border-purple-400/65 hover:shadow-[0_0_28px_rgba(192,132,252,0.25)] hover:scale-105 transition-all duration-200"
                    >
                        View My Projects
                        <motion.span
                            animate={{ x: [0, 4, 0] }}
                            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                        >→</motion.span>
                    </Link>
                </AnimatedSection>

            </div>
        </section>
    );
}
