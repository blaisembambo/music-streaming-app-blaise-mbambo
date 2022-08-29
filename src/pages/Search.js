import { useState } from 'react'
import {BsSearch} from 'react-icons/bs'
import HitBitLogo from '../images/hit-bit-logo.png'
import SpotifyWebApi from 'spotify-web-api-js';
import DisplayArtists from './Components/DisplayArtists'
import DisplayAlbums from './Components/DisplayAlbums'
import DisplayPlaylists from './Components/DisplayPlaylists'
import DisplayTracks from './Components/DisplayTracks'
import Logout from './Components/Logout';


export default function Search({userInfos}){
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
            <Logout userInfos={userInfos}/>
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