import PlaylistCard from './PlaylistCard'

export default function DisplayPlaylists({items}){
    const playlists = items
    return (
        <div className="playlists">
             {playlists ? playlists.map( (playlist,index) => <PlaylistCard {...playlist} key={index} />) : ''}
        </div>
    )
}