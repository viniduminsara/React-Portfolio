import {Calendar, Clock, User} from "lucide-react";
import {motion} from "framer-motion";

const itemVariants = {
    hidden: {opacity: 0, y: 20},
    visible: {
        opacity: 1,
        y: 0,
        transition: {duration: 0.5}
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
        if (srcIndex === -1) return null;
        const srcPart = htmlContent.slice(srcIndex + 5);
        return srcPart.split('"')[0];
    };

    return (
        <motion.article
            variants={itemVariants}
            className="terminal-panel overflow-hidden group"
        >
            <div className="relative aspect-video overflow-hidden">
                <img
                    src={extractImageUrlWithSplit(post.content)}
                    alt={post.title}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                />
            </div>

            <div className="p-6 space-y-4">
                <div className="flex items-center gap-4 text-sm" style={{color: 'var(--text-muted)'}}>
                    <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4"/>
                        {post.pubDate.split(' ')[0]}
                    </span>
                    <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4"/>
                        {(post.content.length / 1000).toFixed(0)} min read
                    </span>
                </div>

                <h3 className="text-xl font-semibold" style={{color: 'var(--text)'}}>
                    {post.title}
                </h3>

                <p className="text-sm" style={{color: 'var(--text-muted)'}}>
                    {post.content.split('<p>')[1]?.slice(0, 70)}...
                </p>

                <div className="flex items-center gap-2 text-sm" style={{color: 'var(--text-muted)'}}>
                    <User className="w-4 h-4"/>
                    <span>{post.author}</span>
                </div>

                <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm transition-colors no-underline"
                    style={{color: 'var(--amber)'}}
                >
                    Read in Medium →
                </a>
            </div>
        </motion.article>
    )
}

export default BlogCard;
