import {motion} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import {Code2, Cpu, Laptop, Smartphone, Sparkles} from 'lucide-react';

export default function About() {
    const [ref, inView] = useInView({
        threshold: 0.1
    });

    return (
        <section id="about" className="py-20" ref={ref}>
            <div className="space-y-12">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={inView ? {opacity: 1, y: 0} : {}}
                    transition={{duration: 0.5}}
                    className="space-y-4"
                >
                    <h2 className="section-title">About Me</h2>
                    <div className="section-divider"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{opacity: 0, x: -50}}
                        animate={inView ? {opacity: 1, x: 0} : {}}
                        transition={{duration: 0.5, delay: 0.2}}
                        className="space-y-6"
                    >
                        <p className="text-md text-justify leading-relaxed" style={{color: 'var(--text-muted)'}}>
                            I'm Vinidu Minsara, a recently graduated Software Engineer (BSc Hons in Software Engineering) with a strong focus on <span style={{color: 'var(--amber)'}}>full stack development</span> and growing expertise in <span style={{color: 'var(--amber)'}}>AI/ML</span>. I build efficient, scalable, and user friendly applications, from responsive frontends to robust backend systems. My core stack includes <span style={{color: 'var(--amber)'}}>React</span>, <span style={{color: 'var(--amber)'}}>Next.js</span>, <span style={{color: 'var(--amber)'}}>Angular</span>, <span style={{color: 'var(--amber)'}}>Node.js</span>, and <span style={{color: 'var(--amber)'}}>Spring Boot</span>, and I've applied machine learning techniques (<span style={{color: 'var(--amber)'}}>PyTorch</span>, <span style={{color: 'var(--amber)'}}>TensorFlow</span>) to real world problems like <span style={{color: 'var(--amber)'}}>CNN based image classification</span>. I enjoy turning ideas into clean, production ready solutions and I'm always exploring new ways to combine software engineering with intelligent systems.
                        </p>
                        <p className="text-md text-justify leading-relaxed" style={{color: 'var(--text-muted)'}}>
                            I also have hands on experience with cloud infrastructure (<span style={{color: 'var(--amber)'}}>AWS</span>, <span style={{color: 'var(--amber)'}}>Oracle Cloud</span>) and <span style={{color: 'var(--amber)'}}>Docker</span>, and I enjoy deploying and maintaining my own projects on self hosted infrastructure.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0, x: 50}}
                        animate={inView ? {opacity: 1, x: 0} : {}}
                        transition={{duration: 0.5, delay: 0.4}}
                        className="grid grid-cols-2 gap-6"
                    >
                        {[
                            {icon: Laptop, title: 'Frontend Development', desc: 'Creating responsive and intuitive user interfaces'},
                            {icon: Code2, title: 'Backend Development', desc: 'Building robust and scalable server solutions'},
                            {icon: Cpu, title: 'AI / ML', desc: 'Training models and experimenting with ML algorithms'},
                            {icon: Sparkles, title: 'UI/UX Design', desc: 'Designing beautiful and functional interfaces'},
                        ].map((card, i) => (
                            <div key={i} className="terminal-panel p-6">
                                <card.icon className="w-8 h-8 mb-4" style={{color: 'var(--amber)'}}/>
                                <h3 className="text-xl font-semibold mb-2" style={{color: 'var(--text)'}}>
                                    {card.title}
                                </h3>
                                <p style={{color: 'var(--text-muted)', fontSize: '14px'}}>
                                    {card.desc}
                                </p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
