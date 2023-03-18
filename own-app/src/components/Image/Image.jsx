import styles from "./Image.module.css"

export default function Image({src,alt}){


    return (
        <div className={styles.ImgContainer}>
              <img className={styles.ImageTag} src={src} alt={alt} />
        </div>
    )
}