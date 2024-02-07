import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

let styles = {fontSize: '24px',
            fontWeight: '600',
            textDecoration: 'none',
            color: 'red'}
function Navbar() {
  return (
    <nav className='navbar'>
        <NavLink to='/' style={styles}>Home</NavLink>
        <NavLink to='/profile' style={styles}>Profile</NavLink>
        <NavLink to='/users' style={{textDecoration:'none',
                                fontSize: '24px',
                                color: 'white',
                                fontWeight: '600'
                                }}>Users</NavLink>
    </nav>
  )
}

export default Navbar