import styles from "../../styles/pages/Schools.module.css";
import Head from "next/head";
import {TASKS_SORTED} from "../../common/tasks";
import {getSchools} from "../../database/Connector";
import Link from "next/link";

export default function Schools({ schools }) {
    return <div className={styles.container}>
        <Head>
            <title>Schools | Energy is the future of the world</title>
        </Head>

        <div className={styles.centered}>
            <div>
                <table className={styles.table}>
                    <tbody>
                        <tr>
                            <th>Name</th>
                            {TASKS_SORTED.map(task => <th key={task.no} className={styles.link}><Link href={{
                                pathname: "/tasks",
                                query: { "task": task.id.toString() }
                            }}><span>Task #{task.no}: {task.name.substring(0, 20)}...</span></Link></th>)}
                        </tr>
                        {schools.map(school => <tr key={school.school_id}>
                            <td>{school.name}</td>
                            {TASKS_SORTED.map(task => <td key={task.no}>{school[task.id] ? `✅ (${school[task.id]} tons)` : "❌"}</td>)}
                        </tr>)}
                    </tbody>
                </table>
                <p className={styles.asterisk}><i>*Annual CO<sub>2</sub> emission reduction displayed per task in parentheses.</i></p>
            </div>

            <div className={styles.info}>
                <p><strong>Your school is not in the list?</strong> Make sure to spread the word and let the officials know to hit us up at <a href={"mailto:j.kollar@galeje.sk"}>j.kollar@galeje.sk</a>, we will make sure to add your school ASAP.</p>
            </div>
        </div>
    </div>
}

export async function getStaticProps() {
    return {
        props: {
            schools: JSON.parse(JSON.stringify(await getSchools()))
        },
        revalidate: 120
    }
}