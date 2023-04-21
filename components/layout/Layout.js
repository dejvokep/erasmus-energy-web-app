import {Fragment} from "react";
import Head from "next/head";
import Menu from "../menu/Menu";
import Background from "./Background";
import styles from "../../styles/components/layout/Layout.module.css"

export default function Layout(props) {
    return <Fragment>
        <Head>
            <title>Energy is the future of the world</title>
            <link rel="shortcut icon" href="/favicon.ico"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>
        <Background />
        <Menu/>
        <main className={styles.page}>
            {props.children}
        </main>
    </Fragment>
}