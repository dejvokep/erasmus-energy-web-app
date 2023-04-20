import Head from 'next/head'
import StationMap from "../../components/map/StationMap";
import StationInfo from "../../components/map/StationInfo";
import {useState} from "react";
import styles from "../../styles/pages/Map.module.css"

export default function Map() {
    const [selected, setSelected] = useState();

    return (
        <div className={styles.container}>
            <Head>
                <title>Map | Energy is the future of the world</title>
            </Head>

            <div className={styles.map}>
                <StationMap selected={selected} setSelected={setSelected}/>
            </div>
            <StationInfo station={selected}/>
        </div>
    )
}
