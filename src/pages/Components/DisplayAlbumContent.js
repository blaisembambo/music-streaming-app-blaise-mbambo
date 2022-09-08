import SpotifyWebApi from 'spotify-web-api-js';
import HitBitLogo from '../../images/hit-bit-logo.png'
import { useEffect, useState } from "react";
import Logout from './Logout';
import defaultAlbumImage from '../../images/image -for-tracks-albums-playlists-without-one.png'
import TrackCard from './TrackCard';
import{BsPlayCircleFill} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';

export default function DisplayAlbumContent({albumId,userInfos}){
 
    const [album,setAlbum] = useState({})
    const navigate = useNavigate();

    const handleLogout = () => {
        window.localStorage.removeItem('token')
        navigate("/login", { replace: true });
    }

    useEffect(()=>{
        const spotifyApi = new SpotifyWebApi();
        spotifyApi.getAlbum(albumId).
        then(album => setAlbum(album)).
        catch(()=>{handleLogout()})
    },[albumId])
    
    return(
        <div className="home-page main-content">
                     <div className="header-container">
                         <div className="logo">
                             <img src={HitBitLogo} />
                         </div>
                         <Logout userInfos={userInfos}/>
                     </div>
                 { album ? <div className='page-content'>
                         <div style={{backgroundColor: album && album.primary_color ? album.primary_color: '#545454'}} className='album-header'>
                             <div className='album-details'>
                                 <div className='album-image-container'>
                                     <img src={album && album.images && album.images[0] && album.images[0].url  ? album.images[0].url : defaultAlbumImage} alt='' />
                                 </div>
                                 <div className='album-infos'>
                                     <p className='album-bold-text'>ALBUM</p>
                                     <h1 className='album-name'>{album && album.name ? album.name : ''}</h1>
                                     <p className='album-artists album-bold-text'>
                                         <span className='artists'>{album && album.artists ? album.artists.map((artist,index,artists) => index < artists.length - 1 ? artist.name + ' . ' : artist.name ) : ''} </span>.
                                         <span className='release-year'> {album && album.release_date ? album.release_date.split('-')[0] : ''} </span>.
                                         <span className='number-of-songs'>{album && album.total_tracks ? album.total_tracks : ''} songs</span>
                                     </p>
                                 </div>
                             </div>
                             <div className='album-play-button-container'>
                                 <BsPlayCircleFill/>
                             </div>
                         </div>
                         <div className='album-tracks'>
                             <div className="tracks">
                                 <table>
                                     <tr className='table-header-row'>
                                         <th>#</th>
                                         <th>TITRE</th>
                                         <th>ALBUM</th>
                                         <th>&#x1F551;</th>
                                     </tr>
                                     {album && album.tracks && album.tracks.items ? album.tracks.items.map((item,index) => <TrackCard {...item} index={index + 1} album={album} />)  : ''}
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