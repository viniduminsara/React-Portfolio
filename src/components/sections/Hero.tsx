import {ArrowRight, Github, Sparkles} from 'lucide-react';
import {motion} from 'framer-motion';
import CodeBlock from '../CodeBlock.tsx';
import linkedin from "../../assets/img/linkedin-brands-solid.svg";
import linkedinLight from "../../assets/img/linkedin-brands-solid-light.svg";

export default function Hero() {
    return (
        <section className="min-h-[90vh] flex flex-col justify-center pt-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{opacity: 0, x: -50}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 0.5}}
                    className="space-y-6 pt-8 md:pt-0"
                >
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 0.2}}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 text-sm font-medium"
                    >
                        <Sparkles className="w-4 h-4"/>
                        <span>Available for new opportunities</span>
                    </motion.div>

                    <motion.p
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 0.4}}
                        className="text-4xl font-semibold text-purple-600 dark:text-gray-300"
                    >
                        Vinidu Minsara
                    </motion.p>

                    <motion.p
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 0.4}}
                        className="text-lg md:text-xl font-light text-gray-600 dark:text-gray-300"
                    >
                        I am a passionate software developer from Sri Lanka crafting efficient and user-friendly
                        solutions with modern technologies.
                    </motion.p>

                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 0.6}}
                        className="flex flex-wrap gap-2 lg:gap-4 pt-4"
                    >
                        <motion.a
                            href="#contact"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors duration-200"
                            whileHover={{scale: 1.05}}
                            whileTap={{scale: 0.95}}
                        >
                            Let's talk
                            <ArrowRight className="w-4 h-4"/>
                        </motion.a>

                        <motion.a
                            href="https://github.com/viniduminsara"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 lg:px-6 py-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-medium transition-colors duration-200"
                            whileHover={{scale: 1.05}}
                            whileTap={{scale: 0.95}}
                        >
                            <Github className="w-5 h-5"/>
                            <span className='hidden lg:block'>View GitHub</span>
                        </motion.a>
                        <motion.a
                            href="https://www.linkedin.com/in/vinidu-minsara/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-medium transition-colors duration-200"
                            whileHover={{scale: 1.05}}
                            whileTap={{scale: 0.95}}
                        >
                            <img src={linkedin} alt="linkedin" className='w-6 h-6 text-white hidden dark:block'/>
                            <img src={linkedinLight} alt="linkedin" className='w-6 h-6 text-white dark:hidden block'/>
                        </motion.a>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{opacity: 0, x: 50}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 0.5, delay: 0.2}}
                >
                    <CodeBlock/>
                </motion.div>
            </div>
        </section>
    );
}
