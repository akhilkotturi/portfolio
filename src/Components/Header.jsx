import { Link } from "react-router-dom";
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
            <header className="relative w-full flex-1 min-h-0 pt-4 sm:pt-20 pb-8 md:pb-10 flex justify-start text-center flex-col items-center z-10">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-28 left-[2%] w-[34rem] h-[34rem] rounded-full bg-blue-400/22 blur-[140px]" />
                    <div className="absolute top-[-5%] right-[2%] w-[32rem] h-[32rem] rounded-full bg-emerald-300/18 blur-[140px]" />
                </div>
                <div className="wrapper text-white relative">
                    <div className="max-w-4xl mx-auto px-6 md:px-10 pt-0 md:pt-1 pb-3 md:pb-4">
                        <h1 className='lg:text-8xl sm:text-5xl text-5xl font-bold leading-tight'>Hello, I'm <br />Akhil Kotturi</h1>
                        <span className="text-green-300 pt-4 block lg:text-5xl sm:text-2xl text-2xl font-semibold min-h-[3.5rem]">
                            {text}<Cursor />
                        </span>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/projects" className="px-7 py-3 rounded-2xl bg-white text-darkblue font-bold border border-white hover:bg-slate-200 hover:text-darkblue transition-colors">
                                Explore Projects
                            </Link>
                            <a
                                href="https://drive.google.com/file/d/1YOPIxX_Xy8ptfE-N4-GZBaKavEeTL8u6/view?usp=sharing"
                                target="_blank"
                                rel="noreferrer"
                                className="px-7 py-3 rounded-2xl border border-white/50 text-white font-bold hover:bg-white/20 hover:text-white transition-colors"
                            >
                                Download Resume
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

