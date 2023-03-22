import Image from "../../components/Image/Image"
import styles from "./Card.module.css"
// import DeleteIcon from '@mui/icons-material/Delete';
// import ModeEditIcon from '@mui/icons-material/ModeEdit';

export default function Card({category,title,alt,src,price,descriptions,brand,rate,edit,deleteicon}){


    return (
        <div className={styles.cardContainer}>
             <div className={styles.modify}> 
             {edit} 
             
             {deleteicon}
              
            </div>
            <div className={styles.imgContain} >
                <Image src={src} alt = {alt} 
                className={styles.Img} />
                <button className={styles.category}>{category}</button>
            </div>
            <p className={styles.title}>{title}</p>
            <p className={styles.description}>{descriptions}</p>
            <p className={styles.prices}>$ {price}</p>
            <div className={styles.countrate}>
                <button>{brand}</button>
                <button>{rate}⭐</button>
            </div>
           
             

        </div>
    )
}