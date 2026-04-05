import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useScroll } from "framer-motion";

export default function Nav() {
    const { scrollYProgress } = useScroll();
    const [scaleX, setScaleX] = useState(0);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const unsubscribe = scrollYProgress.onChange((v) => setScaleX(v));
        return unsubscribe;
    }, [scrollYProgress]);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isHome     = location.pathname === "/";
    const isProjects = location.pathname === "/projects";

    return (
        <>
            <div className="nav-progress-bar" style={{ transform: `scaleX(${scaleX})` }} />

            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                    scrolled
                        ? "bg-[#0a0514]/90 backdrop-blur-2xl border-b border-white/8 shadow-[0_1px_40px_rgba(124,58,237,0.1)]"
                        : "bg-transparent"
                }`}
            >
                <div className="wrapper flex items-center justify-between h-14 md:h-16">
                    <Link to="/" className="shrink-0">
                        <img
                            className="transform hover:rotate-12 hover:scale-110 transition-transform duration-300"
                            src="Images/akhillogo.png"
                            alt="Akhil logo"
                            width="46"
                        />
                    </Link>

                    {/* HUD coordinates — desktop only */}
                    <div className="hidden lg:flex items-center gap-2 hud-text select-none">
                        <span className="animate-data-pulse">◈</span>
                        <span>30.27°N · 97.74°W · SOL·III</span>
                    </div>

                    <div className="flex items-center gap-1 p-1 rounded-2xl bg-white/[0.04] border border-white/[0.07]">
                        <Link
                            to="/"
                            className={`relative px-4 py-1.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                                isHome
                                    ? "text-white bg-gradient-to-r from-violet-600/25 to-pink-500/15 shadow-[0_0_20px_rgba(192,132,252,0.35),inset_0_0_12px_rgba(192,132,252,0.08)] border border-purple-500/30"
                                    : "text-white/55 hover:text-white hover:bg-white/8"
                            }`}
                        >
                            {isHome && <span className="absolute top-1 right-1.5 w-1.5 h-1.5 rounded-full bg-pink-400 shadow-[0_0_6px_rgba(236,72,153,0.9)] animate-data-pulse" />}
                            Home
                        </Link>
                        <Link
                            to="/projects"
                            className={`relative px-4 py-1.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                                isProjects
                                    ? "text-white bg-gradient-to-r from-violet-600/25 to-pink-500/15 shadow-[0_0_20px_rgba(192,132,252,0.35),inset_0_0_12px_rgba(192,132,252,0.08)] border border-purple-500/30"
                                    : "text-white/55 hover:text-white hover:bg-white/8"
                            }`}
                        >
                            {isProjects && <span className="absolute top-1 right-1.5 w-1.5 h-1.5 rounded-full bg-pink-400 shadow-[0_0_6px_rgba(236,72,153,0.9)] animate-data-pulse" />}
                            Projects
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
}
