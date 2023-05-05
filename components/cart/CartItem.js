import styles from "./CartItem.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "@/store/CartSlice";

export default function CartItem(props) {
    //grab cart items from redux
    const cartItems = useSelector(state => state.cart.items);
    //exrtact quantity from redux
    const item = cartItems.find(shoe => shoe.title === props.title);
    const quantity = item.size[props.size].qty;

    //initialize useDispatch
    const dispatch = useDispatch();

    //handler function to increment shoe quantity by one
    function incrementQtyHandler() {
        dispatch(cartActions.incrementCartItem({ size: props.size, title: props.title }));
    };

    //handler function to increment shoe quantity by one
    function decrementQtyHandler() {
        dispatch(cartActions.decrementCartItem({ size: props.size, title: props.title }));
    };

    //handler function to remove item
    function removeItemHandler() {
        dispatch(cartActions.removeCartItem({ size: props.size, title: props.title }));
    };

    return (
        <div className={styles.CartItem}>
            <div className={styles.CartItemSection1}>
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
            <p>Quantity</p>
            <div className={styles.CartQuantitySection}>
                <div className={styles.Quantity}>
                    <div className={styles.QuantityButton} onClick={decrementQtyHandler}>-</div>
                    <input className={styles.QuantityInput} type="number" id="quantity" value={quantity} readOnly />
                    <div className={styles.QuantityButton} onClick={incrementQtyHandler}>+</div>
                </div>
                <div className={styles.removeItem} onClick={removeItemHandler}>
                    Remove Item
                </div>
            </div>
        </div>
    );
};