import {Link, useParams} from "react-router-dom";
import {AllProjects} from "../constants/project.ts";
import {ComponentType, useEffect, useState} from "react";
import {ArrowLeft, ArrowRight, Github} from "lucide-react";
import {motion} from "framer-motion";
import {
    SiExpress,
    SiFastapi,
    SiFirebase,
    SiMongodb,
    SiMysql,
    SiNodedotjs,
    SiPytorch,
    SiReact,
    SiSpringboot,
    SiTailwindcss,
} from "react-icons/si";
import {Java} from "developer-icons";

interface IconProps {
    size?: number;
    className?: string;
}

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

const techIcons: Record<string, ComponentType<IconProps>> = {
    pytorch: SiPytorch,
    react: SiReact,
    mongodb: SiMongodb,
    fastapi: SiFastapi,
    'tailwind css': SiTailwindcss,
    express: SiExpress,
    nodejs: SiNodedotjs,
    firebase: SiFirebase,
    java: Java as ComponentType<IconProps>,
    spring: SiSpringboot,
    mysql: SiMysql,
}

const ProjectPage = () => {
    const { name } = useParams();
    const [project, setProject] = useState<Project>();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const project = AllProjects.find((item) => item.slug === name);
        setProject(project);
    }, [name]);

    if (!project) return null;

    return (
        <div className="pt-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <motion.div
                    initial={{opacity: 0, x: -20}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 0.5}}
                    className="flex items-center gap-4 mb-12"
                >
                    <Link
                        to="/projects"
                        className="inline-flex items-center gap-2 terminal-text text-sm no-underline transition-colors"
                        style={{color: 'var(--text-muted)'}}
                        onMouseEnter={e => e.currentTarget.style.color = 'var(--amber)'}
                        onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
                    >
                        <ArrowLeft className="w-5 h-5"/>
                        Back to Projects
                    </Link>
                </motion.div>

                <main className="grid grid-rows-1 sm:grid-cols-2 gap-10">
                    <motion.section
                        initial={{opacity: 0, x: -50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.5}}
                        className="terminal-panel flex items-center justify-center p-4"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full object-contain"
                        />
                    </motion.section>

                    <motion.section
                        initial={{opacity: 0, x: 50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.5, delay: 0.2}}
                        className="flex flex-col gap-6"
                    >
                        <div>
                            <h1 className="text-3xl sm:text-4xl font-bold terminal-text mb-4" style={{color: 'var(--amber)'}}>
                                {project.title}
                            </h1>
                            <p className="leading-relaxed text-justify" style={{color: 'var(--text-muted)'}}>
                                {project.description}
                            </p>

                            <div className="flex items-center gap-3 mt-6">
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-[42px] h-[42px] rounded-sm inline-flex items-center justify-center transition-colors"
                                    style={{
                                        border: '1px solid var(--panel-border)',
                                        background: 'var(--panel)',
                                        color: 'var(--text-muted)'
                                    }}
                                    onMouseEnter={e => e.currentTarget.style.color = 'var(--amber)'}
                                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
                                >
                                    <Github className="w-5 h-5"/>
                                </a>
                                {project.liveUrl !== '#' && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="terminal-text text-sm font-semibold px-5 py-2.5 rounded-sm inline-flex items-center gap-2 no-underline"
                                        style={{
                                            background: 'var(--amber)',
                                            color: '#1A1200',
                                            border: '1px solid transparent'
                                        }}
                                    >
                                        Visit {project.title}
                                        <ArrowRight className="w-4 h-4"/>
                                    </a>
                                )}
                            </div>
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold terminal-text mb-3" style={{color: 'var(--text)'}}>
                                Technologies
                            </h2>
                            <div className='flex items-center gap-4 flex-wrap'>
                                {project.technologies.map((name: string, index: number) => (
                                    <div key={index} className="terminal-panel p-2 flex items-center gap-2">
                                        {(() => {
                                            const Icon = techIcons[name.toLowerCase()];
                                            return Icon ? <Icon size={20} className="skill-icon"/> : null;
                                        })()}
                                        <span className="terminal-text text-xs" style={{color: 'var(--text-muted)'}}>{name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.section>
                </main>
            </div>
        </div>
    )
}

export default ProjectPage;
