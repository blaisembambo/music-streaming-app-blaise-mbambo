import { useState, useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import DisplayAlbums from './Components/DisplayAlbums';
import { useNavigate } from 'react-router-dom';


export default function Albums(){

    const [userSavedAlbums,setUserSavedAlbums] = useState({})

    const navigate = useNavigate();

    const handleLogout = () => {
        window.localStorage.removeItem('token')
        navigate("/login", { replace: true });
    }
    
    useEffect(()=>{
        const spotifyApi = new SpotifyWebApi();
        spotifyApi.getMySavedAlbums().
        then(albums => setUserSavedAlbums(albums)).
        catch(()=>{handleLogout()})
    },[])
    
    return(
        <div>
            <h1 className='albums-page-title'>Albums</h1>
            {userSavedAlbums ? <DisplayAlbums {...userSavedAlbums }  /> : ''}
        </div>
    )
}