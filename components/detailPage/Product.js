import Button1 from "../utilities/buttons/Button1";
import styles from "./Product.module.scss";

export default function Product(props) {

    return (
        <div className={styles.Product}>
            <div>
                <img className={styles.ProductImage} src={props.shoe.images[0]} alt={props.shoe.title} />
            </div>
            <div className={styles.ProductSection2}>
                <div>
                    <h2>{props.shoe.title}</h2>
                    <h3>{props.shoe.price}</h3>
                </div>
                <div>
                    <label htmlFor="size">Size</label>
                    <select name="size" id="size">
                        <option value="">please choose a size</option>
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
                    <Button1 text="ADD TO CART" />
                </div>
            </div>
        </div>
    )
}