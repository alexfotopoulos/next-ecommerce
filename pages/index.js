import Hero from "@/components/homepage/Hero"
import Mission from "@/components/homepage/Mission"
import Button1 from "@/components/utilities/buttons/Button1"
import styles from "../styles/Home.module.scss";

export default function Home() {
    return (
        <div className={styles.Home}>
            <Hero />
            <Mission />
            <Button1 text="SHOP NOW" />
        </div>
    )
}
