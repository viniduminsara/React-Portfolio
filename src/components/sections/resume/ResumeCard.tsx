import { motion } from "framer-motion";

interface ResumeDataItem {
    year: string;
    title: string;
    description: string;
    inView: boolean;
}

const ResumeCard = ({ year, title, description, inView }: ResumeDataItem) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative p-5 mb-5 bg-white/30 dark:bg-white/5 rounded-xl border border-white/10 backdrop-blur-3xl shadow-lg"
    >
        <span className="absolute -left-8 top-5 w-4 h-4 rounded-full bg-purple-600"></span>
        <h4 className="text-purple-400 font-semibold">{year}</h4>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-2">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 leading-relaxed">{description}</p>
    </motion.div>
);

export default ResumeCard;
