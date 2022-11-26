import React from "react";
import { Link } from "react-router-dom";

import './SignupSignin.css'

import Footer from "../../Footer";

import {useState} from 'react';
import {useNavigate} from "react-router-dom";

export default function SignupSignin() {

    const[username, setUsername] = useState("")
    const[password, setPassword] = useState("")

    const userHandle = event => {
        setUsername(event.target.value)
    }
    const passHandle = event => {
        setPassword(event.target.value)
    }

    let navigate = useNavigate();
    const routeChange = () =>{
        navigate('/profile')
    }
    const logValue = () => {
        if(username=="username" && password == "password"){
            routeChange()
            console.log("In the if statement")
        }
        console.log(username, password)
    }


    return(
        <>
            <div id="SignupSignin">
                <div className="SignupSignin_container">
                    <div className="SignupSignin_item">
                            <div className="SignupSignin_columns">
                                <p className="SignupSignin_font">Sign in users</p>
                                <input onChange={userHandle} type="text" name="Username" id = "Username_users" placeholder="username"></input>
                                <br/>
                                <input onChange={passHandle} type="password" name="Password" id = "Password_users" placeholder="password"></input>
                                <br/>
                                <button className="SignupSignin_signin" onClick={logValue}>Sign in</button>
                            </div>

                            <div className="SignupSignin_columns">
                                <p className="SignupSignin_font">Sign up users</p>
                                <input onChange={userHandle} type="text" name="Username" id = "Username_users" placeholder="username"></input>
                                <br/>
                                <input onChange={passHandle} type="password" name="Password" id = "Password_users" placeholder="password"></input>
                                <br/>
                                <button className="SignupSignin_signin" onClick={logValue}>Sign up</button>
                            </div>
                        </div>

                </div>

                <br/>
                <Link to='/'>
                    <p>back to homepage</p>
                </Link>
            </div>
            <Footer />
        </>
    )
}

/*

*/