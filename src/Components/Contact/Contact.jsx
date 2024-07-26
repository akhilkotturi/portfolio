import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import ContactForm from './ContactForm'

export default function Contact() {
    useEffect(() => {
        const widgetScriptSrc = 'https://tally.so/widgets/embed.js';

        // const load = () => {
        //   // Load Tally embeds
        //   if (typeof Tally !== 'undefined') {
        //     Tally.loadEmbeds();
        //     return;
        //   }

        //   // Fallback if window.Tally is not available
        //   document
        //     .querySelectorAll('iframe[data-tally-src]:not([src])')
        //     .forEach((iframeEl) => {
        //       iframeEl.src = iframeEl.dataset.tallySrc;
        //     });
        // };

        // // If Tally is already loaded, load the embeds
        // if (typeof Tally !== 'undefined') {
        //   load();
        //   return;
        // }

        // If the Tally widget script is not loaded yet, load it
        // if (document.querySelector(`script[src="${widgetScriptSrc}"]`) === null) {
        //   const script = document.createElement('script');
        //   script.src = widgetScriptSrc;
        //   script.onload = load;
        //   script.onerror = load;
        //   document.body.appendChild(script);
        //   return;
        // }
    }, []);

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

