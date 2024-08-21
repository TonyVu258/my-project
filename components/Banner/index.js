import React from 'react';
import styles from './Banner.module.css';
import Link from 'next/link';

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={`${styles.service} ${styles.music}`}>
        <div>
          <h2>Music Service</h2>
          <Link href="/music"><button className={styles.button}>Explore Music</button></Link>
        </div>
      </div>
      <div className={`${styles.service} ${styles.market}`}>
        <div>
          <h2>Market Service</h2>
          <Link href="/market"><button className={styles.button}>Explore Market</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
