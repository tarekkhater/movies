import React from 'react'
import { easeInOut, motion } from 'framer-motion'
import styles from '../../styles/SelectedMovie.module.css'
import Image from 'next/image'
export default function SelectedMovie({movie}) {
  return (
    <motion.div className={styles.container}
                initial={{x:-40,y:-40 , opacity:0}}
                animate={{x:0, y:0, opacity:1}}
                transition={{duration:1.1 , delay:0.3 , ease:easeInOut}}>
        <h3>Movies &gt; {movie?.name}</h3>
        <motion.div  className={styles.movie}  key={movie?.id}>
                    <div >
                        <Image src={movie?.image} alt={movie?.name} className={styles.image}  />
                    </div>
                    <div className={styles.info}>
                        <p>Name : <span>{movie?.name}</span></p>
                        <p>publishedYear : <span>{movie?.publishedYear}</span></p>
                        <p>Quality : <span>{movie?.quality}</span></p>
                        <p>Duration : <span>{movie?.duration} min</span></p>
                        <p>Category : <span>{movie?.category}</span></p>
                        <p >Rate : <span style={{color:"orange"}}>{movie?.star}  {movie?.rating} </span></p>
                        <p>Views : <span>{movie?.views}</span></p>
                        <p>Actors :<span> {movie?.actors}</span></p>
                        
                    </div>
        </motion.div>
    </motion.div>
    )
}
