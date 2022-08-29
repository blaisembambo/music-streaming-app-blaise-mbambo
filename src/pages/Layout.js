import { Outlet,Link } from "react-router-dom";
import { useState } from "react";
import HitBitLogo from '../images/hit-bit-logo.png'
import {BiLibrary} from 'react-icons/bi'
import {BsSearch} from 'react-icons/bs'
import {AiOutlineHome} from 'react-icons/ai'
import SpotifyPlayer from 'react-spotify-web-playback';
import { useContext } from "react";
import Logout from './Components/Logout'

export default function Layout({userInfos,token}) { 

    // const userInfos = useContext('userInfosContext')
    // const token = useContext('token')

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

return(
    
    <div className="layout-container">

        <div className="left-sidebar-content">
            <div className="logo">
                    <img src={HitBitLogo} />
            </div>
                <nav >
                    <ul className="main-menu">
                        <li>
                            <AiOutlineHome/>
                            <Link className={"home " + mainMenuCurrentLink.home} id="home" onClick={handleMainMenuLinkClick} to='/' >Accueil</Link>
                        </li>
                        <li>
                            <BsSearch/>
                            <Link className={"search " + mainMenuCurrentLink.search} id="search" onClick={handleMainMenuLinkClick} to='/search'>Recherche</Link>
                        </li>
                        <li>
                            <BiLibrary />
                            <Link className={"library " + mainMenuCurrentLink.library} id="library" onClick={handleMainMenuLinkClick} to='/library/playlists'>Bibliothèque</Link>
                        </li>
                    </ul>
                </nav>
                
                <hr className="horiz-line" />
               
                <div className="playlists">
                    <p className="playlists-title">PLAYLISTS</p>
                    <div className="playlists-content">
                        <p className="playlist">playlist 1</p>
                        <p className="playlist">playlist 1</p>
                        <p className="playlist">playlist 1</p>
                        <p className="playlist">playlist 1</p>
                        <p className="playlist">playlist 1</p>
                        <p className="playlist">playlist 1</p>
                        <p className="playlist">playlist 1</p>
                        <p className="playlist">playlist 2</p>
                    </div>
                </div>
        </div>
        <div className="main-content">
        <div className="header-container">
            <Logout userInfos={userInfos}/>
        </div>
        <Outlet/>
        </div>
        <div className="player-container">
        <SpotifyPlayer
            token={token}
             uris={['spotify:artist:6HQYnRM4OzToCYPpVBInuU']}
        />;
        </div>
    </div>
)
}