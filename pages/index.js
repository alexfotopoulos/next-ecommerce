import Hero from "@/components/homepage/Hero"
import Mission from "@/components/homepage/Mission"
import Button1 from "@/components/utilities/buttons/Button1"
import styles from "../styles/Home.module.scss";
import Link from "next/link";

export default function Home() {
    return (
        <div className={styles.Home}>
            <Hero />
            <Mission />
            <Link href="/collection"><Button1 text="SHOP NOW" /></Link>
        </div>
    )
}
