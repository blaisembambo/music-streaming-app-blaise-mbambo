import { Link } from "react-router-dom";
import HitBitLogo from '../../images/hit-bit-logo.png'
import {BiLibrary} from 'react-icons/bi'
import {BsSearch} from 'react-icons/bs'
import {AiOutlineHome} from 'react-icons/ai'

export default function LeftSidebarContent(){
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
    )
}