import {motion} from "framer-motion";
import ResumeCard from "./ResumeCard.tsx";

interface ResumeDataItem {
    year: string;
    title: string;
    description: string;
}

interface ResumeColumnProps {
    title: string;
    data: ResumeDataItem[];
    inView: boolean;
}

const ResumeColumn = ({ title, data, inView }: ResumeColumnProps) => (
    <section className="w-full px-4">
        <motion.div
            initial={{opacity: 0, y: 20}}
            animate={inView ? {opacity: 1, y: 0} : {}}
            transition={{duration: 0.5}}
            className="space-y-4 mb-8"
        >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{title}</h2>
            <div className="w-20 h-1 bg-purple-600"></div>
        </motion.div>
        {/*<header className="text-emerald-600 text-xl font-bold mb-5">{title}</header>*/}
        <div className="border-l-2 border-purple-600 pl-6">
            {data.map((item, index) => (
                <ResumeCard
                    key={index}
                    year={item.year}
                    title={item.title}
                    description={item.description}
                    inView={inView}
                />
            ))}
        </div>
    </section>
);

export default ResumeColumn;
