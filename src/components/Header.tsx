import React, { useState, useEffect } from 'react';

interface HeaderProps {
    theme: string;
    toggleTheme: () => void;
}

const NavLink: React.FC<{ href: string; children: React.ReactNode; onClick: () => void }> = ({ href, children, onClick }) => (
    <a href={href} onClick={onClick} className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300 font-medium tracking-wide relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-primary-500 after:transition-all after:duration-300 hover:after:w-full">
        {children}
    </a>
);

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: "#about", label: "About" },
        { href: "#skills", label: "Skills" },
        { href: "#experience", label: "Experience" },
        { href: "#stats", label: "Stats" },
        { href: "#contact", label: "Contact" },
    ];

    const closeMenu = () => setIsOpen(false);

    return (
        <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-[#11112f]/80 backdrop-blur-lg shadow-md' : 'bg-transparent'}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <a href="#home" className="text-2xl font-display font-bold text-primary-600 dark:text-primary-400">
                        Mahir Dyan
                    </a>
                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map(link => <NavLink key={link.href} href={link.href} onClick={closeMenu}>{link.label}</NavLink>)}
                    </nav>
                    <div className="flex items-center space-x-4">
                        <button onClick={toggleTheme} className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300" aria-label="Toggle theme">
                            <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'} text-lg`}></i>
                        </button>
                        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden w-10 h-10 rounded-full flex items-center justify-center bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200" aria-label={isOpen ? "Close menu" : "Open menu"}>
                            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-lg`}></i>
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            <div className={`md:hidden absolute top-20 left-0 w-full bg-white dark:bg-gray-900 shadow-lg transition-transform duration-300 ease-in-out ${isOpen ? 'transform translate-y-0' : 'transform -translate-y-[150%]'}`}>
                <nav className="flex flex-col items-center space-y-4 p-6">
                    {navLinks.map(link => <NavLink key={link.href} href={link.href} onClick={closeMenu}>{link.label}</NavLink>)}
                </nav>
            </div>
        </header>
    );
};

export default Header;