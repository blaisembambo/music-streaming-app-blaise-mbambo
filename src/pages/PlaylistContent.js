import SpotifyWebApi from 'spotify-web-api-js';
import SpotifyPlayerComponent from './Components/SpotifyPlayerComponent'
import HitBitLogo from '../images/hit-bit-logo.png'
import { useEffect, useState } from "react";
import SongCard from './Components/SongCard';
import Logout from './Components/Logout';

export default function PlaylistContent({playlistId,userInfos}){
    
return(
    <div className="home-page main-content">
                <div className="header-container">
                    <div className="logo">
                        <img src={HitBitLogo} />
                    </div>
                    <Logout userInfos={userInfos}/>
                </div>
                <div className='page-content'>
                    <div className='playlist-image'>
                        
                    </div>
                    <div className='playlist-tracks'>
                        {/* {playlistId} */}
                    </div>
                </div>
            </div>
)
}