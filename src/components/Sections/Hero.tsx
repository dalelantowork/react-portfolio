import React, { useEffect, useRef } from 'react';
import { Bio } from '../../data/constants';
import gsap from 'gsap';
import Typewriter from 'typewriter-effect';

const Hero: React.FC = () => {
    const heroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (heroRef.current) {
            gsap.fromTo(
                heroRef.current.querySelectorAll('.reveal-text'),
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power4.out' }
            );
        }
    }, []);

    return (
        <div ref={heroRef} className="hero-section py-5 d-flex align-items-center" style={{ minHeight: 'calc(100vh - 80px)' }}>

            <div>
                <div className="reveal-text mb-3">
                    <span className="badge-outline">
                        ✨ Let's meet!
                    </span>
                </div>
                <h1 className="display-1 fw-bold mb-4 reveal-text" style={{ lineHeight: '1.1', color: 'var(--text-main)' }}>
                    I'm {Bio.name} <br />
                    <span style={{ color: 'var(--primary-color)' }}>
                        <Typewriter
                            options={{
                                strings: Bio.roles,
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </span>
                </h1>

                <p className="fs-4 text-muted reveal-text max-w-600">
                    A <span className="fw-bold" style={{ color: 'var(--text-main)' }}>Software Developer</span> specializing in building high-performance web applications and digital experiences.
                </p>

                <div className="mt-5 reveal-text d-flex align-items-center gap-4">
                    <a href="#projects" className="btn-primary-custom px-5 py-3 text-uppercase letter-spacing-1">My Works</a>
                    <a href={Bio.resume} target="_blank" rel="noreferrer" className="fw-bold text-decoration-underline" style={{ color: 'var(--text-main)' }}>Download CV</a>
                </div>

            </div>
        </div>
    );
};

export default Hero;
