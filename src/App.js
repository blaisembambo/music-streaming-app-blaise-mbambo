import './App.css';
import { useState, useEffect,createContext } from 'react';
import Login from './pages/Login';
import Home from './pages/Home';
import Layout from './pages/Layout'
import Search from './pages/Search'
import Library from './pages/Library'
import Playlist from './pages/Playlists';
import PlaylistContent from './pages/PlaylistContent'
import ArtistContent from './pages/ArtistContent';
import AlbumContent from './pages/AlbumContent'
import Artists from './pages/Artists';
import Albums from './pages/Albums';
import SpotifyWebApi from 'spotify-web-api-js';
import { Routes, Route, useNavigate } from 'react-router-dom';

export const currentPlaylistIdContext = createContext({
  currentPlaylistId: "",
  setCurrentPlaylistId: () => {}
});

export const currentAlbumIdContext = createContext({
  currentAlbumId: "",
  setCurrentAlbumId: () => {}
});

export const currentArtistIdContext = createContext({
  currentArtistId: "",
  setCurrentArtistId: () => {}
});

export const currentUriContext = createContext({
  currentUri: "",
  setCurrentUri: () => {}
});

export const tokenContext = createContext('');


function App() {
  const CLIENT_ID = "ce1f74efed6441dc89f7c8fea44230bc"
  const REDIRECT_URI = window.location.hostname == 'localhost' ? 'http://localhost:3000' : 'https://plateforme-de-streaming-musica-good-2.vercel.app/'
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"
  const SCOPE = "ugc-image-upload%20user-modify-playback-state%20user-read-playback-state%20user-read-currently-playing%20user-read-recently-played%20user-read-playback-position%20user-top-read%20playlist-read-collaborative%20playlist-modify-public%20playlist-read-private%20playlist-modify-private%20app-remote-control%20streaming%20user-read-email%20user-read-private%20user-library-modify%20user-library-read"

  const [token, setToken] = useState("")

  const [userInfos,setUserInfos] = useState({})
  const spotifyApi = new SpotifyWebApi();

  const [currentPlaylistId,setCurrentPlaylistId] = useState('')
  const currentPlaylistIdContextValue = {currentPlaylistId,setCurrentPlaylistId}

  const [currentAlbumId,setCurrentAlbumId] = useState('')
  const currentAlbumIdContextValue = {currentAlbumId,setCurrentAlbumId}

  const [currentArtistId,setCurrentArtistId] = useState('')
  const currentArtistIdContextValue = {currentArtistId,setCurrentArtistId}

  const [currentUri,setCurrentUri] = useState('')
  const currentUriContextValue = {currentUri,setCurrentUri}

  const navigate = useNavigate();

  const handleLogout = () => {
      window.localStorage.removeItem('token')
      navigate("/login", { replace: true });
  }



  useEffect(() => {
      const hash = window.location.hash
      let token = window.localStorage.getItem("token")

      if (hash && !token) {
          token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

          window.location.hash = ""
          window.localStorage.setItem("token", token)


      }
      spotifyApi.setAccessToken(token);
      spotifyApi.getMe().then(data => setUserInfos(data))
      setToken(token)
  }, [])


let hrefAuthorizeLink = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&response_type=${RESPONSE_TYPE}`
 
  return (  <currentPlaylistIdContext.Provider value={currentPlaylistIdContextValue}>
            <currentAlbumIdContext.Provider value={currentAlbumIdContextValue}>
            <currentArtistIdContext.Provider value={currentArtistIdContextValue}>
            <currentUriContext.Provider value={currentUriContextValue}>
              <tokenContext.Provider value={token}>
              <div className="App">
                  <Routes>
                    { token ? 
                      <>
                      <Route path='/' element={<Layout userInfos={userInfos} token={token} />}>
                      <Route index element={<Home userInfos={userInfos} token={token} />} />
                      <Route path='search' element={<Search userInfos={userInfos} token={token}/>} />
                      <Route path='library' element={<Library userInfos={userInfos} token={token}/>} >
                        <Route path='playlists' element={<Playlist userInfos={userInfos} token={token}/>} />
                        <Route path='artists' element={<Artists userInfos={userInfos} token={token}/>} />
                        <Route path='albums' element={<Albums userInfos={userInfos} token={token}/>} />
                      </Route>
                      <Route path='playlist/:playlistId' element={<PlaylistContent userInfos={userInfos} token={token} />} />
                      <Route path='album/:albumId' element={<AlbumContent userInfos={userInfos} token={token} />} />
                      <Route path='artist/:artistId' element={<ArtistContent userInfos={userInfos} token={token} />} />
                    </Route>
                    <Route path='/login' element={<Login hrefAuthorizeLink={hrefAuthorizeLink}/>}></Route>
                      </>
                    :
                    <Route path='/' element={<Login hrefAuthorizeLink={hrefAuthorizeLink}/>}></Route>
                    }
                  </Routes>
              </div>
              </tokenContext.Provider>
              </currentUriContext.Provider>
              </currentArtistIdContext.Provider>
            </currentAlbumIdContext.Provider>
            </currentPlaylistIdContext.Provider>
  );
}

export default App;
