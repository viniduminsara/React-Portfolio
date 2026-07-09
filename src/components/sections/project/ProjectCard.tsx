import {ExternalLink, Github} from "lucide-react";
import {motion} from "framer-motion";
import {useNavigate} from "react-router-dom";

const itemVariants = {
    hidden: {opacity: 0, y: 20},
    visible: {
        opacity: 1,
        y: 0,
        transition: {duration: 0.5}
    }
};

interface ProjectCardProps {
    title: string,
    description: string,
    image: string,
    tags: string[],
    githubUrl: string,
    liveUrl: string,
    slug: string,
}

const ProjectCard = (project: ProjectCardProps) => {
    const navigate = useNavigate();

    return (
        <motion.div
            variants={itemVariants}
            className="terminal-panel overflow-hidden group cursor-pointer"
            onClick={() => navigate(`/project/${project.slug}`)}
        >
            <div className="relative aspect-video overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                />
            </div>

            <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold" style={{color: 'var(--text)'}}>
                    {project.title}
                </h3>

                <p className="text-sm" style={{color: 'var(--text-muted)'}}>
                    {project.description.slice(0, 70)}...
                </p>

                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                        <span
                            key={tagIndex}
                            className="px-3 py-1 text-sm rounded-sm"
                            style={{
                                background: 'var(--amber-glow)',
                                color: 'var(--amber)',
                                border: '1px solid var(--amber-dim)',
                                fontFamily: "'IBM Plex Mono', monospace",
                                fontSize: '11px'
                            }}
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
                        className="inline-flex items-center gap-2 text-sm transition-colors"
                        style={{color: 'var(--text-muted)'}}
                        onMouseEnter={e => e.currentTarget.style.color = 'var(--amber)'}
                        onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
                    >
                        <Github className="w-5 h-5"/>
                        Code
                    </a>
                    {project.liveUrl !== '#' && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm transition-colors"
                            style={{color: 'var(--text-muted)'}}
                            onMouseEnter={e => e.currentTarget.style.color = 'var(--amber)'}
                            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
                        >
                            <ExternalLink className="w-5 h-5"/>
                            Live Project
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    )
}

export default ProjectCard;
