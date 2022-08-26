export default function PlaylistCard({id,images,name,owner,uri,type}){
    return (
        //{id,images,name,owner,uri,type}
        <div className="playlist-card square-card">
            <img src={images ? images[0].url : ''} alt='' />
            <p className="playlist-title item-name">{name}</p>
            <p className="gray-text">
                <span>Par </span>
                <span>{owner['display_name'] ? owner['display_name'] : ''}</span>
            </p>
            {/* <p>{Object.keys(playlist)}</p> */}
        </div>
    )
}