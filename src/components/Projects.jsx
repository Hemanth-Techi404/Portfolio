import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, tags, description, imageUrl, index }) => {
    return (
        <motion.div
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="project-card relative group bg-navy-card rounded-2xl overflow-hidden border border-white/5 h-[480px]"
        >
            {/* Real Project Image */}
            <div className="absolute inset-0 overflow-hidden">
                <img
                    src={imageUrl}
                    alt={title}
                    className="project-img w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                />
                {/* Gradient overlay always present */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-navy/10"></div>
            </div>

            {/* Hover CTA Overlay */}
            <div className="overlay absolute inset-0 bg-accent/90 flex items-center justify-center z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out backdrop-blur-sm">
                <a
                    href="#"
                    className="flex items-center gap-3 text-navy font-black text-2xl uppercase tracking-widest"
                >
                    View Project
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                </a>
            </div>

            {/* Card Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                {/* Index number top-right */}
                <span className="absolute top-6 right-6 text-6xl font-black text-white/10 select-none">
                    {String(index + 1).padStart(2, '0')}
                </span>

                <div className="flex flex-wrap gap-2 mb-4">
                    {tags.map((tag, i) => (
                        <span key={i} className="pill whitespace-nowrap">{tag}</span>
                    ))}
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-accent transition-colors duration-300">
                    {title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{description}</p>

                <a
                    href="#"
                    className="inline-flex items-center gap-2 text-accent font-bold text-xs uppercase tracking-widest hover:gap-4 transition-all duration-300"
                >
                    Live Demo
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                </a>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const projectList = [
        {
            title: "Food Delivery Application",
            tags: ["React", "Tailwind", "Stripe", "Node.js"],
            description: "A seamless food ordering experience with real-time GPS tracking, smart filtering, and secure Stripe payments.",
            imageUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&auto=format&fit=crop&q=80"
        },
        {
            title: "Full Stack Team Chat Application",
            tags: ["Socket.io", "Node.js", "Express", "React"],
            description: "Real-time team collaboration platform with channels, direct messages, and live file sharing.",
            imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop&q=80"
        },
        {
            title: "E-sports Gaming Website",
            tags: ["Three.js", "Framer Motion", "React"],
            description: "Immersive gaming portal with 3D hero sections, live tournament brackets, and player leaderboards.",
            imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=80"
        },
        {
            title: "Portfolio Builder",
            tags: ["Next.js", "Tailwind CSS", "MongoDB"],
            description: "SaaS platform that lets developers generate stunning, customizable portfolios in under 5 minutes.",
            imageUrl: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&auto=format&fit=crop&q=80"
        }
    ];

    return (
        <section id="projects" className="py-24 px-6 bg-navy relative z-10 section-reveal">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                    <div>
                        <h2 className="section-title text-accent uppercase tracking-widest text-sm font-bold mb-4">
                            Featured Works
                        </h2>
                        <h3 className="text-4xl md:text-6xl font-bold">Proof of Skill.</h3>
                    </div>
                    <p className="max-w-xs text-gray-500 text-sm leading-relaxed">
                        A selection of projects where I push the limits of web performance and UI excellence.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projectList.map((p, i) => (
                        <ProjectCard key={i} {...p} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
