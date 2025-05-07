import styles from "./stylesheet.module.css";
import { useEffect } from "react";

function Home() {

    useEffect(() => {
        document.body.style.backgroundColor = "rgb(0, 0, 0)";

        return () => {
            document.body.style.backgroundColor = "";
        }
    }, {});

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>Hackathon</div>
            <div className={`${styles.navLinks} ${open ? styles.open : ''}`}>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/mentors">Mentors</a>
                <a href="/contact">Contact</a>
            </div>
            <div className={styles.hamburger} onClick={() => setOpen(!open)}>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </div>
        </nav>
    )
}

export default Home;