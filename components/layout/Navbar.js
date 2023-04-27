import styles from "./Navbar.module.scss";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import NavDrawer from "./NavDrawer";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [isSmaller, setIsSmaller] = useState();

    useEffect(() => {
        if (window.pageYOffset > 0) {
            setIsSmaller(true)
        }
    }, [])

    useEffect(() => {
        function handleScroll() {
          if (window.pageYOffset === 0) {
            setIsSmaller(false)
          } else {
            setIsSmaller(true)
          }
        }
        window.addEventListener("scroll", handleScroll)
      }, [])

    return (
        <nav className={isSmaller ? styles.smallerNavbar : styles.Navbar}>
            <NavDrawer />
            <Link href="/" className={styles.brand}><div>KICKSTOP</div></Link>
            <div>
                <ShoppingCartOutlinedIcon className={styles.cartIcon} />
            </div>
        </nav>
    )
}
