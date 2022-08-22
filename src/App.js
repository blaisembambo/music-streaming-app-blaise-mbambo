import './App.css';
import { useState, useEffect } from 'react';
import Login from './pages/Login';
import Home from './pages/Home';
import Layout from './pages/Layout'
import Search from './pages/Search'
import Library from './pages/Library'
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout/>}>
              <Route index element={<Home/>} />
              <Route path='search' element={<Search/>} />
              <Route path='library' element={<Library/>} >
                <Route path='playlists' element={<Search/>} />
                <Route path='artists' element={<Search/>} />
                <Route path='albums' element={<Search/>} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
