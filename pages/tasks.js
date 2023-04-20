import Head from "next/head";
import styles from '../styles/Tasks.module.css';
import {useState} from "react";
import Task from "../components/tasks/Task";

const LIGHTING_TYPES = [
    {
        id: "incandescent",
        name: "Incandescent",
        coefficient: 202.5
    },
    {
        id: "halogen",
        name: "Halogen",
        coefficient: 145.8
    },
    {
        id: "cfl",
        name: "CFL",
        coefficient: 108
    },
    {
        id: "led",
        name: "LED",
        coefficient: 45
    },
    {
        id: "unsure",
        name: "Not Sure",
        coefficient: 108
    },

]

const TASKS = [
    {
        name: "Turn off lights when the classroom is empty - during lunch, planning periods, etc.",
        form: [
            {
                name: "Nº Classrooms",
                type: "number",
                value: data => data.classrooms,
                setValue: (modifyData, value) => modifyData(data => data.classrooms = value)
            },
            {
                name: "Nº lights per classroom",
                type: "number",
                value: data => data.lighting.lights,
                setValue: (modifyData, value) => modifyData(data => data.lighting.lights = value)
            },
            {
                name: "Nº hours a day saved",
                type: "number",
                value: data => data.lighting.reduced,
                setValue: (modifyData, value) => modifyData(data => data.lighting.reduced = value)
            },
            {
                name: "Lighting type",
                type: "select",
                options: LIGHTING_TYPES,
                value: data => data.lighting.type,
                setValue: (modifyData, value) => modifyData(data => data.lighting.type = value)
            }
        ],
        calc: data => {
            return LIGHTING_TYPES.find(el => el.id === data.lighting.type).coefficient * +data.lighting.lights * +data.lighting.reduced * 0.000655292 * 180 * 0.00045359237
        }
    }
]

export default function Tasks() {
    const [data, setData] = useState({
        opened: -1,
        classrooms: 0,
        lighting: {
            type: LIGHTING_TYPES[0].id,
            lights: 0,
            reduced: 0
        },
        biking: {
            switched: 0,
            distance: 0
        },
        bottles: {
            before: 0,
            after: 0
        },
        paper: {
            printed: 0
        },
        trees: {
            planted: 0
        },
        sensors: {
            consumption: 0
        }
    });

    function modifyData(callback) {
        const newData = {...data};
        callback(newData);
        setData(newData);
    }

    return <div className={styles.container}>
        <Head>
            <title>Tasks | Energy is the future of the world</title>
        </Head>

        <div className={styles.centered}>
            {TASKS.map((task, index) => <Task key={task.name} number={index + 1} task={task} data={data} modifyData={modifyData} opened={index === data.opened} />)}
        </div>
    </div>
}