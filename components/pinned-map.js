import styles from "../styles/PinnedMap.module.css"
import Image from "next/image";

const STATIONS = [{
    name: "Mokrá Lúka",
    type: "Solar",
    power: 10.87,
    since: 1995,
    pos: {
        x: 58.4,
        y: 48.5
    },
    link: "https://mokraluka.eu/obec/historia-obce/",
}, {
    name: "Nový Ruskov",
    type: "Solar",
    power: 11.84,
    since: 1999,
    pos: {
        x: 86.2,
        y: 42
    },
    link: "http://www.novyruskov.sk/index.php?option=com_content&view=article&catid=3%3Aruskovsky-spravodaj-&id=1548%3Afenuno&Itemid=224",
}, {
    name: "Veľká Domaša",
    type: "Hydro",
    power: 12.4,
    since: 1966,
    pos: {
        x: 86.7,
        y: 22.5
    },
    link: "https://www.seas.sk/elektraren/ve-domasa/",
}, {
    name: "Košice",
    type: "Solar",
    power: 4,
    since: 2008,
    pos: {
        x: 79.3,
        y: 43.8
    },
}, {
    name: "Humenné",
    type: "Solar",
    power: 2,
    since: 2007,
    pos: {
        x: 90.2,
        y: 26.7
    },
}, {
    name: "Lemešany",
    type: "Solar",
    power: 2,
    since: 2016,
    pos: {
        x: 78.6,
        y: 28.5
    },
}, {
    name: "Považská Bystrica",
    type: "Hydro",
    power: 55.2,
    since: 1964,
    pos: {
        x: 25.1,
        y: 31.5
    },
    link: "https://www.seas.sk/elektraren/ve-povazska-bystrica/",
}, {
    name: "Bešeňová",
    type: "Hydro",
    power: 4.6,
    since: 1976,
    pos: {
        x: 42.8,
        y: 29.8
    },
    link: "https://sk.wikipedia.org/wiki/Be%C5%A1e%C5%88ov%C3%A1_(vodn%C3%A1_n%C3%A1dr%C5%BE)",
}, {
    name: "Liptovská Mara",
    type: "Hydro",
    power: 198,
    since: 1975,
    pos: {
        x: 48.3,
        y: 24
    },
    link: "https://www.seas.sk/elektraren/pve-liptovska-mara/",
}, {
    name: "Mochovce",
    type: "Nuclear",
    power: 1943.4,
    since: 1998,
    pos: {
        x: 28,
        y: 73.3
    },
    link: "https://www.seas.sk/elektraren/ae-mochovce/",
}, {
    name: "Čierny Váh",
    type: "Hydro",
    power: 735.2,
    since: 1982,
    pos: {
        x: 52.6,
        y: 26.7
    },
    link: "https://www.seas.sk/elektraren/pve-cierny-vah/",
}, {
    name: "Gabčíkovo",
    type: "Hydro",
    power: 720,
    since: 1992,
    pos: {
        x: 5.4,
        y: 83.5
    },
    link: "https://www.seas.sk/elektraren/ve-gabcikovo/",
}, {
    name: "Cerová",
    type: "Wind",
    power: 3,
    since: 2003,
    pos: {
        x: 11.2,
        y: 58.4
    },
    link: "https://sk.wikipedia.org/wiki/Vetern%C3%A1_elektr%C3%A1re%C5%88_Cerov%C3%A1",
}, {
    name: "Horná Streda",
    type: "Hydro",
    power: 25.5,
    since: 1954,
    pos: {
        x: 13.9,
        y: 47.2
    },
    link: "https://www.seas.sk/elektraren/ve-horna-streda/",
}, {
    name: "Skalité",
    type: "Wind",
    power: 2,
    since: 2004,
    pos: {
        x: 34.4,
        y: 10.3
    },
    link: "https://sk.wikipedia.org/wiki/Vetern%C3%A1_elektr%C3%A1re%C5%88_Skalit%C3%A9",
}, {
    name: "Môťová",
    type: "Hydro",
    power: 0.2,
    since: 1958,
    pos: {
        x: 42.2,
        y: 51
    },
    link: "https://sk.wikipedia.org/wiki/M%C3%B4%C5%A5ov%C3%A1_(vodn%C3%A1_n%C3%A1dr%C5%BE)",
}, {
    name: "Malá Lodina",
    type: "Hydro",
    power: 0.68,
    since: 1974,
    pos: {
        x: 74.2,
        y: 39
    },
    link: "https://sk.wikipedia.org/wiki/Mal%C3%A1_Lodina_(vodn%C3%A1_n%C3%A1dr%C5%BE)",
}, {
    name: "Dobšiná",
    type: "Hydro",
    power: 24,
    since: 1953,
    pos: {
        x: 62.5,
        y: 36.5
    },
    link: "https://www.seas.sk/elektraren/pve-dobsina/",
}, {
    name: "Bohunice",
    type: "Nuclear",
    power: 1010,
    since: 1958,
    pos: {
        x: 15.8,
        y: 61.4
    },
    link: "https://www.seas.sk/elektraren/ae-bohunice-v2/",
}];

export default function PinnedMap({ selected, setSelected }) {
    return <div className={styles.container}>
        <Image src={"/map/map.svg"} height={624} width={1189} alt={"Slovakia"} priority={true} />
        {STATIONS.map(station => <div key={station.name} className={`${styles.icon} ${selected === station ? styles.selected : ""}`} style={{"--x": `${station.pos.x}%`, "--y": `${station.pos.y}%`}} onClick={setSelected.bind(null, station)} >
            <Image src={`/map/${station.type.toLowerCase()}.png`} height={256} width={256} alt={"Station icon"} />
        </div>)}
    </div>
}