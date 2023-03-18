import Image from "../Image/Image"
import styles from "./Card.module.css"

export default function Card({category,title,alt,src,price,descriptions,count,rate}){


    return (
        <div className={styles.cardContainer}>
            <div className={styles.imgContain} >
                <Image src={src} alt = {alt} className={styles.Img} />
                <button className={styles.category}>{category}</button>
            </div>
            <p className={styles.title}>{title}</p>
            <p className={styles.description}>{descriptions}</p>
            <p className={styles.prices}>$ {price}</p>
            <div className={styles.countrate}>
                <button>Count:{count}</button>
                <button>{rate}⭐</button>
            </div>
             

        </div>
    )
}