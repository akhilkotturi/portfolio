import AnimatedSection from '../AnimatedSection';
import ContactForm from './ContactForm';

function SignalAntenna() {
    return (
        <div className="flex flex-col items-center mb-10 select-none" aria-hidden="true">
            {/* Antenna mast */}
            <div className="relative flex items-center justify-center" style={{ width: 80, height: 80 }}>
                {/* Expanding signal rings */}
                {[0, 1, 2].map((i) => (
                    <div
                        key={i}
                        className="signal-ring absolute"
                        style={{
                            width:  `${28 + i * 18}px`,
                            height: `${28 + i * 18}px`,
                            animationDelay: `${i * 0.8}s`,
                        }}
                    />
                ))}
                {/* Center dot */}
                <div
                    className="relative z-10 w-4 h-4 rounded-full bg-gradient-to-br from-violet-400 to-pink-500 animate-data-pulse"
                    style={{ boxShadow: '0 0 14px rgba(192,132,252,0.85), 0 0 28px rgba(236,72,153,0.4)' }}
                />
            </div>
            {/* HUD label */}
            <p className="hud-text mt-1" style={{ fontSize: 9 }}>
                ◈ SIGNAL ACTIVE · AWAITING TRANSMISSION
            </p>
        </div>
    );
}

export default function Contact() {
    return (
        <section className="bg-transparent py-24">
            <div className="wrapper-n text-white">
                <AnimatedSection className="flex flex-col items-center mb-12">
                    <SignalAntenna />
                    <span className="section-label mb-4">Get In Touch</span>
                    <h2 className="lg:text-6xl text-5xl font-black gradient-text pb-3 text-center cosmic-glow mt-4">
                        Let's Talk
                    </h2>
                    <p className="text-base md:text-lg text-white/50 text-center max-w-xl leading-relaxed">
                        Got a project in mind or just want to say hi? Send me a message.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="w-full flex justify-center" delay={0.15}>
                    <ContactForm />
                </AnimatedSection>
            </div>
        </section>
    );
}
