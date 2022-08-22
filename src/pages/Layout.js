import { Outlet,Link } from "react-router-dom";
import { useState } from "react";
import HitBitLogo from '../images/hit-bit-logo.png'
import {BiLibrary} from 'react-icons/bi'

export default function Layout() { 

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
    console.log('in usestate')
    console.log(e.target.className)
    console.log('in usestate')
    console.log( mainMenuCurrentLink)
}
console.log('ouside usestate but before return')
console.log(mainMenuCurrentLink)
return(
    
    <div className="layout-container">
        {console.log('in return')}
        {console.log( mainMenuCurrentLink)}
        <div className="header-container">
            <div className="logo">
                <img src={HitBitLogo} />
            </div>
            <div className="header-middle-content">

            </div>
            <div className="user-logout">
                <img src="" alt="" />
                <span className="username">MBAMBO Blaise</span>
                <span className="arrow">
                    <svg className="arrow-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">{'<!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->'}<path d="M310.6 246.6l-127.1 128C176.4 380.9 168.2 384 160 384s-16.38-3.125-22.63-9.375l-127.1-128C.2244 237.5-2.516 223.7 2.438 211.8S19.07 192 32 192h255.1c12.94 0 24.62 7.781 29.58 19.75S319.8 237.5 310.6 246.6z"/></svg>
                </span>
            </div>
        </div>
        <div className="left-sidebar-content">
                <nav >
                    <ul className="main-menu">
                        <li>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">{'<!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->'}<path d="M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5L575.8 255.5z"/></svg>
                            <Link className={"home " + mainMenuCurrentLink.home} id="home" onClick={handleMainMenuLinkClick} to='/' >Accueil</Link>
                        </li>
                        <li>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">{'<!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->'}<path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"/></svg>
                            <Link className={"search " + mainMenuCurrentLink.search} id="search" onClick={handleMainMenuLinkClick} to='/search'>Recherche</Link>
                        </li>
                        <li>
                            <BiLibrary />
                            <Link className={"library " + mainMenuCurrentLink.library} id="library" onClick={handleMainMenuLinkClick} to='/library'>Bibliothèque</Link>
                        </li>
                    </ul>
                </nav>
                <div className="playlists">
                    <p className="playlists-title">PLAYLISTS</p>
                    <p className="playlist">playlist 1</p>
                    <p className="playlist">playlist 1</p>
                    <p className="playlist">playlist 1</p>
                    <p className="playlist">playlist 1</p>
                    <p className="playlist">playlist 1</p>
                    <p className="playlist">playlist 1</p>
                    <p className="playlist">playlist 1</p>
                </div>
        </div>
        <div className="main-content">
            <Outlet/>
        </div>
        <div className="player-container">
            <p className="">Player container</p>
        </div>
    </div>
)
}