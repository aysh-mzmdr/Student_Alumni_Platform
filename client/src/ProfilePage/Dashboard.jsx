import { useNavigate } from "react-router-dom";
import style from "./stylesheet.module.css"

function Dashboard(){
    const navigate=useNavigate()
    const profileNavigate=() => navigate("/profile")
    const logoutNavigate=() => navigate("/")
    const universityNavigate=() => navigate("/university")
    const alumniNavigate=() => navigate("/alumni")
    const forumNavigate=() => navigate("/forum")

    const SERVER_PORT=import.meta.env.VITE_SERVER_PORT;

    const logoutHandler = async () => {
        try{
            const response=await fetch(`http://localhost:${SERVER_PORT}/auth/logout`,{method:"POST",credentials:"include"})
            if(response.ok)
                logoutNavigate();
            else if(!response.ok)
                throw new Error("Error")
        }
        catch(err){
            console.log(err)
        }
    }
    return(
        <>
            <h1 className={style.head}>This is Dashboard</h1>
            <button onClick={profileNavigate}>Profile</button>
            <button onClick={universityNavigate}>Universities</button>
            <button onClick={alumniNavigate}>Alumnis</button>
            <button onClick={forumNavigate}>Forum</button>
            <button onClick={logoutHandler}>Logout</button>
        </>
    )
}

export default Dashboard;