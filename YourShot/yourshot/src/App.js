import './App.css';
import {Routes, Route} from "react-router-dom";

import Mainpage from "./pages/Mainpage";
import About from './pages/About'
import Login from './pages/Login'

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
          <Route exact path='/mainpage' element={<Mainpage/>}/>
          <Route exact path='/about' element={<About />}/>
        </Routes>
      </div>
  </div>
  );
}

