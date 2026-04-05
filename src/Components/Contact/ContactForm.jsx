import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
    const [state, handleSubmit] = useForm("mvgpzjkl");

    if (state.succeeded) {
        return (
            <div className="holographic-card card-glow text-white rounded-3xl p-10 w-full max-w-3xl text-center">
                {/* Expanding rings success animation */}
                <div className="relative flex items-center justify-center mb-6" style={{ height: 80 }}>
                    {[0, 1, 2, 3].map((i) => (
                        <div
                            key={i}
                            className="signal-ring absolute"
                            style={{
                                width:  `${20 + i * 16}px`,
                                height: `${20 + i * 16}px`,
                                animationDelay: `${i * 0.65}s`,
                                borderColor: 'rgba(52,211,153,0.55)',
                            }}
                        />
                    ))}
                    <div className="w-5 h-5 rounded-full bg-emerald-400 z-10"
                         style={{ boxShadow: '0 0 16px rgba(52,211,153,0.9), 0 0 32px rgba(52,211,153,0.45)' }} />
                </div>
                <h3 className="text-3xl font-black mb-3 gradient-text">Transmission Received</h3>
                <p className="text-white/60">Signal confirmed. I'll respond as soon as I can.</p>
                <p className="hud-text mt-4">◈ MESSAGE DELIVERED · AWAITING RESPONSE</p>
            </div>
        );
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="holographic-card card-glow p-6 md:p-10 rounded-3xl flex flex-col w-full max-w-3xl shadow-2xl"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pb-1">
                <div className="text-left w-full">
                    <label htmlFor="name" className="text-white/75 pb-1.5 block text-sm font-medium">
                        Full Name
                    </label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        className="w-full rounded-xl px-4 py-3 bg-white/6 text-white placeholder:text-white/30 border border-white/15 focus:outline-none focus:ring-2 focus:ring-purple-400/55 focus:border-purple-400/55 transition-all"
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>
                <div className="text-left w-full">
                    <label htmlFor="email" className="text-white/75 pb-1.5 block text-sm font-medium">
                        Email Address
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        className="w-full rounded-xl px-4 py-3 bg-white/6 text-white placeholder:text-white/30 border border-white/15 focus:outline-none focus:ring-2 focus:ring-purple-400/55 focus:border-purple-400/55 transition-all"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
            </div>

            <div className="text-left pt-5 md:pt-2">
                <label htmlFor="message" className="text-white/75 pb-1.5 block text-sm font-medium">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    className="w-full h-44 rounded-xl px-4 py-3 bg-white/6 text-white placeholder:text-white/30 border border-white/15 focus:outline-none focus:ring-2 focus:ring-purple-400/55 focus:border-purple-400/55 transition-all resize-none"
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            <button
                type="submit"
                disabled={state.submitting}
                className="mt-6 py-3.5 rounded-2xl font-bold text-white bg-gradient-to-r from-violet-600/35 to-pink-500/35 border border-purple-500/45 hover:from-violet-600/60 hover:to-pink-500/60 hover:border-purple-400/70 hover:shadow-[0_0_35px_rgba(192,132,252,0.35),0_0_60px_rgba(236,72,153,0.15)] hover:scale-[1.02] active:scale-[0.99] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
            >
                <span className="relative z-10 flex items-center justify-center gap-2">
                    {state.submitting ? (
                        <>
                            <span className="w-2 h-2 rounded-full bg-pink-400 animate-data-pulse" />
                            Transmitting…
                        </>
                    ) : (
                        <>Transmit Message</>
                    )}
                </span>
                {/* Shimmer sweep on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-transparent via-white/8 to-transparent -skew-x-12 pointer-events-none" />
            </button>
        </form>
    );
}

export default ContactForm;
