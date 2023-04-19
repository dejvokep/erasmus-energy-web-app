import styles from "../../styles/Menu.module.css"
import MenuItem from "./MenuItem";

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
    return <div className={styles.container}>
        {PAGES.map(page => <MenuItem key={page.route} route={page.route} name={page.name}/>)}
    </div>
}