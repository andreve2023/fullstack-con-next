import React from 'react';
import Link from 'next/link'
const Navbar = () => {
    return (
        <nav>
            <menu>
                <Link href="/">
                    <span>Home</span>
                </Link>
                <Link href="/About">
                    <span>About</span>
                </Link>
            </menu>
        </nav>
    );
};

export default Navbar;