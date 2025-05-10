import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./stylesheet.module.css";

function Home() {
    const [open, setOpen] = useState(false);
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        document.body.style.backgroundColor = "black";
        return () => {
            document.body.style.backgroundColor = "";
        };
    }, []);

    return (
        <body>
            <nav className={styles.navbar}>
                <div className={styles.logo}>Hackatron</div>

                <ul className={`${styles.navLinks} ${open ? styles.open : ""}`}>
                    <li href="/">Home</li>
                    <li href="/about">About</li>
                    <li href="/mentors">Mentors</li>
                    <li href="/contact">Contact</li>
                </ul>

                <ul className={styles.hamburger} onClick={() => setOpen(!open)}>
                    <li className={styles.bar}></li>
                    <li className={styles.bar}></li>
                    <li className={styles.bar}></li>
                </ul>
            </nav>

            <section className={styles.hero}>
                <h1 className={styles.companyName}>
                    Aluminous
                </h1>
                <p className={styles.tagline}>Because every student deserves a mentor, and every alumni wants to give back</p>
                <Link to="/login" className={styles.ctaButton}>
                    Start Connecting!
                </Link>
            </section>

            {/* 
            <h2 color="yellow">Testing</h2>
            <div className={styles.videoContainer} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                <div className={styles.overlayContent}>
                    <h2>Hover Me!</h2>
                    <p>This is some content over the video.</p>
                </div>
            </div>

            <video
                className={`${styles.backgroundVideo} ${hovered ? styles.show : ""}`}
                src="/video.mp4"
                autoPlay
                muted
                loop /> */}

        </body>
    );
}

export default Home;
