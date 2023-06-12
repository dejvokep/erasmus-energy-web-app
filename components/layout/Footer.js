import styles from "../../styles/components/layout/Footer.module.css"

export default function Footer() {
    return <div className={styles.container}>
        <div className={styles.center}>
            <div>
                <h3>Energy is the future of the world.</h3>
                <p>(c) Gymnázium, Alejová 1, Košice</p>
            </div>
        </div>
        <div>
            <div className={styles.appreciation}>
                <h4>Special thanks to</h4>
                <p>Gymnázium, Alejová 1, Košice for providing the photos and necessary documentation.</p>
            </div>
            <div className={styles.appreciation}>
                <h4>Icons made by</h4>
                <div className={styles.iconAuthors}>
                    <p><a href="https://heroicons.com/">Heroicons</a>, licensed under the <a
                        href="https://github.com/tailwindlabs/heroicons/blob/master/LICENSE">MIT license</a>.</p>
                    <p><a href="https://www.flaticon.com/free-icons/wind-turbine" title="wind turbine icons">Wind
                        turbine icons created by Freepik - Flaticon</a></p>
                    <p><a href="https://www.flaticon.com/free-icons/nuclear-plant" title="nuclear plant icons">Nuclear
                        plant icons created by Freepik - Flaticon</a></p>
                    <p><a href="https://www.flaticon.com/free-icons/solar-panel" title="solar panel icons">Solar panel
                        icons created by monkik - Flaticon</a></p>
                    <p><a href="https://www.flaticon.com/free-icons/hydro-power" title="hydro power icons">Hydro power
                        icons created by DinosoftLabs - Flaticon</a></p>
                </div>
            </div>
        </div>
    </div>
}