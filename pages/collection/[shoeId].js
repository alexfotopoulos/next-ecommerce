import Path from "@/components/utilities/Path";
import Product from "../../components/detailPage/Product";
import { data } from "../../data";

export default function ShoeID(props) {
    return (
        <div>
            <Path/>
            <Product shoe={props.shoe}/>
        </div>
    )
}

export async function getStaticPaths() {
    return {
        paths: data.map(d => ({params: {shoeId: d.id}})),
        fallback: true
    }
}

export async function getStaticProps(context) {
    const shoeId = context.params.shoeId;
    const fetchedShoe = data.find(shoe => shoe.id === shoeId)
    return {
        props: {
            shoe: {
                title: fetchedShoe.title,
                images: fetchedShoe.images,
                price: fetchedShoe.price,
                id: fetchedShoe.id,
            }
        }
    }
}