import {useInView} from "react-intersection-observer";
import {motion} from "framer-motion";
import ResumeColumn from "./ResumeColumn.tsx";
import {educationData, experienceData} from "../../../constants/resume.ts";

const Resume = () => {
    const [ref, inView] = useInView({threshold: 0.1});

    return (
        <section className="w-full py-20" ref={ref}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={inView ? {opacity: 1, y: 0} : {}}
                    transition={{duration: 0.5}}
                    className="space-y-4 mb-12"
                >
                    <h2 className="section-title">Resume</h2>
                    <div className="section-divider"></div>
                </motion.div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <ResumeColumn title="Experience" data={experienceData} inView={inView} />
                    <ResumeColumn title="Education" data={educationData} inView={inView} />
                </div>
            </div>
        </section>
    );
};

export default Resume;
