import {motion} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import {ArrowRight} from 'lucide-react';
import {Link} from 'react-router-dom';
import BlogCard from "./BlogCard.tsx";
import {useEffect, useState} from "react";
import errorImg from "../../../assets/img/503-error-service-unavailable.png"
import {fetchMediumBlogs} from "../../../service/apiService.ts";

const containerVariants = {
    hidden: {opacity: 0},
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

export default function Blog() {
    const [ref, inView] = useInView({
        threshold: 0.1
    });
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetchMediumBlogs().then(data => {
            setBlogs(data);
        });
    }, []);

    return (
        <section id="blogs" className="py-20" ref={ref}>
            <div className="space-y-12">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={inView ? {opacity: 1, y: 0} : {}}
                    transition={{duration: 0.5}}
                    className="space-y-4"
                >
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Latest Blog Posts</h2>
                    <div className="w-20 h-1 bg-purple-600"></div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {blogs.map((post, index) => (
                        <BlogCard key={index} {...post}/>
                    ))}
                </motion.div>

                {blogs.length >= 3 ?
                    <motion.div
                        initial={{opacity: 0}}
                        animate={inView ? {opacity: 1} : {}}
                        transition={{delay: 0.6}}
                        className="flex justify-center"
                    >
                        <Link
                            to="/blogs"
                            state={{blogs}}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors duration-200"
                        >
                            View All Posts
                            <ArrowRight className="w-4 h-4"/>
                        </Link>
                    </motion.div>

                    :

                    <div className='flex justify-center items-center'>
                        <img src={errorImg} alt="error image" className='w-80 h-80'/>
                    </div>
                }
            </div>
        </section>
    );
}
