import { useContext } from 'react'
import {currentUriContext} from '../../App'
import SpotifyWebApi from 'spotify-web-api-js';

export default function SongCrad({album, artists, name,uri,handleCurrentUriChange}){

  const spotifyApi = new SpotifyWebApi();
  const {currentUri,setCurrentUri} = useContext(currentUriContext)
    const songImageUrl = album.images[0].url
    const songAlbumName = album.name
    const songArtists = artists[0].name
    const songName = name
  return(
    <div className="song-card" onClick={()=>{setCurrentUri(uri ? uri : '');spotifyApi.play()}}>
        <img src={songImageUrl} alt="" className="song-image" />
        <p className="song-name">{songName}</p>
        <p className="song-album">{songAlbumName}</p>
        <p className="song-artist">{songArtists}</p>
    </div>
  )   
}
