import React from 'react';
import Hero from './Sections/Hero';
import About from './Sections/About';
import Skills from './Sections/Skills';
import Projects from './Sections/Projects';
import Resume from './Sections/Resume';
import Contact from './Sections/Contact';

const MainContent: React.FC = () => {
    return (
        <main className="braxton-content-scroll">
            <section id="home"><Hero /></section>
            <section id="about" className="mt-5"><About /></section>
            <section id="skills" className="mt-5"><Skills /></section>
            <section id="projects" className="mt-5"><Projects /></section>
            <section id="resume" className="mt-5"><Resume /></section>
            <section id="contact" className="mt-5"><Contact /></section>
        </main>
    );
};

export default MainContent;
