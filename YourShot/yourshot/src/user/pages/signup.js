import React from "react";

export default function Signup() {

    const goToSignUp = () =>{
        
    }

    return(
        <>
        <div id='signup'>
            <button id='signup_button' onChange={() => goToSignUp()}>
                Sign up today!
            </button>
        </div>
        </>
    )
}