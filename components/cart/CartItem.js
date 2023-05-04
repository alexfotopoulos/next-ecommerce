import styles from "./CartItem.module.scss";

export default function CartItem(props) {
    return (
        <div className={styles.CartItem}>
            <div className={styles.CartItemTitle}>
                <h4>{props.title}</h4>
                <div>Size: {props.size}</div>
            </div>
            <div className={styles.CartItemDetails}>
                <span>x</span><span>{props.quantity}</span>
                <br />
                <span>${props.price}</span>
            </div>
        </div>
    );
};