import { useNavigate } from "react-router-dom";
import style from "./stylesheet.module.css"
import { Link } from "react-router-dom";
import { useState } from "react";

const SERVER_PORT = import.meta.env.VITE_SERVER_PORT;

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:${SERVER_PORT}/auth/login`, {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ username, password })
            })
            if (response.ok) {
                navigate("/dashboard")
            }
            else if (!response.ok) {
                console.log("Incorrect Credentials")
            }

        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <h1 className={style.head}>This is Login</h1>
            <form onSubmit={handleLogin}>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username"></input>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"></input>
                <Link to="/main">Login</Link>
            </form>
        </>
    )
}

export default Login;