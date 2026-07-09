import {motion} from 'framer-motion';

const CodeBlock = () => {
    return (
        <div
            className="terminal-panel"
        >
            <div className="terminal-panel-head">
                <span style={{color: 'var(--text-muted)'}}>~/whoami.log</span>
                <span>bash</span>
            </div>
            <div className="terminal-panel-body">
                <motion.div
                    initial={{opacity: 0, x: -20}}
                    animate={{opacity: 1, x: 0}}
                    transition={{delay: 0.2}}
                >
                    <span style={{color: 'var(--amber)'}}>$</span>{' '}
                    <span style={{color: 'var(--text)'}}>whoami</span>
                </motion.div>
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: 0.4}}
                    style={{color: 'var(--text-muted)'}}
                >
                    vinidu_minsara
                </motion.div>
                <br/>
                <motion.div
                    initial={{opacity: 0, x: -20}}
                    animate={{opacity: 1, x: 0}}
                    transition={{delay: 0.6}}
                    className="flex gap-2.5"
                >
                    <span style={{color: 'var(--ok)'}}>[ OK ]</span>
                    <span style={{color: 'var(--text-muted)', minWidth: '108px'}}>role</span>
                    <span style={{color: 'var(--text)'}}>fullstack_developer</span>
                </motion.div>
                <motion.div
                    initial={{opacity: 0, x: -20}}
                    animate={{opacity: 1, x: 0}}
                    transition={{delay: 0.8}}
                    className="flex gap-2.5"
                >
                    <span style={{color: 'var(--ok)'}}>[ OK ]</span>
                    <span style={{color: 'var(--text-muted)', minWidth: '108px'}}>frontend</span>
                    <span style={{color: 'var(--text)'}}>react · angular</span>
                </motion.div>
                <motion.div
                    initial={{opacity: 0, x: -20}}
                    animate={{opacity: 1, x: 0}}
                    transition={{delay: 1.0}}
                    className="flex gap-2.5"
                >
                    <span style={{color: 'var(--ok)'}}>[ OK ]</span>
                    <span style={{color: 'var(--text-muted)', minWidth: '108px'}}>backend</span>
                    <span style={{color: 'var(--text)'}}>node.js · spring_boot</span>
                </motion.div>
                <motion.div
                    initial={{opacity: 0, x: -20}}
                    animate={{opacity: 1, x: 0}}
                    transition={{delay: 1.2}}
                    className="flex gap-2.5"
                >
                    <span style={{color: 'var(--ok)'}}>[ OK ]</span>
                    <span style={{color: 'var(--text-muted)', minWidth: '108px'}}>ai/ml</span>
                    <span style={{color: 'var(--text)'}}>pytorch · scikit-learn</span>
                </motion.div>
                <motion.div
                    initial={{opacity: 0, x: -20}}
                    animate={{opacity: 1, x: 0}}
                    transition={{delay: 1.3}}
                    className="flex gap-2.5"
                >
                    <span style={{color: 'var(--ok)'}}>[ OK ]</span>
                    <span style={{color: 'var(--text-muted)', minWidth: '108px'}}>infra</span>
                    <span style={{color: 'var(--text)'}}>docker · aws</span>
                </motion.div>
                <motion.div
                    initial={{opacity: 0, x: -20}}
                    animate={{opacity: 1, x: 0}}
                    transition={{delay: 1.4}}
                    className="flex gap-2.5"
                >
                    <span style={{color: 'var(--ok)'}}>[ OK ]</span>
                    <span style={{color: 'var(--text-muted)', minWidth: '108px'}}>location</span>
                    <span style={{color: 'var(--text)'}}>kalutara, sri lanka</span>
                </motion.div>
                <motion.div
                    initial={{opacity: 0, x: -20}}
                    animate={{opacity: 1, x: 0}}
                    transition={{delay: 1.6}}
                    className="flex gap-2.5"
                >
                    <span style={{color: 'var(--ok)'}}>[ OK ]</span>
                    <span style={{color: 'var(--text-muted)', minWidth: '108px'}}>education</span>
                    <span style={{color: 'var(--text)'}}>bsc_software_engineering</span>
                </motion.div>
                <br/>
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: 1.8}}
                >
                    <span style={{color: 'var(--amber)'}}>$</span>{' '}
                    <span className="inline-block w-2 h-[15px]" style={{
                        background: 'var(--amber)',
                        verticalAlign: '-2px',
                        animation: 'blink 1.5s step-end infinite'
                    }}/>
                </motion.div>
            </div>
        </div>
    );
};

export default CodeBlock;
