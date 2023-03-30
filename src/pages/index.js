import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import LandingPage from './LandingPage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>All-in-One Calculator App | Developed by P2P Clouds</title>
        <meta name="description" content="Get access to all types of calculators, including religious, financial, and health calculators, with our all-in-one calculator app developed by P2P Clouds." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keyword" content="calculator app, all-in-one calculator, religious calculator, financial calculator, health calculator, P2P Clouds" />
        <meta name='author' content='P2P Clouds'/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <LandingPage/>
      <main className={styles.main}>
      </main>
    </>
  )
}
