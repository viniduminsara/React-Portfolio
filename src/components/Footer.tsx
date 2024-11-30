import { Code2 } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from "../assets/img/logo.png";

export default function Footer() {
    return (
        <footer className="relative mt-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-4">
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex items-center gap-2"
                    >
                        <img src={logo} alt="logo" className='w-12 h-12'/>
                    </motion.div>
                    <div className='space-y-2'>
                        <p className="text-center text-lg text-gray-600 dark:text-gray-400">
                            Developed by Vinidu Minsara with ❤️
                        </p>
                        <p className="text-center md:text-right font-thin text-sm text-gray-600 dark:text-gray-400">
                            ©{new Date().getFullYear()} Vinidu Minsara | All rights reserved
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
