import {useEffect} from "react";
import Hero from "../components/sections/Hero.tsx";
import About from "../components/sections/About.tsx";
import Projects from "../components/sections/project/Projects.tsx";
import Skills from "../components/sections/skill/Skills.tsx";
import Blog from "../components/sections/blog/Blog.tsx";
import Contact from "../components/sections/Contact.tsx";
import Resume from "../components/sections/resume/Resume.tsx";

const HomePage = () => {
    useEffect(() => {
        document.documentElement.classList.add('snap-home');
        return () => document.documentElement.classList.remove('snap-home');
    }, []);

    useEffect(() => {
        const scrollToHash = () => {
            if (window.location.hash) {
                const id = window.location.hash.slice(1);
                const el = document.getElementById(id);
                if (el) setTimeout(() => el.scrollIntoView({behavior: 'smooth'}), 100);
            }
        };
        scrollToHash();
        window.addEventListener('hashchange', scrollToHash);
        return () => window.removeEventListener('hashchange', scrollToHash);
    }, []);

    return (
        <>
            <section className="snap-section">
                <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Hero/>
                </div>
            </section>
            <section id="about" className="snap-section">
                <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <About/>
                </div>
            </section>
            <section id="resume" className="snap-section">
                <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Resume/>
                </div>
            </section>
            <section id="projects" className="snap-section">
                <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Projects/>
                </div>
            </section>
            <section id="skills" className="snap-section">
                <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Skills/>
                </div>
            </section>
            <section id="blogs" className="snap-section">
                <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Blog/>
                </div>
            </section>
            <section id="contact" className="snap-section">
                <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Contact/>
                </div>
            </section>
        </>
    );
};

export default HomePage;
