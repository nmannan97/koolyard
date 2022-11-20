import './Homescreen.css';

//Images
import Naeem from "../../pictures/teammates/Naeem.jpeg"
import NoUser from "../../pictures/noUser.png"
import DialogueIcon from "../../pictures/Assets/DialogueIcon.png"
import SchoolIcon from "../../pictures/Assets/SchoolIcon.png"
import ArrowsIcon from "../../pictures/Assets/ArrowsIcon.png"


function Homescreen(){
    return(
        <div id="homescreen">
                <p className="homescreen_h1 homescreen_gradient" style={{maxWidth:"19ch"}}>Welcome to SkoolYard</p><br/>
                <p style={{fontSize:"1.5em"}}>"The Classroom Begins At SkoolYard"</p><br/>



            <div className="color_padding_outer">
                <div style={{width:'90%', boxSizing:'border-box'}} className="color_padding_inner">
                    <p className='homescreen_h2'>
                    About SchoolYard 
                    </p>
                <div className="flex_container">
                    <p className="flex">
                    <img src={DialogueIcon} style={{width:"40%", maxWidth:"75px"}}/>
                    <br/>
                    All online educational platforms lack the component that is so essential and ubiquitous 
                    at every physical in-person school: the schoolyard.
                    </p>
                    <br/>

                    <p className="flex">
                    <img src={SchoolIcon} style={{width:"40%", maxWidth:"75px"}}/><br/>
                    SchoolYard (SY) thrives to bring the social, educational, and networking interactions 
                    normally taken place in physical schoolyards to distant-learning platforms worldwide.
                    </p>
                    <br/>

                    <p className="flex2">
                    <img src={ArrowsIcon} style={{width:"25%", maxWidth:"75px"}}/><br/>
                    SchoolYard also functions as an effective communication platform for in-person schools 
                    by streamlining the discussion channels between school administrators, parents and 
                    students as well as among students themselves. SchoolYard creates a safe 
                    environment optimized for students to organize or join school activities.
                    </p>
                </div>
                </div>
            </div>
            
                <div>
                    <p className="homescreen_h1 homescreen_gradient" style={{maxWidth:"11ch"}}>
                        Our Product
                    </p>
                    <p className='homescreen_h2'>For Online Education Platforms:</p>
                    <p style={{textAlign:"left"}}>
                        - SY provides the social and networking component for students.
                        <br />
                        - SY promotes engaging discussions and feedback regarding teaching materials.   
                    </p>

                    <p className="homescreen_h2">
                        For School Administrators:
                    </p>
                    <p style={{textAlign:"left"}}>
                        - SY provides school administrators with an engaging platform to communicate with staff, teachers, parents, and student.
                        <br />
                        - SY moderates the communication channels to ensure safe and effective schoolwide discussions by members of the school community.
                        <br />
                        - SY actively engage students and parents in schools' announcements, events, and activities.
                    </p>
                    
                    <p className="homescreen_h2">
                        For Students:
                    </p>
                    <p style={{textAlign:"left", paddingBottom:"10%"}}>
                        - SY helps students stay informed about schools’ announcements.
                        <br />
                        - SY encourages students to expand their circles of friends with school-wide games and activities.
                        <br />
                        - SY inspires and empowers students with tools to organize, network and collaborate in creating clubs and activity groups.
                        <br />
                        - Ultimately, SY thrives to become the most effective platform for students to educate each other.
                    </p>
                </div>



                <div id="meet_the_team" className='color_padding_outer'>
                <p className="homescreen_h2" style={{color:"white"}}>Meet the team</p>
                        <div className="homepage_polaroid">
                            <p>Naeem</p>
                            <img className = "img_polaroid" src={Naeem} />  
                            <p>An electrical engineer from SJSU working on the frontend of YourShot</p>                           
                        </div>

                        <div className="homepage_polaroid">
                            <p>Daisy</p>
                            <img className = "img_polaroid" src={NoUser} /> 
                            <p> Designer of arts and music for this project</p>    
                        </div>

                        <div className="homepage_polaroid">
                            <p>Chon</p>
                            <img className = "img_polaroid" src={NoUser} />
                            <p>The mentor of this project</p>    
                        </div>
                </div>
        </div>
    );
}

export default Homescreen;