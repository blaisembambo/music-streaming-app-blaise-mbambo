import defaultPlaylistImage from '../../images/image -for-tracks-albums-playlists-without-one.png'

export default function PlaylistCard({id,images,name,owner,uri,type}){
    return (
        //{id,images,name,owner,uri,type}
        <div className="playlist-card square-card">
            <img src={images && images[0] ? images[0].url : defaultPlaylistImage } alt='' />
            <p className="playlist-title item-name">{name}</p>
            <p className="gray-text">
                <span>Par </span>
                <span>{owner['display_name'] ? owner['display_name'] : ''}</span>
            </p>
            {/* <p>{Object.keys(playlist)}</p> */}
        </div>
    )
}