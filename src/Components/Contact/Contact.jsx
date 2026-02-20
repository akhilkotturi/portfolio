import ContactForm from './ContactForm'

export default function Contact() {
    return (
        <>
            <div className="bg-transparent">
                <div className="wrapper-n text-white">
                    <section className="pt-6 sm:pt-10 pb-16 m-auto items-center flex flex-col">
                        <h2 className='lg:text-6xl sm:text-3xl text-5xl font-bold pb-3'>Contact</h2>
                        <p className="text-base md:text-lg text-white/75 pb-10 text-center max-w-2xl">
                            Wanna get in touch? Send me a message.
                        </p>
                        <ContactForm />
                    </section>
                </div>
            </div>
        </>
    );
}

