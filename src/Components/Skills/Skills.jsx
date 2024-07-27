import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { skills } from "./SkillsList";

export default function Skills() {

    return (
        <>
            <div className="bg-darkblue">
                <div className="wrapper-n text-white">
                    <section className="pt-10 sm:pt-20 pb-20 m-auto items-center flex flex-col ">
                        <h1 className='lg:text-6xl sm:text-3xl text-5xl font-bold pb-10'>My Skills</h1>
                        <div className="relative max-w-lg w-full mx-auto md:mx-none grid gap-x-8 gap-y-12 sm:gap-8 md:gap-12 grid-cols-3 sm:grid-cols-6 items-center place-content-center md:pr-10">
                            {skills.map((item, index) => {
                                return (
                                    <div
                                        title={item.title}
                                        key={index}
                                        className="w-20 mx-auto flex items-center flex-col justify-center border-2 p-4 rounded-xl drop-shadow-xl hover:scale-105"
                                    >
                                        <img src={item.icon} style={item.style} />
                                        <p className="text-xs font-bold mt-3 opacity-80">
                                            {item.title}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="mt-11 p-3 rounded-2xl bg-blue-950 border-blue-950 border-2 cursor-pointer border-solid w-44 text-center text-white hover:bg-white hover:text-blue-950">
                                <a href="projects">View My Projects!</a>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}

