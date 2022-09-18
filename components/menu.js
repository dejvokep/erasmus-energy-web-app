import styles from "../styles/Menu.module.css"
import {useRouter} from "next/router";
import Link from "next/link";

export default function Menu(props) {
    const router = useRouter();

    return <div className={styles.container}>
        <div className={styles.options}>
            <p className={router.route === "/" ? styles.active : ""}><Link href="/">Home</Link></p>
            <p className={router.route === "/map" ? styles.active : ""}><Link href="/map">Map</Link></p>
            <p className={router.route === "/calculator" ? styles.active : ""}><Link href="/calculator">Calculator</Link></p>
        </div>
    </div>
}