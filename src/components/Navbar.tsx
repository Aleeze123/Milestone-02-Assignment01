'use client';

import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="navbar">
            <div className="brand">Milestone 2 Assignment</div>

            <div className="hamburger" onClick={toggleMenu}>
                {isMenuOpen ? '✕' : '≡'}
            </div>

            <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                <nav className="mobile-nav">
                    <button className="close-btn" onClick={toggleMenu}>
                    ✕
                    </button>
                    <Link href="/" onClick={toggleMenu}>Home</Link>
                    <Link href="/about" onClick={toggleMenu}>About</Link>
                    <Link href="/contact" onClick={toggleMenu}>Contact</Link>
                </nav>
            </div>

            <nav className="desktop-nav">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
            </nav>
        </header>
    );
};

export default Navbar;
