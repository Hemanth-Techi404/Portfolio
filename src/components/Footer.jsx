import React from 'react';

/* ── Brand SVG icons ── */
const LinkedInIcon = () => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
);

const GitHubIcon = () => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
);

const WhatsAppIcon = () => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
);

const socialLinks = [
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/hemanth-chellapilli',
        icon: <LinkedInIcon />,
        color: 'hover:bg-[#0077B5] hover:border-[#0077B5]',
    },
    {
        name: 'GitHub',
        href: 'https://github.com/hemanth',
        icon: <GitHubIcon />,
        color: 'hover:bg-[#333] hover:border-[#555]',
    },
    {
        name: 'WhatsApp',
        href: 'https://wa.me/918328592776',
        icon: <WhatsAppIcon />,
        color: 'hover:bg-[#25D366] hover:border-[#25D366]',
    },
];

const Footer = () => {
    return (
        <footer id="contact" className="bg-navy overflow-hidden">
            {/* Marquee Ribbon */}
            <div className="ribbon">
                <div className="ribbon-inner">
                    {[...Array(10)].map((_, i) => (
                        <span key={i} className="flex items-center gap-4">
                            LET'S WORK TOGETHER ★ PROFESSIONAL PARTNER ★ INNOVATIVE SOLUTIONS ★
                        </span>
                    ))}
                </div>
            </div>

            <div className="py-24 px-6 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-16 relative">
                {/* Left: CTA + Contact badges */}
                <div className="flex-1 text-center md:text-left">
                    <h2 className="text-5xl md:text-8xl font-black mb-8 leading-none">
                        LET'S <br />
                        <span className="text-accent underline decoration-4 underline-offset-8">WORK</span> TOGETHER.
                    </h2>

                    <div className="flex flex-col md:flex-row gap-4 mt-12 justify-center md:justify-start flex-wrap">
                        <a
                            href="mailto:chellapillihemanth993@gmail.com"
                            className="px-6 py-4 bg-navy-light rounded-full border border-white/5 hover:border-accent group transition-all flex items-center gap-3"
                        >
                            <span className="w-9 h-9 rounded-full bg-white/5 group-hover:bg-accent group-hover:text-navy flex items-center justify-center transition-colors shrink-0">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                            </span>
                            <span className="font-bold text-sm">chellapillihemanth993@gmail.com</span>
                        </a>

                        <a
                            href="tel:+918328592776"
                            className="px-6 py-4 bg-navy-light rounded-full border border-white/5 hover:border-accent group transition-all flex items-center gap-3"
                        >
                            <span className="w-9 h-9 rounded-full bg-white/5 group-hover:bg-accent group-hover:text-navy flex items-center justify-center transition-colors shrink-0">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                            </span>
                            <span className="font-bold text-sm">+91 8328592776</span>
                        </a>
                    </div>
                </div>

                {/* Right: Social icons + availability */}
                <div className="flex flex-col items-center md:items-end gap-12">
                    <div className="flex gap-4">
                        {socialLinks.map(({ name, href, icon, color }) => (
                            <a
                                key={name}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                title={name}
                                className={`w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white transition-all duration-300 ${color} hover:text-white hover:scale-110`}
                            >
                                {icon}
                            </a>
                        ))}
                    </div>

                    <div className="text-right">
                        <p className="text-gray-500 uppercase tracking-widest text-xs font-bold mb-2">Available for roles</p>
                        <div className="flex items-center gap-2 justify-center md:justify-end text-accent font-bold">
                            <span className="w-2 h-2 bg-accent rounded-full animate-ping"></span>
                            OPEN TO WORK
                        </div>
                    </div>
                </div>
            </div>

            {/* Big outlined HEMANTH text */}
            <div className="mt-16 pt-8 pb-12 border-t border-white/5 px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-7xl md:text-9xl font-black outline-text opacity-40 select-none">
                        HEMANTH.
                    </div>
                    <p className="text-gray-600 text-sm font-medium">
                        © 2026 • Designed & Developed with ⚡ by Hemanth
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
