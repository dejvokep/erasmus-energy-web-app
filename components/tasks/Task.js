import NumberInput from "../form/NumberInput";
import OptionSelect from "../form/OptionSelect";
import styles from "../../styles/components/tasks/Task.module.css"
import FootprintDisplay from "../calculator/FootprintDisplay";
import {ChevronRightIcon} from "@heroicons/react/24/outline";
import {useEffect, useRef} from "react";

export default function Task({number, task, data, modifyData, opened}) {
    const container = useRef(), inner = useRef();

    function handleSwitch() {
        modifyData(data => data.opened = opened ? -1 : number - 1)
    }

    useEffect(() => {
        container.current.style.setProperty("--height", `${inner.current.scrollHeight}px`)
    }, [])

    return <div className={styles.container}>
        <div className={styles.box} onClick={handleSwitch}>
            <div>
                <p className={styles.title}>Task #{number}</p>
                <p className={styles.name}>{task.name}</p>
            </div>
            <div className={styles.switch}>
                <div className={`${styles.chevron} ${opened ? styles.rotated : ""}`}>
                    <ChevronRightIcon/></div>
            </div>
        </div>
        <div className={`${styles.content} ${opened ? styles.opened : ""}`} ref={container}>
            <div className={styles.inner} ref={inner}>
                <div className={styles.form}>
                    {task.form.map(el => el.type === "number" ?
                        <NumberInput key={el.name} name={el.name} value={el.value(data)}
                                     setValue={value => el.setValue(modifyData, value)}
                                     max={el.max ? el.max(data) : Number.MAX_SAFE_INTEGER}/> :
                        <OptionSelect key={el.name} name={el.name} selected={el.value(data)}
                                      setSelected={id => el.setValue(modifyData, id)} options={el.options}
                                      distributeOptions={true}/>)}
                </div>

                <FootprintDisplay report={{footprint: task.calc(data).toFixed(3)}} reduction={true}/>
            </div>
        </div>
    </div>
}