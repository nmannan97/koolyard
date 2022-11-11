import './Navbar2.css'
import {Link} from 'react-router-dom'

import Logo from "./user/pictures/YourShotLogo2.PNG"
import { useState } from 'react'
import React from 'react'
function Navbar2(){

    const [hamburger, setHamburger] = useState()

    const scrollTo = (Position) =>{
        let element = document.getElementById(Position);
        window.scrollBy(0, element.getBoundingClientRect().top - 0.1*window.innerHeight)
    }

    const toggleHamburger = () => {
        setHamburger(!hamburger)
    }

    const longbar = () => {
        return(
            <nav className="navbar2">
                <div className="navbar2_container">
                    <img className="navbar2_brand" src={Logo}/>
                </div>
                <ul onClick={toggleHamburger}>
                    <li onClick={() => scrollTo('login')}>
                        <p>Login</p>
                    </li>
                    <li onClick={() => scrollTo('homepage')}>
                        <p>Homepage</p>
                    </li>
                    <li onClick={() => scrollTo('explore')}>
                        <p>Explore</p>
                    </li>
                    <li onClick={() => scrollTo('signup')}>
                        <p>signup</p>
                    </li>
                </ul>
            </nav>
        )
    }

    const hamburgerMenu = () => {
        return(
            
            <nav className="navbar2_hamburger">
                <div className='navbar2_hamburger_container'>
                    <div className="navbar2_hamburger_image">
                        <img className="navbar2_brand" src={Logo}/>
                    </div>
                    <input type='checkbox' />
                    <ul className='navbar2_hamburger_menu'>
                        <li onClick={() => scrollTo('login')}>
                            <p>Login</p>
                        </li>
                        <li onClick={() => scrollTo('homepage')}>
                           <p>Homepage</p>
                        </li>
                        <li onClick={() => scrollTo('explore')}>
                           <p>Explore</p>
                        </li>
                        <li onClick={() => scrollTo('signup')}>
                            <p>signup</p>
                        </li>
                    </ul>
                </div>
            </nav>

        )
    }

    return(
        <>
            {window.innerWidth  > 500 ? longbar() : hamburgerMenu()}
        </>
    );
}

export default Navbar2;