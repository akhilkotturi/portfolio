import { Link, NavLink } from "react-router-dom";

export default function About() {

    return (
        <>
            <div className="bg-white">
                <div className="wrapper text-blue-950">
                    <section className="w-full pt-10 sm:pt-20 pb-40 m-auto flex justify-between md:flex-row flex-col">
                        <div className="md:text-left md:pr-10 pb-10">
                            <h1 className='lg:text-6xl sm:text-3xl text-5xl font-bold pb-4'>About Me</h1>
                            <p className=""> 
                                I'm Akhil, a student with a passion for software development. I've been interested in the field of CS ever since middle school
                                and have always wanted to change the world in some way. My efforts led me to help start a 
                                non-project, <a className="underline font-semibold" href="projectucode.org">Project UCode</a>, which aims to encourage and foster the education of computer science, engineering, and specifically programming
                                through a global platform.<br /><br />
                                In my free time, I enjoy working out, developing more world-changing application, and grinding leetcode!
                            </p>
                        </div>
                        <img src="Images/akhilphoto.png" alt="akhil-photo" />
                    </section>
                    
                </div>
            </div>
        </>
    );
}

