import Head from 'next/head'
import React from 'react'
import styles from '../../styles/Home.module.css';
import Navbar from '../Navbar';
export default function Layout({container , title}) {
  return (
    <div>
        <Head>
        <title>{title ? title  : 'Movies'}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <header>
            <Navbar />
        </header>
        <main className={styles.main}>
            {container}
        </main>
        <footer className={styles.footer}>
            <p>Copyright © 2022 Movies</p>
        </footer>
    </div>
  )
}
