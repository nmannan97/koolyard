import './Navbar2.css'
import {Link} from 'react-router-dom'

import Logo from "./user/pictures/hamburger.PNG"
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
    const longbar = () => {
        return(
            <nav className="navbar2">
                <div className="navbar2_container">
                </div>
                <ul id='navbar2_list' onClick={toggleHamburger}>
                    <li>
                        <Link to='/signupsignin'>
                            <p className='navbar2_font'>Login/Signup</p>
                        </Link>
                    </li>
                    <li onClick={() => scrollTo('homescreen')}>
                        <p className='navbar2_font'>Homescreen</p>
                    </li>
                </ul>
            </nav>
        )
    }

    const hamburgerMenu = () => {
        //<img className="navbar2_brand" src={Logo}/>
        return(
            <nav className="navbar2_hamburger">
                <div className='navbar2_hamburger_container'>
                    <div className="navbar2_hamburger_image">
                        <div id='hamburger_line_1'/>
                        <div id='hamburger_line_2'/>
                        <div id='hamburger_line_3'/>
                    </div>
                    <input id='hamburger_check' type='checkbox' />
                    <ul className='navbar2_hamburger_menu'>
                        <li>
                            <Link to='/signupsignin'>
                                <p className='navbar2_font'>Login/Signup</p>
                            </Link>
                        </li>
                        <li onClick={() => scrollTo('homepage')}>
                           <p className='navbar2_font'>Homepage</p>
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
                <div className="navbar2_container">
                </div>
                <ul id='navbar2_list' onClick={toggleHamburger}>
                    <li>
                        <Link to='/signupsignin'>
                            <p className='navbar2_font'>Login/Signup</p>
                        </Link>
                    </li>
                    <li onClick={() => scrollTo('homescreen')}>
                        <p className='navbar2_font'>Homescreen</p>
                    </li>
                </ul>
            </nav>
            <nav className="navbar2_hamburger">
                <div className='navbar2_hamburger_container'>
                    <div className="navbar2_hamburger_image">
                        <div id='navbar2_hamburger_image_container'>
                            <div id='hamburger_line_1'/>
                            <div id='hamburger_line_2'/>
                            <div id='hamburger_line_3'/>
                        </div>
                    </div>
                    <input id='hamburger_check' type='checkbox' />
                    <div id="navbar2_hamburger_menu">
                        <li>
                            <Link to='/signupsignin'>
                                <p className='navbar2_font'>Login/Signup</p>
                            </Link>
                        </li>
                        <li onClick={() => scrollTo('homepage')}>
                            <p className='navbar2_font'>Homepage</p>
                        </li>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar2;