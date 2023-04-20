import styles from "../../styles/FootprintDisplay.module.css";

export default function FootprintDisplay({ report, reduction = false }) {
    return <div className={styles.container}>
        <p className={styles.title}>Annual estimated CO<sub>2</sub> footprint{reduction && " reduction"}</p>
        <h1 className={styles.sum}>{report.footprint} tons</h1>
        {report.cars_footprint && <p className={styles.report}>Cars {report.cars_footprint}t • Public
            transport {report.public_transport_footprint}t • Water processing {report.water_footprint}t
            • Extra trash services {report.trash_footprint}t •
            Electricity {report.electricity_footprint}t • Heating {report.heating_footprint}t</p>}
    </div>
}