export default function Footer() {
    return (
        <>
            <footer className="pt-14 pb-16 pl-4 pr-4 border-t border-white/10">
                <div className="wrapper text-white">
                    <div className="grid md:grid-cols-3 md:grid-rows-1 grid-rows-3 gap-10 justify-start">
                    <div className="text-left">
                        <h3 className="text-2xl font-bold">Pages</h3>

                        <ul className="">
                        <li className="mt-4 mb-4 text-white/80 hover:text-white transition-colors">
                            <a href="/">Home</a>
                        </li>

                        <li className="mt-4 mb-4 text-white/80 hover:text-white transition-colors">
                            <a href="/projects">Projects</a>
                        </li>
                        </ul>
                    </div>

                    <div className="text-left">
                        <h3 className="text-2xl font-bold">Socials</h3>

                        <ul className="">
                        <li className="mt-4 mb-4 text-white/80 hover:text-white transition-colors">
                            <a href="https://www.linkedin.com/in/akhil-kotturi/" target="_blank" rel="noreferrer"><i className="fa-brands fa-youtube"></i> Linkedin</a>
                        </li>

                        <li className="mt-4 mb-4 text-white/80 hover:text-white transition-colors">
                            <a href="https://github.com/akhilkotturi" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i> Github</a>
                        </li>

                        <li className="mt-4 mb-4 text-white/80 hover:text-white transition-colors">
                            <a href="https://www.youtube.com/channel/UCIKvJ8iM6Q7Py8JSqOwAMUQ" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i> Youtube</a>
                        </li>
                        </ul>
                    </div>

                    <div className="text-left">
                        <h3 className="text-2xl font-bold">Contact</h3>

                        <ul className="">
                        <li className="mt-4 mb-4 text-white/80"><i className="fa-solid fa-envelope"></i> akhilk@utexas.edu</li>
                        </ul>
                    </div>
                    </div>

                    <p className="pt-10 text-white/70 text-sm md:text-base">Built with ❤️ by Akhil Kotturi using React + TailwindCSS.</p>
                </div>
            </footer>
        </>
    )
}
