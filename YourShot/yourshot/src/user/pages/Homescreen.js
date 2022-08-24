import './Homescreen.css';
import Navbar from '../../Navbar';
import NoUser from '../pictures/noUser.png'
//Images
import Naeem from "../pictures/teammates/Naeem.jpeg"

function Homescreen(){
    return(
        <>
            <div id="homepage">
                <Navbar />
                <p id="welcome_homepage">Welcome to yourshot!</p>
                <div id="homepage_about" className="homepage_background">
                    Yourshot is an app that is designed to make money for photographers by getting them to places using Uber API
                    to get photographers to and from photo shoots
                </div>
                <div id="homepage_meet_the_team">
                <p className='homepage_meet_the_team'>Meet the team</p>
                    <div className="homepage_container">
                    
                        <div className="homepage_item">
                            <div className="homepage_polaroid">
                                <p className='homepage_generic_font'>Naeem</p>
                                <img className = "img_polaroid" src={Naeem} />                                 
                            </div>
                            <div className="homepage_polaroid">
                                <p className='homepage_generic_font'>James</p>
                                <img className = "img_polaroid" src={NoUser} />   
                            </div>
                            <div className="homepage_polaroid">
                                <p className='homepage_generic_font'>Yana</p>
                                <img className = "img_polaroid" src={NoUser} />   
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Homescreen;