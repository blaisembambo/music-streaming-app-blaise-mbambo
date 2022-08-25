import SpotifyWebApi from 'spotify-web-api-js';
import { useEffect, useState } from "react";
import SongCrad from './Components/SongCard';

export default function Home(){
    const [recentlyPlayedTracks, setRecentlyPlayedTracks] = useState([])
    const spotifyApi = new SpotifyWebApi();
    spotifyApi.getMyRecentlyPlayedTracks().then(data => setRecentlyPlayedTracks(data.items))

    return(
        <div className='song-cards'>
            {recentlyPlayedTracks.map(song => <SongCrad {...song.track} key={recentlyPlayedTracks.indexOf(song)} />)}
        </div>
    )
}




