import { motion } from "framer-motion";
import AnimatedSection from "../AnimatedSection";
import { experiences } from "./ExperienceList";

export default function Experience() {
    return (
        <section className="py-20 md:py-28 bg-transparent">
            <div className="wrapper">

                <AnimatedSection>
                    <span className="section-label mb-4 inline-flex">Experience</span>
                </AnimatedSection>

                <AnimatedSection delay={0.08} className="mb-14">
                    <h2 className="text-5xl md:text-6xl font-black text-white mt-4">
                        Where I've <span className="gradient-text">Worked</span>
                    </h2>
                </AnimatedSection>

                <div>
                    {experiences.map((exp, i) => (
                        <div key={i}>
                            <motion.div
                                initial={{ opacity: 0, y: 22 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.4 }}
                                transition={{ duration: 0.65, delay: i * 0.14, ease: [0.22, 1, 0.36, 1] }}
                                className="grid grid-cols-1 sm:grid-cols-[minmax(0,1fr)_auto] items-start gap-2 sm:gap-6 py-8 group"
                            >
                                <div className="min-w-0 text-left">
                                    <h3 className="text-2xl md:text-3xl font-black gradient-text leading-tight group-hover:opacity-90 transition-opacity">
                                        {exp.company}
                                    </h3>
                                    <p className="text-white/50 text-base md:text-lg mt-1.5 font-medium">
                                        {exp.role}
                                    </p>
                                </div>
                                <span className="hud-text text-[11px] shrink-0 justify-self-start sm:justify-self-end sm:text-right">
                                    {exp.period}
                                </span>
                            </motion.div>

                            {i < experiences.length - 1 && (
                                <motion.div
                                    className="nebula-divider"
                                    initial={{ scaleX: 0, opacity: 0 }}
                                    whileInView={{ scaleX: 1, opacity: 1 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.9, delay: i * 0.14 + 0.25, ease: [0.22, 1, 0.36, 1] }}
                                    style={{ transformOrigin: "left" }}
                                />
                            )}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
