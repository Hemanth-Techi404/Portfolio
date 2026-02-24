import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

/* ── Tech stack floating icons ── */
const techStack = [
    {
        name: 'JavaScript',
        color: '#F7DF1E',
        bg: '#333',
        icon: (
            <svg viewBox="0 0 24 24" width="28" height="28" fill="#F7DF1E">
                <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
            </svg>
        ),
    },
    {
        name: 'React',
        color: '#61DAFB',
        bg: '#1a2030',
        icon: (
            <svg viewBox="0 0 24 24" width="28" height="28" fill="#61DAFB">
                <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.292zM5.141 20.91c-.58 0-1.004-.113-1.358-.31-1.059-.609-1.424-2.774-.98-5.55.096-.43.21-.86.34-1.29.96.236 2.006.416 3.107.534.66.905 1.345 1.727 2.035 2.446-1.594 1.48-3.089 2.292-4.105 2.292zm2.254-3.76a18.99 18.99 0 0 1-1.65-.197 18.84 18.84 0 0 1 1.215-2.09c.175.35.38.7.59 1.05.2.35.41.69.6 1.01-.245.073-.494.144-.755.227zm5.61 3.445a18.99 18.99 0 0 1-.944-.924c.345-.03.688-.07 1.026-.12a18.99 18.99 0 0 1-.082 1.044zm2.524-5.083a18.84 18.84 0 0 1-.59-1.05c-.2-.35-.41-.69-.6-1.01.245-.073.494-.144.755-.227a18.99 18.99 0 0 1 1.65.197 18.84 18.84 0 0 1-1.215 2.09zm.944.924c-.345.03-.688.07-1.026.12a18.99 18.99 0 0 1 .082-1.044c.31.3.618.612.944.924zm-8.174 1.508a18.84 18.84 0 0 1-1.215-2.09 18.99 18.99 0 0 1 1.65-.197c-.21.32-.4.66-.59 1.01-.2.35-.381.7-.59 1.05.245.073.494.144.755.227zm-1.026-.2a18.99 18.99 0 0 1 .082-1.044c-.31.3-.618.612-.944.924.345.03.688.07 1.026.12zM12 8.462c.463.532.926 1.12 1.38 1.77-.463-.02-.926-.03-1.38-.03-.463 0-.926.01-1.38.03.454-.65.917-1.238 1.38-1.77zM10.52 9.28a18.84 18.84 0 0 1 .59 1.05c.2.35.41.69.6 1.01-.245.073-.494.144-.755.227a18.99 18.99 0 0 1-1.65-.197 18.84 18.84 0 0 1 1.215-2.09zm-2.048 2.09a18.99 18.99 0 0 1-1.65.197c-.245-.073-.494-.144-.755-.227.21-.32.4-.66.59-1.01.199-.35.38-.7.59-1.05a18.84 18.84 0 0 1 1.225 2.09zm-.944-.924a18.99 18.99 0 0 1-.082 1.044c-.31-.3-.618-.612-.944-.924.345-.03.688-.07 1.026-.12zm0-1.507a18.99 18.99 0 0 1 .082 1.044c.31-.3.618-.612.944-.924-.345-.03-.688-.07-1.026-.12z" />
            </svg>
        ),
    },
    {
        name: 'Node.js',
        color: '#68A063',
        bg: '#1a2a1a',
        icon: (
            <svg viewBox="0 0 24 24" width="28" height="28" fill="#68A063">
                <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z" />
            </svg>
        ),
    },
    {
        name: 'Express.js',
        color: '#ffffff',
        bg: '#111',
        icon: (
            <svg viewBox="0 0 24 24" width="28" height="28" fill="white">
                <path d="M24 18.588a1.529 1.529 0 0 1-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 0 1 1.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 0 0 0 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 0 0 2.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 0 1-2.589 3.957 6.272 6.272 0 0 1-7.306-.933 6.575 6.575 0 0 1-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 0 1 0 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z" />
            </svg>
        ),
    },
    {
        name: 'Next.js',
        color: '#ffffff',
        bg: '#000',
        icon: (
            <svg viewBox="0 0 24 24" width="28" height="28" fill="white">
                <path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2235.021-.3structured.0514l-.1196.0283-.0842.0085-.0674.0101a10.9918 10.9918 0 0 0-2.7474 1.0527 10.979 10.979 0 0 0-4.3663 4.8197 10.9908 10.9908 0 0 0-.6603 2.7373L2.0039 8.8l-.0109.0814a11.0068 11.0068 0 0 0 .0001 2.2359l.0097.095.0027.0218a10.9842 10.9842 0 0 0 .6673 2.7441 10.9906 10.9906 0 0 0 4.3663 4.8197 10.9936 10.9936 0 0 0 5.5 1.4703c4.1136 0 7.807-2.2778 9.7183-5.9524l.0001-.0002a10.963 10.963 0 0 0 1.1993-4.4453l.0039-.0667c.004-.0832.0054-.1667.0054-.2504 0-6.0654-4.9218-10.9872-10.9873-10.9872zm0 1.26c5.3777 0 9.7272 4.3495 9.7272 9.7272s-4.3495 9.7272-9.7272 9.7272S1.8453 16.6649 1.8453 11.2872 6.1948 1.56 11.5725 1.56zm-1.4 5.04v8.4l6.72-4.2-6.72-4.2z" />
            </svg>
        ),
    },
];

