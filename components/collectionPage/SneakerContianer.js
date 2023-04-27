import styles from "./SneakerContainer.module.scss";
import SneakerTile from "./SneakerTile";
import Path from "../utilities/Path";
import {data} from "../../data";

export default function SneakerContainer() {
    let shoes = data;

    return (
        <div className={styles.SneakerContainer}>
            <Path />
            <h1 className={styles.SneakerContainerTitle}>Just Dropped</h1>
            <div className={styles.SneakerGrid}>
                {shoes.map(shoe => <SneakerTile key={shoe.id} {...shoe}/>)}
            </div>
        </div>
    )
}