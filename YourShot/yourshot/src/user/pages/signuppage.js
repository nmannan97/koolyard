import React from "react";
import { Link } from "react-router-dom";

import './signuppage.css'

export default function Signuppage() {

    return(
        <>
            <div id='signuppage'>
                Hello from the sign up page
                <Link to='/'>
                    <button onClick>
                        go to login
                    </button>
                </Link>
            </div>
        </>
    )
}