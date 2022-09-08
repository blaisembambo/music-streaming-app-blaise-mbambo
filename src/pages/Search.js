import SpotifyWebApi from 'spotify-web-api-js';
import HitBitLogo from '../images/hit-bit-logo.png'
import { useState,useEffect } from "react";
import Logout from './Components/Logout';
import {BsSearch} from 'react-icons/bs'
import DisplayArtists from './Components/DisplayArtists'
import DisplayAlbums from './Components/DisplayAlbums'
import DisplayPlaylists from './Components/DisplayPlaylists'
import DisplayTracks from './Components/DisplayTracks'
import { useNavigate } from 'react-router-dom';

export default function Search({userInfos,token}){

    const [inputTextValue,setInputTextValue] = useState('')
    const [searchResult, setSearchResult]= useState({})
    const [newReleases,setNewReleases] = useState({})
        
    const spotifyApi = new SpotifyWebApi(); 
    function handleSubmit(e) {
        spotifyApi.search(inputTextValue, ['artist', 'playlist','track','album']).
        then(data => setSearchResult(data)).catch(()=>{handleLogout()})
        e.preventDefault()
    }
    function handleChange(e){
        setInputTextValue(e.target.value)
    }

    const navigate = useNavigate();

    const handleLogout = () => {
        window.localStorage.removeItem('token')
        navigate("/login", { replace: true });
    }

    useEffect(()=>{
        spotifyApi.getNewReleases({country:'CA'}).
        then(newReleases => setNewReleases(newReleases)).
        catch(()=>{handleLogout()})
    },[])

    return(
            <div className="search-page main-content">
                <div className="header-container">
                    <div className="logo">
                        <img src={HitBitLogo} />
                    </div>
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
                <div className='page-content'>
                    {
                        !searchResult['artists'] ? 
                        <>
                            {newReleases && newReleases.albums ? 
                            <>
                                <h1>Nouveautés</h1>
                                {/* <h1>{Object.keys(newReleases.albums)}</h1> */}
                                <DisplayAlbums {...newReleases.albums} /> 
                            </>
                            : 
                            ''}
                        </>
                        : 
                        <>
                            {
                                searchResult['artists'] && searchResult['artists'].items.length ? 
                                <div className='artists-row'>
                                    <h1 className='search-option-title'>Artistes</h1>
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
                        </>
                        
                    }
                </div>
            </div>
    )
}




