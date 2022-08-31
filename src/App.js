import './App.css';
import { useState, useEffect,createContext } from 'react';
import Login from './pages/Login';
import Home from './pages/Home';
import Layout from './pages/Layout'
import Search from './pages/Search'
import Library from './pages/Library'
import Playlist from './pages/Playlists';
import Artists from './pages/Artists';
import Albums from './pages/Albums';
import SpotifyWebApi from 'spotify-web-api-js';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';

function App() {
  const CLIENT_ID = "ce1f74efed6441dc89f7c8fea44230bc"
  const REDIRECT_URI = window.location.hostname == 'localhost' ? 'http://localhost:3000' : 'https://plateforme-de-streaming-musica-good-2.vercel.app/'
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"
  const SCOPE = "ugc-image-upload%20user-modify-playback-state%20user-read-playback-state%20user-read-currently-playing%20user-read-recently-played%20user-read-playback-position%20user-top-read%20playlist-read-collaborative%20playlist-modify-public%20playlist-read-private%20playlist-modify-private%20app-remote-control%20streaming%20user-read-email%20user-read-private%20user-library-modify%20user-library-read"

  const [token, setToken] = useState("")
  const tokenContext = createContext();

  const [userInfos,setUserInfos] = useState({})
  const userInfosContext = createContext();
  const spotifyApi = new SpotifyWebApi();


  useEffect(() => {
      const hash = window.location.hash
      let token = window.localStorage.getItem("token")

      if (hash && !token) {
          token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

          window.location.hash = ""
          window.localStorage.setItem("token", token)

          spotifyApi.setAccessToken(token);
          spotifyApi.getMe().then(data => setUserInfos(data));
      }

      setToken(token)
  }, [])


let hrefAuthorizeLink = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&response_type=${RESPONSE_TYPE}`
console.log(token)
console.log(userInfos)

  return (
          <userInfosContext.Provider value={userInfos}>
            <tokenContext.Provider value={token}>
            <div className="App">
                <Routes>
                  { token ? 
                  <Route path='/' element={<Layout userInfos={userInfos} token={token} />}>
                    <Route index element={<Home userInfos={userInfos} token={token} />} />
                    <Route path='search' element={<Search userInfos={userInfos} token={token}/>} />
                    <Route path='library' element={<Library userInfos={userInfos} token={token}/>} >
                      <Route path='playlists' element={<Playlist userInfos={userInfos} token={token}/>} />
                      <Route path='artists' element={<Artists userInfos={userInfos} token={token}/>} />
                      <Route path='albums' element={<Albums userInfos={userInfos} token={token}/>} />
                    </Route>
                  </Route>
                  : 
                  <Route path={'/'} element={<Login hrefAuthorizeLink={hrefAuthorizeLink}/>}></Route>
                  }
                </Routes>
            </div>
            </tokenContext.Provider>
          </userInfosContext.Provider>
  );
}

export default App;
