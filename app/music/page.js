import React from 'react'
import styles from "./page.module.css"
import Header from '@/components/Header'
import SlideBanner from '@/components/Banner/SlideBanner'
import Footer from '@/components/Footer';

const images = [
    { src: '/images/demo1.jpg', alt: 'Slide 1', link:'/item1'},
    { src: '/images/demo2.jpg', alt: 'Slide 2', link:'/item2' },
    { src: '/images/demo3.jpg', alt: 'Slide 3', link:'/item3' },
  ];

function Music() {
  return (
    <>
      <Header />
      <main className={styles.main}>
            <SlideBanner>{images}</SlideBanner>
      </main>
      <Footer />
    </>
  )
}

export default Music