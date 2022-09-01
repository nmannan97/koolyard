import './Navbar.css'
import {Link} from 'react-router-dom'

import Logo from "./user/pictures/YourShotLogo2.PNG"
function Navbar(){
    return(
        <>
        <nav className="navbar">
            <div className="navbar_container">
                <img className="brand" src={Logo}/>
                <p className='navbar_font'> Yourshot </p>
            </div>
            <ul>
                <li>
                    <Link to='/homescreen'>Home screen</Link>
                </li>
                <li>
                    <Link to='/messages'>Messages</Link>
                </li>
                <li>
                    <Link to='/profile'>Profile</Link>
                </li>
                <li>
                    <Link to='/discover'>Explore</Link>
                </li>
                <li>
                    <Link to='/'>Logout</Link>
                </li>
            </ul>
        </nav>
        </>
    );
}

export default Navbar;