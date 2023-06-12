/**
 * Coefficients and calculating functions contained within this file are from another source. The results produced by
 * the respective functions using the coefficients, therefore, are owned by the author of that source.
 */

export const LIGHTING_TYPES = [
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

export const TASKS = {
    "task1": {
        no: 1,
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
    "task2": {
        no: 2,
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
    "task3": {
        no: 3,
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
    "task4": {
        no: 4,
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
    "task5": {
        no: 5,
        name: "Plant native trees",
        form: [
            {
                name: "Nº Native trees planted",
                type: "number",
                value: data => data.trees.planted,
                setValue: (modifyData, value) => modifyData(data => data.trees.planted = value)
            }
        ],
        calc: data => +data.trees.planted * 0.06
    },
    "task6": {
        no: 6,
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
}

export const TASKS_SORTED = Object.entries(TASKS).map(entry => ({id: entry[0], ...entry[1]})).sort((a, b) => a.no - b.no);