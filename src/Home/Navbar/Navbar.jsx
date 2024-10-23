import React from 'react'
import logo from "../Navbar/logo.png"
import "./Navbar.css"
import { Destinations } from '../Destinations/Destinations'
import hertitage from "../Destinations/heritage.png"
import hiking from "../Destinations/hiking.png"
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
    
    
    <div className='tagline'>
    <img className='hike' src={hiking} alt="" />
    <h1 className='start_heading'>Bhagwati tours & travels <i className='small'>"Explore. Discover. Experience."</i></h1>
    <img className='hr' src={hertitage} alt="" />
    </div>
    <nav id="navbar">
         <img src={logo} alt="" />   
         
        <ul className='components'>
            <li>
              <h2> <Link to="/">Home</Link></h2> 
            </li>
            <li>
                <h2><Link to="/explore">Explore</Link></h2>
            </li>
            <li>
               <h2><Link to="/packages">Packages</Link></h2> 
            </li>
            <li>
               <h2><Link to="/about">About Us</Link></h2> 
            </li>
        </ul>

        <button><b><i>Login</i></b></button>
        <button><b><i>Sign Up</i></b></button>
        <input type="text" placeholder='Explore Places'/>
    </nav>

        
     <br />
    {/* <Destinations/> */}
    </>
  )
}

