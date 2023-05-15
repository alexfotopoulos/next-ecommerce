import styles from "./Footer.module.scss";
import Link from "next/link";

export default function Footer() {
    return (
        <div className={styles.Footer}>
            <div>
                <div className={styles.FooterSection}>
                    <h3>Have a Question?</h3>
                    <div>
                        Address: 12345, Canal St, New York, NY
                    </div>
                    <div>
                        Phone (9AM - 5PM EST, Mon-Sat): (123) 456-7890
                    </div>
                    <div>
                        Email: support@kickstop.com
                    </div>
                </div>
            </div>
            <div>
                <div className={styles.FooterSection}>
                    <h3>Customer Support</h3>
                    <div>
                        <Link className={styles.FooterLink} href="#">About Us</Link>
                    </div>
                    <div>
                        <Link className={styles.FooterLink} href="#">Contact Us</Link>
                    </div>
                    <div>
                        <Link className={styles.FooterLink} href="#">Track Order</Link>
                    </div>
                </div>
            </div>
            <div>
                <div className={styles.FooterSection}>
                    <h3>Policies</h3>
                    <div>
                        <Link className={styles.FooterLink} href="#">Refund & Refund Policy</Link>
                    </div>
                    <div>
                        <Link className={styles.FooterLink} href="#">Shipping Policy</Link>
                    </div>
                    <div>
                        <Link className={styles.FooterLink} href="#">Privacy Policy</Link>
                    </div>
                    <div>
                        <Link className={styles.FooterLink} href="#">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};