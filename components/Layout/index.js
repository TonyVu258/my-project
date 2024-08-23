"use client"
import React from 'react'
import styles from './Layout.module.css'
import Button from '../Button'
import { useRouter } from 'next/navigation';

function Layout({ type, content, subContent }) {
    const router = useRouter();
    const handleGoHome = () => {
        router.push('/'); // Navigate to the home page
      };
    return (
        <div className={styles.mainContent}>
            <div>
                <h1>{content}</h1>
                <p>{subContent}</p>
                <Button type='thank' title={'Back to home page'} action={handleGoHome}/>
            </div>
        </div>
    )
}

export default Layout