import styles from "../../styles/components/menu/Menu.module.css"
import MenuItem from "./MenuItem";
import {useEffect, useRef} from "react";

const PAGES = [
    {
        route: "/",
        name: "Home"
    },
    {
        route: "https://www.fi.muni.cz/~xproks/eotw/sites/blog.html",
        name: "Blog"
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
    },
    {
        route: "/schools",
        name: "Schools"
    }
]

export default function Menu() {
    const ref = useRef();

    useEffect(() => {
        document.onscroll = () => {
            if ((document.documentElement.scrollTop || document.body.scrollTop) > 0)
                ref.current.classList.add(styles.scroll);
            else
                ref.current.classList.remove(styles.scroll)
        }
    }, []);

    return <div className={styles.container} ref={ref}>
        {PAGES.map(page => <MenuItem key={page.route} route={page.route} name={page.name}/>)}
    </div>
}