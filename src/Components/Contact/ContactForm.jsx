import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
    const [state, handleSubmit] = useForm("mvgpzjkl");
    if (state.succeeded) {
        return (
            <div className='bg-white/[0.04] text-white rounded-3xl p-10 w-full max-w-3xl text-center border border-white/20'>
                <h3 className='text-3xl font-bold mb-3'>Message Sent</h3>
                <p className='text-white/80'>Thanks for your response! I will try to get back as soon as I can.</p>
            </div>
        );
    }
    return (
        <form onSubmit={handleSubmit} className='bg-white/[0.04] p-6 md:p-10 rounded-3xl flex flex-col w-full max-w-3xl border border-white/20 shadow-2xl'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 pb-1'>
                <div className='text-left w-full'>
                    <label htmlFor="name" className='text-white pb-1 block font-medium'>
                        Full Name
                    </label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        className='w-full rounded-xl px-3 py-3 bg-white/10 text-white placeholder:text-white/60 border border-white/25 focus:outline-none focus:ring-2 focus:ring-white/50'
                    />
                    <ValidationError
                        prefix="Name"
                        field="name"
                        errors={state.errors}
                    />
                </div>
                <div className='text-left w-full'>
                    <label htmlFor="email" className='text-white pb-1 block font-medium'>
                        Email Address
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        className='w-full rounded-xl px-3 py-3 bg-white/10 text-white placeholder:text-white/60 border border-white/25 focus:outline-none focus:ring-2 focus:ring-white/50'
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                </div>
            </div>
            <div className='text-left pt-5 md:pt-1'>
            <label htmlFor="message" className='text-white pb-1 block font-medium'>
                Message
            </label>
            <textarea
                id="message"
                name="message"
                className='w-full h-44 rounded-xl px-3 py-3 bg-white/10 text-white placeholder:text-white/60 border border-white/25 focus:outline-none focus:ring-2 focus:ring-white/50'
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            </div>
            <button type="submit" disabled={state.submitting} className='text-white bg-white/10 rounded-2xl font-bold mt-6 py-3 border border-white/40 hover:bg-white/20 hover:text-white transition-colors'>
                {state.submitting ? "Sending..." : "Submit"}
            </button>
        </form>
    );
}

export default ContactForm;