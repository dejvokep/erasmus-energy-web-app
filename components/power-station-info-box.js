import styles from "../styles/PowerStationInfoBox.module.css";
import PowerStationDetails from "./power-station-details";

export default function PowerStationInfoBox({station}) {
    if (!station) {
        return <div className={styles.container}>
            <div className={styles.defaultBox}>
                <PowerStationDetails name="Please select a power station to show details."/>
            </div>
        </div>
    }

    return <div className={styles.container}>
        <div className={styles.box}>
            <div className={styles.location}><h1 className={station.link && styles.link}><a href={station.link} target='_blank'
                                                    rel="noreferrer">{station.name}</a></h1></div>

            <div className={styles.details}>
                <PowerStationDetails name="Type" value={station.type}/>
                <PowerStationDetails name="Power output" value={station.power + " MW"}/>
                {station.since && <PowerStationDetails name="Since" value={station.since}/>}
            </div>
        </div>
    </div>
}