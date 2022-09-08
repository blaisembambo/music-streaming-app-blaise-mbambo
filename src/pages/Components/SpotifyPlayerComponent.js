import SpotifyPlayer from 'react-spotify-web-playback';

export default function SpotifyPlayerComponent({token,uri}){
    token = token.token
    return(
        <div className="player-container">
            <SpotifyPlayer autoPlay={true} initialVolume={10} play={true}
            token={token}
             uris={uri}
        />;
        </div>
    )
}