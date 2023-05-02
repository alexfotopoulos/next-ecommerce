import Button1 from "../utilities/buttons/Button1";
import styles from "./Product.module.scss";
import { useState } from "react";

export default function Product(props) {
    //create state for which image will be primary image at a given moment
    const [primaryImage, setPrimaryImage] = useState(props.shoe.images[0]);
    //create state for current quantity of shoe selected
    const [quantity, setQuantity] = useState(0);

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

    //handler function to handle submit
    function submitHandler(e) {
        e.preventDefault();
    };

    return (
        <div className={styles.Product}>
            <div className={styles.ProductSection1}>
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
                <div>
                    <h2 className={styles.ProductTitle}>{props.shoe.title}</h2>
                    <h3 className={styles.ProductPrice}>${props.shoe.price}</h3>
                </div>
                <form className={styles.ProductForm} onSubmit={submitHandler}>
                    <div>
                        <label htmlFor="size">Size:</label>
                        <br />
                        <select name="size" id="size">
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
                            <input className={styles.QuantityInput} type="number" id="quantity" min="0" max="10" defaultValue={quantity} />
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