"use client"
import React from 'react';
import 'swiper/css';
import styles from './Banner.module.css'
import Link from 'next/link';

function SlideBannerImage({imgSrc, imgAlt, link}) {
    return <Link href={`/music${link}`}><img className={styles.sildeImage} src={imgSrc} alt={imgAlt} style={{ width: '40%', objectFit: 'cover' }} /></Link>;
}

export default SlideBannerImage