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
        <h2 className="text-2xl font-bold terminal-text mb-6" style={{color: 'var(--amber)'}}>{title}</h2>
        <div className="space-y-5" style={{borderLeft: '2px solid var(--amber-dim)', paddingLeft: '24px'}}>
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
