import styles from "../styles/PowerStationDetails.module.css"

export default function PowerStationDetails({ name, value }) {
    return <div className={styles.container}>
        <div>
            <p className={styles.name}>{name}</p>
            <p className={styles.value}>{value}</p>
        </div>
    </div>
}