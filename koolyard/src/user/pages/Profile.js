import {Link} from 'react-router-dom'
import React, { useState } from "react";

import './Profile.css';
import Navbar from '../../Navbar';
import Footer from '../../Footer';

function Profile(){

    const [userProfile, setUserProfile] = useState();

    return(
        <>
        <Navbar />
        <div id="profile">
            Hello from profile!
        </div>
        <Footer />
        </>
    );
}

export default Profile;