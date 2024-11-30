import {ExternalLink, Github} from "lucide-react";
import {motion} from "framer-motion";

const itemVariants = {
    hidden: {opacity: 0, y: 20},
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    }
};

interface ProjectCardProps {
    title: string,
    description: string,
    image: string,
    tags: string[],
    githubUrl: string,
    liveUrl: string,
}

const ProjectCard = (project: ProjectCardProps) => {

    return (
        <motion.div
            variants={itemVariants}
            className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
        >
            <div className="relative aspect-video overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                />
            </div>

            <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300">
                    {project.description.slice(0, 70)}...
                </p>

                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                        <span
                            key={tagIndex}
                            className="px-3 py-1 text-sm bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex gap-4 pt-4">
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                    >
                        <Github className="w-5 h-5"/>
                        Code
                    </a>
                    {project.liveUrl !== '#' && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                        >
                            <ExternalLink className="w-5 h-5"/>
                            Live Demo
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    )
}

export default ProjectCard;
