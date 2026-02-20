import { useEffect, useState } from "react";

export default function TopButton() {
    const [topButton, setTopButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setTopButton(true);
            } else {
                setTopButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <>
        {topButton && (
            <button onClick={scrollUp} className="z-[80] fixed bottom-8 right-8 h-12 w-12 rounded-full bg-white text-darkblue shadow-2xl hover:scale-105 transition-transform inline-flex items-center justify-center" aria-label="Scroll to top">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M12 5L6 11M12 5L18 11M12 5V19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        )}
        </>
    );
}