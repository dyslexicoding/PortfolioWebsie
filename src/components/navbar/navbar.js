import React from 'react'
import './navbar.css'
import dragon from '../../assets/dragon.png'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <img src={dragon} alt="logo" className='logo' />
        <div className="desktopMenu">

        </div>
        <button className="desktopMenuBtn">
            <img src="" alt="" className="desktopMenuImg" />Contact Me
        </button>
    </nav>
  )
}

export default Navbar