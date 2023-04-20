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

const FORM_CLASSROOMS = {
    name: "Nº Classrooms",
    type: "number",
    value: data => data.classrooms,
    setValue: (modifyData, value) => modifyData(data => data.classrooms = value)
}

const TASKS = [
    {
        name: "Turn off lights when the classroom is empty - during lunch, planning periods, etc.",
        form: [
            {
                name: "Nº Lights per classroom",
                type: "number",
                value: data => data.lighting.lights,
                setValue: (modifyData, value) => modifyData(data => data.lighting.lights = value)
            },
            {
                name: "Nº Hours a day saved",
                type: "number",
                value: data => data.lighting.reduced,
                max: () => 24,
                setValue: (modifyData, value) => modifyData(data => data.lighting.reduced = value)
            },
            {
                name: "Lighting type",
                type: "select",
                options: LIGHTING_TYPES,
                value: data => data.lighting.type,
                setValue: (modifyData, value) => modifyData(data => data.lighting.type = value)
            },
            FORM_CLASSROOMS
        ],
        calc: data => LIGHTING_TYPES.find(el => el.id === data.lighting.type).coefficient * +data.lighting.lights * +data.lighting.reduced * 0.000655292 * 180 * 0.00045359237 * +data.classrooms
    },
    {
        name: "Start a walk/bike to school campaign",
        form: [
            {
                name: "Nº Students that switched",
                type: "number",
                value: data => data.biking.switched,
                setValue: (modifyData, value) => modifyData(data => data.biking.switched = value)
            },
            {
                name: "Average distance to school (km)",
                type: "number",
                value: data => data.biking.distance,
                setValue: (modifyData, value) => modifyData(data => data.biking.distance = value)
            }
        ],
        calc: data => +data.biking.switched * +data.biking.distance * 0.621371192 / 25.29 * 2 * 19.4395602545263 * 180 * 0.00045359237
    },
    {
        name: "Bring a reusable water bottle to school instead of buying plastic water bottles",
        form: [
            {
                name: "Nº Bottles bought before",
                type: "number",
                value: data => data.bottles.before,
                setValue: (modifyData, value) => modifyData(data => data.bottles.before = value)
            },
            {
                name: "Nº Bottles bought after",
                type: "number",
                value: data => data.bottles.after,
                max: data => data.bottles.before,
                setValue: (modifyData, value) => modifyData(data => data.bottles.after = value)
            },
            FORM_CLASSROOMS
        ],
        calc: data => (+data.bottles.before - +data.bottles.after) * 0.1091288385 * 36 * 0.00045359237 * +data.classrooms
    },
    {
        name: "Use recycled paper instead of virgin paper",
        form: [
            {
                name: "Nº Pages printed weekly",
                type: "number",
                value: data => data.paper.printed,
                setValue: (modifyData, value) => modifyData(data => data.paper.printed = value)
            },
            FORM_CLASSROOMS
        ],
        calc: data => +data.paper.printed / 500 * 5.5 * 3.805 * 36 * 0.00045359237 * +data.classrooms
    },
    {
        name: "Plant native trees",
        form: [
            {
                name: "Nº Native trees planted",
                type: "number",
                value: data => data.trees.planted,
                setValue: (modifyData, value) => modifyData(data => data.trees.planted = value)
            },
            FORM_CLASSROOMS
        ],
        calc: data => +data.trees.planted * 0.06
    },
    {
        name: "Install motion sensing light switches in hallways, bathrooms, etc.",
        form: [
            {
                name: "School's daily electricity consumption (kWh)",
                type: "number",
                value: data => data.sensors.consumption,
                setValue: (modifyData, value) => modifyData(data => data.sensors.consumption = value)
            }
        ],
        calc: data => +data.sensors.consumption * 0.1 * 0.655292 * 180 * 0.00045359237
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