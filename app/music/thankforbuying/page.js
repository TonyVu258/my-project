import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Layout from '@/components/Layout'
import React from 'react'
import styles from '../../page.module.css'

function ThankForBuying() {
  return (
    <main className={styles.main}>
        <Header />
        <Layout type="thank" content='Thank you for buying' subContent='123123213'/>
        {/* <Footer/> */}
    </main>
  )
}

export default ThankForBuying