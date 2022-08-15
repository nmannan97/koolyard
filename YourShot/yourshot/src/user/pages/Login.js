import React from "react";
import "./Login.css"

import {useNavigate} from "react-router-dom";
import {useState} from 'react';

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
        navigate('/homescreen')
    }
    const logValue = () => {
        if(username=="username" && password == "password"){
            routeChange()
            console.log("In the if statement")
        }
        console.log(username, password)
    }

    return (
        <div id="login">
            
            <div className="container">

                <div className="item">
                    <p>Sign in users</p>
                    <input onChange={userHandle} type="text" name="Username" id = "Username_users" placeholder="username"></input>
                    <input onChange={passHandle} type="password" name="Password" id = "Password_users" placeholder="password"></input>
                    <button onClick={logValue}>Sign in</button>
                </div>
                
            </div>
            
            <br/>
            <p>Create account</p>
            <div className="container">
                <div className="item">
                    <p>Users</p>
                </div>
            </div>
        </div>
    );
}

export default Login