import SpotifyPlayer from 'react-spotify-web-playback';

export default function SpotifyPlayerComponent(token){
    token = token.token
    return(
        <div>
            <SpotifyPlayer autoPlay={true} initialVolume={10} play={true}
            token={'BQBLIAoNCMVXl2UVXfN2MyaPiP119_wIDwsZ_V3IyBz3W16ktMP9KVtdsKqKsW69AuPix9lo995YsPGb42cx1c_akG3rxuAuTsX002uB-AWnfAWlWh08k2eEOHIgVAmWzS3B2-Z5g_19tfxAxqMZUILXI3_LYChL8Yc5mZ7YyOhYOWWU2lqTUsjHhsptZfcawePRdtTUNBwf10if1Qy-GKCmqPuSPi2NGAg8Kne53Gu2xWqe0xGN0QpIJmjQFkV-K93Ga8C2OzfjNz55nqUMGm6FejusRfR9Z60yiHEXR2QjNlT_46ruqTrC5FiJPFOJzdOy6i1g6LpPpeSxvJs'}
             uris={'spotify:artist:6HQYnRM4OzToCYPpVBInuU'}
        />;
        </div>
    )
}