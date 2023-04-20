import Head from 'next/head'
import PinnedMap from "../components/pinned-map";
import PowerStationInfoBox from "../components/power-station-info-box";
import {useState} from "react";
import styles from "../styles/Map.module.css"

export default function Map() {
    const [selected, setSelected] = useState();

    return (
        <div className={styles.container}>
            <Head>
                <title>Map | Energy is the future of the world</title>
            </Head>

            <div className={styles.map}>
                <PinnedMap selected={selected} setSelected={setSelected}/>
            </div>
            <PowerStationInfoBox station={selected}/>
        </div>
    )
}
