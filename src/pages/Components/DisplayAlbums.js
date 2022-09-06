// import AlbumCard from './AlbumCard'

// export default function DisplayAlbums({items}){
//     const albums = items 
//     return (
//         <div className="albums cards-wrapper">
//              {albums ? albums.map( (album,index) => <AlbumCard  {...(album.hasOwnProperty('album') ? album.album : album)} key={index} />) : ''}
//         </div>
//     )
// }

import AlbumCard from './AlbumCard'
import { Link } from 'react-router-dom'
import { useContext } from "react";
import {currentAlbumIdContext} from '../../App'

export default function DisplayAlbums({items}){
    const albums = items
    const {currentAlbumId,setCurrentAlbumId} = useContext(currentAlbumIdContext)
    return (
        <div className="albums cards-wrapper">
             {albums ? albums.map( (album,index) => {
                                            album.hasOwnProperty('album') ? album = album.album : album = album
                                    return <Link to={'/album/' + album.id} id={album.id} onClick={() => {setCurrentAlbumId(album.id)}} className="main-content-album" key={index}><AlbumCard  {...album} key={index} /></Link>
                            }) : ''}
        </div>
    )
}