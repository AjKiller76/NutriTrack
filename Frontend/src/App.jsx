import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Catering from './appCatering/Catering';
/*import Progress from './components/Progress';
import Thread from './components/Thread';*/
import Profile from './appProfile/Profile';
import Home from './homeApp/Home';
import Sign from './components/Sign';
import {Toaster} from "react-hot-toast";
import { useAuth } from './context/AuthProvider';

function App() {
    const [authUser,setAuthUser]=useAuth();
    console.log(authUser);

    
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Catering" element={authUser?<Catering/>:<Navigate to="/Sign"/>} />
        <Route path='/Sign' element={<Sign/>}/>
        <Route path='/Profile' element={authUser?<Profile/>:<Navigate to="/Sign"/>}/>
      </Routes>
      <Toaster/>
    </>
  );
}

export default App;
