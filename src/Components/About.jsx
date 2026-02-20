export default function About() {

    return (
        <>
            <div className="bg-white">
                <div className="wrapper text-blue-950">
                    <section className="w-full pt-10 sm:pt-20 pb-20 m-auto flex justify-between items-center md:flex-row flex-col-reverse">
                        <div className="md:text-left md:pr-10 pt-10 md:pt-0 text-center flex flex-col items-center md:items-start">
                            <h1 className='lg:text-6xl sm:text-3xl text-5xl font-bold pb-4'>About Me</h1>
                            <p className=""> 
                                I'm Akhil, a student with a passion for software development. I've been interested in the field of CS ever since middle school
                                and have always wanted to change the world in some way. My efforts led me to help start a 
                                non-project, <a className="underline font-semibold" href="https://www.projectucode.org/">Project UCode</a>, which aims to encourage and foster the education of computer science, engineering, and specifically programming
                                through a global platform.<br /><br />
                                In my free time, I enjoy working out, developing more world-changing application, and grinding leetcode!
                            </p>

                            <div className="mt-11 p-3 rounded-2xl bg-blue-950 border-blue-950 border-2 cursor-pointer border-solid w-44 text-center text-white hover:bg-white hover:text-blue-950">
                                <a href="https://drive.google.com/file/d/1YOPIxX_Xy8ptfE-N4-GZBaKavEeTL8u6/view?usp=sharing" target="_blank" rel="noreferrer">Download Resume</a>
                            </div>
                        </div>
                        <img src="Images/akhilphotosquare.png" className="rounded-3xl" alt="akhil-photo" />
                    </section>
                    
                </div>
            </div>
        </>
    );
}

