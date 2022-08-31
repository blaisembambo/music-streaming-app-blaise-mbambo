import SpotifyPlayer from 'react-spotify-web-playback';

export default function SpotifyPlayerComponent({token,uri}){
    token = token.token
    return(
        <div className="player-container">
            <SpotifyPlayer autoPlay={true} initialVolume={10} play={true}
            token={'BQAamDRzGZeB5rE7SYCC0az9dJVcLu5BECSw8a5WawOiXzrmaA617rCsLMKW_ivAt2Z1rgaY-J375yemJTGpBefjTRi-Awj-GCr0xmDfWmzyWdk6lwSLg4tbqdA8LNg1h8Znczmkvi6YPmwj-R7K2yNvG9-IpHEishxbsrsqWAHz0vT-q1Y1MzN8kHSpZsGgdWPV445xgzXUFcSVsAXYljMNwoidPILbd_dI_BXbd0edw4ZdpQM57mHuyMAOcaE2600Ea99OcB4'}
             uris={uri}
        />;
        </div>
    )
}