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
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 overflow-hidden transition-colors duration-300">
            <Navbar
                darkMode={darkMode}
                setDarkMode={setDarkMode}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
            />
            <MobileMenu
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
            />

            {/* Purple gradient effects */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="purple-blur -top-10 -left-10"></div>
                <div className="purple-blur top-1/3 -right-10"></div>
                {/*<div className="purple-blur bottom-1/4 left-1/3"></div>*/}
                <div className="absolute inset-0 purple-gradient"></div>
            </div>

            <Outlet/>

            <Footer/>
        </div>
    )

}

export default Layout;
