import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Catering from './appCatering/Catering';
/*import Progress from './components/Progress';
import Thread from './components/Thread';
import Profile from './components/Profile';*/
import Home from './homeApp/Home';
import Sign from './components/Sign'

function App() {
    
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Catering" element={<Catering/>} />
        <Route path='/Sign' element={<Sign/>}/>
      </Routes>
    </>
  );
}

export default App;
