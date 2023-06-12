import Head from "next/head";
import styles from '../../styles/pages/Tasks.module.css';
import {useState} from "react";
import Task from "../../components/tasks/Task";
import {LIGHTING_TYPES, TASKS_SORTED} from "../../common/tasks";
import {useRouter} from "next/router";

export default function Tasks() {
    const router = useRouter();

    const [data, setData] = useState({
        opened: router.query.task || null,
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

        if (data.opened !== newData.opened)
            router.push(newData.opened ? {query: {task: newData.opened}} : {}, undefined, {shallow: true})

        setData(newData);
    }

    return <div className={styles.container}>
        <Head>
            <title>Tasks | Energy is the future of the world</title>
        </Head>

        <div className={styles.centered}>
            {TASKS_SORTED.map(task => <Task key={task.name} number={task.no} task={task} data={data}
                                            modifyData={modifyData} opened={task.id === data.opened}/>)}
        </div>
    </div>
}