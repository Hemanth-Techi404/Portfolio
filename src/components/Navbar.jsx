import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6 py-4 ${scrolled ? 'bg-navy/80 backdrop-blur-md border-b border-white/5 py-3' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Left: Profile & Name */}
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center overflow-hidden border-2 border-white/10 shadow-lg">
                        <span className="text-navy font-black text-lg">H</span>
                    </div>
                    <span className="text-white font-bold tracking-tighter text-xl hidden sm:inline-block">Hemanth.</span>
                </div>

                {/* Right: Action Button */}
                <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-accent px-6 py-2.5 rounded-full text-navy font-bold flex items-center gap-2 hover:shadow-[0_0_20px_rgba(245,230,66,0.3)] transition-all text-sm"
                >
                    Let's Talk
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                </motion.a>
            </div>
        </nav>
    );
};

export default Navbar;
