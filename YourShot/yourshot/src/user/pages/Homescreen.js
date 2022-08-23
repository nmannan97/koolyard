import './Homescreen.css';
import Navbar from '../../Navbar';

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
                    <div className="homepage_container">
                        <div className="homepage_item">
                            <div className="homepage_polaroid">
                                Naeem
                                <img src={Naeem} />
                                <br/>
                                
                            </div>
                            <div className="homepage_polaroid">
                                James
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Homescreen;