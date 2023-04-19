import styles from "../../styles/OptionSelect.module.css";

export default function OptionSelect({ name, options, selected, setSelected, distributeOptions }) {
    return <div className={styles.container}>
        <p className={styles.name}>{name}</p>
        <div className={`${styles.options} ${distributeOptions ? styles.distributed : styles.centered}`}>
            {options.map(option => <p key={option.id} className={styles.option} onClick={setSelected.bind(null, option.id)}><span className={selected === option.id ? styles.green : ""}>{option.name}</span></p>)}
        </div>
    </div>
}