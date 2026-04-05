function SignalBars() {
    const heights = [8, 12, 16, 12, 8];
    const activeCount = 4;
    return (
        <div className="flex items-end gap-0.5" aria-hidden="true">
            {heights.map((h, i) => (
                <div
                    key={i}
                    className={`signal-bar ${i < activeCount ? 'active' : ''}`}
                    style={{ height: `${h}px` }}
                />
            ))}
        </div>
    );
}

export default function Footer() {
    return (
        <footer className="pt-14 pb-10 px-4 relative overflow-hidden">
            {/* Top nebula divider */}
            <div className="nebula-divider mb-14" />

            {/* Background nebula glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] rounded-full pointer-events-none"
                 style={{ background: 'radial-gradient(ellipse, rgba(124,58,237,0.08) 0%, transparent 70%)', filter: 'blur(40px)' }} />

            <div className="wrapper text-white relative z-10">
                <div className="grid md:grid-cols-3 gap-10 mb-12">
                    <div>
                        <h3 className="text-sm font-bold mb-4 text-white/90 tracking-wide">Navigation</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="/" className="text-white/45 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                                    <span className="w-1 h-1 rounded-full bg-purple-500/60 group-hover:bg-purple-400 group-hover:shadow-[0_0_6px_rgba(192,132,252,0.9)] transition-all" />
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/projects" className="text-white/45 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                                    <span className="w-1 h-1 rounded-full bg-purple-500/60 group-hover:bg-purple-400 group-hover:shadow-[0_0_6px_rgba(192,132,252,0.9)] transition-all" />
                                    Projects
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-bold mb-4 text-white/90 tracking-wide">Socials</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="https://www.linkedin.com/in/akhil-kotturi/" target="_blank" rel="noreferrer" className="text-white/45 hover:text-pink-300 transition-colors text-sm flex items-center gap-2">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 shrink-0" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/akhilkotturi" target="_blank" rel="noreferrer" className="text-white/45 hover:text-purple-300 transition-colors text-sm flex items-center gap-2">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 shrink-0" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/channel/UCIKvJ8iM6Q7Py8JSqOwAMUQ" target="_blank" rel="noreferrer" className="text-white/45 hover:text-pink-300 transition-colors text-sm flex items-center gap-2">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 shrink-0" aria-hidden="true"><path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>
                                    YouTube
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-bold mb-4 text-white/90 tracking-wide">Contact</h3>
                        <ul className="space-y-3">
                            <li className="text-white/45 text-sm flex items-center gap-2">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-3.5 h-3.5 shrink-0" aria-hidden="true"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                akhilk@utexas.edu
                            </li>
                        </ul>

                        {/* Signal strength */}
                        <div className="mt-5 flex items-center gap-2">
                            <SignalBars />
                            <span className="galactic-coord">SIGNAL STRONG</span>
                        </div>
                    </div>
                </div>

                {/* Galactic coordinates bottom strip */}
                <div className="border-t border-white/6 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <p className="text-white/28 text-xs">
                        Built with ❤️ by Akhil Kotturi using Vite + TailwindCSS.
                    </p>
                    <div className="flex items-center gap-3">
                        <span className="galactic-coord">SECTOR: MILKY WAY · SOL·III · AUSTIN, TX</span>
                        <span className="galactic-coord animate-data-pulse">◈</span>
                        <span className="galactic-coord">30.27°N · 97.74°W</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
