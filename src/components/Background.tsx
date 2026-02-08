import React, { useEffect } from 'react';
import '../index.css';

const Background: React.FC = () => {
    const createParticles = () => {
        const particlesContainer = document.getElementById('particles');
        if (!particlesContainer) return;

        const particleCount = 50;

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + 'vw';
            particle.style.animationDelay = Math.random() * 10 + 's';
            particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
            particlesContainer.appendChild(particle);
        }
    };

    useEffect(() => {
        createParticles();
    }, []);

    return (
        <>
            <div className="bg-animation"></div>
            <div id="particles"></div>
        </>
    );
};

export default Background;