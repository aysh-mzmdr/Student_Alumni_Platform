const SERVER_PORT=import.meta.env.VITE_SERVER_PORT;
import { useEffect, useState } from "react";

function Alumni(){
    const[alumnis,setAlumnis]=useState([])

    useEffect(() => {
        fetch(`http://localhost:${SERVER_PORT}/api/alumni`,
            {credentials:"include"})
        .then(response => response.json())
        .then(value => setAlumnis(value.alumnis))
        .catch(err => console.log(err)) },[]
        )

    return(
        <>
            {alumnis.map(user => (
                <div key={user.uid}>
                    <h1>{user.username}</h1>
                    <h1>{user.city}</h1>
                </div>
            ))}
        </>
    )
}

export default Alumni