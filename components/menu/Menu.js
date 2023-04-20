import styles from "../../styles/Menu.module.css"
import MenuItem from "./MenuItem";
import {useEffect, useRef} from "react";

const PAGES = [
    {
        route: "/",
        name: "Home"
    },
    {
        route: "/map",
        name: "Map"
    },
    {
        route: "/calculator",
        name: "Calculator"
    },
    {
        route: "/tasks",
        name: "Tasks"
    }
]

export default function Menu() {
    const ref = useRef();

    useEffect(() => {
        document.onscroll = () => {
            const scroll = (document.documentElement.scrollTop || document.body.scrollTop) > 0;
            ref.current.style.setProperty("--color", scroll ? "lightgrey" : "transparent")
            ref.current.style.setProperty("--background", scroll ? "#FFFFFFF2" : "transparent")
        }
    }, []);

    return <div className={styles.container} ref={ref}>
        {PAGES.map(page => <MenuItem key={page.route} route={page.route} name={page.name}/>)}
    </div>
}