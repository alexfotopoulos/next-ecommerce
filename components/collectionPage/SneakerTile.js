import styles from "./SneakerTile.module.scss";
import Link from "next/link";

export default function SneakerTile(props) {
    
    return (
        <Link href={`/collection/${props.id}`}>
            <div className={styles.SneakerTile}>
                <img className={styles.SneakerTileImage} src={props.images[0]} alt={props.title} />
                <div>
                    <div className={styles.SneakerTitle}>{props.title}</div>
                    <div className={styles.SneakerPrice}>${props.price}</div>
                </div>
            </div>
        </Link>
    );
};