import SpotifyWebApi from 'spotify-web-api-js';
import HitBitLogo from '../../images/hit-bit-logo.png'
import { useEffect, useState } from "react";
import Logout from './Logout';
import defaultArtistImage from '../../images/image-for-artist-without-image-2.png'
import TrackCard from './TrackCard';
import{BsPlayCircleFill} from 'react-icons/bs'
import DisplayAlbums from './DisplayAlbums';
import DisplayTracks from './DisplayTracks';

export default function DisplayArtistContent({artistId,userInfos}){

    const [artist,setArtist] = useState({})
    const [artistAlbums,setArtistAlbums] = useState({})
    const [artistTopTracks,setArtistTopTracks] = useState({})

    useEffect(()=>{
        const spotifyApi = new SpotifyWebApi();
        spotifyApi.getArtist(artistId).then(artist => setArtist(artist))
        spotifyApi.getArtistAlbums(artistId).then(artistAlbums => setArtistAlbums(artistAlbums))
        spotifyApi.getArtistTopTracks(artistId).then(artistTopTracks => setArtistTopTracks(artistTopTracks))
    },[artistId ])

    return(
        <div className="home-page main-content">
                     <div className="header-container">
                         <div className="logo">
                             <img src={HitBitLogo} />
                         </div>
                         <Logout userInfos={userInfos}/>
                     </div>
                 { artist ? <div className='page-content'>
                         <div style={{backgroundColor: artist && artist.primary_color ? artist.primary_color: '#545454'}} className='artist-header'>
                             <div className='artist-details'>
                                 <div className='artist-image-container'>
                                     <img src={artist && artist.images && artist.images[0] && artist.images[0].url  ? artist.images[0].url : defaultArtistImage} alt='' />
                                 </div>
                                 <div className='artist-infos'>
                                     <p className='artist-bold-text'>ARTIST</p>
                                     <h1 className='artist-name'>{artist && artist.name ? artist.name : ''}</h1>
                                     <p className='artist-description'>{artist && artist.description ? artist.description : ''}</p>
                                     <p className='artist-owner-followers artist-bold-text'>
                                         <span className='owner'>{artist && artist.owner ? artist.owner.display_name : ''} </span>.
                                         <span className='followers'> {artist && artist.followers ? artist.followers.total : ''} followers</span>
                                     </p>
                                 </div>
                             </div>
                             <div className='artist-play-button-container'>
                                 <BsPlayCircleFill/>
                             </div>
                         </div>
                         <div className='artist-discography'>
                            <h2>Discographie</h2>
                             <div className="albums">
                                {artistAlbums ? <DisplayAlbums {...artistAlbums }  /> : ''}
                             </div>
                         </div>
                         <div className='artist-popular-tracks'>
                            <h2>Chansons populaires</h2>
                             <div className="tracks">
                                {/* {artistTopTracks ? <DisplayTracks {artistTopTracks} /> : ''} */}
                                {Object.keys(artistTopTracks)}
                             </div>
                         </div>
                     </div>
                     :
                     ''
                     }
                 </div>
                 
     )
}