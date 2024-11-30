import {motion} from "framer-motion";
import Hero from "../components/sections/Hero.tsx";
import About from "../components/sections/About.tsx";
import Projects from "../components/sections/project/Projects.tsx";
import Skills from "../components/sections/skill/Skills.tsx";
import Blog from "../components/sections/blog/Blog.tsx";
import Contact from "../components/sections/Contact.tsx";
import Footer from "../components/Footer.tsx";

const HomePage = () => (
    <>
        <main className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
            >
                <Hero/>
            </motion.div>

            <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once: true}}
            >
                <About/>
            </motion.div>

            <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once: true}}
            >
                <Projects/>
            </motion.div>

            <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once: true}}
            >
                <Skills/>
            </motion.div>

            <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once: true}}
            >
                <Blog/>
            </motion.div>

            <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once: true}}
            >
                <Contact/>
            </motion.div>
        </main>
    </>
);

export default HomePage;
