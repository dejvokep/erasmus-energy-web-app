import styles from "../../styles/components/form/NumberInput.module.css";
import {useEffect} from "react";

export default function NumberInput({ name, value, setValue, max = Number.MAX_SAFE_INTEGER}) {
    useEffect(() => {
        if (value > max)
            setValue(max);
    }, [max, setValue, value]);
    
    return <div className={styles.container}>
        <p className={styles.name}>{name}</p>
        <input type={"number"} value={value} min={0} max={max} className={styles.input} onChange={e => setValue(e.target.value)} />
    </div>
}