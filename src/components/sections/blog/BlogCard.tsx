import {ArrowRight, Calendar, Clock, User} from "lucide-react";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";

const itemVariants = {
    hidden: {opacity: 0, y: 20},
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    }
};

interface BlogCardProps {
    title: string,
    pubDate: string,
    author: string,
    content: string
    link: string
}

const BlogCard = (post: BlogCardProps) => {

    const extractImageUrlWithSplit = (htmlContent) => {
        const srcIndex = htmlContent.indexOf('src="');

        if (srcIndex === -1) {
            return null;
        }

        const srcPart = htmlContent.slice(srcIndex + 5);
        return srcPart.split('"')[0];
    };

    return (
        <motion.article
            variants={itemVariants}
            className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
        >
            <div className="relative aspect-video overflow-hidden">
                <img
                    src={extractImageUrlWithSplit(post.content)}
                    alt={post.title}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                />
            </div>

            <div className="p-6 space-y-4">
                <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4"/>
                    {post.pubDate.split(' ')[0]}
                </span>
                    <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4"/>
                        {(post.content.length / 1000).toFixed(0)} min read
                </span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {post.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300">
                    {post.content.split('<p>')[1].slice(0, 70)}...
                </p>

                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <User className="w-4 h-4"/>
                    <span>{post.author}</span>
                </div>

                <a
                    href={post.link}
                    className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
                >
                    Read More
                    <ArrowRight className="w-4 h-4"/>
                </a>
            </div>
        </motion.article>
    )
}

export default BlogCard;
