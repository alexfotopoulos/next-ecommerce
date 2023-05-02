import styles from "./Button1.module.scss";

export default function Button1(props) {
    
    return (
        <button className={styles.Button1}>{props.text}</button>
    );
};