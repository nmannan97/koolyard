import './Navbar.css'
import {Link} from 'react-router-dom'
import { useState } from 'react'

import Logo from "./user/pictures/YourShotLogo2.PNG"
function Navbar(){

    return(
        <nav className="navbar">
        <div className="navbar_container"/>
        <ul>
            <li>
                <Link to='/messages'>Messages</Link>
            </li>
            <li>
                <Link to='/profile'>Profile</Link>
            </li>
            <li>
                <Link to='/'>Logout</Link>
            </li>
        </ul>
        </nav>
    )
    
}

export default Navbar;