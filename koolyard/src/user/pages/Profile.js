import {Link} from 'react-router-dom'
import React, { useState } from "react";

import './Profile.css';
import Navbar from '../../Navbar';
import Footer from '../../Footer';

import noUser from "../pictures/noUser.png"
import message from "../pictures/Assets/Message.png"
import share from "../pictures/Assets/Share.png"
import select1 from "../pictures/Assets/Edit2.png"
import selectMain from "../pictures/Assets/Edit1.png"

function Profile(){

    const [userProfile, setUserProfile] = useState();

    const addPhotos = () => {
        let image = []

        for(let index=0; index<10;index++){
            image[index] = <img className="client_photos" src={noUser}/>
        }
        return image
        
    }

    var add
    return(
        <>
        <Navbar />
        <div id="profile">
            <div id="profile_background">
                <div id="profile_user_background">   
                    <img id="profile_user" src={userProfile}/>
                </div>
                    
                <label for="profile_input" class="label_display form-label">
                        
                    <img id="profile_select" src={selectMain}/>
                </label>
                <input onChange={(e) => setUserProfile(URL.createObjectURL(e.target.files[0]))} id="profile_input" type="file"/>
            </div>
            <div id="profile_comments_container">

            </div>

        </div>
        <Footer />

        </>
    );
}

export default Profile;