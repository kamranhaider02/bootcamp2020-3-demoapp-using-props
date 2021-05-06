import React from 'react'
import logo from '../logo.svg'
const Header = () => {
  return (
    <div  className="navbar">
      <img src={logo} alt="Logo" className="logo"/>
      <ul className="nav">
          <li><a href="#">Home</a></li>
          <li><a href="#">Courses</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
      </ul>
    </div>
  )
}

export default Header
