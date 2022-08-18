import headphoneImg from '../images/headphones-transparent-png-16 1.png'
import { useState, useEffect } from 'react'

export default function Login() {

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

    return (
        <div className="login">
            <div className='login-content'>
                <div className='headphone-img-container'>
                    <img src={headphoneImg} alt="" className='headphone-img'/>
                </div>
                <div className="login-side">
                    <div className='login-side-texts'>
                        <h2 className='hit-bit-title'>HIT BIT</h2>
                        <h1 className='intro-message'>La plateforme la plus complète
        en terme de musique.</h1>
                    </div>
                    <div className='login-btn-container'>
                        <a className='login-btn' href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>CONNEXION</a>
                    </div>
                </div>
            </div>
        </div>
    )
}