import React from 'react'
import styles from './Loader.module.css'

function Loader() {
  return (
    <div className={styles.preloder} id='preloder'>
        <div className={styles.loader}></div>
    </div>
  )
}

export default Loader