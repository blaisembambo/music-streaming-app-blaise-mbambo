import defaultTrackImage from '../../images/image -for-tracks-albums-playlists-without-one.png'

export default function TrackCard({name,album,artists,id,uri,duration_ms,index,artist}){
    console.log(artist)
    const albumName = album ? album.name : ''
    const albumImageUrl = album ? album.images[0].url : {defaultTrackImage}
    const min = Math.floor(duration_ms / 60000) + ''
    const second = Math.floor((duration_ms % 60000) / 1000) + ''
    const duration = min + (second < 10 ? ':0' : ':') + second
    const artistsNames = artists ? artists.map( (artist,index) => {
                                                                    if(index < artists.length - 1){ 
                                                                        return artist.name +  ', '
                                                                    }else{
                                                                        return artist.name
                                                                    }
                                                                } ) : ''
    return (
        <>
            <tr>
                <td>{index}</td>
                <td>
                <div className="track-card-title-column-datas">
                        <img src={albumImageUrl } alt="" />
                        <div className='track-infos'>
                            <p className="item-name track-item-name">{name}</p>
                            <p className="gray-text">{artistsNames}</p>
                        </div>
                    </div>
                </td>
                <td>{albumName}</td>
                <td>{duration }</td>
            </tr>
        </>
    )
}