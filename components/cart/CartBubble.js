import styles from "./CartBubble.module.scss";
import { useSelector } from "react-redux";

export default function CartBubble() {
    //grab total items from redux
    const totalQuantity = useSelector(state => state.cart.totalQuantity);

    //conditionally render content based on totalQuantity
    let content;
    if (totalQuantity > 0) {
        content = (
            <span className={styles.CartBubble}>{totalQuantity}</span>
        );
    };

    return (
        <div>
            { content }
        </div>
    );
};