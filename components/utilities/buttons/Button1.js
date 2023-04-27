import styles from "./Button1.module.scss"
import Link from "next/link"

export default function Button1(props) {
    return (
            <Link href="/collection"><button className={styles.Button1}>{props.text}</button></Link>
    )
}