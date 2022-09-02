import { Outlet,Link } from "react-router-dom";
import { useState } from "react";
import HitBitLogo from '../images/hit-bit-logo.png'
import {BiLibrary} from 'react-icons/bi'
import {BsSearch} from 'react-icons/bs'
import {AiOutlineHome} from 'react-icons/ai'
import SpotifyPlayerComponent from './Components/SpotifyPlayerComponent';
import { useContext } from "react";
import Logout from './Components/Logout'
import Home from "./Home";
import LeftSidebarContent from './Components/LeftSidebarContent'

export default function Layout({userInfos,token}) { 

    // const userInfos = useContext('userInfosContext')
    // const token = useContext('token')

const [currentUri,setCurrentUri] = useState('')

function handleCurrentUriChange(uri){
    setCurrentUri(uri)
}

return(
    
    <div className="layout-container">
        <Outlet/>
        <LeftSidebarContent userInfos={userInfos} />
        <div className="player-container">
            <SpotifyPlayerComponent token={token} uri={currentUri}/>
        </div>
    </div>
)
}