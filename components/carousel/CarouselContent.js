import styles from "../../styles/CarouselContent.module.css"

export default function CarouselContent({ item }) {
    return <div className={styles.container}>
        <div className={styles.image} style={{"--url": `url("/carousel/${item.image}"`}}>
        </div>
        <div className={styles.text}>
            <p>{item.text}</p>
        </div>
    </div>
}