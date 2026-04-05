import { useMemo } from 'react';

function rand(min, max) {
    return Math.random() * (max - min) + min;
}

const STAR_COLORS = [
    'white', 'white', 'white', 'white', 'white', 'white',
    'rgb(216,180,254)',   // violet-300
    'rgb(249,168,212)',   // pink-300
    'rgb(167,139,250)',   // violet-400
    'rgb(186,230,253)',   // sky-200 (cold blue star)
    'rgb(253,224,71)',    // yellow-300 (warm star)
    'rgb(196,254,255)',   // cyan shimmer
];

const NEBULA_CLOUDS = [
    { top: 12, left: 62,  color: 'rgba(124,58,237,0.09)',  size: 520, duration: 28, delay: 0  },
    { top: 52, left: 90,  color: 'rgba(236,72,153,0.07)',  size: 440, duration: 35, delay: 7  },
    { top: 78, left: 28,  color: 'rgba(167,139,250,0.08)', size: 380, duration: 22, delay: 4  },
    { top: 32, left: 6,   color: 'rgba(99,102,241,0.07)',  size: 350, duration: 32, delay: 12 },
    { top: 65, left: 55,  color: 'rgba(56,189,248,0.05)',  size: 300, duration: 26, delay: 9  },
];

const AURORA_BANDS = [
    {
        top: 6, height: 2,
        color: 'linear-gradient(90deg, transparent 0%, rgba(124,58,237,0.55) 30%, rgba(167,139,250,0.65) 55%, rgba(192,132,252,0.45) 75%, transparent 100%)',
        duration: 18, delay: 0,
    },
    {
        top: 10, height: 3,
        color: 'linear-gradient(90deg, rgba(236,72,153,0.15) 0%, rgba(124,58,237,0.4) 25%, rgba(192,132,252,0.5) 50%, rgba(236,72,153,0.3) 75%, transparent 100%)',
        duration: 25, delay: 5,
    },
    {
        top: 16, height: 2,
        color: 'linear-gradient(90deg, transparent 0%, rgba(99,102,241,0.35) 35%, rgba(167,139,250,0.45) 60%, transparent 100%)',
        duration: 21, delay: 11,
    },
    {
        top: 22, height: 1,
        color: 'linear-gradient(90deg, rgba(56,189,248,0.1) 0%, rgba(56,189,248,0.3) 40%, rgba(124,58,237,0.25) 70%, transparent 100%)',
        duration: 30, delay: 17,
    },
];

export default function StarField() {
    // Three depth layers — distant, mid, close (lean counts for smooth scroll)
    const distantStars = useMemo(() => Array.from({ length: 65 }, (_, i) => ({
        id: `d${i}`,
        top: rand(0, 100), left: rand(0, 100),
        size: rand(0.4, 1.1),
        delay: rand(0, 14), duration: rand(5, 11),
        slow: true,
        color: 'white',
        opacity: rand(0.15, 0.45),
    })), []);

    const midStars = useMemo(() => Array.from({ length: 35 }, (_, i) => ({
        id: `m${i}`,
        top: rand(0, 100), left: rand(0, 100),
        size: rand(1.1, 2.2),
        delay: rand(0, 9), duration: rand(2.5, 7),
        slow: false,
        color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
        opacity: rand(0.4, 0.88),
    })), []);

    const closeStars = useMemo(() => Array.from({ length: 10 }, (_, i) => ({
        id: `c${i}`,
        top: rand(0, 100), left: rand(0, 100),
        size: rand(2.2, 3.6),
        delay: rand(0, 5), duration: rand(2, 4.5),
        slow: false,
        color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
        opacity: rand(0.7, 1),
        glow: true,
    })), []);

    const shootingStars = useMemo(() => [
        { top: 9,  left: -2, delay: 5,  duration: 5.5, angle: -22, color: 'rgba(249,168,212,0.85)', width: 110 },
        { top: 28, left: -2, delay: 15, duration: 7,   angle: -16, color: 'rgba(192,132,252,0.95)', width: 130 },
        { top: 6,  left: -2, delay: 26, duration: 4.5, angle: -30, color: 'rgba(186,230,253,0.85)', width: 100 },
        { top: 18, left: -2, delay: 38, duration: 6,   angle: -20, color: 'rgba(249,168,212,0.78)', width: 120 },
        { top: 42, left: -2, delay: 52, duration: 5,   angle: -14, color: 'rgba(167,139,250,0.92)', width: 115 },
        { top: 14, left: -2, delay: 68, duration: 8,   angle: -25, color: 'rgba(196,254,255,0.7)',  width: 90  },
    ], []);

    const allStars = [...distantStars, ...midStars, ...closeStars];

    return (
        <div
            className="fixed inset-0 overflow-hidden pointer-events-none"
            style={{ zIndex: 0 }}
            aria-hidden="true"
        >
            {/* Drifting nebula cloud patches */}
            {NEBULA_CLOUDS.map((cloud, i) => (
                <div
                    key={`cloud-${i}`}
                    className="absolute rounded-full"
                    style={{
                        top: `${cloud.top}%`,
                        left: `${cloud.left}%`,
                        width:  `${cloud.size}px`,
                        height: `${cloud.size}px`,
                        background: `radial-gradient(circle, ${cloud.color}, transparent 68%)`,
                        filter: 'blur(45px)',
                        transform: 'translate(-50%, -50%)',
                        animation: `nebula-drift ${cloud.duration}s ease-in-out ${cloud.delay}s infinite`,
                        willChange: 'transform',
                    }}
                />
            ))}

            {/* Aurora bands near top */}
            {AURORA_BANDS.map((band, i) => (
                <div
                    key={`aurora-${i}`}
                    className="aurora-band"
                    style={{
                        top: `${band.top}%`,
                        height: `${band.height}px`,
                        background: band.color,
                        animationDuration: `${band.duration}s`,
                        animationDelay: `${band.delay}s`,
                        willChange: 'transform, opacity',
                    }}
                />
            ))}

            {/* Stars — all depth layers */}
            {allStars.map((star) => (
                <div
                    key={star.id}
                    className={`absolute rounded-full ${star.slow ? 'animate-twinkle-slow' : 'animate-twinkle'}`}
                    style={{
                        top:               `${star.top}%`,
                        left:              `${star.left}%`,
                        width:             `${star.size}px`,
                        height:            `${star.size}px`,
                        background:        star.color,
                        opacity:           star.opacity,
                        animationDelay:    `${star.delay}s`,
                        animationDuration: `${star.duration}s`,
                        boxShadow:         star.glow ? `0 0 ${star.size * 2.5}px ${star.color}, 0 0 ${star.size * 5}px ${star.color}40` : 'none',
                    }}
                />
            ))}

            {/* Shooting stars */}
            {shootingStars.map((s, i) => (
                <div
                    key={`shoot-${i}`}
                    className="animate-shooting-star"
                    style={{
                        top:               `${s.top}%`,
                        left:              `${s.left}%`,
                        animationDelay:    `${s.delay}s`,
                        animationDuration: `${s.duration}s`,
                        transform:         `rotate(${s.angle}deg)`,
                    }}
                >
                    <div
                        style={{
                            width:        `${s.width}px`,
                            height:       '1.5px',
                            background:   `linear-gradient(90deg, transparent 0%, ${s.color} 52%, rgba(255,255,255,0.98) 100%)`,
                            borderRadius: '9999px',
                            boxShadow:    `0 0 7px ${s.color}, 0 0 14px ${s.color}60`,
                        }}
                    />
                </div>
            ))}
        </div>
    );
}
