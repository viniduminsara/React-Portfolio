import {motion} from 'framer-motion';

const CodeBlock = () => {
    return (
        <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
            className="w-full max-w-2xl bg-white dark:bg-gray-900 rounded-lg shadow-xl overflow-hidden font-mono text-sm"
        >
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
            </div>

            <div className="p-6 text-gray-300 space-y-2">
                <motion.div
                    initial={{opacity: 0, x: -20}}
                    animate={{opacity: 1, x: 0}}
                    transition={{delay: 0.2}}
                >
                    <span className="text-purple-400">class</span>{" "}
                    <span className="text-yellow-400">Person</span> {"{"}
                </motion.div>

                <motion.div
                    initial={{opacity: 0, x: -20}}
                    animate={{opacity: 1, x: 0}}
                    transition={{delay: 0.4}}
                    className="pl-4"
                >
                    <span className="text-purple-400">Person</span>() {"{"}
                </motion.div>

                <motion.div
                    initial={{opacity: 0, x: -20}}
                    animate={{opacity: 1, x: 0}}
                    transition={{delay: 0.6}}
                    className="pl-8"
                >
                    <span className="text-blue-400">this</span>.
                    <span className="text-purple-400">name</span> ={" "}
                    <span className="text-green-400">"Vinidu Minsara"</span>;
                </motion.div>

                <motion.div
                    initial={{opacity: 0, x: -20}}
                    animate={{opacity: 1, x: 0}}
                    transition={{delay: 0.8}}
                    className="pl-8"
                >
                    <span className="text-blue-400">this</span>.
                    <span className="text-purple-400">age</span> ={" "}
                    <span className="text-orange-400">Year</span>.
                    <span className="text-yellow-400">now</span>().
                    <span className="text-yellow-400">getValue</span>()-
                    <span className="text-green-400">2005</span>;
                </motion.div>

                <motion.div
                    initial={{opacity: 0, x: -20}}
                    animate={{opacity: 1, x: 0}}
                    transition={{delay: 1}}
                    className="pl-8"
                >
                    <span className="text-blue-400">this</span>.
                    <span className="text-purple-400">gender</span> ={" "}
                    <span className="text-green-400">"Male"</span>;
                </motion.div>

                <motion.div
                    initial={{opacity: 0, x: -20}}
                    animate={{opacity: 1, x: 0}}
                    transition={{delay: 1.2}}
                    className="pl-4"
                >
                    {"}"}
                </motion.div>

                <motion.div
                    initial={{opacity: 0, x: -20}}
                    animate={{opacity: 1, x: 0}}
                    transition={{delay: 1.4}}
                >
                    {"}"}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default CodeBlock;
