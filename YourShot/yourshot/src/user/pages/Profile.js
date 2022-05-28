import './Profile.css';
import Navbar from '../../Navbar';

import noUser from "../pictures/noUser.png"
function Profile(){
    return(
        <>
        <div id="profile">
            <Navbar />
            <p>Welcome to your client profile</p>
            <img className="noUser" src={noUser} />
        </div>
        </>
    );
}

export default Profile;