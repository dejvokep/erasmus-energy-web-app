import styles from "../styles/Background.module.css";

export default function Background() {
    return <div className={styles.background} style={{
        backgroundImage: `url(/background.png)`,
        filter: "blur(0)",
    }} />
}