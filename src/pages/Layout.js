import { Outlet,Link } from "react-router-dom";
import { useState, useContext } from "react";
import SpotifyPlayerComponent from './Components/SpotifyPlayerComponent';
import LeftSidebarContent from './Components/LeftSidebarContent'
import {currentUriContext} from '../App'



export default function Layout({userInfos,token}) { 

    const {currentUri,setCurrentUri} = useContext(currentUriContext)

function handleCurrentUriChange(uri){
    setCurrentUri(uri)
}

return(
    
    <div className="layout-container">
            <Outlet />
        
        <LeftSidebarContent userInfos={userInfos} />
        <div className="player-container">
            <SpotifyPlayerComponent token={token} uri={currentUri}/>
        </div>
    </div>
)
}