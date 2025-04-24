import React from 'react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto px-4 text-center">
                <p>© {currentYear} Vincent Brancati</p>
                <div className="flex justify-center mt-4 space-x-4">
                    <a href="https://github.com/ebrancati"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400"
                    >
                        <span className="sr-only">GitHub</span>
                        <span>GitHub</span>
                    </a>
                    <a href="https://www.linkedin.com/in/enzo-brancati-a2880520b/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400"
                    >
                        <span className="sr-only">LinkedIn</span>
                        <span>LinkedIn</span>
                    </a>
                    <a href="https://www.youtube.com/@e.brancati"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400"
                    >
                        <span className="sr-only">YouTube</span>
                        <span>YouTube</span>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;