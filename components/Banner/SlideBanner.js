"use client"
import React, { createContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import SlideBannerImage from './SlideBannerImage';
import { EffectCoverflow, Pagination } from 'swiper/modules';



const SlideBanner = ({ children }) => {
    return (
        <Swiper
            loop={true}
            navigation={true}
            spaceBetween={30}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination]}
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
