import Head from 'next/head'
import styles from '../styles/Calculator.module.css';
import {useRef, useState} from "react";

export default function Calculator() {
    const [footprint, setFootprint] = useState({
        cars_footprint: "0.0",
        public_transport_footprint: "0.0",
        water_footprint: "0.0",
        trash_footprint: "0.0",
        electricity_footprint: "0.0",
        heating_footprint: "0.0",
        overall_footprint: "0.0"
    });

    function validateNumber(ref) {
        const value = +ref.current.value;
        if (isNaN(value) || value < 0) {
            ref.current.value = 0;
            return 0;
        }
        return value;
    }
    function calculate() {
        const school_type = schoolRef.current.options[schoolRef.current.selectedIndex].id;
        const students_count = validateNumber(studentsRef);
        const teachers_count = validateNumber(teachersRef);
        const rooms_count = validateNumber(roomsRef);
        let heated_rooms_count = validateNumber(heatedRoomsRef);
        const sorting_trash = sortingTrashRef.current.checked;

        if (heated_rooms_count > rooms_count) {
            heatedRoomsRef.current.value = rooms_count;
            heated_rooms_count = rooms_count;
        }

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

        setFootprint({
            cars_footprint: cars_footprint.toFixed(1),
            public_transport_footprint: public_transport_footprint.toFixed(1),
            water_footprint: water_footprint.toFixed(1),
            trash_footprint: trash_footprint.toFixed(1),
            electricity_footprint: electricity_footprint.toFixed(1),
            heating_footprint: heating_footprint.toFixed(1),
            overall_footprint: overall_footprint.toFixed(1)
        });
    }

    const schoolRef = useRef(), studentsRef = useRef(), teachersRef = useRef(), roomsRef = useRef(), heatedRoomsRef = useRef(), sortingTrashRef = useRef();

    return (
        <div className={styles.container}>
            <Head>
                <title>Calculator | Energy is the future of the world</title>
                <link rel="shortcut icon" href="/favicon.ico"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>

            <div className={styles.centered}>
                <form className={styles.form}>
                    <label className={styles.option}>
                        School type:
                        <select onChange={calculate} ref={schoolRef}>
                            <option id="elementary">Elementary</option>
                            <option id="middle">Middle</option>
                            <option id="high">High</option>
                        </select>
                    </label>
                    <label className={styles.option}>
                        Students:
                        <input type="number" name="Students" defaultValue={0} min={0} onChange={calculate} ref={studentsRef}/>
                    </label>
                    <label className={styles.option}>
                        Teachers:
                        <input type="number" name="Teachers" defaultValue={0} min={0} onChange={calculate} ref={teachersRef}/>
                    </label>
                    <label className={styles.option}>
                        Rooms:
                        <input type="number" name="Rooms" defaultValue={0} min={0} onChange={calculate} ref={roomsRef}/>
                    </label>
                    <label className={styles.option}>
                        Heated rooms:
                        <input type="number" name="Heated rooms" defaultValue={0} min={0} onChange={calculate} ref={heatedRoomsRef}/>
                    </label>
                    <label className={styles.option}>
                        Sorting Trash:
                        <input type="checkbox" name="Sorting Trash" onChange={calculate} ref={sortingTrashRef}/>
                    </label>
                </form>

                <div className={styles.footprint}>
                    <p className={styles.footprintTitle}>Annual estimated CO<sub>2</sub> footprint</p>
                    <h1 className={styles.footprintValue}>{footprint.overall_footprint} tons</h1>
                    <p className={styles.footprintComposition}>Cars {footprint.cars_footprint}t • Public transport {footprint.public_transport_footprint}t • Water processing {footprint.water_footprint}t • Extra trash services {footprint.trash_footprint}t • Electricity {footprint.electricity_footprint}t • Heating {footprint.heating_footprint}t</p>
                </div>
            </div>

        </div>
    )
}
