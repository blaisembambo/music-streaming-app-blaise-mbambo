import SpotifyWebApi from 'spotify-web-api-js';
import HitBitLogo from '../../images/hit-bit-logo.png'
import { useEffect, useState, useContext } from "react";
import Logout from './Logout';
import defaultPlaylistImage from '../../images/image -for-tracks-albums-playlists-without-one.png'
import TrackCard from './TrackCard';
import{BsPlayCircleFill} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';
import {currentUriContext} from '../../App'



export default function DisplayPlaylistContent({playlistId,userInfos}){

    const {currentUri,setCurrentUri} = useContext(currentUriContext)

    const [playlist,setPlaylist] = useState({})
    const navigate = useNavigate();

    const handleLogout = () => {
        window.localStorage.removeItem('token')
        navigate("/login", { replace: true });
    }
    const spotifyApi = new SpotifyWebApi();

    useEffect(()=>{
        spotifyApi.getPlaylist(playlistId).
        then(playlist => setPlaylist(playlist)).
        catch(()=>{handleLogout()})
    },[playlistId ])

    return(
        <div className="home-page main-content">
                     <div className="header-container">
                         <div className="logo">
                             <img src={HitBitLogo} />
                         </div>
                         <Logout userInfos={userInfos}/>
                     </div>
                 { playlist ? <div className='page-content'>
                         <div style={{backgroundColor: playlist && playlist.primary_color ? playlist.primary_color: '#545454'}} className='playlist-header'>
                             <div className='playlist-details'>
                                 <div className='playlist-image-container'>
                                     <img src={playlist && playlist.images && playlist.images[0] && playlist.images[0].url  ? playlist.images[0].url : defaultPlaylistImage} alt='' />
                                 </div>
                                 <div className='playlist-infos'>
                                     <p className='playlist-bold-text'>PLAYLIST</p>
                                     <h1 className='playlist-name'>{playlist && playlist.name ? playlist.name : ''}</h1>
                                     <p className='playlist-description'>{playlist && playlist.description ? playlist.description : ''}</p>
                                     <p className='playlist-owner-followers playlist-bold-text'>
                                         <span className='owner'>{playlist && playlist.owner ? playlist.owner.display_name : ''} </span>.
                                         <span className='followers'> {playlist && playlist.followers ? playlist.followers.total : ''} followers</span>
                                     </p>
                                 </div>
                             </div>
                             <div className='playlist-play-button-container'>
                                <div className='play-button-wrapper' onClick={()=>{setCurrentUri(playlist && playlist.uri ? playlist.uri : '');spotifyApi.play()}}>
                                    <BsPlayCircleFill/>
                                </div>
                             </div>
                         </div>
                         <div className='playlist-tracks'>
                             <div className="tracks">
                                 <table>
                                     <tr className='table-header-row'>
                                         <th>#</th>
                                         <th>TITRE</th>
                                         <th>ALBUM</th>
                                         <th>&#x1F551;</th>
                                     </tr>
                                     {playlist && playlist.tracks && playlist.tracks.items ? playlist.tracks.items.map((item,index) => <TrackCard {...item.track} index={index + 1} />)  : ''}
                                 </table>
                             </div>
                         </div>
                     </div>
                     :
                     ''
                     }
                 </div>
                 
     )
}