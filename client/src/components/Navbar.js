import React from 'react'
import '../styles/navbar.css'
import { NavLink } from 'react-router-dom'
import { AiOutlineUser } from "react-icons/ai";

const Navbar = () => {
  return (
    <>
      
        <nav>
            <ul className='nav-left'>
                <li>
                    <NavLink className="navlink leftmost" to={"/cources"}>Courses</NavLink>
                </li>
                <li>
                    <NavLink className="navlink" to={"/professors"}>Professor</NavLink>
                </li>
            </ul>
            <ul className='nav-right'>
                <NavLink to={"/dashboard"}>
                    <AiOutlineUser className="user-icon"/>
                </NavLink>
            </ul>
        </nav>


    </>
  )
}

export default Navbar
