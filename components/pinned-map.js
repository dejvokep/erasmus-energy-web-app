import styles from "../styles/PinnedMap.module.css"
import {useEffect} from "react";

const stations = [{
    id: "mokra_luka",
    name: "Mokrá Lúka",
    type: "Solar",
    power: 10.874,
    since: 1995,
    link: "https://mokraluka.eu/obec/historia-obce/",
}, {
    id: "novy_ruskov",
    name: "Nový Ruskov",
    type: "Solar",
    power: 7.88,
    since: 1999,
    link: "http://www.novyruskov.sk/index.php?option=com_content&view=article&catid=3%3Aruskovsky-spravodaj-&id=1548%3Afenuno&Itemid=224",
}, {
    id: "domasa",
    name: "Veľká Domaša",
    type: "Hydro",
    power: 6.2,
    since: 1966,
    link: "https://www.seas.sk/elektraren/ve-domasa/",
}, {
    id: "kosice",
    name: "Košice",
    type: "Solar",
    power: 4.02,
    since: 2008,
}, {
    id: "humenne",
    name: "Humenné",
    type: "Solar",
    power: 2,
    since: 2007,
}, {
    id: "drienov",
    name: "Lemešany",
    type: "Solar",
    power: 2,
    since: 2016,
}, {
    id: "povazska_bystrica",
    name: "Považská Bystrica",
    type: "Hydro",
    power: 55.2,
    since: 1964,
    link: "https://www.seas.sk/elektraren/ve-povazska-bystrica/",
}, {
    id: "besenova",
    name: "Bešeňová",
    type: "Hydro",
    power: 4.6,
    since: 1976,
    link: "https://sk.wikipedia.org/wiki/Be%C5%A1e%C5%88ov%C3%A1_(vodn%C3%A1_n%C3%A1dr%C5%BE)",
}, {
    id: "liptovska_mara",
    name: "Liptovská Mara",
    type: "Hydro",
    power: 198,
    since: 1975,
    link: "https://www.seas.sk/elektraren/pve-liptovska-mara/",
}, {
    id: "mochovce",
    name: "Mochovce",
    type: "Nuclear",
    power: 520,
    since: 1998,
    link: "https://www.seas.sk/elektraren/ae-mochovce/",
}, {
    id: "cierny_vah",
    name: "Čierny Váh",
    type: "Hydro",
    power: 75,
    since: 1982,
    link: "https://www.seas.sk/elektraren/pve-cierny-vah/",
}, {
    id: "gabcikovo",
    name: "Gabčíkovo",
    type: "Hydro",
    power: 90,
    since: 1992,
    link: "https://www.seas.sk/elektraren/ve-gabcikovo/",
}, {
    id: "cerova",
    name: "Cerová",
    type: "Wind",
    power: 3,
    since: 2003,
    link: "https://sk.wikipedia.org/wiki/Vetern%C3%A1_elektr%C3%A1re%C5%88_Cerov%C3%A1",
}, {
    id: "horna_streda",
    name: "Horná Streda",
    type: "Hydro",
    power: 7.3,
    since: 1954,
    link: "https://www.seas.sk/elektraren/ve-horna-streda/",
}, {
    id: "skalite",
    name: "Skalité",
    type: "Wind",
    power: 1.2,
    since: 2004,
    link: "https://sk.wikipedia.org/wiki/Vetern%C3%A1_elektr%C3%A1re%C5%88_Skalit%C3%A9",
}, {
    id: "motova",
    name: "Môťová",
    type: "Hydro",
    power: 17,
    since: 1958,
    link: "https://sk.wikipedia.org/wiki/M%C3%B4%C5%A5ov%C3%A1_(vodn%C3%A1_n%C3%A1dr%C5%BE)",
}, {
    id: "velka_lodina",
    name: "Malá Lodina",
    type: "Hydro",
    power: 68,
    since: 1974,
    link: "https://sk.wikipedia.org/wiki/Mal%C3%A1_Lodina_(vodn%C3%A1_n%C3%A1dr%C5%BE)",
}, {
    id: "dobsina",
    name: "Dobšiná",
    type: "Hydro",
    power: 24,
    since: 1953,
    link: "https://www.seas.sk/elektraren/pve-dobsina/",
}, {
    id: "bohunice",
    name: "Bohunice",
    type: "Nuclear",
    power: 1760,
    since: 1958,
    link: "https://www.seas.sk/elektraren/ae-bohunice-v2/",
}];

