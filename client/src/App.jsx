import Home from "./HomePage/Home.jsx"
import Login from "./HomePage/Login.jsx"
import Signup from "./HomePage/Signup.jsx"
import Dashboard from "./ProfilePage/Dashboard.jsx"
import Profile from "./ProfilePage/Profile.jsx"
import Alumni from "./ProfilePage/Alumni.jsx"
import University from "./ProfilePage/University.jsx"
import Forum from "./ProfilePage/Forum.jsx"
import Main from "./MainPage/Home.jsx"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/university" element={<University />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </Router>
  )
}

export default App;