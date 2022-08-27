import { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import DisplayArtists from './Components/DisplayArtists';

export default function Artists(){

    const [userTopArtists,setUserTopArtists] = useState({})
    

    useEffect(()=>{
        const spotifyApi = new SpotifyWebApi();
        spotifyApi.getMyTopArtists().then(artists => setUserTopArtists(artists))
    },[userTopArtists])
    

    return(
        <div>
             {userTopArtists ? <DisplayArtists {...userTopArtists }  /> : ''}
        </div>
    )
}