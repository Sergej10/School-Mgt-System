import React from 'react'
import './Navbar.css'
import cutLogo from '../../img/cutLogo.jpg'
import {BrowserRouter as Link  } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='container'>
      <img src={cutLogo} alt="" className='logo' />
      <ul>
        <li>Home</li>
         <li><Link to="/#">Home</Link>Front Office</li>
          <li><Link to="/noticeBoard">Notice Board</Link>Notice Board</li>
           <li><Link to="/AboutUs">About uS</Link>About Us</li>
            <li><Link to="/contactUs">Contact Us</Link><button className='btn'>Contact Us</button> </li>
      </ul>
    </nav>
  )
}

export default Navbar