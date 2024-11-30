import {motion} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import SkillCard from "./skillCard.tsx";
import {AllSkills} from "../../../constants/skill.ts";

const containerVariants = {
    hidden: {opacity: 0},
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: {opacity: 0, y: 20},
    visible: {
        opacity: 1,
        y: 0
    }
};

export default function Skills() {
    const [ref, inView] = useInView({
        threshold: 0.1
    });

    return (
        <section id="skills" className="py-20" ref={ref}>
            <div className="space-y-12">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={inView ? {opacity: 1, y: 0} : {}}
                    transition={{duration: 0.5}}
                    className="space-y-4"
                >
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Skills & Technologies</h2>
                    <div className="w-20 h-1 bg-purple-600"></div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {Object.entries(AllSkills).map(([category, items]) => (
                        <motion.div key={category} variants={itemVariants} className="space-y-4">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white capitalize">
                                {category}
                            </h3>

                            <div className="space-y-3">
                                {items.map((skill, index) => (
                                    <SkillCard key={index}  {...skill}/>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
