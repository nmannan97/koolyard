import './App.css';
import {Routes, Route} from "react-router-dom";

import Login from './user/pages/Login'
import Homescreen from "./user/pages/Homescreen";
import Messages from './user/pages/Messages';
import Explore from './user/pages/Explore';
import Notifications from './user/pages/Notifications';
import Profile from './user/pages/Profile';

import logo from './Logo.PNG'

export default function App() {
  return (
  <div className="App"> 
      <header className="App-header">
        <div id="Title">
          Your shot
        </div>
        <img className="Logo" src={logo} />
      </header>
      
      <div className="menu">
        

        <Routes>
          <Route exact path='/' element={<Login/>} />
          <Route exact path='/homescreen' element={<Homescreen/>}/>
          <Route exact path='/messages' element={<Messages/>}/>
          <Route exact path='/explore' element={<Explore/>}/>
          <Route exact path='/notifications' element={<Notifications/>}/>
          <Route exact path='/profile' element={<Profile/>}/>
        </Routes>
      </div>
  </div>
  );
}

