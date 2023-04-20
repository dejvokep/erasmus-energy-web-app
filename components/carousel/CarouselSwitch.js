import styles from "../../styles/components/carousel/CarouselSwitch.module.css";

export default function CarouselSwitch({items, active, setActive}) {
    return <div className={styles.container}>
        <div className={styles.title}>
            <h1>About the<br/><span className={styles.circled}>program</span></h1>
        </div>
        <div className={styles.switch}>
            <div className={styles.bar} style={{height: items.length * 60}}>
                <div className={styles.barFill} style={{top: active * 60}}/>
            </div>
            <div>
                {items.map((item, index) => <p key={index} onClick={setActive.bind(null, index)} className={styles.link}><span className={active === index ? styles.green : ""}>{item.name}</span></p>)}
            </div>
        </div>
    </div>
}