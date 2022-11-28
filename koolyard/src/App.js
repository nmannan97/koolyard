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
          <Route element={<Homepage/>} />
          <Route exact path='master.d1p7cqoiehhyre.amplifyapp.com' element={<Homepage/>} />
          <Route exact path='master.d1p7cqoiehhyre.amplifyapp.com/' element={<Homepage/>} />
          <Route exact path='/messages' element={<Messages/>}/>
          <Route exact path='/profile' element={<Profile/>}/>
          <Route exact path='/signupsignin' element={<SignupSignin/>}/>
        </Routes>
      </div>
  </div>
  );
}