/* Positions for floating icons around the hero */
const positions = [
    { top: '18%', left: '5%', delay: 0 },
    { top: '14%', right: '6%', delay: 0.3 },
    { top: '55%', left: '3%', delay: 0.6 },
    { top: '60%', right: '4%', delay: 0.9 },
    { top: '80%', left: '12%', delay: 1.2 },
];

const TechBadge = ({ name, icon, bg, color, style, delay }) => (
    <motion.div
        style={style}
        className="absolute hidden md:flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 backdrop-blur-md shadow-2xl z-20 cursor-default select-none"
        initial={{ opacity: 0, y: 20, scale: 0.8 }}
        animate={{ opacity: 1, y: [0, -8, 0], scale: 1 }}
        transition={{
            opacity: { duration: 0.5, delay },
            scale: { duration: 0.5, delay },
            y: { duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: delay + 0.5 },
        }}
        whileHover={{ scale: 1.1, y: -12 }}
    >
        <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: bg }}>
            {icon}
        </div>
        <span className="text-xs font-bold" style={{ color }}>{name}</span>
    </motion.div>
);

const Hero = () => {
    const lightRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (lightRef.current) {
                lightRef.current.style.left = `${e.clientX}px`;
                lightRef.current.style.top = `${e.clientY}px`;
            }
        };
        window.addEventListener('mousemove', handleMouseMove);

        const chars = textRef.current.querySelectorAll('.char');
        gsap.fromTo(chars,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, stagger: 0.04, ease: 'power4.out', delay: 0.5 }
        );

        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const headline = "Turning Complex Ideas into Scalable Digital Realities.";

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden bg-navy">
            {/* Mesh Gradient */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600 rounded-full blur-[120px] mix-blend-screen opacity-50"></div>
            </div>

            {/* Mouse light */}
            <div ref={lightRef} className="hero-light hidden md:block"></div>

            {/* Floating Tech Badges */}
            {techStack.map((tech, i) => (
                <TechBadge
                    key={tech.name}
                    {...tech}
                    style={positions[i]}
                    delay={i * 0.25}
                />
            ))}

            {/* Hero Text */}
            <div className="relative z-10 text-center max-w-5xl mx-auto pt-20">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-accent uppercase tracking-[0.3em] text-sm font-bold mb-8"
                >
                    Full Stack Web Developer
                </motion.p>

                <h1 ref={textRef} className="text-5xl md:text-8xl font-bold leading-tight mb-8">
                    {headline.split("").map((char, i) => (
                        <span key={i} className="char inline-block">
                            {char === " " ? "\u00A0" : char}
                        </span>
                    ))}
                </h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
                >
                    I'm Hemanth, focused on building high-performance, visually stunning websites that
                    bridge the gap between design and functionality.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.5 }}
                >
                    <a href="#contact" className="magnetic-btn">
                        Hire Me
                        <div className="arrow">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="7" y1="17" x2="17" y2="7"></line>
                                <polyline points="7 7 17 7 17 17"></polyline>
                            </svg>
                        </div>
                    </a>
                </motion.div>
            </div>

            {/* Subtle dots */}
            <div className="absolute bottom-20 left-10 float-dot"><div className="dot"></div></div>
            <div className="absolute top-40 right-20 float-dot" style={{ animationDelay: '1s' }}><div className="dot"></div></div>
        </section>
    );
};

export default Hero;
