import SpotifyPlayer from 'react-spotify-web-playback';
import { useContext } from 'react';
import { tokenContext } from '../../App'

export default function SpotifyPlayerComponent({uri}){

    const token = useContext(tokenContext)
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