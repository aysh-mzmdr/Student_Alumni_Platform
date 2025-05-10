import styles from "./stylesheet.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

function Home() {
    const [isOpen, setIsOpen] = useState(false);
    const topics = [
        { title: "AI in 2025", img: "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" },
        { title: "Crack SDE Interviews", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww" },
        // more topics
    ];
    const quotes = [
        {
            name: "Jane Doe",
            text: "This platform helped me find my dream mentor!",
            img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D"
        },
        {
            name: "Mr. Noname Notitle",
            text: "I wish the library was a little larger.",
            img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        // add more cards
    ];

    return (
        <body>
            <nav className={`d-flex align-items-center flex-wrap px-3 py-2 ${styles.backColour}`}>

                {/* Left: College Name */}
                <div className="fw-bold fs-5 text-success">Aurora Institute</div>

                {/* Center: Nav Pills */}
                <ul className={`nav nav-pills mb-0 gap-1 flex-column flex-md-row flex-grow-1 justify-content-center ${isOpen ? 'd-flex' : 'd-none d-md-flex'}`}>
                    <li className="nav-item">
                        <Link to="/" className="nav-link active">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">Events and Webinars</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/mentors" className="nav-link">Scholarships</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/mentors" className="nav-link">Higher Studies</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/mentors" className="nav-link">Giving back</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link disabled" aria-disabled="true">Contact</Link>
                    </li>
                </ul>

                {/* Right: Hamburger for mobile */}

                <div className="d-flex align-items-center gap-3 ms-auto">
                    <div className="d-md-none">
                        <FaBars size={24} onClick={() => setIsOpen(!isOpen)} style={{ cursor: "pointer" }} />
                    </div>

                    <Link to="/profile">
                        <img
                            src="https://www.shutterstock.com/shutterstock/photos/2286554497/display_1500/stock-photo-random-pictures-cute-and-funny-2286554497.jpg"
                            alt="Profile"
                            className="rounded-circle"
                            style={{ width: "32px", height: "32px", cursor: "pointer" }}
                        />
                    </Link>
                </div>
            </nav>

            <section>
                <div className="container py-5">
                    <h2 className="text-center mb-4">What Our Alumni Say</h2>
                    <div className="row g-4">
                        {quotes.map((q, idx) => (
                            <div className="col-md-4" key={idx}>
                                <div className="card h-100">
                                    <img src={q.img} className="card-img-top img-fluid" style={{ maxHeight: "400px", objectFit: "cover" }} alt={q.name} />
                                    <div className="card-body">
                                        <h5 className="card-title">{q.name}</h5>
                                        <p className="card-text">"{q.text}"</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section>
                <div className="container py-5">
                    <h2 className="mb-4">Trending Topics</h2>
                    <div className="d-flex overflow-auto gap-4">
                        {topics.map((t, idx) => (
                            <div className="card" key={idx} style={{ minWidth: "250px" }}>
                                <img src={t.img} className="card-img-top" alt={t.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{t.title}</h5>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </body>
    );
}

export default Home;
