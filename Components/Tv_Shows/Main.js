/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React from 'react'
import styles from '../../styles/Main.module.css'
import { easeInOut, motion } from 'framer-motion'
import { TvShows } from './TvShows'
import Link from 'next/link'
export default function Main() {
    
    
    
    return (
    <div className={styles.container}>
        <motion.div className={styles.movies}
                initial={{x:-40,y:-40 , opacity:0}}
                animate={{x:0, y:0, opacity:1}}
                transition={{duration:1.1 , delay:0.3 , ease:easeInOut}}>
            
                {
                TvShows.map((TvShow , i)=>(
                    <motion.div  id={styles.movie} key={TvShow.id}
                    whileHover={{scale:1.02 }}>
                    <div className={styles.card}  >
                    <Link href={`/tv_shows/${TvShow.id}`}>  <Image src={TvShow.image} alt={TvShow.name} className={styles.image}   /></Link>
                        <p>{TvShow.name}</p>
                        <p style={{color:"orange"}}>{TvShow.star}  {TvShow.rating}</p>
                        <p>{TvShow.category}</p>
                    </div>
                    </motion.div>
                ))
                }
            
        </motion.div>
    </div>
  )
}
