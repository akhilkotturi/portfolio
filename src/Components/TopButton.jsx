import React from "react";
import { useEffect, useState } from "react";

export default function TopButton() {
    const [topButton, setTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                setTopButton(true)
            }
            else {
                setTopButton(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <>
        {topButton && (
            <button className="fixed bottom-14 right-14 h-14 w-14 text-5xl">^</button>
        )}
        </>
    );
}