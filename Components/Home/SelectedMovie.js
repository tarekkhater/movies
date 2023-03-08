import React from 'react'
import { motion } from 'framer-motion'
import styles from '../../styles/SelectedMovie.module.css'
import Image from 'next/image'
export default function SelectedMovie({movie}) {
  return (
    <div className={styles.container}>
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
    </div>
    )
}
