import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./stylesheet.module.css"

const SERVER_PORT=import.meta.env.VITE_SERVER_PORT;

function Signup(){

    const navigate=useNavigate()

    const[username,setUsername]=useState("")
    const[password,setPassword]=useState("")
    const[firstname,setFirstname]=useState("")
    const[lastname,setLastname]=useState("")
    const[college,setCollege]=useState("")
    const[city,setCity]=useState("")
    const[state,setState]=useState("")
    const[role,setRole]=useState("")
    const[batch,setBatch]=useState("")

    const handleSignup = async (e) => {
        e.preventDefault();
        try{
            const response=await fetch(`http://localhost:${SERVER_PORT}/auth/signup`,{
                method:"POST",
                credentials:"include",
                headers:{
                    "Content-type":"application/json"
                },
                body: JSON.stringify({username,password,firstname,lastname,college,city,state,batch,role})
            })
            if(response.ok){
                navigate("/")
            }
            else if(!response.ok){
                console.log("Something went wrong")
            }
                
        }
        catch(err){
            console.log(err)
        }
    }

    return(
        <>
            <form onSubmit={handleSignup}>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required></input>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required></input>
                <input type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} placeholder="First Name" required></input>
                <input type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} placeholder="Last Name"></input>
                <input type="text" value={college} onChange={(e) => setCollege(e.target.value)} placeholder="College" required></input>
                <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="City" required></input>
                <input type="text" value={state} onChange={(e) => setState(e.target.value)} placeholder="State" required></input>
                <input type="text" value={role} onChange={(e) => setRole(e.target.value)} placeholder="Role" required></input>
                <input type="text" value={batch} onChange={(e) => setBatch(e.target.value)} placeholder="Batch" required></input>
                <button type="submit">Signup</button>
            </form>
        </>
    )
}

export default Signup;