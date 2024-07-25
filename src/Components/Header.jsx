import { Link, NavLink } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function Header() {
    const [text] = useTypewriter({
       words: ['Student','Full Stack Developer','AI Engineer','Web Designer','NLP Researcher'],
       loop: {},
       typeSpeed: 150,
       deleteSpeed: 80,
    });

    return (
        <>
            <div className="wrapper text-white">
                <header className="relative heroElem w-full pt-10 sm:pt-20 md:pb-40 pb-24 m-auto flex justify-center text-center flex-col items-center z-1">
                    <h1 className='lg:text-9xl sm:text-5xl text-5xl font-bold'>Hello, I'm <br />Akhil Kotturi!</h1>
                    <span className="text-green-400 pt-3 lg:text-5xl sm:text-2xl">
                        {text}<Cursor />
                    </span>
                </header>
                
            </div>
        </>
    );
}

