import {motion} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import SkillCard from "./skillCard.tsx";
import {AllSkills} from "../../../constants/skill.tsx";

const containerVariants = {
    hidden: {opacity: 0},
    visible: {
        opacity: 1,
        transition: {staggerChildren: 0.1}
    }
};

const itemVariants = {
    hidden: {opacity: 0, y: 20},
    visible: {opacity: 1, y: 0}
};

export default function Skills() {
    const [ref, inView] = useInView({threshold: 0.1});

    return (
        <section id="skills" className="py-20" ref={ref}>
            <div className="space-y-12">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={inView ? {opacity: 1, y: 0} : {}}
                    transition={{duration: 0.5}}
                    className="space-y-4"
                >
                    <h2 className="section-title">Skills & Technologies</h2>
                    <div className="section-divider"></div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {Object.entries(AllSkills).map(([category, items]) => {
                        const displayName: Record<string, string> = {
                            languages: 'Languages',
                            frontend: 'Frontend',
                            backend: 'Backend',
                            database: 'Database',
                            ml: 'ML',
                            cloud: 'Cloud',
                            Design: 'Design',
                        };
                        return (
                        <motion.div key={category} variants={itemVariants} className="space-y-4">
                            <h3 className="text-xl font-semibold" style={{color: 'var(--text)'}}>
                                {displayName[category] || category}
                            </h3>
                            <div className="space-y-3">
                                {items.map((skill, index) => (
                                    <SkillCard key={index} {...skill}/>
                                ))}
                            </div>
                        </motion.div>
                    );
                })}
                </motion.div>
            </div>
        </section>
    );
}
