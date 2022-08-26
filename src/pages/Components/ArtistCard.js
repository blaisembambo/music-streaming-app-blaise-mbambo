export default function ArtistCard({id, images, uri, name}){
    return (
        <div className="artist-card square-card">
            <img src={images ? images[0].url : ''} alt='' />
            <p className="artist-title item-name">{name}</p>
            <p className="gray-text">Artist</p>
        </div>
    )
}