import React, {useState} from 'react'
import './navbar.css'
import dragon from '../../assets/dragon.png'
import contactImg from '../../assets/contact.png'
import {Link} from 'react-scroll'
import Menue from '../../assets/menu.png'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className='navbar'>
        <img src={dragon} alt="logo" className='logo' />
        <div className="desktopMenu">
            <Link activeClass='Active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
            <Link activeClass='Active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
            <Link activeClass='Active' to='Works' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Portfolio</Link>
            <Link activeClass='Active' to='Clients' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Clients</Link>
        </div>
        <button className="desktopMenuBtn" onClick={() => {
          document.getElementById('Contact').scrollIntoView({behavior: 'smooth'});
        } }>
            <img src={contactImg} alt="contact Me" className="desktopMenuImg" />
            Contact Me
        </button>
        <img src={Menue} alt="logo" className='MoblieMenu' onClick={()=> setShowMenu(!showMenu)}/>
        <div className="NavMenu" style={{display: showMenu? 'flex':'none'}}>
            <Link activeClass='Active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={()=> setShowMenu(false)}>Home</Link>
            <Link activeClass='Active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={()=> setShowMenu(false)}>About</Link>
            <Link activeClass='Active' to='Works' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={()=> setShowMenu(false)}>Portfolio</Link>
            <Link activeClass='Active' to='Clients' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={()=> setShowMenu(false)}>Clients</Link>
            <Link activeClass='Active' to='Contact' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={()=> setShowMenu(false)}>Contact</Link>
        </div>
    </nav>
  )
}

export default Navbar