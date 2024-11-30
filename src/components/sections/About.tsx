import {motion} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import {Code2, Laptop, Smartphone, Sparkles} from 'lucide-react';

export default function About() {
    const [ref, inView] = useInView({
        threshold: 0.1
    });

    return (
        <section id="about" className="py-20" ref={ref}>
            <div className="space-y-12">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={inView ? {opacity: 1, y: 0} : {}}
                    transition={{duration: 0.5}}
                    className="space-y-4"
                >
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">About Me</h2>
                    <div className="w-20 h-1 bg-purple-600"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{opacity: 0, x: -50}}
                        animate={inView ? {opacity: 1, x: 0} : {}}
                        transition={{duration: 0.5, delay: 0.2}}
                        className="space-y-6"
                    >
                        <p className="text-lg text-justify text-gray-600 dark:text-gray-300">
                            Hi, I’m Vinidu Minsara, a passionate software developer with a knack for solving complex
                            problems and creating efficient, user-friendly applications. I specialize in full-stack web
                            development, mobile app development, and I enjoy bringing ideas to life through clean and
                            scalable solutions.
                        </p>
                        <p className="text-lg text-justify text-gray-600 dark:text-gray-300">
                            With a background in Graduate Diploma in Software Engineering from IJSE and hands-on experience in
                            building diverse projects, I have developed expertise in technologies like React,
                            Node.js, Spring Boot, Firebase, or MongoDB.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0, x: 50}}
                        animate={inView ? {opacity: 1, x: 0} : {}}
                        transition={{duration: 0.5, delay: 0.4}}
                        className="grid grid-cols-2 gap-6"
                    >
                        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                            <Laptop className="w-8 h-8 text-purple-600 mb-4"/>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                Frontend Development
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Creating responsive and intuitive user interfaces
                            </p>
                        </div>

                        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                            <Code2 className="w-8 h-8 text-purple-600 mb-4"/>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                Backend Development
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Building robust and scalable server solutions
                            </p>
                        </div>

                        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                            <Smartphone className="w-8 h-8 text-purple-600 mb-4"/>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                Mobile Development
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Developing user-friendly mobile apps
                            </p>
                        </div>

                        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                            <Sparkles className="w-8 h-8 text-purple-600 mb-4"/>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                UI/UX Design
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Designing beautiful and functional interfaces
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
