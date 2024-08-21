import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/">
              <div className={styles.navLink}>Home</div>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/about">
              <div className={styles.navLink}>About</div>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/services">
              <div className={styles.navLink}>Services</div>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/contact">
              <div className={styles.navLink}>Contact</div>
            </Link>
          </li>
        </ul>
      </nav>
  );
};

export default Navbar;
