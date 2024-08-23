"use client"
import React, { createContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import Link from 'next/link';
import styles from './Banner.module.css'

const SlideBanner = ({ children }) => {
    return (
        <Swiper
            navigation={true}
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            speed={800}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
            }}
            pagination={{ clickable: true }}
            modules={[Autoplay,EffectCoverflow, Pagination]}
            className="mySwiper"
        >
            {children.map((image, index) => {
                return (
                    <SwiperSlide key={index}>
                        <Link href={`/music${image.link}`}><img className={styles.sildeImage} src={image.src} alt={image.alt} style={{ width: '45%', objectFit: 'cover' }} /></Link>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default SlideBanner;
