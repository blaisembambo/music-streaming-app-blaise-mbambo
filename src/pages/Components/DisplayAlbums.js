import AlbumCard from './AlbumCard'

export default function DisplayAlbums({items}){
    const albums = items
    return (
        <div className="albums cards-wrapper">
             {albums ? albums.map( (album,index) => <AlbumCard  {...album} key={index} />) : ''}
        </div>
    )
}