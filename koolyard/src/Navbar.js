import './Navbar.css'
import {Link} from 'react-router-dom'
import { useState } from 'react'

import Logo from "./user/pictures/YourShotLogo2.PNG"
function Navbar(){

    const[windowSize, setWindowSize] = useState()
    
    const longNavbar = () => {
        <nav className="navbar">
            <div className="navbar_container">
                <Link className='navbar_profile_link'  to='/profile'>
                    <img className="brand" src={Logo}/>
                    <p id="navbar_yourshot" className='navbar_font'> Yourshot </p>
                </Link>
            </div>
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
    }

    setInterval(() => {
        if(window.innerWidth < 500){

        }
        else{
            setWindowSize(longNavbar())
        }
    }, 100);
    window.addEventListener('timeupdate', setInterval)
    return(
        <> 
            {windowSize}

        </>
    );
}

export default Navbar;