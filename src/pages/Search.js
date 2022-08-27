import { useState } from 'react'
import {BsSearch} from 'react-icons/bs'
import HitBitLogo from '../images/hit-bit-logo.png'
import SpotifyWebApi from 'spotify-web-api-js';
import DisplayArtists from './Components/DisplayArtists'
import DisplayAlbums from './Components/DisplayAlbums'
import DisplayPlaylists from './Components/DisplayPlaylists'
import DisplayTracks from './Components/DisplayTracks'


export default function Search(){
    const [inputTextValue,setInputTextValue] = useState('')
    const [searchResult, setSearchResult]= useState({})
    
    

    function handleSubmit(e) {
        const spotifyApi = new SpotifyWebApi(); 
        spotifyApi.search(inputTextValue, ['artist', 'playlist','track','album']).then(data => setSearchResult(data))
        e.preventDefault()
    }
    function handleChange(e){
        setInputTextValue(e.target.value)
    }
    return(
        <div>
        <div className="header-container">
            <div className="header-middle-content">
                <form className='search-form' onSubmit={handleSubmit}>
                    <div className="search-bar">
                            <BsSearch />
                            <input onChange={handleChange} value={inputTextValue} type="text" placeholder="Artistes, chansons,..." />
                    </div> 
                    <button>Rechercher</button>
                </form>
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
                {
                    searchResult['artists'] && searchResult['artists'].items.length ? 
                        <div className='artists-row'>
                            <h1 className='search-option-title'>Artists</h1>
                            <DisplayArtists {...searchResult['artists']} />
                        </div>
                        :
                        ''
                }

                {
                    searchResult['albums'] && searchResult['albums'].items.length ? 
                        <div className='albums-row'>
                            <h1 className='search-option-title'>Albums</h1>
                            <DisplayAlbums {...searchResult['albums']} />
                        </div>
                        :
                        ''
                }

                {
                    searchResult['playlists']  && searchResult['playlists'].items.length ? 
                        <div className='playlists-row'>
                            <h1 className='search-option-title'>Playlists</h1>
                            <DisplayPlaylists {...searchResult['playlists']} />
                        </div>
                        :
                        ''
                }

                {
                    searchResult['tracks'] && searchResult['tracks'].items.length ? 
                        <div className='tarcks-row'>
                            <h1 className='search-option-title'>Pistes</h1>
                            <DisplayTracks {...searchResult['tracks']} />
                        </div>
                        :
                        ''
                }
            <div>{Object.keys(searchResult['tracks'] ? searchResult['tracks'].items[0] : []).map(key => ' ( ' + key + ' ) ')}</div>
        </div>
    </div>
    )
}