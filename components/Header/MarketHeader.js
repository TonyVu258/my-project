import React from 'react'
import styles from './Header.module.css'
import EnvelopeIcon from '../Icon/EnvelopeIcon'
import Link from 'next/link'
import SocialIcon from '../Icon/SocialIcon'
import UserIcon from '../Icon/UserIcon'
import '../../app/globals.css'

function MarketHeader() {
    return (
        <header className={styles.marketHeader}>
            <div className={styles.headerTop}>
                <div className={styles.headerTopContainer}>
                    <div className={styles.headerTopRow}>
                        <div className={styles.headerTopCol}>
                            <div className={styles.headerTopLeft}>
                                <ul>
                                    <li><EnvelopeIcon style={{width:'14px', height:'14px'}}/> hello@colorlib.com</li>
                                    <li>Free Shipping for all Order of $99</li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.headerTopCol}>
                            <div className={styles.headerTopRight}>
                                <div className={styles.headerTopRightSocial}>
                                    <Link href="#"><SocialIcon type='facebook' style={{width:'14px', height:'14px'}}/></Link>
                                    <Link href="#"><SocialIcon type='twitter' style={{width:'14px', height:'14px'}}/></Link>
                                    <Link href="#"><SocialIcon type='linked-in' style={{width:'14px', height:'14px'}}/></Link>
                                    <Link href="#"><SocialIcon type='pinterest' style={{width:'14px', height:'14px'}}/></Link>
                                </div>
                                {/* <div className="header__top__right__language">
                                    <img src="img/language.png" alt="" />
                                    <div>English</div>
                                    <span className="arrow_carrot-down"></span>
                                    <ul>
                                        <li><a href="#">Spanis</a></li>
                                        <li><a href="#">English</a></li>
                                    </ul>
                                </div> */}
                                <div className={styles.headerTopRightAuth}>
                                    <Link href="#"><UserIcon style={{width:'14px', height:'14px'}}/> Login</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.headerContainer}>
                <div className={styles.headerTopRow}>
                    <div className={styles.headerCol}>
                        <div className={styles.headerLogo}>
                            <Link href="/market"><img src="/images/logo.png" alt="" /></Link>
                        </div>
                    </div>
                    <div className={styles.headerColCenter}>
                        <nav className="header__menu">
                            <ul>
                                <li className="active"><a href="./index.html">Home</a></li>
                                <li><a href="./shop-grid.html">Shop</a></li>
                                <li><a href="#">Pages</a>
                                    <ul className="header__menu__dropdown">
                                        <li><a href="./shop-details.html">Shop Details</a></li>
                                        <li><a href="./shoping-cart.html">Shoping Cart</a></li>
                                        <li><a href="./checkout.html">Check Out</a></li>
                                        <li><a href="./blog-details.html">Blog Details</a></li>
                                    </ul>
                                </li>
                                <li><a href="./blog.html">Blog</a></li>
                                <li><a href="./contact.html">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className={styles.headerCol}>
                        <div className="header__cart">
                            <ul>
                                <li><a href="#"><i className="fa fa-heart"></i> <span>1</span></a></li>
                                <li><a href="#"><i className="fa fa-shopping-bag"></i> <span>3</span></a></li>
                            </ul>
                            <div className="header__cart__price">item: <span>$150.00</span></div>
                        </div>
                    </div>
                </div>
                <div className="humberger__open">
                    <i className="fa fa-bars"></i>
                </div>
            </div>
        </header>
    )
}

export default MarketHeader