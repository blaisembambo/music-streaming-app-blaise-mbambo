import { Outlet,Link } from "react-router-dom";
import { useState } from "react";
import HitBitLogo from '../images/hit-bit-logo.png'
import {BiLibrary} from 'react-icons/bi'
import {BsSearch} from 'react-icons/bs'
import {AiOutlineHome} from 'react-icons/ai'
import SpotifyPlayer from 'react-spotify-web-playback';

export default function Layout({userInfos,token}) { 

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
                <div className="user-logout">
                    <img src="" alt="" />
                    <span className="username">{userInfos.display_name ? userInfos.display_name.split(' ').slice(0,2).join(' '):""}</span>
                    <span className="arrow">
                        <svg className="arrow-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">{'<!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->'}<path d="M310.6 246.6l-127.1 128C176.4 380.9 168.2 384 160 384s-16.38-3.125-22.63-9.375l-127.1-128C.2244 237.5-2.516 223.7 2.438 211.8S19.07 192 32 192h255.1c12.94 0 24.62 7.781 29.58 19.75S319.8 237.5 310.6 246.6z"/></svg>
                    </span>
                </div>
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