import React, { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Footer from './components/Footer';

import Navbar from './components/Navbar';

function App() {
    useEffect(() => {
        // Simple observer for section reveals
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.section-reveal').forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <main className="grain min-h-screen relative overflow-x-hidden">
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Certificates />
            <Footer />
        </main>
    );
}

export default App;
