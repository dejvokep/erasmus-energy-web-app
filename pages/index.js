import Head from 'next/head'
import styles from '../styles/pages/Home.module.css'
import Carousel from "../components/carousel/Carousel";

export default function Home() {
    return <div className={styles.container}>
        <Head>
            <title>Home | Energy is the future of the world</title>
        </Head>

        <div className={styles.title}>
            <h1>energy is the</h1>
            <h1>future of</h1>
            <h1>the <span className={styles.squiggle}>world</span></h1>
        </div>

        <Carousel />
    </div>
}
