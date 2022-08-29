import Playlists from './Playlists'
import Artists from './Artists'
import Albums from './Albums'
import HitBitLogo from '../images/hit-bit-logo.png'
import { Outlet,Link } from "react-router-dom";
import { useState } from "react";
import Logout from './Components/Logout';


export default function Library({userInfos}){

    const [libraryMenuCurrentLink,setLibraryMenuCurrentLink] = useState({
        playlists:'library-menu-active',
        artists:'',
        albums:''
    })
    
    function handleLibraryMenuLinkClick(e) {
        setLibraryMenuCurrentLink(prevLibraryMenuCurrentLink => {
            const o = {}
            for (const key in prevLibraryMenuCurrentLink) {
                key == e.target.id ? o[key] = 'library-menu-active' : o[key] = ''
            }
            return o
        })
    }

    return(
        <div>
            <div className="header-container">

                <div className="header-middle-content">
                <nav >
                    <ul className="playlists-menu">
                        <li>
                            <Link className={"playlists " + libraryMenuCurrentLink.playlists} id="playlists" onClick={handleLibraryMenuLinkClick}  to='/library/playlists' >Playlists</Link>
                        </li>
                        <li>
                            <Link className={"artists " + libraryMenuCurrentLink.artists} id="artists" onClick={handleLibraryMenuLinkClick} to='/library/artists'>Artists</Link>
                        </li>
                        <li>
                            <Link className={"albums " + libraryMenuCurrentLink.albums} id="albums" onClick={handleLibraryMenuLinkClick}  to='/library/albums'>Albums</Link>
                        </li>
                    </ul>
                </nav>
            </div>
                <Logout userInfos={userInfos}/>
            </div>
            <div className='main-content'>
                <Outlet/>
            </div>
        </div>
    )
}