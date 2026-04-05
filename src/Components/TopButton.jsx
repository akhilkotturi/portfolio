import { useEffect, useState } from "react";

export default function TopButton() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => setVisible(window.scrollY > 120);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!visible) return null;

    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="z-[80] fixed bottom-8 right-8 h-12 w-12 rounded-full glass-card border border-purple-500/35 text-white shadow-2xl hover:scale-110 hover:border-pink-400/60 hover:shadow-[0_0_24px_rgba(236,72,153,0.4)] transition-all duration-200 inline-flex items-center justify-center"
            aria-label="Scroll to top"
        >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" aria-hidden="true">
                <path d="M12 5L6 11M12 5L18 11M12 5V19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </button>
    );
}
