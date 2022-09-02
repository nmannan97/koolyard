import React from "react";

import './signup.css'
export default function Signup() {

    const goToSignUp = () =>{

    }

    return(
        <>
        <div id='signup'>
            <div id="signup_text1">
                <p className="signup_font">Define your legacy through your lens!</p>
            </div>
            <div id="signup_button_container">
                <div id='signup_text2'>
                    <p className="signup_font">Book your next gig with us. This is where you want to be.</p>
                </div>
                <button id='signup_button' onChange={() => goToSignUp()}>
                    JOIN NOW 
                </button>
            </div>
        </div>
        </>
    )
}