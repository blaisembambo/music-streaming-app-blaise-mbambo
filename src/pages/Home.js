import SpotifyWebApi from 'spotify-web-api-js';
import SpotifyPlayerComponent from './Components/SpotifyPlayerComponent'
import HitBitLogo from '../images/hit-bit-logo.png'
import { useEffect, useState } from "react";
import SongCard from './Components/SongCard';
import Logout from './Components/Logout';

export default function Home({userInfos,token}){

    const [recentlyPlayedTracks, setRecentlyPlayedTracks] = useState([])
    const [currentUri,setCurrentUri] = useState('')

    function handleCurrentUriChange(uri){
        setCurrentUri(uri)
    }
    
    useEffect(function(){
        if(recentlyPlayedTracks.length == 0){
            const spotifyApi = new SpotifyWebApi();
            spotifyApi.getMyRecentlyPlayedTracks().then(data => setRecentlyPlayedTracks(data.items))
        }
    },[])

    return(
            <div className="home-page main-content">
                <div className="header-container">
                    <div className="logo">
                        <img src={HitBitLogo} />
                    </div>
                    <Logout userInfos={userInfos}/>
                </div>
                <div className='page-content'>
                    <h1>Écoutés réccemment</h1>
                    <div className='song-cards cards-wrapper'>
                        {recentlyPlayedTracks.map(song => <SongCard handleCurrentUriChange={handleCurrentUriChange} {...song.track} key={recentlyPlayedTracks.indexOf(song)} />)}
                    </div>
                </div>
            </div>
    )
}




