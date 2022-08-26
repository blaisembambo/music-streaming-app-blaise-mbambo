export default function AlbumCard({artists,id,images,name,release_date,uri}){

    return (
        <div className="album-card square-card">
            <img src={images ? images[0].url : ''} alt='' />
            <p className="album-title item-name">{name}</p>
            <p className="release-year-and-artists">
                <span className="release-year gray-text">{release_date ? release_date.split('-').reverse().join('-') : ''} </span>.
                <span className="artists-names gray-text"> {artists[0]['name']}</span>
            </p>

        </div>
    )
}