import React, {useState} from 'react'
import { Link } from "react-router-dom"
import '../App.css'
import './NavBar.css'

function NavBar ({user, setUser}) {
 return (
    <div className="navbar-container">
      <div className='nav-btn'>
      <Link to="/">Profile</Link>
      </div>
      <div className="nav-btn">
      <Link  to="/something">Something Else</Link>
      </div>
      <div className="nav-btn">
      <Link to="/posts">Posts</Link>
      </div>
      <div className="nav-btn">
      <Link to="/logout">Logout</Link>
      </div>
    </div> 
  // <div className="navbar">
  //   <div className='navbar-container'>
  //   <ul>
  //     <li className="nav-link"> <Link to="/">Home</Link> </li>
  //     <li className="nav-link"> <Link to="/profile">Profile</Link> </li>
  //     <li className="nav-link"> <Link to="/stockform">Add New Stock</Link> </li>
  //     <li className="nav-link"> <Link to="/logout">Logout</Link> </li>
  //   </ul>
  //   </div>
  // </div> 
    
 )
}

export default NavBar