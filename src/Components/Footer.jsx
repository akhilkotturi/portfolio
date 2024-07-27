export default function Footer() {
    return (
        <>
            <footer class=" pt-10 pb-20 pl-4 pr-4">
                <div className="wrapper text-white">
                    <div className="grid md:grid-cols-3 md:grid-rows-1 grid-rows-3 justify-start">
                    <div className="text-left">
                        <h3 className="text-2xl font-bold">Pages</h3>

                        <ul className="">
                        <li className="mt-4 mb-4">
                            <a href="">Home</a>
                        </li>

                        <li className="mt-4 mb-4">
                            <a href="">Projects</a>
                        </li>
                        </ul>
                    </div>

                    <div className="text-left">
                        <h3 className="text-2xl font-bold">Socials</h3>

                        <ul className="">
                        <li className="mt-4 mb-4">
                            <a href="https://www.linkedin.com/in/akhil-kotturi/" target="_blank"><i class="fa-brands fa-youtube"></i> Linkedin</a>
                        </li>

                        <li className="mt-4 mb-4">
                            <a href="https://github.com/akhilkotturi" target="_blank"><i class="fa-brands fa-linkedin"></i> Github</a>
                        </li>

                        <li className="mt-4 mb-4">
                            <a href="https://www.youtube.com/channel/UCIKvJ8iM6Q7Py8JSqOwAMUQ" target="_blank"><i class="fa-brands fa-linkedin"></i> Youtube</a>
                        </li>
                        </ul>
                    </div>

                    <div className="text-left">
                        <h3 className="text-2xl font-bold">Contact</h3>

                        <ul className="">
                        <li className="mt-4 mb-4"><i class="fa-solid fa-envelope"></i> akhilkcontact@gmail.com</li>
                        </ul>
                    </div>
                    </div>

                    <p className="pt-9">Built with ❤️ by Akhil Kotturi using React & TailwindCSS.</p>
                </div>
            </footer>
        </>
    )
}
