import './Navbar2.css'
import {Link} from 'react-router-dom'

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

    /*
    const hamburgerMenu = () => {
        return(
            
            <nav className="navbar2_hamburger">
                <div className='navbar2_hamburger_container'>
                    <div className="navbar2_hamburger_image">
                    </div>
                    <input id="navbar2_hamburger_input" type='checkbox' />
                    <ul className='navbar2_hamburger_menu'>
                        <li onClick={() => scrollTo('login')}>
                            <p>Login</p>
                        </li>
                        <li onClick={() => scrollTo('homepage')}>
                           <p>Homepage</p>
                        </li>
                        <li onClick={() => scrollTo('about')}>
                           <p>About</p>
                        </li>
                    </ul>
                </div>
            </nav>

        )
    }
    */
    return(
        <>
           <nav className="navbar2">
                <div id="navbar2_hamburger_container">
                    <div id="navbar2_hamburger_line1"/>
                    <div id="navbar2_hamburger_line2"/>
                    <div id="navbar2_hamburger_line3"/>

                </div>
                <input id="navbar2_hamburger_input" type='checkbox' />

                <div>
                    <ul id="navbar2_list">
                        <li onClick={() => scrollTo('SigninSignup')}>
                        <p className='navbar2_font '>Signin/Si</p>
                        </li>
                        <li onClick={() => scrollTo('homescreen')}>
                        <p className='navbar2_font '>Homescreen</p>
                        </li>
                        <li onClick={() => scrollTo('about')}>
                        <p className='navbar2_font '>About</p>
                        </li>

                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar2;