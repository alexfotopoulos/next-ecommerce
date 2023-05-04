import styles from "./Navbar.module.scss";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import NavDrawer from "./NavDrawer";
import Link from "next/link";
import { useEffect, useState } from "react";
import CartModal from "../cart/CartModal";

export default function Navbar() {
    //state to determine if navbar should be smaller width as user scrolls down
    const [isSmaller, setIsSmaller] = useState();

    //useEffect to determine if navbar should be smaller at initial render
    useEffect(() => {
        //if page is not at the top, navbar should be smaller
        if (window.pageYOffset > 0) {
            setIsSmaller(true);
        };
    }, []);

    //useEffect to add event listener to scroll to determine if navbar width should be smaller
    useEffect(() => {
        function handleScroll() {
            //if page is at top, navbar should be standard width
            if (window.pageYOffset === 0) {
                setIsSmaller(false);
            } else {
                //if page is not at the top, navbar should be smaller
                setIsSmaller(true);
            }
        };
        //add event listener to scroll and determine navbar width
        window.addEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={isSmaller ? styles.smallerNavbar : styles.Navbar}>
            <NavDrawer />
            <Link href="/" className={styles.brand}><div>KICKSTOP</div></Link>
            <div>
                <CartModal />
            </div>
        </nav>
    );
};