import React from "react";
import "./Login.css"

import {useNavigate} from "react-router-dom";
import {useState} from 'react';

import Homescreen from "./Homescreen";
import Navbar2 from "../../../Navbar2";
import Explore from "./About";
import Footer from "../../../Footer";

function Login() {

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

    return (
        <>


        <div id="login">

            <div className="login_container">

                <div className="login_item">
                    <p className="login_font">Sign in users</p>
                    <input onChange={userHandle} type="text" name="Username" id = "Username_users" placeholder="username"></input>
                    <input onChange={passHandle} type="password" name="Password" id = "Password_users" placeholder="password"></input>
                    <button id="login_signin" onClick={logValue}>Sign in</button>
                </div>
                
            </div>
            
            <br/>
            
        </div>
        </>
    );
}

export default Login