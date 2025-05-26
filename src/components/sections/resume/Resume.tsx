import {useInView} from "react-intersection-observer";
import ResumeColumn from "./ResumeColumn.tsx";
import {educationData, experienceData} from "../../../constants/resume.ts";

const Resume = () => {
    const [ref, inView] = useInView({
        threshold: 0.1
    });

    return (
        <section className="w-full min-h-screen flex justify-center items-center py-10" ref={ref}>
            <main className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
                <ResumeColumn title="Education" data={educationData} inView={inView} />
                <ResumeColumn title="Experience" data={experienceData} inView={inView} />
            </main>
        </section>
    );
};

export default Resume;
