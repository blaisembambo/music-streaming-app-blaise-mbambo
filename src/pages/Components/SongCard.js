

export default function SongCrad({album, artists, name,uri,handleCurrentUriChange}){
    const songImageUrl = album.images[0].url
    const songAlbumName = album.name
    const songArtists = artists[0].name
    const songName = name
  return(
    <div className="song-card" onClick={()=>{handleCurrentUriChange(uri)}}>
        <img src={songImageUrl} alt="" className="song-image" />
        <p className="song-name">{songName}</p>
        <p className="song-album">{songAlbumName}</p>
        <p className="song-artist">{songArtists}</p>
    </div>
  )   
}
 {/* {recentlyPlayedTracks[13].track.name} */}
        {/* album : album.images[0].url, name */}
        {/* atrists[0].name : name */}