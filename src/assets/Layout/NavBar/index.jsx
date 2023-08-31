import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './style.css'

const NavBar = () => {
  return (
    <>
    <nav>
        <h2>Logo</h2>
        <ul className='nav-links'>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/albums">Albums</NavLink></li>
        </ul>
    </nav>
        <Outlet />
    </>
  )
}

export default NavBar