import styles from "../../styles/components/map/StationDetails.module.css"

export default function StationDetails({ name, value }) {
    return <div className={styles.container}>
        <div>
            <p className={styles.name}>{name}</p>
            <p className={styles.value}>{value}</p>
        </div>
    </div>
}