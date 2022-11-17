import React from "react";
import "./SignupSigninNav.css"

import {Routes, Route, Link} from "react-router-dom";

import Navbar2 from "../../../Navbar2";
import Footer from "../../../Footer";

function Login() {

    
    return (
        <>

        <Navbar2/>
        <div id="SignupSigninNav">

            <Link to='/signupsignin'>
                <button id="SignupSigninNav_button">
                    Press me to go to <br/> login or sign up
                </button>
            </Link>
            
        </div>
        </>
    );
}

export default Login