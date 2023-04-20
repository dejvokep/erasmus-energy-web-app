import styles from "../../styles/components/carousel/Carousel.module.css";
import {Fragment, useState} from "react";
import CarouselSwitch from "./CarouselSwitch";
import CarouselContent from "./CarouselContent";

const ITEMS = [
    {
        name: "Main focus",
        image: "1.png",
        text: "This project is focused on a current world problem, the solution of which requires the " +
            "involvement of many countries. Common problems unite people and motivate them to " +
            "search for solutions together. As part of this project, we will build and promote an " +
            "ecological approach to nature. We will collect information about renewable energy " +
            "sources, energy storage, saving and recycling. We know that resources are limited, and in " +
            "order to survive and preserve nature in the future, we must look for ways to obtain " +
            "electricity from \"green\" renewable sources."
    },
    {
        name: "Awareness",
        image: "2.png",
        text: "Our work aims to increase population awareness and influence people in a way that " +
            "changes their perspective on nature and makes them accountable for their own actions. In " +
            "order to share information with our international partners, we will use a variety of materials " +
            "and travel to locations in our nation that have renewable resources. With this work " +
            "process, we hope to develop our ability to think critically and creatively about renewable " +
            "resources."
    },
    {
        name: "Tasks",
        image: "3.png",
        text: "The project is carried out between October 2020 and May 2023. Countries participating in " +
            "this project are Slovakia, Italy, France, Slovenia and Turkey. The student's assignment is " +
            "to create logos and posters, work on tasks assigned to them that relate to renewable " +
            "energy sources, visit specific locations related to renewable/alternative sources, etc., and " +
            "then present them to partner groups to help bring awareness."
    },
    {
        name: "Our goal",
        image: "4.png",
        text: "The goal will be to alter the current European's perspective toward nature and the " +
            "environment that all of us hope to survive in. Students will work to increase awareness of " +
            "renewable resources, educate others about the advantages of using alternative energy " +
            "resources for the future of all of us, and explore ways to conserve energy through a variety " +
            "of materials and activities. All of the team members' work should lead to expansion of " +
            "students' knowledge about renewable sources of energy. Students will also gain " +
            "experience in working with international partners."
    },
    {
        name: "About us",
        image: "5.png",
        text: "Our school, Gymnázium, Alejová 1, Košice, became the main coordinator of the project " +
            "within the European Union program ERASMUS+. The theme of our project is “Energy is " +
            "the future of the world”."
    }
]

export default function Carousel() {
    const [active, setActive] = useState(0);

    return <div>
        <CarouselSwitch items={ITEMS} active={active} setActive={setActive}/>
        <CarouselContent item={ITEMS[active]}/>
    </div>
}