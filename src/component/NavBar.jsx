import React from 'react'
import { NavLink } from 'react-router-dom'
import { SiEventstore } from "react-icons/si";

import './NavBar.css';
const NavBar = () => {
  return (
    
   <>
      <nav className='navbar'>
        <SiEventstore className='logo'/>
        <ul>
            <li>
                <NavLink to='/' className='home'>Home</NavLink>
                <NavLink to='/uniforms' className='uniforms'>Uniforms</NavLink>
                <NavLink to='/stationary' className='stationary'>Stationary</NavLink>
                <NavLink to='/idcard' className='idcard'>Id_card</NavLink>
                <NavLink to='/cart' className='cart'>Cart</NavLink>
               
            </li>
        </ul>
        <div className="buttoncontainer">
                
                <button className='login'>Login</button>
                <button className='signup'>Sign up</button>
            </div>
            </nav>
            </>

  )
}

export default NavBar