import {useParams} from "react-router-dom";
import {AllProjects} from "../constants/project.ts";
import {useEffect, useState} from "react";
import {ArrowRight, Github} from "lucide-react";
import {motion} from "framer-motion";
import firebaseIcon from "../assets/img/tech-icons/firebase.svg"
import javaIcon from "../assets/img/tech-icons/java.svg"
import mongodbIcon from "../assets/img/tech-icons/mongodb.svg"
import mysqlIcon from "../assets/img/tech-icons/mysql.svg"
import nodejsIcon from "../assets/img/tech-icons/nodejs.svg"
import reactIcon from "../assets/img/tech-icons/react.svg"
import springIcon from "../assets/img/tech-icons/spring.svg"
import tailwindcssIcon from "../assets/img/tech-icons/tailwindcss.svg"
import typescriptIcon from "../assets/img/tech-icons/tailwindcss.svg"
import expressIcon from "../assets/img/tech-icons/express.svg"

interface Project {
    title: string,
    description: string,
    image: string,
    tags: string[],
    technologies: string[],
    githubUrl: string,
    liveUrl: string,
    slug: string,
}

const techIcons: Record<string, string> = {
    firebase: firebaseIcon,
    java: javaIcon,
    mongodb: mongodbIcon,
    mysql: mysqlIcon,
    nodejs: nodejsIcon,
    react: reactIcon,
    spring: springIcon,
    tailwind: tailwindcssIcon,
    typescript: typescriptIcon,
    express: expressIcon,
}


const ProjectPage = () => {
    const { name } = useParams();
    const [project, setProject] = useState<Project>();

    useEffect(() => {
        const project = AllProjects.find((item) => item.slug === name);
        setProject(project);
    }, [name]);

    return (
        <div className="bg-gray-50 dark:bg-gray-900 pt-20">
            <div className="max-w-6xl min-h-[70vh] mx-auto px-4 flex justify-center items-center sm:px-6 lg:px-8">
                <main className="grid grid-rows-1 sm:grid-cols-2 gap-2 sm:gap-10">
                    <section className="relative bg-black/[0.075] flex items-center justify-center rounded-lg">
                        <img
                            src={project?.image}
                            alt="image"
                            className="w-full object-contain"
                        />
                    </section>

                    <section className="py-7 px-2 rounded-md shadow-sm flex flex-col gap-3 sm:gap-5 ">
                        <div className="flex flex-col gap-3">
                            <h1 className="text-2xl sm:text-4xl font-bold text-gray-600 dark:text-gray-400">{project?.title}</h1>
                            <p className="text-gray-700 dark:text-gray-500 text-sm sm:text-base">
                                {project?.description}
                            </p>
                            <div className="flex items-center gap-2 mt-3">
                                <motion.a
                                    href={project?.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-medium transition-colors duration-200"
                                    whileHover={{scale: 1.05}}
                                    whileTap={{scale: 0.95}}
                                >
                                    <Github className="w-5 h-5"/>
                                </motion.a>
                                {project?.liveUrl !== '#' && (
                                    <motion.a
                                        href={project?.liveUrl}
                                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors duration-200"
                                        whileHover={{scale: 1.05}}
                                        whileTap={{scale: 0.95}}
                                    >
                                        Visit {project?.title}
                                        <ArrowRight className="w-4 h-4"/>
                                    </motion.a>
                                )}
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 ">
                            <h2 className="text-lg font-semibold text-gray-600 dark:text-gray-400">Technologies</h2>
                            <div className='flex items-center gap-4'>
                                {project?.technologies.map((name: string, index: number) => (
                                    <div key={index}>
                                        <img src={techIcons[name.toLowerCase()]} alt="" className="w-10"/>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
)
}

export default ProjectPage;
