import {motion, AnimatePresence} from 'framer-motion';
import {X} from 'lucide-react';

const navItems = ['About', 'Projects', 'Skills', 'Blogs', 'Contact'];

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function MobileMenu({isOpen, onClose}: MobileMenuProps) {
    const menuVariants = {
        closed: {
            x: '100%',
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 30,
            },
        },
        open: {
            x: 0,
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 30,
            },
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
                        className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
                    />

                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        className="fixed top-0 right-0 bottom-0 w-64 glass-effect shadow-xl z-50 p-6"
                    >
                        <div className="flex justify-end mb-8">
                            <button
                                onClick={onClose}
                                className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                            >
                                <X className="w-6 h-6"/>
                            </button>
                        </div>

                        <nav className="space-y-4">
                            {navItems.map((item, i) => (
                                <motion.a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    onClick={onClose}
                                    variants={itemVariants}
                                    transition={{delay: i * 0.1}}
                                    className="block text-lg font-medium text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                                >
                                    {item}
                                </motion.a>
                            ))}
                        </nav>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
