import {motion} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import {Mail, Github, ExternalLink, Import} from 'lucide-react';
import {useRef, useState} from "react";
import emailjs from '@emailjs/browser';
import toast from "react-hot-toast";

export default function Contact() {
    const [ref, inView] = useInView({
        threshold: 0.1
    });
    const form = useRef<HTMLFormElement>();
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: ''
    });

    const validateForm = () => {
        const formData = new FormData(form.current!); // Use the non-null assertion operator
        const name = (formData.get("name") as string)?.trim() || "";
        const email = (formData.get("email") as string)?.trim() || "";
        const message = (formData.get("message") as string)?.trim() || "";
        const newErrors: {name: string, email: string, message: string} = {};

        // Name validation
        if (!name) {
            newErrors.name = "Name is required.";
        }

        // Email validation
        if (!email) {
            newErrors.email = "Email is required.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = "Please enter a valid email address.";
        }

        // Message validation
        if (!message) {
            newErrors.message = "Message is required.";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        const key = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

        toast.promise(
            emailjs
                .sendForm(serviceId, templateId, form.current, {
                    publicKey: key,
                })
            ,
            {
                loading: 'Sending...',
                success: <b>Message sent!</b>,
                error: <b>Could not send.</b>,
            }
        )
            .then(() => form.current.reset());
    }

    return (
        <section id="contact" className="py-20" ref={ref}>
            <div className="space-y-12">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={inView ? {opacity: 1, y: 0} : {}}
                    transition={{duration: 0.5}}
                    className="space-y-4"
                >
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Get in Touch</h2>
                    <div className="w-20 h-1 bg-purple-600"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{opacity: 0, x: -50}}
                        animate={inView ? {opacity: 1, x: 0} : {}}
                        transition={{duration: 0.5, delay: 0.2}}
                        className="space-y-6"
                    >
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                            I'm always interested in hearing about new projects and opportunities.
                            Whether you have a question or just want to say hi, feel free to reach out!
                        </p>

                        <div className="space-y-4">
                            <a
                                href="mailto:viniduminsara@gmail.com"
                                className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                            >
                                <Mail className="w-5 h-5"/>
                                viniduminsara@gmail.com
                            </a>
                            <div className="flex gap-4">
                                <a
                                    href="https://github.com/viniduminsara"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                                >
                                    <Github className="w-5 h-5"/>
                                    GitHub
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/vinidu-minsara/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                                >
                                    <ExternalLink className="w-5 h-5"/>
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        initial={{opacity: 0, x: 50}}
                        animate={inView ? {opacity: 1, x: 0} : {}}
                        transition={{duration: 0.5, delay: 0.4}}
                        className="space-y-6"
                        ref={form}
                        onSubmit={handleSubmit}
                    >
                        <div>
                            <label htmlFor="name"
                                   className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                className={`mt-1 block w-full rounded-lg border ${
                                    errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                                } bg-white dark:bg-gray-800 px-4 py-2 text-gray-900 dark:text-white focus:border-purple-500 focus:ring-purple-500`}
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                        </div>

                        <div>
                            <label htmlFor="email"
                                   className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                className={`mt-1 block w-full rounded-lg border ${
                                    errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                                } bg-white dark:bg-gray-800 px-4 py-2 text-gray-900 dark:text-white focus:border-purple-500 focus:ring-purple-500`}
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>

                        <div>
                            <label htmlFor="message"
                                   className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Message
                            </label>
                            <textarea
                                name="message"
                                rows={4}
                                className={`mt-1 block w-full rounded-lg border ${
                                    errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                                } bg-white dark:bg-gray-800 px-4 py-2 text-gray-900 dark:text-white focus:border-purple-500 focus:ring-purple-500`}
                            ></textarea>
                            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                        </div>

                        <button
                            type="submit"
                            className="w-full px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors duration-200"
                        >
                            Send Message
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
