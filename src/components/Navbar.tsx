import {useState, useEffect} from 'react';
import {Moon, Sun, Menu} from 'lucide-react';
import {motion} from 'framer-motion';
import {Link, useLocation} from 'react-router-dom';
import logo from '../assets/img/logo.png'

// const navItems = [
//     {name: 'About', type: 'hash'},
//     {name: 'Projects', type: 'hash'},
//     {name: 'Skills', type: 'hash'},
//     {name: 'Blogs', type: 'hash',},
//     {name: 'Contact', type: 'hash'}
// ];

const navItems = [
    {name: 'Home', path: '/'},
    {name: 'Projects', path: '/projects'},
    {name: 'Blogs', path: '/blogs',},
];

interface NavbarProps {
    darkMode: boolean;
    setDarkMode: (value: boolean) => void;
    setIsMobileMenuOpen: (value: boolean) => void;
}

export default function Navbar({darkMode, setDarkMode, setIsMobileMenuOpen}: NavbarProps) {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            if (location.pathname === '/') {
                const sections = navItems
                    .filter(item => item.type === 'hash')
                    .map(item => ({
                        id: item.name.toLowerCase(),
                        element: document.getElementById(item.name.toLowerCase())
                    }));

                const currentSection = sections.find(section => {
                    if (section.element) {
                        const rect = section.element.getBoundingClientRect();
                        return rect.top <= 100 && rect.bottom >= 100;
                    }
                    return false;
                });

                setActiveSection(currentSection ? currentSection.id : '');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [location.pathname]);

    const renderNavLink = (item: typeof navItems[0]) => {
        const isActive = item.type === 'hash'
            ? activeSection === item.name.toLowerCase() && location.pathname === '/'
            : location.pathname === item.path;

        if (item.type === 'hash') {
            return (
                <motion.a
                    key={item.name}
                    href={`#${item.name.toLowerCase()}`}
                    className={`text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors ${
                        isActive ? 'text-purple-600 dark:text-purple-400 font-medium' : ''
                    }`}
                    whileHover={{y: -2}}
                    whileTap={{y: 0}}
                >
                    {item.name}
                </motion.a>
            );
        }

        return (
            <motion.div key={item.name} whileHover={{y: -2}} whileTap={{y: 0}}>
                <Link
                    to={item.path}
                    className={`text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors ${
                        isActive ? 'text-purple-600 dark:text-purple-400 font-medium' : ''
                    }`}
                >
                    {item.name}
                </Link>
            </motion.div>
        );
    };

    return (
        <motion.nav
            initial={{y: -100}}
            animate={{y: 0}}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 overflow-hidden ${
                scrolled ? 'glass-effect shadow-lg' : ''
            }`}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <motion.div
                        className="flex items-center gap-8"
                        whileHover={{scale: 1.05}}
                        whileTap={{scale: 0.95}}
                    >
                        <Link to="/" className="text-xl font-bold text-gray-900 dark:text-white">
                            <img src={logo} alt="logo" className='w-12 h-12'/>
                        </Link>
                    </motion.div>

                    <div className="flex items-center gap-6">
                        <div className="hidden md:flex items-center gap-6">
                            {navItems.map(renderNavLink)}
                        </div>

                        <motion.button
                            onClick={() => setDarkMode(!darkMode)}
                            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                            aria-label="Toggle theme"
                        >
                            {darkMode ? (
                                <Sun className="w-5 h-5 text-white"/>
                            ) : (
                                <Moon className="w-5 h-5 text-gray-700"/>
                            )}
                        </motion.button>

                        <button
                            className="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
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
