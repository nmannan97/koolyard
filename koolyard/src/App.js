import {Routes, Route} from "react-router-dom";

import Homescreen from "./user/pages/Homescreen/Homescreen";
import Messages from './user/pages/Messages';
import About from './user/pages/Homescreen/About';
import Notifications from './user/pages/Notifications';
import Profile from './user/pages/Profile';
import Homepage from './user/pages/homepage';
import SignupSignin from "./user/pages/SignupSignin";

export default function App() {
  return (
  <div className="App"> 
      <div className="menu">   
        <Routes>
          <Route exact path='/' element={<Homepage/>} />
          <Route exact path='/koolyard' element={<Homepage/>} />
          <Route exact path='/homescreen' element={<Homescreen/>}/>
          <Route exact path='/messages' element={<Messages/>}/>
          <Route exact path='/about' element={<About/>}/>
          <Route exact path='/notifications' element={<Notifications/>}/>
          <Route exact path='/profile' element={<Profile/>}/>
          <Route exact path='/signupsignin' element={<SignupSignin/>}/>
        </Routes>
      </div>
  </div>
  );
}

