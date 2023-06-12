import Head from "next/head";
import styles from '../../styles/pages/Tasks.module.css';
import {useState} from "react";
import Task from "../../components/tasks/Task";
import {LIGHTING_TYPES, TASKS_SORTED} from "../../common/tasks";

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
            {TASKS_SORTED.map((task, index) => <Task key={task.name} number={index + 1} task={task} data={data}
                                              modifyData={modifyData} opened={index === data.opened}/>)}
        </div>
    </div>
}