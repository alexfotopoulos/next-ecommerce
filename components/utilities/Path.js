import styles from "./Path.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { data } from "../../data";

export default function Path(props) {
    const router = useRouter()
    const {shoeId} = router.query;

    if (!shoeId) {
        return (
            <div className={styles.Path}>
                <Link href="/">Home</Link> / <Link href="/collection">Just Dropped</Link>
            </div>
        )
    }

    const shoe = data.find(d => d.id == shoeId)

    return (
        <div className={styles.Path}>
            <Link href="/">Home</Link> / <Link href="/collection">Just Dropped</Link> / <Link href={`/collection/${shoeId}`}>{shoe.title}</Link>
        </div>
    )
}