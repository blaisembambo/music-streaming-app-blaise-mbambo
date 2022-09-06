import PlaylistCard from './PlaylistCard'
import { Link } from 'react-router-dom'
import { useContext } from "react";
import {currentPlaylistIdContext} from '../../App'

export default function DisplayPlaylists({items}){
    const playlists = items
    const {currentPlaylistId,setCurrentPlaylistId} = useContext(currentPlaylistIdContext)
    return (
        <div className="playlists cards-wrapper">
             {playlists ? playlists.map( (playlist,index) => <Link to={'/playlist/' + playlist.id} id={playlist.id} onClick={() => {setCurrentPlaylistId(playlist.id)}} className="main-content-playlist" key={index}><PlaylistCard {...playlist} key={index} /></Link>) : ''}
        </div>
    )
}