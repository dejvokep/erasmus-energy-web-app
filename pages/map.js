import Head from 'next/head'
import PinnedMap from "../components/pinned-map";
import PowerStationInfoBox from "../components/power-station-info-box";
import {useState} from "react";

export default function Map() {
    const [selected, setSelected] = useState();

    return (
        <div>
            <Head>
                <title>Map | Energy is the future of the world</title>
                <link rel="shortcut icon" href="/favicon.ico"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>

            <PinnedMap setSelected={setSelected} />
            <PowerStationInfoBox station={selected}/>
        </div>
    )
}
