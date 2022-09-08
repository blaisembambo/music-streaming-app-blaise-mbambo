import { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import DisplayArtists from './Components/DisplayArtists';
import { useNavigate } from 'react-router-dom';

export default function Artists(){

    const [userTopArtists,setUserTopArtists] = useState({})
    
    const navigate = useNavigate();

    const handleLogout = () => {
        window.localStorage.removeItem('token')
        navigate("/login", { replace: true });
    }

    useEffect(()=>{
        const spotifyApi = new SpotifyWebApi();
        spotifyApi.getMyTopArtists().
        then(artists => setUserTopArtists(artists)).
        catch(()=>{handleLogout()})
    },[])
    

    return(
        <div>
            <h1 className='aritsts-page-title'>Artistes</h1>
             {userTopArtists ? <DisplayArtists {...userTopArtists }  /> : ''}
        </div>
    )
}