import { useState, useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import DisplayPlaylists from './Components/DisplayPlaylists';
import { useNavigate } from 'react-router-dom';


export default function Playlist({userInfos,token}){

    const [userPlaylists,setUserPlaylists] = useState({})

    const navigate = useNavigate();

    const handleLogout = () => {
        window.localStorage.removeItem('token')
        navigate("/login", { replace: true });
    }
   

    useEffect(()=>{
        const spotifyApi = new SpotifyWebApi();
        spotifyApi.getUserPlaylists(userInfos.id).
        then(playlists => setUserPlaylists(playlists)).
        catch(()=>{handleLogout()})
    },[])
    

    return(
        <div>
            <h1 className='playlists-page-title'>Playlists</h1>
            {userPlaylists ? <DisplayPlaylists {...userPlaylists}  /> : ''}
        </div>
    )
}