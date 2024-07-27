import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { projects } from "./ProjectList";

export default function Projects() {

    return (
        <>
            <div className="bg-white">
                <div className="wrapper-n text-white">
                    <section className="pt-10 sm:pt-20 pb-5 m-auto items-left flex flex-col">
                        <div className="relative flex flex-col md:gap-8 justify-between">
                            {projects.map((item, index) => {
                                return (
                                    <div
                                        title={item.title}
                                        key={index}
                                    >
                                        <h3 className="text-darkblue text-4xl text-left font-bold md:pb-5 pb-3">{item.title}</h3>
                                        <div className=" md:p-7 p-3 bg-darkblue md:rounded-3xl rounded-xl mb-10">
                                            <img src={item.photo} className="rounded-xl" />
                                            <p className="text-xs md:text-xl mt-3 opacity-80 text-darkblue bg-white p-2 rounded-xl">
                                                {item.description}
                                            </p>
                                            <div className="flex h-auto mt-3 md:flex-row flex-col-reverse gap-2">
                                                <div className="flex flex-col-reverse md:flex-col justify-between gap-2">
                                                    <div className="p-3 rounded-2xl bg-blue-950 border-blue-950 border-2 cursor-pointer border-solid md:w-auto text-center text-white hover:bg-white hover:text-blue-950">
                                                        <a href={item.live} target="blank">View Live</a>
                                                    </div>
                                                    <div className="p-3 rounded-2xl bg-blue-950 border-blue-950 border-2 cursor-pointer border-solid md:w-auto text-center text-white hover:bg-white hover:text-blue-950">
                                                        <a href={item.repo} target="blank">View Repo</a>
                                                    </div>
                                                </div>
                                                <div className="p-2 rounded-2xl bg-blue-950 border-blue-950 border-2 border-solid md:w-full text-center text-white grid md:grid-cols-3 md:grid-rows-2 gap-3">
                                                    {item.skills.map((skill, index) => {
                                                        return (
                                                            <div
                                                                title={skill.title}
                                                                key={index}
                                                                className="flex items-center justify-center md:justify-normal border-2 p-2 rounded-xl drop-shadow-xl hover:scale-105 gap-2"
                                                            >
                                                                <img src={skill.icon} style={skill.style} className="w-10 h-10"/>
                                                                <h4 className="text-2xl font-bold opacity-80">
                                                                    {skill.title}
                                                                </h4>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        </div>
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

