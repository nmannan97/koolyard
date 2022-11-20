import React from "react";
import { Link } from "react-router-dom";

import './signuppage.css'

import Footer from "../../Footer";

import girl1 from '../pictures/Assets/Girl1.png'
export default function Signuppage() {

    return(
        <>
            <div id="signuppage_header"/>
            <div id='signuppage'>
                <div id='signuppage_container'>
                    <div className="signuppage_row">
                        <p className="signuppage_general_font">Don't throw away your shot</p>
                        <img id="signuppage_girl1" src={girl1} />
                        <div className="signuppage_container1">
                            <Link to='/'>
                                <button id="siguppage_return">
                                    go to login
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="sinuppage_row">
                        <div id="signuppage_background1">
                            <p className='signuppage_vars'>Name:</p>
                            <input id="signuppage_name" type='text' placeholder="Enter name"/>
                            <p className='signuppage_vars'>Email:</p>
                            <input id="signuppage_email" type='text' placeholder="Enter email"/>
                            <p className='signuppage_vars'>Phone:</p>
                            <input id="signuppage_phone" type='text' placeholder="Enter phone"/>
                            <p className='signuppage_vars'>Password:</p>
                            <input id="signuppage_password" type='text' placeholder="Enter password"/>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

/*

*/