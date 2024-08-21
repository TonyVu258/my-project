"use client"
import React, { createContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import SlideBannerImage from './SlideBannerImage';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

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
                        <SlideBannerImage imgSrc={image.src} imgAlt={image.alt} link={image.link}/>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default SlideBanner;
