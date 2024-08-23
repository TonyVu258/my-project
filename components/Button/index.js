'use client';

import React, { useEffect } from 'react';
import styles from './Button.module.css';

function Button({ action, title }) {
  useEffect(() => {
    const btn = document.querySelector(`.${styles.customButton}`);

    if (btn) {
      btn.onmousemove = function(e) {
        const x = e.pageX - btn.offsetLeft;
        const y = e.pageY - btn.offsetTop; // Corrected from pagey to pageY
        btn.style.setProperty('--x', x + 'px'); // Corrected from styles to style
        btn.style.setProperty('--y', y + 'px');
      };
    }
  }, []); // Empty dependency array ensures this runs only once after mount

  return (
    <button type="button" className={styles.customButton} onClick={action}>
      <span>{title}</span>
    </button>
  );
}

export default Button;
