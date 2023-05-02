import styles from "./Path.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { data } from "../../data";

export default function Path(props) {
    //initialize router to get shoeId path from url
    const router = useRouter();
    const { shoeId } = router.query;

    //if we are at the collection page, path should be Home / Just Dropped
    if (!shoeId) {
        return (
            <div className={styles.Path}>
                <Link href="/">Home</Link> / <Link href="/collection">Just Dropped</Link>
            </div>
        );
    };

    //grab shoe data from "data" based on the shoeId to add the shoe to the path
    const shoe = data.find(d => d.id == shoeId);

    return (
        <div className={styles.Path}>
            <Link href="/">Home</Link> / <Link href="/collection">Just Dropped</Link> / <Link href={`/collection/${shoeId}`}>{shoe.title}</Link>
        </div>
    );
};