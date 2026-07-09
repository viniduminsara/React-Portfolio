import {motion} from "framer-motion";
import {ComponentType} from "react";

const itemVariants = {
    hidden: {opacity: 0, y: 20},
    visible: {opacity: 1, y: 0}
};

interface IconProps {
    size?: number;
    className?: string;
}

interface SkillCardProps {
    icon: ComponentType<IconProps>;
    name: string;
}

const SkillCard = (skill: SkillCardProps) => {
    const Icon = skill.icon;

    return (
        <motion.div
            variants={itemVariants}
            className="terminal-panel flex items-center gap-3 p-3"
        >
            <span className="skill-icon">
                <Icon size={20}/>
            </span>
            <span style={{color: 'var(--text-muted)', fontSize: '14px'}}>{skill.name}</span>
        </motion.div>
    );
}

export default SkillCard;
