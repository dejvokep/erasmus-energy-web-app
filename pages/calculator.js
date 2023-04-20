import Head from 'next/head'
import styles from '../styles/Calculator.module.css';
import {useState} from "react";
import OptionSelect from "../components/form/OptionSelect";
import NumberInput from "../components/form/NumberInput";
import FootprintDisplay from "../components/calculator/FootprintDisplay";

const SCHOOL_TYPE_OPTIONS = [
    {
        id: "elementary",
        name: "Elementary"
    },
    {
        id: "middle",
        name: "Middle"
    },
    {
        id: "high",
        name: "High"
    }
]

const SORTING_TRASH_OPTIONS = [
    {
        id: true,
        name: "Yes"
    },
    {
        id: false,
        name: "No"
    }
]

export default function Calculator() {
    const [data, setData] = useState({
        schoolType: SCHOOL_TYPE_OPTIONS[0].id,
        students: 0,
        teachers: 0,
        rooms: 0,
        heatedRooms: 0,
        sortingTrash: SORTING_TRASH_OPTIONS[0].id
    })

    function updateData(id, value) {
        const newData = {...data};
        newData[id] = value;
        setData(newData);
    }

    function generateReport() {
        const school_type = data.schoolType;
        const students_count = +data.students;
        const teachers_count = +data.teachers;
        const rooms_count = +data.rooms;
        let heated_rooms_count = +data.heatedRooms;
        const sorting_trash = data.sortingTrash;

        let CO2_due_to_electricity_generation = 0.000414 //(Tons of CO2 per kWh)
        let average_school_electricity_consumption_per_square_meter = 100 //(kWh)
        let average_school_room_size = 50 //(m2)
        let CO2_public_transport_per_km = 0.45 //(Tons of CO2)
        let CO2_car_per_year = 0.57 //(Tons of CO2)
        let CO2_due_to_water_consumption_per_year = 0.00254 //(Tons of CO2)
        let CO2_due_to_heating_per_year_for_room = 0.06896 //(Tons of CO2)
        let average_percentage_of_teachers_using_cars = 0.5
        let average_percentage_of_elementary_using_cars = 0.35
        let average_percentage_of_elementary_using_public = 0.3
        let average_percentage_of_middle_using_cars = 0.23
        let average_percentage_of_middle_using_public = 0.55
        let average_percentage_of_high_using_cars = 0.41
        let average_percentage_of_high_using_public = 0.53

        let cars_footprint
        let public_transport_footprint
        let water_footprint
        let trash_footprint = 0
        let electricity_footprint
        let heating_footprint
        let overall_footprint
        let cars_footprint_by_students


        let cars_footprint_by_teachers = teachers_count * average_percentage_of_teachers_using_cars * CO2_car_per_year //(Tons of CO2)

        if (!sorting_trash && rooms_count > 0) {
            trash_footprint = 0.157
        }

        electricity_footprint = CO2_due_to_electricity_generation * average_school_electricity_consumption_per_square_meter * average_school_room_size * rooms_count // (Tons of CO2)

        if (school_type === "elementary") {
            cars_footprint_by_students = students_count * average_percentage_of_elementary_using_cars * CO2_car_per_year //(Tons of CO2)
            public_transport_footprint = students_count * average_percentage_of_elementary_using_public * CO2_public_transport_per_km
        } //(Tons of CO2)
        if (school_type === "middle") {
            cars_footprint_by_students = students_count * average_percentage_of_middle_using_cars * CO2_car_per_year //(Tons of CO2)
            public_transport_footprint = students_count * average_percentage_of_middle_using_public * CO2_public_transport_per_km
        } //(Tons of CO2)
        if (school_type === "high") {
            cars_footprint_by_students = students_count * average_percentage_of_high_using_cars * CO2_car_per_year //(Tons of CO2)
            public_transport_footprint = students_count * average_percentage_of_high_using_public * CO2_public_transport_per_km
        } //(Tons of CO2)

        cars_footprint = cars_footprint_by_teachers + cars_footprint_by_students // (Tons of CO2)

        water_footprint = (teachers_count + students_count) * CO2_due_to_water_consumption_per_year //(Tons fo CO2)
        heating_footprint = heated_rooms_count * CO2_due_to_heating_per_year_for_room // (Tons of CO2)
        overall_footprint = cars_footprint + public_transport_footprint + water_footprint + trash_footprint + electricity_footprint + heating_footprint // (Tons of CO2)

        return {
            cars_footprint: cars_footprint.toFixed(1),
            public_transport_footprint: public_transport_footprint.toFixed(1),
            water_footprint: water_footprint.toFixed(1),
            trash_footprint: trash_footprint.toFixed(1),
            electricity_footprint: electricity_footprint.toFixed(1),
            heating_footprint: heating_footprint.toFixed(1),
            footprint: overall_footprint.toFixed(1)
        };
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Calculator | Energy is the future of the world</title>
            </Head>

            <div className={styles.centered}>
                <div className={styles.form}>
                    <div className={styles.school}>
                        <OptionSelect name={"School Type"} options={SCHOOL_TYPE_OPTIONS} selected={data.schoolType}
                                      setSelected={id => updateData("schoolType", id)} distributeOptions={true}/>
                    </div>
                    <div className={styles.numbers}>
                        <NumberInput name={"Nº Students"} value={data.students}
                                     setValue={value => updateData("students", value)}/>
                        <NumberInput name={"Nº Teachers"} value={data.teachers}
                                     setValue={value => updateData("teachers", value)}/>
                        <NumberInput name={"Nº Rooms"} value={data.rooms}
                                     setValue={value => updateData("rooms", value)}/>
                        <NumberInput name={"Nº Heated Rooms"} value={data.heatedRooms}
                                     setValue={value => updateData("heatedRooms", value)} max={data.rooms}/>
                    </div>
                    <div className={styles.trash}>
                        <OptionSelect name={"Sorting Trash?"} options={SORTING_TRASH_OPTIONS}
                                      selected={data.sortingTrash} setSelected={id => updateData("sortingTrash", id)}
                                      distributeOptions={false}/>
                    </div>
                </div>
            </div>

            <FootprintDisplay report={generateReport()} />
        </div>
    )
}
