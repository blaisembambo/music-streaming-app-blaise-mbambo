import { useState } from 'react'
import {BsSearch} from 'react-icons/bs'
import HitBitLogo from '../images/hit-bit-logo.png'
import SpotifyWebApi from 'spotify-web-api-js';


export default function Search(){
    const [inputTextValue,setInputTextValue] = useState('')
    const spotifyApi = new SpotifyWebApi(); 
    const [searchResult, setSearchResult]= useState({})
    
    
    
    spotifyApi.search(inputTextValue, ['artist', 'playlist','track','album']).then(data => setSearchResult(data))

    function handleOnchange(e) {
        setInputTextValue(e.target.value)
        console.log(searchResult)
    }
    return(
        <div>
        <div className="header-container">
            <div className="header-middle-content">
                <div className="search-bar">
                    <BsSearch />
                    <input onChange={handleOnchange} value={inputTextValue} type="text" placeholder="Artistes, chansons,..." />
                </div> 

            </div>
            <div className="user-logout">
                <img src="" alt="" />
                <span className="username">MBAMBO Blaise</span>
                <span className="arrow">
                    <svg className="arrow-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">{'<!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->'}<path d="M310.6 246.6l-127.1 128C176.4 380.9 168.2 384 160 384s-16.38-3.125-22.63-9.375l-127.1-128C.2244 237.5-2.516 223.7 2.438 211.8S19.07 192 32 192h255.1c12.94 0 24.62 7.781 29.58 19.75S319.8 237.5 310.6 246.6z"/></svg>
                </span>
            </div>
        </div>
        <div className='content'>
            <h1>{inputTextValue}</h1>
            <div>{searchResult + ''}</div>
        </div>
    </div>
    )
}