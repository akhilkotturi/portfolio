import ContactForm from './ContactForm'

export default function Contact() {
    return (
        <>
            <div className="bg-white">
                <div className="wrapper-n text-blue-950">
                    <section className="pt-10 sm:pt-20 pb-20 m-auto items-center flex flex-col">
                        <h1 className='lg:text-6xl sm:text-3xl text-5xl font-bold pb-10'>Get In Touch!</h1>
                        <ContactForm />
                    </section>
                </div>
            </div>
        </>
    );
}

