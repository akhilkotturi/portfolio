import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <>
            <div className="pt-6 md:pt-8 font-normal text-white wrapper sticky top-0 z-50">
                <nav className="flex items-center justify-between w-full px-3 md:px-5 py-3 rounded-2xl border border-white/20 bg-white/[0.04] backdrop-blur-sm">
                    <li className="list-none font-bold text-lg cursor-pointer">
                        <span className="font-black text-xl items-center">
                            <Link to="/">
                            <img
                                className="mr-2 transform hover:rotate-12 hover:scale-105 transition-transform duration-300"
                                src="Images/akhillogo.png"
                                alt="Akhil logo"
                                width="60"
                            />
                            </Link>
                        </span>
                    </li>
                    <ul className="flex items-center space-x-3 md:space-x-5">
                        <li className="navloc transition transform hover:scale-105 cursor-pointer">
                            <Link to="/" className="block px-4 py-2 rounded-xl text-white/90 hover:bg-white/20 hover:text-white transition-colors">Home</Link>
                        </li>
                        <li className="navloc transition transform hover:scale-105 cursor-pointer">
                            <Link to="/projects" className="block px-4 py-2 rounded-xl text-white/90 hover:bg-white/20 hover:text-white transition-colors">Projects</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>

    );
}
