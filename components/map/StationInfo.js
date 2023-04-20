import styles from "../../styles/components/map/StationInfo.module.css";
import StationDetails from "./StationDetails";

export default function StationInfo({station}) {
    if (!station) {
        return <div className={styles.container}>
            <div className={styles.defaultBox}>
                <StationDetails value="Please select a power station to show details."/>
            </div>
        </div>
    }

    return <div className={styles.container}>
        <div className={styles.box}>
            <div className={styles.location}><h1 className={station.link && styles.link}><a href={station.link} target='_blank'
                                                    rel="noreferrer">{station.name}</a></h1></div>

            <div className={styles.details}>
                <StationDetails name="Type" value={station.type}/>
                <StationDetails name="Power output" value={station.power + " MW"}/>
                {station.since && <StationDetails name="Since" value={station.since}/>}
            </div>
        </div>
    </div>
}