import {motion} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import {Mail, Github, ExternalLink} from 'lucide-react';
import {useRef, useState} from "react";
import toast from "react-hot-toast";

export default function Contact() {
    const [ref, inView] = useInView({threshold: 0.1});
    const form = useRef<HTMLFormElement>();
    const [errors, setErrors] = useState({name: '', email: '', message: ''});

    const validateForm = () => {
        const formData = new FormData(form.current!);
        const name = (formData.get("name") as string)?.trim() || "";
        const email = (formData.get("email") as string)?.trim() || "";
        const message = (formData.get("message") as string)?.trim() || "";
        const newErrors: {name: string, email: string, message: string} = {};

        if (!name) newErrors.name = "Name is required.";
        if (!email) newErrors.email = "Email is required.";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Please enter a valid email address.";
        if (!message) newErrors.message = "Message is required.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        const url = import.meta.env.VITE_MESSAGEHUB_URL;
        if (!url) {
            toast.error('Message service is not configured.');
            return;
        }

        fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: form.current?.name.value,
                email: form.current?.email.value,
                message: form.current?.message.value,
            }),
        })
            .then((response) => {
                if (response.ok) {
                    toast.success('Message sent!');
                    form.current?.reset();
                } else {
                    toast.error('Could not send message.');
                }
            })
            .catch((e) => {
                console.error('Error sending message:', e);
                toast.error('Could not send message.');
            });
    }

    const inputStyle = (hasError: boolean) => ({
        background: 'var(--panel)',
        border: `1px solid ${hasError ? '#ef4444' : 'var(--panel-border)'}`,
        color: 'var(--text)',
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: '13px',
        padding: '10px 14px',
        borderRadius: '3px',
        width: '100%',
        outline: 'none',
        transition: 'border-color 0.2s',
    });

    return (
        <section id="contact" className="py-20" ref={ref}>
            <div className="space-y-12">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={inView ? {opacity: 1, y: 0} : {}}
                    transition={{duration: 0.5}}
                    className="space-y-4"
                >
                    <h2 className="section-title">Get in Touch</h2>
                    <div className="section-divider"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{opacity: 0, x: -50}}
                        animate={inView ? {opacity: 1, x: 0} : {}}
                        transition={{duration: 0.5, delay: 0.2}}
                        className="space-y-6"
                    >
                        <p className="text-lg leading-relaxed" style={{color: 'var(--text-muted)'}}>
                            I'm always interested in hearing about new projects and opportunities.
                            Whether you have a question or just want to say hi, feel free to reach out!
                        </p>

                        <div className="space-y-4">
                            <a
                                href="mailto:viniduminsara@gmail.com"
                                className="inline-flex items-center gap-2 transition-colors no-underline"
                                style={{color: 'var(--text-muted)'}}
                                onMouseEnter={e => e.currentTarget.style.color = 'var(--amber)'}
                                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
                            >
                                <Mail className="w-5 h-5"/>
                                viniduminsara@gmail.com
                            </a>
                            <div className="flex gap-4">
                                <a
                                    href="https://github.com/viniduminsara"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 transition-colors no-underline"
                                    style={{color: 'var(--text-muted)'}}
                                    onMouseEnter={e => e.currentTarget.style.color = 'var(--amber)'}
                                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
                                >
                                    <Github className="w-5 h-5"/>
                                    GitHub
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/vinidu-minsara/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 transition-colors no-underline"
                                    style={{color: 'var(--text-muted)'}}
                                    onMouseEnter={e => e.currentTarget.style.color = 'var(--amber)'}
                                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
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
                            <label htmlFor="name" className="block text-sm terminal-text mb-1" style={{color: 'var(--text-muted)'}}>
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                style={inputStyle(!!errors.name)}
                                onFocus={e => e.target.style.borderColor = 'var(--amber)'}
                                onBlur={e => { if (!errors.name) e.target.style.borderColor = 'var(--panel-border)' }}
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm terminal-text mb-1" style={{color: 'var(--text-muted)'}}>
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                style={inputStyle(!!errors.email)}
                                onFocus={e => e.target.style.borderColor = 'var(--amber)'}
                                onBlur={e => { if (!errors.email) e.target.style.borderColor = 'var(--panel-border)' }}
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm terminal-text mb-1" style={{color: 'var(--text-muted)'}}>
                                Message
                            </label>
                            <textarea
                                name="message"
                                rows={4}
                                style={inputStyle(!!errors.message)}
                                onFocus={e => e.target.style.borderColor = 'var(--amber)'}
                                onBlur={e => { if (!errors.message) e.target.style.borderColor = 'var(--panel-border)' }}
                            />
                            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                        </div>

                        <button
                            type="submit"
                            className="terminal-text text-sm font-semibold px-6 py-3 rounded-sm w-full"
                            style={{
                                background: 'var(--amber)',
                                color: '#1A1200',
                                border: '1px solid transparent',
                                cursor: 'pointer'
                            }}
                        >
                            Send Message
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
