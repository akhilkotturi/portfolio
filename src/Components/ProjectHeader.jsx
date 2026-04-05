import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export default function ProjectHeader() {
    return (
        <div className="wrapper text-white">
            <header className="relative w-full pt-32 md:pt-36 pb-20 flex justify-center text-center flex-col items-center z-10 overflow-hidden">

                {/* Decorative nebula orbs */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-[30rem] h-[22rem] rounded-full bg-violet-600/22 blur-[130px] animate-nebula-pulse" />
                    <div className="absolute top-0 right-1/4 w-[24rem] h-[20rem] rounded-full bg-pink-500/18 blur-[110px] animate-nebula-pulse" style={{ animationDelay: "3s" }} />
                </div>

                {/* Pink oval decorations */}
                <div className="absolute top-16 left-[8%] glow-oval animate-glow-oval" style={{ width: "70px", height: "27px" }} />
                <div className="absolute top-24 right-[10%] glow-oval animate-glow-oval" style={{ width: "50px", height: "20px", animationDelay: "2s", background: "rgba(192,132,252,0.3)", boxShadow: "0 0 20px rgba(192,132,252,0.65), 0 0 45px rgba(192,132,252,0.28)" }} />

                <AnimatedSection className="relative z-10">
                    <p className="text-pink-400/80 text-sm font-semibold tracking-[0.2em] uppercase mb-4">
                        Portfolio
                    </p>
                    <h1 className="md:text-7xl text-5xl font-black gradient-text leading-tight">
                        My Projects
                    </h1>
                    <motion.p
                        className="pt-5 md:w-2/3 mx-auto text-base md:text-lg text-white/55 leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.35, duration: 0.8 }}
                    >
                        Here are some pretty cool applications I've built throughout my software development journey!
                    </motion.p>
                </AnimatedSection>
            </header>
        </div>
    );
}
