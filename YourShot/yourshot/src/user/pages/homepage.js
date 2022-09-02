import React from "react";

import Login from "./Login";
import Homescreen from "./Homescreen";
import Explore from "./Explore";
import Signup from "./signup";
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