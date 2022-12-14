import {Routes, Route} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";

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
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Homepage/>} />
          <Route exact path='/koolyard' element={<Homepage/>} />
          <Route exact path='/messages' element={<Messages/>}/>
          <Route exact path='/profile' element={<Profile/>}/>
          <Route exact path='/signupsignin' element={<SignupSignin/>}/>
        </Routes>
      </BrowserRouter>
  </div>
  );
}

//