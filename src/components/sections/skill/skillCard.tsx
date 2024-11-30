import {motion} from "framer-motion";
import {IconNode} from "lucide-react";

const itemVariants = {
    hidden: {opacity: 0, y: 20},
    visible: {
        opacity: 1,
        y: 0
    }
};

interface SkillCardProps {
    icon: IconNode;
    name: string;
}

const SkillCard = (skill: SkillCardProps) => {
    const Icon = skill.icon;

    return (
        <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
        >
            <Icon className="w-5 h-5 text-purple-600"/>
            <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
        </motion.div>
    );
}

export default SkillCard;
