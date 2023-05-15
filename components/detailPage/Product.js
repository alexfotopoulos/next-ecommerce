import Button1 from "../utilities/buttons/Button1";
import styles from "./Product.module.scss";
import { useState } from "react";
import { cartActions } from "@/store/CartSlice";
import { useDispatch } from "react-redux";

export default function Product(props) {
    //create state for which image will be primary image at a given moment
    const [primaryImage, setPrimaryImage] = useState(props.shoe.images[0]);
    //create state for current quantity of shoe selected
    const [quantity, setQuantity] = useState(0);
    //create state for current size of shoe selected
    const [size, setSize] = useState(8);

    //initialize useDispatch
    const dispatch = useDispatch();

    //handler function to set primary image as user clicks through alternate images
    function changeImageHandler(imageNumber) {
        setPrimaryImage(props.shoe.images[imageNumber]);
    };

    //handler function to increment shoe quantity by one
    function incrementQtyHandler() {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    ////handler function to increment shoe quantity by one
    function decrementQtyHandler() {
        //if quantity is already 0, return 0 to avoid negative number
        if (quantity === 0) return;
        setQuantity(prevQuantity => prevQuantity - 1);
    };

    //function to handle size change
    function sizeChangeHandler(e) {
        setSize(e.target.value)
    };

    //handler function to handle submit
    function submitHandler(e) {
        e.preventDefault();
        //if quantity is not selected alert and return
        if (quantity <= 0) {
            alert("Please select quantity");
            return;
        };
        //if size is not selected alert and return
        if (!size) {
            alert("Please select size");
            return;
        };
        //dispatch action to add item to cart
        dispatch(cartActions.addToCart({
            title: props.shoe.title,
            price: props.shoe.price,
            quantity,
            size,
        }));
        //reset size and quantity
        setQuantity(0);
        setSize(8);
    };

    return (
        <div className={styles.Product}>
            <div className={styles.ProductSection1}>
                <div className={styles.MobileHeading}>
                    <h1 className={styles.ProductTitle}>{props.shoe.title}</h1>
                    <h2 className={styles.ProductPrice}>${props.shoe.price}</h2>
                </div>
                <img className={styles.ProductImage}
                    src={primaryImage}
                    alt={props.shoe.title} />
                <div className={styles.ProductImageSelector}>
                    <img className={styles.ProductImagePreview}
                        onClick={() => changeImageHandler(0)}
                        src={props.shoe.images[0]}
                        alt={props.shoe.title} />
                    <img className={styles.ProductImagePreview}
                        onClick={() => changeImageHandler(1)}
                        src={props.shoe.images[1]}
                        alt={props.shoe.title} />
                    <img className={styles.ProductImagePreview}
                        onClick={() => changeImageHandler(2)}
                        src={props.shoe.images[2]}
                        alt={props.shoe.title} />
                </div>
            </div>
            <div className={styles.ProductSection2}>
                <div className={styles.DesktopHeading}>
                    <h1 className={styles.ProductTitle}>{props.shoe.title}</h1>
                    <h2 className={styles.ProductPrice}>${props.shoe.price}</h2>
                </div>
                <form className={styles.ProductForm} onSubmit={submitHandler}>
                    <div>
                        <label htmlFor="size">Size:</label>
                        <br />
                        <select onChange={sizeChangeHandler} value={size} name="size" id="size">
                            <option disabled value="Please select a size">Please select a size</option>
                            <option value="8">8</option>
                            <option value="8.5">8.5</option>
                            <option value="9">9</option>
                            <option value="9.5">9.5</option>
                            <option value="10">10</option>
                            <option value="10.5">10.5</option>
                            <option value="11">11</option>
                            <option value="11.5">11.5</option>
                            <option value="12">12</option>
                            <option value="12.5">12.5</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="quantity">Quantity:</label>
                        <div className={styles.Quantity}>
                            <div className={styles.QuantityButton} onClick={decrementQtyHandler}>-</div>
                            <input className={styles.QuantityInput} type="number" id="quantity" value={quantity} readOnly />
                            <div className={styles.QuantityButton} onClick={incrementQtyHandler}>+</div>
                        </div>
                    </div>
                    <div className={styles.formSubmitButton}>
                        <Button1 text="ADD TO CART" />
                    </div>
                </form>
            </div>
        </div>
    );
};