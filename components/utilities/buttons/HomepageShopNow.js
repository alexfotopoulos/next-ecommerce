import styles from "./HomepageShopNow.module.scss"
import Link from "next/link"

export default function HomepageShopNow() {
    return (
        <div className={styles.HomepageShopNow}>
            <Link href="/collection"><button className={styles.HomepageShopNowButton}>SHOP NOW</button></Link>
        </div>
    )
}