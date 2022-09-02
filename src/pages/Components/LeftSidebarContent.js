import { Link } from "react-router-dom";
import HitBitLogo from '../../images/hit-bit-logo.png'
import {BiLibrary} from 'react-icons/bi'
import {BsSearch} from 'react-icons/bs'
import {AiOutlineHome} from 'react-icons/ai'
import { useState, useEffect } from "react";
import SpotifyWebApi from 'spotify-web-api-js';
import PlaylistContent from "../PlaylistContent";
import { useNavigate } from "react-router-dom";

export default function LeftSidebarContent({userInfos}){

    const [currentPath,setCurrentPath] = useState('')
    const [mainMenuCurrentLink,setMainMenuCurrentLink] = useState({
    home:'active',
    search:'',
    library:''
})

function handleMainMenuLinkClick(e) {
    setMainMenuCurrentLink(prevMainMenuCurrentLink => {
        const o = {}
        for (const key in prevMainMenuCurrentLink) {
            key == e.target.id ? o[key] = 'active' : o[key] = ''
        }
        return o
    })

}

    const [userPlaylists,setUserPlaylists] = useState({})
    const navigate = useNavigate();


    useEffect(()=>{
        const spotifyApi = new SpotifyWebApi();
         spotifyApi.getUserPlaylists(userInfos.id).then(playlists => setUserPlaylists(playlists))
     },[])

    return(
        <div className="left-sidebar-content">
            {/* <div className="logo">
                    <img src={HitBitLogo} />
            </div> */}
                <nav >
                    <ul className="main-menu">
                        <li>
                            <AiOutlineHome/>
                            {/* className={"home " + mainMenuCurrentLink.home} id="home" onClick={handleMainMenuLinkClick} */}
                            <Link  to='/' >Accueil</Link>
                        </li>
                        <li>
                            <BsSearch/>
                            {/* className={"search " + mainMenuCurrentLink.search} id="search" onClick={handleMainMenuLinkClick} */}
                            <Link to='/search'>Recherche</Link>
                        </li>
                        <li>
                            <BiLibrary />
                            {/* className={"library " + mainMenuCurrentLink.library} id="library" onClick={handleMainMenuLinkClick} */}
                            <Link to='/library/playlists'>Bibliothèque</Link>
                        </li>
                    </ul>
                </nav>
                
                <hr className="horiz-line" />

                <div className="playlists">
                    <p className="playlists-title">PLAYLISTS</p>
                    {
                    userPlaylists && userPlaylists.items ? 
                        <div className="playlists-content">                                                                  
                               {userPlaylists.items.map((playlist,index) =><Link to={'/playlist/' + playlist.id} id={playlist.id} className="sidebar-playlist" key={index}>{playlist.name}</Link>)}
                        </div>
                        :
                        ''
                    }
                    {/* {onClick={handlePlaylistContentDisplay}} */}
                </div>
        </div>
    )
}