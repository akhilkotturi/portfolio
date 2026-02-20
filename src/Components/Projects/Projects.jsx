import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { useMemo, useState } from "react";
import { projects } from "./ProjectList";

export default function Projects() {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredProjects = useMemo(() => {
        const normalizedQuery = searchQuery.trim().toLowerCase();

        if (!normalizedQuery) {
            return projects;
        }

        return projects.filter((project) => {
            const searchableText = [
                project.title,
                project.description,
                ...(project.tags || []),
                ...project.skills.map((skill) => skill.title),
            ]
                .join(" ")
                .toLowerCase();

            return searchableText.includes(normalizedQuery);
        });
    }, [searchQuery]);

    return (
        <>
            <div className="bg-white">
                <div className="wrapper-n text-white">
                    <section className="pt-10 sm:pt-20 pb-5 m-auto items-left flex flex-col">
                        <div className="w-full mb-8  top-32 md:top-36 z-20">
                            <div className="rounded-2xl border border-darkblue/10 bg-white/90 backdrop-blur-md shadow-lg p-2 md:p-3">
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(event) => setSearchQuery(event.target.value)}
                                    placeholder="Search projects by title, tech, or tags"
                                    className="w-full text-darkblue bg-white border border-darkblue/25 rounded-xl px-4 py-3 text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-darkblue"
                                    aria-label="Search projects"
                                />
                            </div>
                        </div>
                        <div className="relative flex flex-col md:gap-8 justify-between">
                            {filteredProjects.map((item, index) => {
                                return (
                                    <div
                                        title={item.title}
                                        key={index}
                                    >
                                        <h3 className="text-darkblue text-4xl text-left font-bold md:pb-5 pb-3">{item.title}</h3>
                                        <div className="md:p-7 p-3 bg-darkblue md:rounded-3xl rounded-2xl mb-10 shadow-5xl border border-white/20">
                                            <Swiper
                                                slidesPerView={1}
                                                spaceBetween={30}
                                                loop={true}
                                                pagination={{
                                                    clickable: true,
                                                }}
                                                navigation={true}
                                                modules={[Pagination, Navigation]}
                                                className="mySwiper"
                                            >
                                                {item.photos.map((photo, index) => {
                                                    return (
                                                        <SwiperSlide key={index}><img src={photo} alt={`${item.title} preview ${index + 1}`} className="rounded-2xl" /></SwiperSlide>
                                                    );
                                                })}
                                            </Swiper>
                                            <p className="text-xs md:text-xl mt-4 opacity-90 text-darkblue bg-white p-3 rounded-2xl leading-relaxed">
                                                {item.description}
                                            </p>
                                            <div className="flex h-auto mt-4 md:flex-row flex-col-reverse gap-3">
                                                <div className="flex flex-col-reverse md:flex-col justify-between gap-2">
                                                    <a href={item.live} target="_blank" rel="noreferrer" className="p-3 rounded-2xl bg-blue-950 border border-white/30 cursor-pointer md:w-auto text-center text-white hover:bg-white/20 hover:text-white transition-colors">
                                                        View Live
                                                    </a>
                                                    <a href={item.repo} target="_blank" rel="noreferrer" className="p-3 rounded-2xl bg-blue-950 border border-white/30 cursor-pointer md:w-auto text-center text-white hover:bg-white/20 hover:text-white transition-colors">
                                                        View Repo
                                                    </a>
                                                </div>
                                                <div className="p-3 rounded-2xl bg-blue-950 border border-white/25 md:w-full text-center text-white grid md:grid-cols-3 md:grid-rows-2 gap-3">
                                                    {item.skills.map((skill, index) => {
                                                        return (
                                                            <div
                                                                title={skill.title}
                                                                key={index}
                                                                className="flex items-center justify-center md:justify-normal border border-white/20 p-2 rounded-xl drop-shadow-xl hover:scale-105 transition-transform gap-2"
                                                            >
                                                                <img src={skill.icon} alt={skill.title} style={skill.style} className="w-10 h-10" />
                                                                <h4 className="text-xl font-bold opacity-90">
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

                            {filteredProjects.length === 0 && (
                                <div className="text-darkblue text-left text-xl font-semibold pb-10">
                                    No projects found. Try a different keyword.
                                </div>
                            )}
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}

