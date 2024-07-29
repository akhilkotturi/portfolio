import { Link, NavLink } from "react-router-dom";
import React from "react";

export default function Nav() {
    return (
        <>
            <div className="pt-10 font-normal text-white wrapper">
                <nav className="flex items-center justify-between sticky w-1000">
                    <li className="list-none font-bold text-lg cursor-pointer">
                        <span className="font-black text-xl items-center">
                            <Link to="/">
                            <img
                                className="mr-2 transform hover:rotate-180 hover:scale-75 transition-transform duration-500"
                                src="Images/akhillogo.png"
                                width="60"
                            />
                            </Link>
                        </span>
                    </li>
                    <ul className="flex items-center space-x-10">
                        <li className="navloc transition transform hover:scale-110 cursor-pointer"><Link to="/">Home</Link></li>
                        <li className="navloc transition transform hover:scale-110 cursor-pointer"><Link to="/projects">Projects</Link></li>
                    </ul>
                </nav>
            </div>
        </>

    );
}
