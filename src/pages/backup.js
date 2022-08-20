import './App.css';
import Login from './login/Login';
import { useState, useEffect } from 'react'

function App() {


const CLIENT_ID = 'ce1f74efed6441dc89f7c8fea44230bc'
const REDIRECT_URI = 'http://localhost:3000'
const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize'
const RESPONSE_TYPE = 'code'
const CLIENT_SECRET = '6f0ae79605a144eb910b3c205b934640'
const SCOPE = 'ugc-image-upload%20user-modify-playback-state%20user-read-playback-state%20'+
'user-read-currently-playing%20user-follow-modify%20user-follow-read%20user-read-recently-played%20'+
'user-read-playback-position%20user-top-read%20playlist-read-collaborative%20playlist-modify-public%20'+
'playlist-read-private%20playlist-modify-private%20streaming%20user-read-email%20user-read-private%20'+
'user-library-modify%20user-library-read'
const STATE = 

function rand(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
charactersLength));
 }
 return result;
}

console.log(makeid(5));

let hrefAuthorizeLink = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&${STATE}&${SCOPE}`

const [token,setToken] = useState('')

useEffect(() =>{
    const hash = window.location.hash
    let token = window.localStorage.getItem('token')

   if(!token && hash){
        token = hash.substring(hash.indexOf('access_token=') + 'access_token='.length)
        token = token.substring(0,token.indexOf('&'))

        window.location.hash = ''
        window.localStorage.setItem('token',token)
    }
    
    setToken(token)

})

function logout() {
  setToken('')
  window.localStorage.removeItem('item')
}

  return (
    <div className="App">
      <Login hrefAuthorizeLink={hrefAuthorizeLink}/>
    </div>
  );
}

export default App;
