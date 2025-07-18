import React from 'react'
import {Link, NavLink} from 'react-router';


const NavBar = () => {
  return (
    <div>
    <NavLink to="/" className={({isActive})=> isActive? "bg-green-600 text-5xl" : "" } > Home</NavLink>
    <NavLink to="/About" className={({isActive})=> isActive? "bg-green-600 text-5xl" : "" } >About</NavLink> 
    <NavLink to="/Contact" className={({isActive})=> isActive? "bg-green-600 text-5xl" : "" } >Contact</NavLink> 
    <NavLink to="/NotFound" className={({isActive})=> isActive? "bg-green-600 text-5xl" : "" } >NotFound</NavLink> 
    </div>
  )
}

export default NavBar

