import { Link, NavLink } from "react-router-dom";

export default function ProjectHeader() {

    return (
        <>
            <div className="wrapper text-white">
                <header className="relative heroElem w-full md:pt-24 sm:pt-20 pb-24 h-auto m-auto flex justify-center text-center flex-col items-center z-1">
                    <h1 className='md:text-7xl text-5xl font-bold'>My Projects</h1>
                    <p  className="pt-5 md:w-2/4 text-xs md:text-2xl">
                        Here are  some pretty cool applications I've built throughout my software development journey!
                    </p>
                </header>
            </div>
        </>
    );
}

