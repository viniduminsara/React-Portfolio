import {motion, AnimatePresence} from 'framer-motion';
import {X} from 'lucide-react';
import {Link} from 'react-router-dom';

const navItems = [
    {name: 'Home', path: '/'},
    {name: 'Projects', path: '/projects'},
    {name: 'Blogs', path: '/blogs'},
];

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function MobileMenu({isOpen, onClose}: MobileMenuProps) {
    const menuVariants = {
        closed: {
            x: '100%',
            transition: {type: 'spring', stiffness: 300, damping: 30},
        },
        open: {
            x: 0,
            transition: {type: 'spring', stiffness: 300, damping: 30},
        },
    };

    const itemVariants = {
        closed: {x: 50, opacity: 0},
        open: {x: 0, opacity: 1},
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        onClick={onClose}
                        style={{background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)'}}
                        className="fixed inset-0 z-50"
                    />

                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        className="fixed top-0 right-0 bottom-0 w-64 shadow-xl z-50 p-6"
                        style={{
                            background: 'var(--panel)',
                            borderLeft: '1px solid var(--panel-border)',
                        }}
                    >
                        <div className="flex justify-end mb-8">
                            <button
                                onClick={onClose}
                                className="p-2 rounded-sm transition-colors"
                                style={{color: 'var(--text-muted)'}}
                            >
                                <X className="w-6 h-6"/>
                            </button>
                        </div>

                        <nav className="space-y-4">
                            {navItems.map((item, i) => (
                                <motion.div
                                    key={item.name}
                                    variants={itemVariants}
                                    transition={{delay: i * 0.1}}
                                >
                                    <Link
                                        to={item.path}
                                        onClick={onClose}
                                        className="block text-lg terminal-text no-underline transition-colors"
                                        style={{color: 'var(--text-muted)'}}
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
