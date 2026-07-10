import {useEffect, useState} from "react";
import Navbar from "./Navbar.tsx";
import MobileMenu from "./MobileMenu.tsx";
import {Outlet} from "react-router-dom";
import Footer from "./Footer.tsx";

const Layout = () => {
    const [darkMode, setDarkMode] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <div className="min-h-screen transition-colors duration-300" style={{background: 'var(--bg)'}}>
            <div className="fixed inset-0 overflow-hidden pointer-events-none"
                 style={{background: 'var(--amber-glow)'}}
            />
            <div className="scanlines fixed inset-0 z-[1]"/>

            <Navbar
                darkMode={darkMode}
                setDarkMode={setDarkMode}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
            />
            <MobileMenu
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
            />

            <div className="relative z-10">
                <Outlet/>
            </div>

            <Footer/>
        </div>
    )
}

export default Layout;
