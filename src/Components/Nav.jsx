import { Link, NavLink } from "react-router-dom";
import React from "react";

export default function Nav() {
    return (
        <>
            <div className="pt-10 font-normal text-white wrapper">
                <nav className="flex items-center justify-between sticky w-1000">
                    <li className="list-none font-bold text-lg cursor-pointer">
                        <span className="font-black text-xl items-center">
                            <img
                                className="mr-2 transform hover:rotate-180 hover:scale-75 transition-transform duration-500"
                                src="Images/akhillogo.png"
                                width="60"
                            />
                        </span>
                    </li>
                    <ul className="flex items-center space-x-10">
                        <li className="navloc transition transform hover:scale-110 cursor-pointer"><a href="google.com">Home</a></li>
                        <li className="navloc transition transform hover:scale-110 cursor-pointer">Projects</li>
                        <li className="navloc transition transform hover:scale-110 cursor-pointer">Contact</li>
                    </ul>
                </nav>
            </div>
        </>

    );
}
