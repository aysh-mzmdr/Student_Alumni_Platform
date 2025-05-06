import Home from "./HomePage/Home.jsx"
import Login from "./HomePage/Login.jsx"
import Signup from "./HomePage/Signup.jsx"
import Dashboard from "./ProfilePage/Dashboard.jsx"

import {BrowserRouter as Router,Routes, Route} from "react-router-dom"

function App(){
  
  return(
    <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </Router>
  )
}

export default App;