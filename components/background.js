import styles from "../styles/Background.module.css";
import {useCallback, useEffect, useState} from "react";
import Image from "next/image";

const CLOUDS = [
    {
        image: "1.png",
        position: 15,
        size: {x: 644, y: 707},
        alignment: "left",
        alignmentPosition: -110
    },
    {
        image: "2.png",
        position: 720,
        size: {x: 705, y: 766},
        alignment: "right",
        alignmentPosition: -30
    },
    {
        image: "3.png",
        position: 1440,
        size: {x: 651, y: 484},
        alignment: "left",
        alignmentPosition: 70
    },
    {
        image: "4.png",
        position: 1900,
        size: {x: 639, y: 605},
        alignment: "right",
        alignmentPosition: 130
    },
    {
        image: "5.png",
        position: 2100,
        size: {x: 652, y: 597},
        alignment: "left",
        alignmentPosition: 70
    },
]

export default function Background() {
    const [clouds, setClouds] = useState([]);
    const getHeight = () => typeof document === 'undefined' ? 0 : Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);

    const generate = useCallback(() => {
        const array = [];
        const height = getHeight();

        for (let group = 0; group*2800 <= height; group++) {
            for (let i = 0; i < CLOUDS.length && group*2800 + CLOUDS[i].position <= height; i++) {
                array.push({
                    ...CLOUDS[i],
                    position: group*2800 + CLOUDS[i].position
                })
            }
        }

        return array;
    }, []);

    useEffect(() => {
        setClouds(generate())
    }, [getHeight(), generate]);

    return <div className={styles.background} style={{height: getHeight()}}>
        {clouds.map(cloud => <div key={cloud.position} className={styles.cloud} style={{[`${cloud.alignment}`]: cloud.alignmentPosition, top: cloud.position}}><Image src={`/background/${cloud.image}`} alt={"Cloud background image"} height={cloud.size.y} width={cloud.size.x}/></div>)}
    </div>
}