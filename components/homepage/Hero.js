import styles from "./Hero.module.scss";

export default function Hero() {
    return (
        <div className={styles.Hero}>
            <div>
            <img src="/images/misc/hero/hero.jpg" alt="main hero image" className={styles.HeroImage}/>
            </div>
            <div className={styles.HeroTiles}>
                <img src="/images/misc/hero/misc1.jpeg" alt="small hero image one" className={styles.HeroTilesImages}/>
                <img src="/images/misc/hero/misc4.jpeg" alt="small hero image two" className={styles.HeroTilesImages}/>
                <img src="/images/misc/hero/misc11.jpeg" alt="small hero image three" className={styles.HeroTilesImages}/>
                <img src="/images/misc/hero/misc9.jpeg" alt="small hero image four" className={styles.HeroTilesImages}/>
            </div>
        </div>
    )
}