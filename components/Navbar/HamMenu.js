import Link from 'next/link'
import React from 'react'
import styles from './Navbar.module.css'
import ShoppingBagIcon from '../Icon/ShoppingBagIcon'

function HamMenu() {
    return (
        <>
            <div className={`${styles.hamOverlay} active`}></div>
            <div className={styles.hamWrapper}>
                <div className={styles.hamLogo}>
                    <Link href="/market"><img src="" alt="Logo" />Logo</Link>
                </div>
                <div className={styles.hamCart}>
                    <ul>
                        <li><Link href="/market"><ShoppingBagIcon/><span>3</span></Link></li>
                    </ul>
                    <div className={styles.hamCartPrice}>item: <span>$150.00</span></div>
                </div>
                {/* Language section */}
                {/* <div className="humberger__menu__widget">
                    <div className="header__top__right__language">
                        <img src="" alt="" />
                        <div>English</div>
                        <span className="arrow_carrot-down"></span>
                        <ul>
                            <li><a href="#">Spanis</a></li>
                            <li><a href="#">English</a></li>
                        </ul>
                    </div>
                    <div className="header__top__right__auth">
                        <a href="#"><i className="fa fa-user"></i> Login</a>
                    </div>
                </div> */}
                <nav className={`${styles.hamNav} mobile-menu`}>
                    <ul>
                        <li className={`active`}><Link href="/market">Home</Link></li>
                        <li><Link href="/shopgrid">Shop</Link></li>
                        <li><Link href="/market">Pages</Link>
                            <ul className="header__menu__dropdown">
                                <li><Link href="/market">Shop Details</Link></li>
                                <li><Link href="/market">Shoping Cart</Link></li>
                                <li><Link href="/market">Check Out</Link></li>
                                <li><Link href="/market">Blog Details</Link></li>
                            </ul>
                        </li>
                        <li><Link href="/market">Blog</Link></li>
                        <li><Link href="/market">Contact</Link></li>
                    </ul>
                </nav>
                <div id="mobile-menu-wrap"></div>
                <div className="header__top__right__social">
                    <Link href="/market"><i className="fa fa-facebook"></i></Link>
                    <Link href="/market"><i className="fa fa-twitter"></i></Link>
                    <Link href="/market"><i className="fa fa-linkedin"></i></Link>
                    <Link href="/market"><i className="fa fa-pinterest-p"></i></Link>
                </div>
                <div className="humberger__menu__contact">
                    <ul>
                        <li><i className="fa fa-envelope"></i> hello@colorlib.com</li>
                        <li>Free Shipping for all Order of $99</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default HamMenu