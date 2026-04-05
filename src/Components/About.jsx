import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

/* ─── Word-by-word scroll reveal (Apple style) ─── */
function Word({ progress, word, index, total }) {
    const start = index / total;
    const end   = Math.min((index + 3) / total, 1);
    const opacity = useTransform(progress, [start, end], [0.18, 1]);
    return (
        <motion.span className="inline-block mr-[0.28em]" style={{ opacity }}>
            {word}
        </motion.span>
    );
}

function ScrollRevealText({ text, className }) {
    const ref  = useRef(null);
    const { scrollYProgress } = useScroll({
        target:  ref,
        offset:  ["start 0.88", "end 0.38"],
    });
    const words = text.split(" ");
    return (
        <span ref={ref} className={className}>
            {words.map((word, i) => (
                <Word
                    key={i}
                    progress={scrollYProgress}
                    word={word}
                    index={i}
                    total={words.length}
                />
            ))}
        </span>
    );
}

export default function About() {
    return (
        <section className="bg-transparent py-24 md:py-32">
            <div className="wrapper text-white">

                {/* Section label */}
                <AnimatedSection>
                    <span className="section-label mb-4 inline-flex">About Me</span>
                </AnimatedSection>

                <div className="flex justify-between items-center md:flex-row flex-col-reverse gap-14 md:gap-16">

                    {/* Left: Text */}
                    <div className="flex-1 md:pr-8">
                        {/* Apple-style scroll word reveal */}
                        <p className="text-xl md:text-2xl leading-relaxed text-white/85 font-medium mb-6">
                            <ScrollRevealText
                                text="I'm Akhil, a CS student at UT Austin with a passion for building software that can change the world."
                            />
                        </p>
                        <p className="text-base md:text-lg leading-relaxed text-white/65 mb-10">
                            <ScrollRevealText
                                text="My journey started in middle school and led me to co-found Project UCode, a non-profit platform bringing CS education to students worldwide. When I'm not coding, you'll find me at the gym, building side projects, or grinding LeetCode."
                            />
                        </p>

                        <AnimatedSection delay={0.15}>
                            <a
                                href="https://drive.google.com/file/d/1YOPIxX_Xy8ptfE-N4-GZBaKavEeTL8u6/view?usp=sharing"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-block px-6 py-3.5 rounded-2xl border border-white/30 text-white font-semibold hover:bg-white/8 hover:border-white/55 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.08)] transition-all duration-200"
                            >
                                Download Resume
                            </a>
                        </AnimatedSection>
                    </div>

                    {/* Right: Photo */}
                    <AnimatedSection delay={0.25} className="shrink-0">
                        <div className="relative">
                            {/* Outer orbit ring */}
                            <div className="absolute -inset-6 rounded-3xl border border-purple-500/18 animate-nebula-pulse" />
                            {/* Inner orbit ring */}
                            <div className="absolute -inset-2 rounded-3xl border border-pink-500/12 animate-nebula-pulse" style={{ animationDelay: "3s" }} />
                            {/* Orbiting dot — top-right */}
                            <div
                                className="absolute"
                                style={{
                                    top: '-10px', right: '-10px',
                                    width: '10px', height: '10px',
                                    borderRadius: '50%',
                                    background: 'radial-gradient(circle, #c084fc, #7c3aed)',
                                    boxShadow: '0 0 12px rgba(192,132,252,0.9), 0 0 24px rgba(192,132,252,0.45)',
                                    animation: 'float-slow 6s ease-in-out infinite',
                                }}
                            />
                            {/* Orbiting dot — bottom-left */}
                            <div
                                className="absolute"
                                style={{
                                    bottom: '-8px', left: '-8px',
                                    width: '7px', height: '7px',
                                    borderRadius: '50%',
                                    background: 'radial-gradient(circle, #f472b6, #ec4899)',
                                    boxShadow: '0 0 10px rgba(236,72,153,0.9), 0 0 20px rgba(236,72,153,0.4)',
                                    animation: 'float-slow 8s ease-in-out 2s infinite',
                                }}
                            />
                            {/* Pink oval decorations */}
                            <div className="glow-oval absolute animate-glow-oval" style={{ width: "60px", height: "23px", bottom: "-14px", right: "-20px" }} />
                            <div className="glow-oval absolute animate-glow-oval" style={{ width: "40px", height: "16px", top: "-10px", left: "-18px", animationDelay: "2s", background: "rgba(192,132,252,0.32)", boxShadow: "0 0 18px rgba(192,132,252,0.6), 0 0 40px rgba(192,132,252,0.25)" }} />
                            <motion.img
                                src="Images/akhilphotosquare.png"
                                className="rounded-3xl max-w-xs md:max-w-sm border border-white/15 shadow-xl nebula-ring animate-float-slow relative z-10"
                                alt="Akhil Kotturi"
                                whileHover={{ scale: 1.03 }}
                                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                            />
                        </div>
                    </AnimatedSection>

                </div>
            </div>
        </section>
    );
}
