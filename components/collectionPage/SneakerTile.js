import styles from "./SneakerTile.module.scss"

export default function SneakerTile(props) {
    return (
        <div className={styles.SneakerTile}>
            <img className={styles.SneakerTileImage} src={props.images[0]} alt={props.title} />
            <div>
                <h3>{props.title}</h3>
                <h4>${props.price}</h4>
            </div>
        </div>
    )
}