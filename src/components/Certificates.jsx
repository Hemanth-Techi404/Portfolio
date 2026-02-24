import React, { useState } from 'react';
import Marquee from 'react-fast-marquee';
import { motion, AnimatePresence } from 'framer-motion';

const Certificates = () => {
    const [selectedCert, setSelectedCert] = useState(null);

    const certs = [
        { id: 1, title: "React Developer", issuer: "GeeksforGeeks", color: "bg-emerald-600", date: "2024" },
        { id: 2, title: "Full Stack Developer", issuer: "freeCodeCamp", color: "bg-indigo-900", date: "2023" },
        { id: 3, title: "JS Developer", issuer: "Udemy", color: "bg-yellow-600", date: "2024" },
        { id: 4, title: "DevOps", issuer: "DataPro", color: "bg-red-600", date: "2024" },
        { id: 5, title: "Python", issuer: "Great Learning", color: "bg-blue-600", date: "2023" },
    ];

    return (
        <section id="certificates" className="py-24 bg-navy-light relative z-10 section-reveal overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 mb-16 text-center md:text-left">
                <h2 className="section-title centered md:ml-0 text-accent uppercase tracking-widest text-sm font-bold mb-4">Certifications</h2>
                <h3 className="text-4xl md:text-6xl font-bold">Verified Expertise.</h3>
            </div>

            <div className="relative">
                {/* Gradient fades on sides */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-navy-light to-transparent z-10 pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-navy-light to-transparent z-10 pointer-events-none"></div>

                <Marquee gradient={false} speed={40} pauseOnHover={true}>
                    {certs.map((cert) => (
                        <div
                            key={cert.id}
                            onClick={() => setSelectedCert(cert)}
                            className="mx-6 cursor-pointer group"
                        >
                            <div className={`w-64 h-80 rounded-xl ${cert.color} relative overflow-hidden transition-transform duration-500 group-hover:scale-105 shadow-2xl flex flex-col items-center justify-center p-8 text-center`}>
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6 backdrop-blur-md">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 15l-2 5L9 9l11-1-5 2 5 8z"></path></svg>
                                </div>
                                <h4 className="text-white font-bold text-xl leading-snug">{cert.title}</h4>
                                <p className="text-white/70 text-sm mt-4 uppercase tracking-widest font-medium">{cert.issuer}</p>

                                <div className="mt-8 text-xs font-bold text-navy bg-white px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                                    View Credential
                                </div>
                            </div>
                        </div>
                    ))}
                </Marquee>
            </div>

            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="lightbox-overlay"
                        onClick={() => setSelectedCert(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="bg-navy-card p-4 rounded-3xl max-w-2xl w-full shadow-3xl text-center relative"
                            onClick={e => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedCert(null)}
                                className="absolute top-6 right-6 text-gray-400 hover:text-white"
                            >
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </button>

                            <div className={`aspect-video w-full rounded-2xl ${selectedCert.color} flex items-center justify-center mb-8`}>
                                <div className="text-white text-3xl font-bold">Verified Credential</div>
                            </div>

                            <h4 className="text-3xl font-bold mb-2">{selectedCert.title}</h4>
                            <p className="text-gray-400 mb-8">{selectedCert.issuer} — Issued {selectedCert.date}</p>

                            <div className="flex gap-4 justify-center">
                                <a href="#" className="magnetic-btn px-10 py-4">
                                    Verify Authenticity
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Certificates;
