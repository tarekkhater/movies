/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React from 'react'
import styles from '../../styles/Main.module.css'

import { easeInOut, motion } from 'framer-motion'
import { actors } from './actors'
import Link from 'next/link'
export default function Main() {
    
    
    
    return (
    <div className={styles.container}>
        <motion.div className={styles.movies}
                initial={{x:-40,y:-40 , opacity:0}}
                animate={{x:0, y:0, opacity:1}}
                transition={{duration:1.1 , delay:0.3 , ease:easeInOut}}>
                {
                actors.map((actor , i)=>(
                    <motion.div  id={styles.movie} key={actor.id}
                    whileHover={{scale:1.02 }}>
                    <div className={styles.card} >
                        <Image src={actor.image} alt={actor.name} className={styles.image} />
                        <p>{actor.name}</p>
                        <p><span style={{color:"darkred" , fontWeight:"bold"}}>Movies :</span> {actor.movies}</p>
                    </div>
                    </motion.div>
                ))
                }
            
        </motion.div>
    </div>
  )
}
