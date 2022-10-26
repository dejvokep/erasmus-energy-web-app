import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.container}>
        <Head>
            <title>Home | Energy is the future of the world</title>
            <link rel="shortcut icon" href="/favicon.ico"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>

        <div className={styles.centered}>
            <div className={styles.text}>
                <h1>Energy is the future of the world</h1>
                <p>This project is focused on a current world problem, the solution of which requires the involvement of many countries. Common problems unite people and motivate them to search for solutions together. As part of this project, we will build and promote an ecological approach to nature. We will collect information about renewable energy sources, energy storage, saving and recycling. We know that resources are limited, and in order to survive and preserve nature in the future, we must look for ways to obtain electricity from &quot;green&quot; renewable sources.</p>
                <p>Our work aims to increase population awareness and influence people in a way that changes their perspective on nature and makes them accountable for their own actions. In order to share information with our international partners, we will use a variety of materials and travel to locations in our nation that have renewable resources. With this work process, we hope to develop our ability to think critically and creatively about renewable resources.</p>
                <p>The project is carried out between October 2020 and May 2023. Forming work teams was the first task. Italy, Slovenia, France, and Turkey are our partner nations. The student&apos;s assignment is to create logos and posters, work on tasks assigned to them that relate to renewable energy sources, visit specific locations related to renewable/alternative sources, record a video, produce an e-book, etc., and then present them to partner groups, to help bring awareness.</p>
                <p>The goal will be to alter the current European&apos;s perspective toward nature and the environment that all of us hope to survive in. Students will work to increase awareness of renewable resources, educate others about the advantages of using alternative energy resources for the future of all of us, and explore ways to conserve energy through a variety of materials and activities. All of the team members&apos; work should lead to the development of critical and creative thinking skills necessary to solve complex global issues, as well as knowledge of various energy-saving techniques and experience in working with international partners.</p>
                <p>Our school became the main coordinator of the project within the European Union program ERASMUS+.</p>
            </div>
            <div className={styles.logo}>
                <div>
                    <a href='https://erasmus-plus.ec.europa.eu' target='_blank' ><Image width={350} height={100} src="/erasmus-logo.jpg" alt="Erasmus+ Logo"/></a>
                </div>
            </div>
        </div>
    </div>
  )
}
