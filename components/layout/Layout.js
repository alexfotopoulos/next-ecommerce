import styles from "./Layout.module.scss";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout(props) {
    return (
        <div className={styles.Layout}>
            <Navbar />
            <main className={styles.content}>
                {props.children}
            </main>
            <Footer />
        </div>
    )
}