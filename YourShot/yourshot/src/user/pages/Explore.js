import './Explore.css';

import Guy1 from '../pictures/Assets/Guy1.png'
import Guy2 from '../pictures/Assets/Guy2.png'

function Explore(){
    return(
        <>
        <div id="explore">
            <div id="explore_big_container">
                <div className='explore_row'>
                    <img id="explore_guy1" src = {Guy1} />
                </div>
                <div className='explore_row'>
                <div className='explore_row'/>
                <div className='explore_row'/>
                    <img id="explore_guy2" src={Guy2}/>
                </div>
            </div>
        </div>
        </>
    );
}

export default Explore;