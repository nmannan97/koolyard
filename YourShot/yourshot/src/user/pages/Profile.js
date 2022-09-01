import {Link} from 'react-router-dom'
import React, { useState } from "react";

import './Profile.css';
import Navbar from '../../Navbar';

import noUser from "../pictures/noUser.png"
import userProfile from '../pictures/Assets/UserProfile.png'
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

    return(
        <>
        
        <div id="profile">
            <Navbar />
                <div id="profile_background1">
                
                
                <div id="profile_background2">
                    <div id="profile_user_background">   
                        <img id="profile_user" src={userProfile}/>
                    </div>
                    <Link to='/messages'><img id="profile_message" src={message}/></Link>
                    
                    <label for="profile_input" class="label_display form-label">
                        
                        <img id="profile_select" src={selectMain}/>
                        <img id="profile_select2" src={select1}/>
                    </label>
                    <input onChange={(e) => setUserProfile(URL.createObjectURL(e.target.files[0]))} id="profile_input" type="file"/>

                    <img id="profile_share" src={share}/>
                    <div id="client_column">
                        <div id="client_row">
                            {addPhotos()}
                        </div>
                    </div>

                </div>
                
            </div>
            
        </div>
        </>
    );
}

export default Profile;