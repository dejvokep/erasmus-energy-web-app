import NumberInput from "../form/NumberInput";
import OptionSelect from "../form/OptionSelect";
import styles from "../../styles/Task.module.css"
import FootprintDisplay from "../calculator/FootprintDisplay";

export default function Task({number, task, data, modifyData, opened}) {
    return <div className={styles.container}>
        <div className={styles.box}>
            <p className={styles.title}>Task #{number}</p>
            <p className={styles.name}>{task.name}</p>
        </div>
        <div className={styles.content}>
            <div className={styles.form}>
                {task.form.map(el => el.type === "number" ?
                    <NumberInput key={el.name} name={el.name} value={el.value(data)}
                                 setValue={value => el.setValue(modifyData, value)}/> :
                    <OptionSelect key={el.name} name={el.name} selected={el.value(data)}
                                  setSelected={id => el.setValue(modifyData, id)} options={el.options}
                                  distributeOptions={true}/>)}
            </div>

            <FootprintDisplay report={{footprint: (task.calc(data) * +data.classrooms).toFixed(3)}} reduction={true} />
        </div>
    </div>
}