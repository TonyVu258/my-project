import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import Navbar from '../Navbar';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href="/">
                    <div>MyLogo</div>
                </Link>
            </div>
            <Navbar />
        </header>
    );
};

export default Header;
