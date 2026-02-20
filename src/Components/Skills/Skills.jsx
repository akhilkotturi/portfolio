import { skills } from "./SkillsList";

export default function Skills() {

    return (
        <>
            <div className="bg-transparent">
                <div className="wrapper-n text-white">
                    <section className="pt-6 sm:pt-10 pb-12 sm:pb-16 m-auto items-center flex flex-col">
                        <h2 className='lg:text-6xl sm:text-3xl text-5xl font-bold pb-4'>My Skills</h2>
                        <p className="text-white/75 text-sm md:text-lg pb-10 text-center max-w-2xl">
                            What I love to use when I build.
                        </p>
                        <div className="relative max-w-4xl w-full mx-auto grid gap-x-6 gap-y-8 sm:gap-8 md:gap-10 grid-cols-2 sm:grid-cols-3 md:grid-cols-6 items-center place-content-center">
                            {skills.map((item, index) => {
                                return (
                                    <div
                                        title={item.title}
                                        key={index}
                                        className="w-full mx-auto flex items-center flex-col justify-center border border-white/15 bg-white/[0.04] p-4 rounded-2xl hover:scale-105 transition-transform"
                                    >
                                        <img src={item.icon} alt={item.title} style={item.style} className="w-10 h-10" />
                                        <p className="text-xs font-bold mt-3 opacity-90 text-center">
                                            {item.title}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>

                        <a href="projects" className="mt-11 px-5 py-3 rounded-2xl border border-white/50 text-white font-semibold hover:bg-white/20 hover:text-white transition-colors">
                            View My Projects
                        </a>
                    </section>
                </div>
            </div>
        </>
    );
}

