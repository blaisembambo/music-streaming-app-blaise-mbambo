import './App.css';
import { useState, useEffect } from 'react';
import Login from './pages/Login';
import Home from './pages/Home';
import Layout from './pages/Layout'
import Search from './pages/Search'
import Library from './pages/Library'
import Playlist from './pages/Playlists';
import Artists from './pages/Artists';
import Albums from './pages/Albums';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SpotifyApiContext } from 'react-spotify-api';


function App() {

  const CLIENT_ID = "ce1f74efed6441dc89f7c8fea44230bc"
  const REDIRECT_URI = "http://localhost:3000"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"

  const [token, setToken] = useState("")

  useEffect(() => {
      const hash = window.location.hash
      let token = window.localStorage.getItem("token")
      console.log('location : ' + window.location)
      if (!token && hash) {
          token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

          window.location.hash = ""
          window.localStorage.setItem("token", token)
      }

      setToken(token)

  }, [])

let hrefAuthorizeLink = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`
let app =   (<BrowserRouter>
        <Routes>
  <Route path='/' element={<Layout/>}>
    <Route index element={<Home/>} />
    <Route path='search' element={<Search/>} />
    <Route path='library' element={<Library/>} >
      <Route path='playlists' element={<Playlist/>} />
      <Route path='artists' element={<Artists/>} />
      <Route path='albums' element={<Albums/>} />
    </Route>
  </Route>
</Routes>
</BrowserRouter>)

  return (
      <div className="App">
        {console.log('token : ' + token)}
        {token ? app : <Login hrefAuthorizeLink = {hrefAuthorizeLink}/>}

      </div>
  );
}

export default App;
