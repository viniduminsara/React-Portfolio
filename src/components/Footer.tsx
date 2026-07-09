import {motion} from 'framer-motion';

export default function Footer() {
    return (
        <footer className="relative z-10" style={{borderTop: '1px solid var(--panel-border)'}}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-4">
                    <motion.div
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}
                    >
                        <span className="terminal-text font-bold text-lg" style={{color: 'var(--amber)', letterSpacing: '0.5px'}}>
                            VM<span style={{color: 'var(--text-muted)'}}>_</span>
                        </span>
                    </motion.div>
                    <div className="space-y-2">
                        <p className="text-center terminal-text text-xs" style={{color: 'var(--text-muted)'}}>
                            Developed by Vinidu Minsara
                        </p>
                        <p className="text-center md:text-right font-thin text-xs" style={{color: 'var(--text-muted)'}}>
                            &copy;{new Date().getFullYear()} Vinidu Minsara | All rights reserved
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
