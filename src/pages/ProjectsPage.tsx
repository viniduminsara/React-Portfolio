import {motion} from 'framer-motion';
import {ArrowLeft, ExternalLink, Github} from 'lucide-react';
import {Link} from 'react-router-dom';
import {AllProjects} from "../constants/project.ts";
import ProjectCard from "../components/sections/project/ProjectCard.tsx";
import {useEffect} from "react";

const containerVariants = {
    hidden: {opacity: 0},
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

export default function ProjectsPage() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <motion.div
                        initial={{opacity: 0, x: -20}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.5}}
                        className="flex items-center gap-4 mb-12"
                    >
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                        >
                            <ArrowLeft className="w-5 h-5"/>
                            Back to Home
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5}}
                        className="space-y-4 mb-12"
                    >
                        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">All Projects</h1>
                        <div className="w-20 h-1 bg-purple-600"></div>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {AllProjects.map((project, index) => (
                            <ProjectCard key={index} {...project}/>
                        ))}
                    </motion.div>
                </div>
            </div>
        </>
    );
}
