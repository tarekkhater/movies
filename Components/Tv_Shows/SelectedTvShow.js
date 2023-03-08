import React from 'react'
import { motion } from 'framer-motion'
import styles from '../../styles/SelectedMovie.module.css'
import Image from 'next/image'
export default function SelectedTvShow({tvShow}) {
  return (
    <div className={styles.container}>
        <h3>Movies &gt; {tvShow?.name}</h3>
        <motion.div  className={styles.movie}  key={tvShow?.id}>
                    <div >
                        <Image src={tvShow?.image} alt={tvShow?.name} className={styles.image}  />
                    </div>
                    <div className={styles.info}>
                        <p>Name : <span>{tvShow?.name}</span></p>
                        <p>publishedYear : <span>{tvShow?.publishedYear}</span></p>
                        <p>Quality : <span>{tvShow?.quality}</span></p>
                        <p>Duration : <span>{tvShow?.duration} min</span></p>
                        <p>Category : <span>{tvShow?.category}</span></p>
                        <p >Rate : <span style={{color:"orange"}}>{tvShow?.star}  {tvShow?.rating} </span></p>
                        <p>Views : <span>{tvShow?.views}</span></p>
                        <p>Actors :<span> {tvShow?.actors}</span></p>
                        
                    </div>
        </motion.div>
    </div>
    )
}
