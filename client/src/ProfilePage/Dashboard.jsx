import { useNavigate } from "react-router-dom";
import style from "./stylesheet.module.css"

function Dashboard(){
    const navigate=useNavigate()

    const SERVER_PORT=import.meta.env.VITE_SERVER_PORT;

    const logoutHandler = async () => {
        try{
            const response=await fetch(`http://localhost:${SERVER_PORT}/auth/logout`,{method:"POST",credentials:"include"})
            if(response.ok)
                navigate("/")
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
            <button type="submit" onClick={logoutHandler}>logout</button>
        </>
    )
}

export default Dashboard;