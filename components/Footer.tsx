
import React from 'react';

interface FooterProps {
    name: string;
}

const Footer: React.FC<FooterProps> = ({ name }) => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-gray-100 dark:bg-[#0a0a2a] border-t border-gray-200 dark:border-gray-700">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-gray-500 dark:text-gray-400">
                <p>&copy; {currentYear} {name}. All rights reserved.</p>
                <p className="text-sm mt-1">✨ Always learning, building, and sharing.</p>
            </div>
        </footer>
    );
};

export default Footer;
