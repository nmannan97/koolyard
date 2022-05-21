import './Navbar.css'
import {Link} from 'react-router-dom'

function Navbar(){
    return(
        <>
        <nav className="navbar">
            <img className="brand" src=''/>
            <ul>
                <li>
                    <Link to='/homescreen'>Home screen</Link>
                </li>
                <li>
                    <Link to='/messages'>Messages</Link>
                </li>
                <li>
                    <Link to='/explore'>Explore</Link>
                </li>
                <li>
                    <Link to='/notifications'>Notifications</Link>
                </li>
                <li>
                    <Link to='/profile'>Profile</Link>
                </li>
            </ul>
        </nav>
        </>
    );
}

export default Navbar;