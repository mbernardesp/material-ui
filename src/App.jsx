import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Settings from './pages/Settings';
import About from './pages/About';

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/settings' exact element={<Settings/>}/>
        <Route path='/about' exact element={<About/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}
