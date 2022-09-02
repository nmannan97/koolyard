import './App.css';
import {Routes, Route} from "react-router-dom";

import Login from './user/pages/Homescreen/Login'
import Homescreen from "./user/pages/Homescreen/Homescreen";
import Messages from './user/pages/Messages';
import Explore from './user/pages/Homescreen/Explore';
import Notifications from './user/pages/Notifications';
import Profile from './user/pages/Profile';
import Homepage from './user/pages/homepage';
import Signuppage from './user/pages/signuppage';

export default function App() {
  return (
  <div className="App"> 
      
      <div className="menu">   
        <Routes>
          <Route exact path='/' element={<Homepage/>} />
          <Route exact path='/homescreen' element={<Homescreen/>}/>
          <Route exact path='/messages' element={<Messages/>}/>
          <Route exact path='/explore' element={<Explore/>}/>
          <Route exact path='/notifications' element={<Notifications/>}/>
          <Route exact path='/profile' element={<Profile/>}/>
          <Route exact path='/signuppage' element={<Signuppage/>}/>
        </Routes>
      </div>
  </div>
  );
}

