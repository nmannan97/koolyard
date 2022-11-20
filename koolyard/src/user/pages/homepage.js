import React from "react";

import './homepage.css'

import Login from "./Homescreen/SignupSigninNav";
import Homescreen from "./Homescreen/Homescreen";
import About from "./Homescreen/About";
import Signup from "./Homescreen/signup";
import Navbar2 from "../../Navbar2";
import Footer from "../../Footer";

export default function Homepage() {
    return(
        <>
            <Navbar2/>
            <div id='Homepage'>
                <Homescreen />
            </div>
            <Footer />
        </>
    )
}