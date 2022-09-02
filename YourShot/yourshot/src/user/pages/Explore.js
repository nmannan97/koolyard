import './Explore.css';

import Guy1 from '../pictures/Assets/Guy1.png'
import Guy2 from '../pictures/Assets/Guy2.png'
import UserSelect1 from '../pictures/Assets/UserSelect1.png'
import UserSelect0 from '../pictures/Assets/UserSelectMain.png'

function Explore(){
    return(
        <>
        <div id="explore">
        <p id="explore_book_appointment" >Book your next appointment</p>
            <div id="explore_big_container">
                <div className='explore_row'>
                    <img id="explore_guy1" src = {Guy1} />
                </div>
                <div className='explore_row'>
                    <img id="explore_guy2" src={Guy2}/>
                </div>
            </div>
            
            <img id="explore_user2" src={UserSelect0} />
            {/*<img id="explore_user1" src={UserSelect1} />*/}

        </div>
        </>
    );
}

export default Explore;