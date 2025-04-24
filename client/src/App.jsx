import { useEffect, useState } from "react";

const SERVER_PORT=import.meta.env.VITE_SERVER_PORT;

function App(){
  const [message123,setMessage] = useState("")
  useEffect(() => {
    fetch(`http://localhost:${SERVER_PORT}/api/message`)
    .then(response => response.json())
    .then(data => setMessage(data.message))
    .catch(err => console.log(err))
  },[])

  return(
    <h1>Hello {message123} </h1>
  )
}

export default App;