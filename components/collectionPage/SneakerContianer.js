import styles from "./SneakerContainer.module.scss";
import SneakerTile from "./SneakerTile";
import Link from "next/link";
import {data} from "../../data";

export default function SneakerContainer() {
    let shoes = data;

    return (
        <div className={styles.SneakerContainer}>
            <div className={styles.SneakerContainerPath}>
                <Link href="/">Home</Link> / <Link href="/collection">Just Dropped</Link>
            </div>
            <h1 className={styles.SneakerContainerTitle}>Just Dropped</h1>
            <div className={styles.SneakerGrid}>
                {shoes.map(shoe => <SneakerTile key={shoe.id} {...shoe}/>)}
            </div>
        </div>
    )
}