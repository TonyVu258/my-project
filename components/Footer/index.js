import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerAbout}>
                    <h4>About Us</h4>
                    <p>We are a company dedicated to providing the best services to our customers. Contact us for more information.</p>
                </div>

                <div className={styles.footerLinks}>
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                <div className={styles.footerContact}>
                    <h4>Contact Us</h4>
                    <p>Email: info@example.com</p>
                    <p>Phone: +123 456 7890</p>
                    <p>Address: 123 Street Name, City, Country</p>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <p>&copy; 2024 My Company. All Rights Reserved.</p>
                <div className={styles.footerSocials}>
                    <a href="#">Facebook</a> | 
                    <a href="#">Twitter</a> | 
                    <a href="#">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
