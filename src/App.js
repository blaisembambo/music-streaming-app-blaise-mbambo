import './App.css';
import Login from './login/Login';
import { useState, useEffect } from 'react'

function App() {


const CLIENT_ID = 'ce1f74efed6441dc89f7c8fea44230bc'
const REDIRECT_URI = 'http://localhost:3000'
const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize'
const RESPONSE_TYPE = 'token'

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

let hrefAuthorizeLink = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`


  return (
    <div className="App">
      <Login hrefAuthorizeLink={hrefAuthorizeLink}/>
    </div>
  );
}

export default App;
