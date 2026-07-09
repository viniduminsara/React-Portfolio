import {motion} from 'framer-motion';
import CodeBlock from '../CodeBlock.tsx';

export default function Hero() {
    return (
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <motion.div
                initial={{opacity: 0, x: -50}}
                animate={{opacity: 1, x: 0}}
                transition={{duration: 0.5}}
            >
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 0.2}}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm text-xs terminal-text"
                    style={{
                        color: 'var(--amber)',
                        background: 'var(--amber-glow)',
                        border: '1px solid var(--amber-dim)',
                        marginBottom: '28px'
                    }}
                >
                    <span className="w-[7px] h-[7px] rounded-full" style={{
                        background: 'var(--ok)',
                        boxShadow: '0 0 6px var(--ok)',
                        animation: 'pulse 2s ease-in-out infinite'
                    }}/>
                    status: open_to_work
                </motion.div>

                <h1 className="terminal-text font-bold" style={{
                    fontSize: 'clamp(38px, 4.6vw, 58px)',
                    lineHeight: 1.05,
                    letterSpacing: '-0.5px',
                    margin: '0 0 22px'
                }}>
                    Vinidu<br/>Minsara
                    <span className="cursor-block inline-block w-[0.5ch]" style={{
                        background: 'var(--amber)',
                        animation: 'blink 1.5s step-end infinite',
                        marginLeft: '8px',
                        height: '1.1em',
                        verticalAlign: 'text-top'
                    }}/>
                </h1>

                    <p className="text-[17px] leading-relaxed max-w-[520px] mb-9" style={{color: 'var(--text-muted)'}}>
                        Software Engineer from Sri Lanka specializing in full stack development and AI/ML powered solutions.
                    </p>

                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 0.6}}
                    className="flex flex-wrap items-center gap-3.5"
                >
                    <a
                        href="#contact"
                        className="terminal-text font-semibold text-sm px-[22px] py-3 rounded-sm inline-flex items-center gap-2 no-underline"
                        style={{
                            background: 'var(--amber)',
                            color: '#1A1200',
                            border: '1px solid transparent'
                        }}
                    >
                        Let's talk →
                    </a>
                    <a
                        href="https://github.com/viniduminsara"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="terminal-text text-sm px-[22px] py-3 rounded-sm inline-flex items-center gap-2 no-underline"
                        style={{
                            border: '1px solid var(--panel-border)',
                            color: 'var(--text)',
                            background: 'var(--panel)'
                        }}
                    >
                        View GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/vinidu-minsara/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-[42px] h-[42px] rounded-sm inline-flex items-center justify-center no-underline"
                        style={{
                            border: '1px solid var(--panel-border)',
                            background: 'var(--panel)',
                            color: 'var(--text-muted)',
                            fontFamily: "'IBM Plex Mono', monospace",
                            fontSize: '15px'
                        }}
                        aria-label="LinkedIn"
                    >
                        in
                    </a>
                </motion.div>
            </motion.div>

            <motion.div
                initial={{opacity: 0, x: 50}}
                animate={{opacity: 1, x: 0}}
                transition={{duration: 0.5, delay: 0.2}}
            >
                <CodeBlock/>
            </motion.div>
        </div>
    );
}
