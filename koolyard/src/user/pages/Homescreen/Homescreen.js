import './Homescreen.css';
//Images
import Naeem from "../../pictures/teammates/Naeem.jpeg"
import NoUser from '../../pictures/noUser.png'


function Homescreen(){
    return(
        <>
            <div id="homescreen">
                <p className="homepage_header">Welcome to SkoolYard</p>

            <div className="color_padding_outer">
                <div id="homepage_ExecSummary1" className="homepage_background">

                <div style={{width:'80%'}} className="color_padding_inner">
                    <p className='homepage_header'>
                    About SchoolYard 
                    </p>
                    <br/>
                    <p className='homepage_exec_summary'>
                    All online educational platforms lack the component that is so essential and ubiquitous 
                    at every physical in-person school: the schoolyard.
                    </p>
                
                    <br/>
                    <p className='homepage_exec_summary'>
                    SchoolYard (SY) thrives to bring the social, educational, and networking interactions 
                    normally taken place in physical schoolyards to distant-learning platforms worldwide.
                    </p>

                    <br/>
                    <p className='homepage_exec_summary'>
                    SchoolYard also functions as an effective communication platform for in-person schools 
                    by streamlining the discussion channels between school administrators, parents and 
                    students as well as among students themselves. SchoolYard creates a safe 
                    environment optimized for students to organize or join school activities.
                    </p>
                </div>

                    <p className="homepage_header">
                        Our Product
                    </p>
                    <p className='homepage_exec_summary'>
                        For Online Education Platforms:
                        <br/>
                        - SY provides the social and networking component for students.
                        <br />
                        - SY promotes engaging discussions and feedback regarding teaching materials.   
                    </p>

                    <p className="homepage_header">
                        For Administrators of In-Person Schools:
                    </p>
                    <p className='homepage_exec_summary'>
                        <br />
                        - SY provides school administrators with an engaging platform to communicate with staff, teachers, parents, and student.
                        <br />
                        - SY moderates the communication channels to ensure safe and effective schoolwide discussions by members of the school community.
                        <br />
                        - SY actively engage students and parents in schools' announcements, events, and activities.
                    </p>
                    
                    <p className="homepage_header">
                        For Students:
                    </p>
                    <p className='homepage_exec_summary'>
                        - SY helps students stay informed about schools’ announcements.
                        <br />
                        - SY encourages students to expand their circles of friends with school-wide games and activities.
                        <br />
                        - SY inspires and empowers students with tools to organize, network and collaborate in creating clubs and activity groups.
                        <br />
                        - Ultimately, SY thrives to become the most effective platform for students to educate each other.

                    </p>
                    </div>
                    <p className="homepage_header">
                        All Activities Outside of the Classroom Begin at SchoolYard!!! 
                    </p>    
            </div>

                <div id="homepage_meet_the_team" className='color_padding_outer'>
                <p className='homepage_meet_the_team'>Meet the team</p>
                    <div className="homepage_container">
                    
                        <div className="homepage_item">
                            <div className="homepage_polaroid">
                                <p className='homepage_generic_font'>Naeem</p>
                                <img className = "img_polaroid" src={Naeem} />  
                                <p className='homepage_generic_font'>An electrical engineer from SJSU working on the frontend of YourShot</p>                           
                            </div>
                            <div className="homepage_polaroid">
                                <p className='homepage_generic_font'>Daisy</p>
                                <img className = "img_polaroid" src={NoUser} /> 
                                <p className='homepage_generic_font'> designer of arts and music for this project</p>    
                            </div>
                            <div className="homepage_polaroid">
                                <p className='homepage_generic_font'>Chon</p>
                                <img className = "img_polaroid" src={NoUser} />   \
                                <p className='homepage_generic_font'>The mentor of this project</p>    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Homescreen;