export default function PinnedMap({ setSelected }) {

    function setClickedPin(el, station) {
        setSelected(selected => {
            if (selected) {
                document.getElementById(selected.id).classList.remove(styles.pinSelected)
            }
            el.classList.add(styles.pinSelected)
            return station
        })
    }

    useEffect(() => stations.forEach(station => {
        const el = document.getElementById(station.id)
        el.classList.add(styles.pin)
        el.addEventListener("click", setClickedPin.bind(null, el, station))
    }), [])

    return <div className={styles.container}>
        <div className={styles.map}>
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 987 518">
                <defs>
                    <clipPath id="clip-Web_1920_1">
                        <rect width="987" height="518"/>
                    </clipPath>
                </defs>
                <g >
                    <rect width="987" height="518" fill="none"/>
                    <g id="map" transform="translate(-95.56 -124.26)">
                        <g transform="translate(95.56 405.614)">
                            <g>
                                <path
                                      d="M112.7,680.736,95.56,711.583v23.989l45.41,83.968,25.679,4.671,49.3-53.507-38.272-81.972,2.251-33.183-37.1,25.186Z"
                                      transform="translate(-95.56 -655.55)" fill="#39b54a"/>
                            </g>
                        </g>
                        <g transform="translate(110.557 344.263)">
                            <path
                                  d="M165.006,539.7,133.3,579.11l-9.421,41.131h29.989l45.622-29.778-2.568,42.2L236.339,717.7,184.282,773.61,267.4,833.377l31.271-44.341-9.421-41.343-14.357-23.131,17.137-13.282-3.209-41.772,14.992-26.992-21.2-13.064L305.1,604.175l-64.9-15.421-13.282,13.064-28.062-45.839Z"
                                  transform="translate(-123.88 -539.7)" fill="#39b54a"/>
                        </g>
                        <g transform="translate(188.954 217.379)">
                            <path
                                  d="M271.92,438.762l25.17,41.878,13.387-11.031,65.762,16.067.429-24.635,43.986,19.424,19.991,31.059,38.987-21.209,38.7-47.269-25.557-24.132.069-27.845-41.306,4.321,22.883-23.174-9.066-30.847L427.009,300.1l-31.382,9.5L381.81,379.641l-34.7,31.488-49.483,28.92-17.995-7.711Z"
                                  transform="translate(-271.92 -300.1)" fill="#39b54a"/>
                        </g>
                        <g transform="translate(262.501 386.888)">
                            <path
                                  d="M448.426,620.19v23.137L426.8,665.547,447.642,678.1l-16.994,29.7,3.527,43.774L418.51,763.782,431.5,784.144l10.146,43.9L410.8,872.169l41.269,3.14,56.124-4.067,71.973-13.922,9-13.5,17.989-1.281-18.635-41.772,37.843-25.35,7.917-34.761-45.045,12.45,4.284-44.732L573.88,685.952l-31.515,25.928-11.613-55.133-26.558,14.5-21.135-34.56Z"
                                  transform="translate(-410.8 -620.19)" fill="#39b54a"/>
                        </g>
                        <g transform="translate(349.18 124.26)">
                            <path
                                  d="M648.1,576.963l9.426,48.837L685.8,601.382l26.992,28.7-5.571,38.987,46.7-14.568-8.139,42.842h38.987l38.987-10.708,23.989-44.558,55.695,28.814,65.973-43.806,22.385-53.444-32.807-5.105,7.07-30.7-32.775-37.345,12.567-33.627L821.766,456.81l-51.887,29.221-.54-9.749L731.639,481l-4.708,39.416-26.277-3.426-40.131,54.408Z"
                                  transform="translate(-609.113 -280.703)" fill="#39b54a"/>
                            <path
                                  d="M574.48,214.827l38.987,40.957,10.284,34.7-17.566,16.708,34.7-6.858v32.987l22.7,21.85,23.566,3L692.3,318.33l47.979-6V320.9l44.987-26.987,86.965,8.568L867.945,251.5,837.1,231.365l-20.134-1.716,9.855-20.992-10.713-34.274H792.116l-34.7-50.124-34.056,27.416-9.643,33.416-35.984,4.284-4.284-30.413L599.973,167.1Z"
                                  transform="translate(-574.48 -124.26)" fill="#39b54a"/>
                        </g>
                        <g transform="translate(614.509 136.62)">
                            <path
                                  d="M1075.51,238.029l33.135,21.961,4.337,53.746,34.538,3.463,25.742-32.431,65.19-3.5,79.112,24.847,8.568,15.993,19.991-21.993,14.849.286s9.426,21.421,11.423,21.707,46.268-4.57,46.268-4.57l-4.284-28.274,60.551,8.854-2.282-10.851,14-13.424,10.284,15.135,22.851-2.568,12.853-35.417,10.284-4.856V225H1517.5l-69.691-24.561-2-16.279-36.842-25.991-13.139,2.568L1370.691,147.6,1344.7,160.738,1308.853,149.6l-11.566,16.851L1287,159.028l-15.707,5.428,8.854,12.853-17.423,17.137-9.712,4-36.27-28.274-21.707,3.14-7.424,9.426-22.851-9.14-18.561,6.281-2.568,14.282-22.279,5.142L1107.93,239l-29.131-9.426Z"
                                  transform="translate(-1075.51 -147.6)" fill="#39b54a"/>
                        </g>
                        <g transform="translate(679.201 270.251)">
                            <path
                                  d="M1209.882,439.679l-12.212,33.13,32.849,37.414-6.572,27.988,30.847,4.57,4.856-17.417,52.549-16.57,52.268,19.711,53.979-28.846,31.991,16.565,23.131,38.844,21.421,2.854,52.554-21.707-3.14-50.838,28.274-31.133,2.431-43.223-22.8,2.256-8.621-13.335-8.25,7.5,3.251,14.177-60.265-7.356,3.855,27.13-54.98,6.927-12.492-22.989-9.5.212L1382.817,449.6l-12.635-20.42-74.69-23.778-62.049,4.067Z"
                                  transform="translate(-1197.67 -399.94)" fill="#39b54a"/>
                        </g>
                    </g>
                    <g id="bohunice" transform="translate(500.808 134.613)">
                        <g transform="translate(-353.63 176.26)" strokeWidth="3.5">
                            <circle cx="9" cy="9" r="9" stroke="none"/>
                            <circle cx="9" cy="9" r="7.25" fill="none"/>
                        </g>
                    </g>
                    <g id="mochovce" transform="translate(622.808 197.505)">
                        <g transform="translate(-355.63 175.368)"
                           strokeWidth="3.5">
                            <circle cx="9" cy="9" r="9" stroke="none"/>
                            <circle cx="9" cy="9" r="7.25" fill="none"/>
                        </g>
                    </g>
                    <g id="cierny_vah" transform="translate(862.808 -38.495)">
                        <g transform="translate(-352.63 169.368)"
                           strokeWidth="3.5">
                            <circle cx="9" cy="9" r="9" stroke="none"/>
                            <circle cx="9" cy="9" r="7.25" fill="none"/>
                        </g>
                    </g>
                    <g id="gabcikovo" transform="translate(476.808 310.505)">
                        <g transform="translate(-432.63 115.368)"
                           strokeWidth="3.5">
                            <circle cx="9" cy="9" r="9" stroke="none"/>
                            <circle cx="9" cy="9" r="7.25" fill="none"/>
                        </g>
                    </g>
                    <g id="cerova" transform="translate(464.599 248.613)">
                        <g transform="translate(-363.422 46.26)" strokeWidth="3.5">
                            <circle cx="9" cy="9" r="9" stroke="none"/>
                            <circle cx="9" cy="9" r="7.25" fill="none"/>
                        </g>
                    </g>
                    <g id="horna_streda" transform="translate(481.704 61.613)">
                        <g transform="translate(-353.526 175.26)"
                           strokeWidth="3.5">
                            <circle cx="9" cy="9" r="9" stroke="none"/>
                            <circle cx="9" cy="9" r="7.25" fill="none"/>
                        </g>
                    </g>
                    <g id="skalite" transform="translate(683.703 -131.26)">
                        <g transform="translate(-353.526 176.133)"
                           strokeWidth="3.5">
                            <circle cx="9" cy="9" r="9" stroke="none"/>
                            <circle cx="9" cy="9" r="7.25" fill="none"/>
                        </g>
                    </g>
                    <g id="motova" transform="translate(760.808 81.168)">
                        <g transform="translate(-353.63 175.706)"
                           strokeWidth="3.5">
                            <circle cx="9" cy="9" r="9" stroke="none"/>
                            <circle cx="9" cy="9" r="7.25" fill="none"/>
                        </g>
                    </g>
                    <g id="velka_lodina" transform="translate(1076.808 18.276)">
                        <g transform="translate(-353.63 176.598)"
                           strokeWidth="3.5">
                            <circle cx="9" cy="9" r="9" stroke="none"/>
                            <circle cx="9" cy="9" r="7.25" fill="none"/>
                        </g>
                    </g>
                    <g id="dobsina" transform="translate(960.808 2.722)">
                        <g transform="translate(-353.63 178.152)"
                           strokeWidth="3.5">
                            <circle cx="9" cy="9" r="9" stroke="none"/>
                            <circle cx="9" cy="9" r="7.25" fill="none"/>
                        </g>
                    </g>
                    <g id="mokra_luka" transform="translate(920.808 65.613)">
                        <g transform="translate(-353.63 178.26)"
                           strokeWidth="3.5">
                            <circle cx="9" cy="9" r="9" stroke="none"/>
                            <circle cx="9" cy="9" r="7.25" fill="none"/>
                        </g>
                    </g>
                    <g id="novy_ruskov" transform="translate(1194.495 34.168)">
                        <g transform="translate(-353.317 175.706)"
                           strokeWidth="3.5">
                            <circle cx="9" cy="9" r="9" stroke="none"/>
                            <circle cx="9" cy="9" r="7.25" fill="none"/>
                        </g>
                    </g>
                    <g id="domasa" transform="translate(1200.599 -68.368)">
                        <g transform="translate(-354.422 176.242)"
                           strokeWidth="3.5">
                            <circle cx="9" cy="9" r="9" stroke="none"/>
                            <circle cx="9" cy="9" r="7.25" fill="none"/>
                        </g>
                    </g>
                    <g id="kosice" transform="translate(1127.016 43.722)">
                        <g transform="translate(-353.839 175.152)"
                           strokeWidth="3.5">
                            <circle cx="9" cy="9" r="9" stroke="none"/>
                            <circle cx="9" cy="9" r="7.25" fill="none"/>
                        </g>
                    </g>
                    <g id="humenne" transform="translate(1233.777 -44.616)">
                        <g transform="translate(-353.599 175.49)"
                           strokeWidth="3.5">
                            <circle cx="9" cy="9" r="9" stroke="none"/>
                            <circle cx="9" cy="9" r="7.25" fill="none"/>
                        </g>
                    </g>
                    <g id="drienov" transform="translate(1120.495 -36.922)">
                        <g transform="translate(-353.317 176.796)"
                           strokeWidth="3.5">
                            <circle cx="9" cy="9" r="9" stroke="none"/>
                            <circle cx="9" cy="9" r="7.25" fill="none"/>
                        </g>
                    </g>
                    <g id="povazska_bystrica" transform="translate(591.495 -19.17)">
                        <g transform="translate(-353.317 174.044)"
                           strokeWidth="3.5">
                            <circle cx="9" cy="9" r="9" stroke="none"/>
                            <circle cx="9" cy="9" r="7.25" fill="none"/>
                        </g>
                    </g>
                    <g id="besenova" transform="translate(764.808 -28.724)">
                        <g transform="translate(-351.63 174.598)"
                           strokeWidth="3.5">
                            <circle cx="9" cy="9" r="9" stroke="none"/>
                            <circle cx="9" cy="9" r="7.25" fill="none"/>
                        </g>
                    </g>
                    <g id="liptovska_mara" transform="translate(811.016 -50.616)">
                        <g transform="translate(-343.839 166.49)"
                           strokeWidth="3.5">
                            <circle cx="9" cy="9" r="9" stroke="none"/>
                            <circle cx="9" cy="9" r="7.25" fill="none"/>
                        </g>
                    </g>
                </g>
            </svg>
        </div>
    </div>
}