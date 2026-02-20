export default function About() {

    return (
        <>
            <div className="bg-transparent">
                <div className="wrapper text-white">
                    <section className="w-full pt-6 sm:pt-10 pb-12 sm:pb-16 m-auto">
                        <div className="p-2 md:p-4 flex justify-between items-center md:flex-row flex-col-reverse gap-10">
                        <div className="md:text-left md:pr-10 text-center flex flex-col items-center md:items-start">
                            <h2 className='lg:text-6xl sm:text-3xl text-5xl font-bold pb-5'>About Me</h2>
                            <p className="text-base md:text-lg leading-relaxed text-white/85"> 
                                I'm Akhil, a student with a passion for software development. I've been interested in the field of CS ever since middle school
                                and have always wanted to change the world in some way. My efforts led me to help start a 
                                non-project, <a className="underline font-semibold text-white" href="https://www.projectucode.org/" target="_blank" rel="noreferrer">Project UCode</a>, which aims to encourage and foster the education of computer science, engineering, and specifically programming
                                through a global platform.<br /><br />
                                In my free time, I enjoy working out, developing more world-changing application, and grinding leetcode!
                            </p>

                            <a
                                href="https://drive.google.com/file/d/1YOPIxX_Xy8ptfE-N4-GZBaKavEeTL8u6/view?usp=sharing"
                                target="_blank"
                                rel="noreferrer"
                                className="mt-9 px-5 py-3 rounded-2xl border border-white/50 text-white font-semibold hover:bg-white/20 hover:text-white transition-colors"
                            >
                                Download Resume
                            </a>
                        </div>
                        <img src="Images/akhilphotosquare.png" className="rounded-3xl max-w-xs md:max-w-sm border border-white/20 shadow-xl" alt="akhil-photo" />
                        </div>
                    </section>
                    
                </div>
            </div>
        </>
    );
}

