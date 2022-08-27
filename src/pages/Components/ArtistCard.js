import defaultArtistImage from '../../images/image-for-artist-without-image-2.png'

export default function ArtistCard({id, images, uri, name}){

    return (
        <div className="artist-card square-card">
            <img src={images && images[0] ? images[0].url : defaultArtistImage} alt='' />
            <p className="artist-title item-name">{name}</p>
            <p className="gray-text">Artist</p>
        </div>
    )
}