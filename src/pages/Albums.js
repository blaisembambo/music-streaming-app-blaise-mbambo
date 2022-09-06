import { useState, useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import DisplayAlbums from './Components/DisplayAlbums';


export default function Albums(){

    const [userSavedAlbums,setUserSavedAlbums] = useState({})
    
    useEffect(()=>{
        const spotifyApi = new SpotifyWebApi();
        spotifyApi.getMySavedAlbums().then(albums => setUserSavedAlbums(albums))
    },[])
    
    return(
        <div>
            <h1 className='albums-page-title'>Albums</h1>
            {userSavedAlbums ? <DisplayAlbums {...userSavedAlbums }  /> : ''}
        </div>
    )
}