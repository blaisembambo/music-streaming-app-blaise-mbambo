import { useState, useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import DisplayPlaylists from './Components/DisplayPlaylists';


export default function Playlist({userInfos,token}){

    const [userPlaylists,setUserPlaylists] = useState({})
   

    useEffect(()=>{
        const spotifyApi = new SpotifyWebApi();
        spotifyApi.getUserPlaylists(userInfos.id).then(playlists => setUserPlaylists(playlists))
    },[])
    

    return(
        <div>
            {userPlaylists ? <DisplayPlaylists {...userPlaylists}  /> : ''}
        </div>
    )
}