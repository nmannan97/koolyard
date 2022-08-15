import './Profile.css';
import Navbar from '../../Navbar';

import noUser from "../pictures/noUser.png"
function Profile(){

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
            <p>Welcome to your client profile </p>
            <img className="noUser" src={noUser}/>
            <div id="client_column">
                <div id="client_row">
                    {addPhotos()}
                </div>
            </div>
        </div>
        </>
    );
}

export default Profile;