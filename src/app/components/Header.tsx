'use client';

import React from 'react';

const Header: React.FC = () => {
    const downloadCV = () => {
        const link = document.createElement('a');
        link.href = '/cv.pdf';
        link.download = 'cv.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <header className="bg-blue-600 text-white py-24">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-5xl font-bold mb-4">Vincent Brancati</h1>
                <p className="text-xl mb-8 hidden sm:block">
                    Full Stack Developer & SEO specialist
                </p>
                <div className="text-xl mb-8 block sm:hidden">
                    <p>Full Stack Developer</p>
                    <p>SEO specialist</p>
                </div>
                {/*
                <button
                    onClick={downloadCV}
                    className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition duration-300"
                >
                    Download CV
                </button>
                */}
            </div>
        </header>
    );
};

export default Header;