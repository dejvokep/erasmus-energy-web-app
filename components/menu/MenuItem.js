import {useRouter} from "next/router";
import styles from "../../styles/MenuItem.module.css";
import Link from "next/link";

export default function MenuItem({ route, name }) {
    const active = useRouter().route === route;

    return <div className={styles.container}>
        <p className={styles.text}><Link href={route} ><span className={active && styles.active}>{name}</span></Link></p>
    </div>
}