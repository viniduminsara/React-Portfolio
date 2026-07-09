import {useState, useEffect} from 'react';
import {Moon, Sun, Menu} from 'lucide-react';
import {motion} from 'framer-motion';
import {Link, useLocation} from 'react-router-dom';

const navItems = [
    {name: 'Home', path: '/'},
    {name: 'Projects', path: '/projects'},
    {name: 'Blogs', path: '/blogs'},
];

interface NavbarProps {
    darkMode: boolean;
    setDarkMode: (value: boolean) => void;
    setIsMobileMenuOpen: (value: boolean) => void;
}

export default function Navbar({darkMode, setDarkMode, setIsMobileMenuOpen}: NavbarProps) {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{y: -100}}
            animate={{y: 0}}
            className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
            style={{
                borderBottom: scrolled ? '1px solid var(--panel-border)' : '1px solid transparent',
                background: scrolled ? 'var(--panel)' : 'transparent',
                backdropFilter: scrolled ? 'blur(12px)' : 'none',
            }}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link to="/" className="terminal-text font-bold text-lg no-underline" style={{color: 'var(--amber)', letterSpacing: '0.5px'}}>
                        VM<span style={{color: 'var(--text-muted)'}}>_</span>
                    </Link>

                    <div className="flex items-center gap-6">
                        <div className="hidden md:flex items-center gap-9">
                            {navItems.map(item => {
                                const isActive = location.pathname === item.path;
                                return (
                                    <Link
                                        key={item.name}
                                        to={item.path}
                                        className="terminal-text text-xs no-underline transition-colors"
                                        style={{
                                            color: isActive ? 'var(--amber)' : 'var(--text-muted)',
                                            paddingBottom: '2px',
                                            borderBottom: isActive ? '1px solid var(--amber)' : '1px solid transparent'
                                        }}
                                    >
                                        {item.name.toLowerCase()}
                                    </Link>
                                );
                            })}
                        </div>

                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className="w-[34px] h-[34px] flex items-center justify-center rounded-sm transition-colors"
                            style={{
                                border: '1px solid var(--panel-border)',
                                color: 'var(--text-muted)',
                                fontFamily: 'monospace',
                                fontSize: '13px',
                                background: 'transparent'
                            }}
                            aria-label="Toggle theme"
                        >
                            {darkMode ? <Sun className="w-4 h-4"/> : <Moon className="w-4 h-4"/>}
                        </button>

                        <button
                            className="md:hidden p-2 rounded-sm"
                            style={{color: 'var(--text-muted)'}}
                            onClick={() => setIsMobileMenuOpen(true)}
                        >
                            <Menu className="w-6 h-6"/>
                        </button>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
}
