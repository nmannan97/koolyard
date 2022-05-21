import './App.css';
import {Routes, Route} from "react-router-dom";

import Login from './pages/Login'
import Homescreen from "./pages/Homescreen";
import Messages from './pages/Messages';
import Explore from './pages/Explore';
import Notifications from './pages/Notifications';
import Profile from './pages/Profile';

export default function App() {
  return (
  <div className="App"> 
      <header className="App-header">
        <div id="Title">
          Your shot
        </div>
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

