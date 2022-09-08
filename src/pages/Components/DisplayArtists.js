import ArtistCard from './ArtistCard'
import { Link } from 'react-router-dom'
import { useContext } from "react";
import {currentArtistIdContext} from '../../App'

export default function DisplayArtists({items}){
    const artists = items
    const {currentArtistId,setCurrentArtistId} = useContext(currentArtistIdContext)
    return (
        <div className="artists cards-wrapper">
            {artists ? artists.map( (artist,index) => <Link to={'/artist/' + artist.id} id={artist.id} onClick={() => {setCurrentArtistId(artist.id)}} className="main-content-artist" key={index}><ArtistCard {...artist} key={index} /></Link>) : ''}
        </div>
    )
}