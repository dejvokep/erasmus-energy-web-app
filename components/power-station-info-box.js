import styles from "../styles/PowerStationInfoBox.module.css";
import PowerStationDetails from "./power-station-details";

export default function PowerStationInfoBox({station}) {
    return <div className={styles.container}>
        <div className={styles.box}>
            {station && <div className={styles.location}><h1><a href={station.link}>{station.name}</a></h1></div>}
            {station && <PowerStationDetails name="Type" value={station.type}/>}
            {station && <PowerStationDetails name="Power output" value={station.power + " MW"}/>}
            {station && station.since && <PowerStationDetails name="Since" value={station.since}/>}
            {!station && <PowerStationDetails name="Please select a power station to show details."/>}
        </div>
    </div>
}