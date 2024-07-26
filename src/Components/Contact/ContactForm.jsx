import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
    const [state, handleSubmit] = useForm("mvgpzjkl");
    if (state.succeeded) {
        return <p>Thanks for your response! I will try to get back as soon as I can.</p>;
    }
    return (
        <form onSubmit={handleSubmit} className='bg-darkblue p-10 rounded-2xl flex flex-col w-max'>
            <div className='flex flex-col md:flex-row justify-between gap-5 pb-1'>
                <div className='text-left'>
                    <label htmlFor="name" className='text-white pb-1'>
                        Full Name
                    </label>
                    <input
                        id="name"
                        type="name"
                        name="name"
                        className='w-full'
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                </div>
                <div className='text-left'>
                    <label htmlFor="email" className='text-white'>
                        Email Address
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        className='w-full'
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                </div>
            </div>
            <div className='text-left pt-5 md:pt-1'>
            <label htmlFor="message" className='text-white pb-1'>
                Message
            </label>
            <textarea
                id="message"
                name="message"
                className='w-full h-60'
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            </div>
            <button type="submit" disabled={state.submitting} className='text-white pt-5 bg'>
                Submit
            </button>
        </form>
    );
}

function App() {
    return (
        <ContactForm />
    );
}

export default App;