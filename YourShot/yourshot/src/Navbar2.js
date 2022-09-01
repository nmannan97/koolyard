import './Navbar2.css'
import {Link} from 'react-router-dom'

import Logo from "./user/pictures/YourShotLogo2.PNG"
function Navbar2(){

    const scrollTo = (Position) =>{
        let element = document.getElementById(Position);
        window.scrollTo(0, element.getBoundingClientRect().top)
    }

    return(
        <>
        
        <nav className="navbar2">
            <div className="navbar2_container">
                <img className="navbar2_brand" src={Logo}/>
                <p className='navbar2_font'> Yourshot </p>
            </div>
            <ul>
                <li onClick={() => scrollTo('homepage')}>
                    <p>Homepage</p>
                </li>
                <li>
                    <p>Explore</p>
                </li>
                <li>
                    <p>signup</p>
                </li>
            </ul>
        </nav>
        </>
    );
}

export default Navbar2;