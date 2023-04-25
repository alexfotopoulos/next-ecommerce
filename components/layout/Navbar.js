import styles from "./Navbar.module.scss";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import NavDrawer from "./NavDrawer";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className={styles.Navbar}>
            <NavDrawer />
            <Link href="/" className={styles.brand}><div>KICKSTOP</div></Link>
            <div>
                <ShoppingCartOutlinedIcon className={styles.cartIcon} />
            </div>
        </nav>
    )
}
