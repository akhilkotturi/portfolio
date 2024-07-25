import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { skills } from "./SkillsList";

export default function Skills() {

    return (
        <>
            <div className="bg-darkblue">
                <div className="wrapper text-white">
                    <section className="pt-10 sm:pt-20 pb-10 m-auto items-center">
                        <h1 className='lg:text-6xl sm:text-3xl text-5xl font-bold pb-10'>My Skills</h1>
                        <div className="relative max-w-lg w-full mx-auto md:mx-none grid gap-x-8 gap-y-12 sm:gap-8 md:gap-12 grid-cols-3 sm:grid-cols-6 items-center place-content-center">
                            {skills.map((item, index) => {
                                return (
                                    <div
                                        title={item.title}
                                        key={index}
                                        className="w-20 mx-auto flex items-center flex-col justify-center border-2 p-4 rounded-xl drop-shadow-xl hover:scale-105"
                                    >
                                        <img src={item.icon} style={item.style} />
                                        <p className="text-xs text-fun-gray font-bold mt-3 opacity-80">
                                            {item.title}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}

