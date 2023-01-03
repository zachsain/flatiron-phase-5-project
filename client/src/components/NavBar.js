import React, {useState} from 'react'
import { Link } from "react-router-dom"
import '../App.css'

function NavBar ({user, setUser}) {
 return (
  <div className="container">
    {/* <div className='nav-btn'> */}
    <ul>
      <li className="nav-link"> <Link to="/">Home</Link> </li>
      <li className="nav-link"> <Link to="/profile">Profile</Link> </li>
      <li className="nav-link"> <Link to="/stockform">Add New Stock</Link> </li>
      <li className="nav-link"> <Link to="/logout">Logout</Link> </li>
    </ul>
  </div> 
    
 )
}

export default NavBar