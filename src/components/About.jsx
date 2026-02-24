import React, { useEffect, useRef } from 'react';

const About = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;
            const spans = containerRef.current.querySelectorAll('span');
            const containerRect = containerRef.current.getBoundingClientRect();
            const scrollPos = window.innerHeight * 0.7;

            spans.forEach((span, i) => {
                const spanRect = span.getBoundingClientRect();
                if (spanRect.top < scrollPos) {
                    span.classList.add('lit');
                } else {
                    span.classList.remove('lit');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const text = "I transform complex logic into seamless digital experiences. As a Full Stack Developer, I bridge the gap between responsive design and robust architecture. I don’t just write code that works—I build scalable, high-performance infrastructure for the modern web";
    const words = text.split(" ");

    return (
        <section id="about" className="py-24 px-6 md:py-40 bg-navy relative z-10 section-reveal">
            <div className="max-w-6xl mx-auto">
                <h2 className="section-title text-accent uppercase tracking-widest text-sm font-bold mb-16">About Me</h2>

                <div className="flex flex-col md:flex-row gap-16 items-start">
                    <div ref={containerRef} className="word-reveal text-3xl md:text-5xl font-medium leading-tight max-w-4xl flex-1">
                        {words.map((word, i) => (
                            <span key={i} className="inline-block mr-[0.3em] mb-1">
                                {word}
                            </span>
                        ))}
                    </div>

                    <div className="grid grid-cols-2 gap-8 md:w-80">
                        <div className="stat-card">
                            <div className="stat-number">01<span className="text-xl"></span></div>
                            <div className="text-gray-500 text-xs uppercase tracking-tighter mt-2 font-bold">Years of Experience</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">10<span className="text-xl">+</span></div>
                            <div className="text-gray-500 text-xs uppercase tracking-tighter mt-2 font-bold">Projects Done</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">06<span className="text-xl">+</span></div>
                            <div className="text-gray-500 text-xs uppercase tracking-tighter mt-2 font-bold">Certifications</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">90<span className="text-xl">%</span></div>
                            <div className="text-gray-500 text-xs uppercase tracking-tighter mt-2 font-bold">Success Rate</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
