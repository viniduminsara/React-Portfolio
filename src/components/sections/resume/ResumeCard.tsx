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
        className="terminal-panel p-5 relative"
    >
        <span className="absolute w-4 h-4 rounded-full" style={{
            background: 'var(--amber)',
            left: '-34px',
            top: '20px',
            border: '2px solid var(--bg)',
        }}/>
        <h4 className="text-sm font-semibold terminal-text" style={{color: 'var(--amber)'}}>{year}</h4>
        <h3 className="text-lg font-semibold mt-2" style={{color: 'var(--text)'}}>{title}</h3>
        <p className="text-sm mt-1 leading-relaxed" style={{color: 'var(--text-muted)'}}>{description}</p>
    </motion.div>
);

export default ResumeCard;
