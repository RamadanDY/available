import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Body from './pages/Body';
 import BlockA from './pages/BlockA';

function App() {
  return (
    <Router>
      <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Body />
              </>
            } 
          />
         
          <Route 
            path="/blockA" 
            element={
              <>
                <Navbar />
                <BlockA />
              </> 
            } 
          />   
      </Routes>
    </Router>
  );
}

export default App;
