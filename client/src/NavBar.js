import React, {useState} from 'react'
import { Link } from "react-router-dom"
import './App.css'

function NavBar ({user, setUser}) {
 return (
  <div className="navbar-container">
    <div className='nav-btn'>
    <Link to="/">Home</Link>
    </div>
    <div className="nav-btn">
    <Link to="/logout">Logout</Link>
    </div>
  </div> 
    
 )
}

export default NavBar