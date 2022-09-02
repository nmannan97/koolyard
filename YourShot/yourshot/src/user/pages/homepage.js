import React from "react";

import Login from "./Homescreen/Login";
import Homescreen from "./Homescreen/Homescreen";
import Explore from "./Homescreen/Explore";
import Signup from "./Homescreen/signup";
import Navbar2 from "../../Navbar2";
import Footer from "../../Footer";

export default function Homepage() {
    return(
        <>
            <Navbar2/>
            <Login />
            <Homescreen />
            <Explore />
            <Signup />
            <Footer />
        </>
    )
}