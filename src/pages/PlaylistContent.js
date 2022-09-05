import { useContext } from 'react';

import {currentPlaylistIdContext} from '../App'

import DisplayPlaylistContent from './Components/DisplayPlaylistContent';


export default function PlaylistContent({userInfos}){

    const {currentPlaylistId,setCurrentPlaylistId} = useContext(currentPlaylistIdContext)

    console.log('playlist id from Playlistcontent == ' + currentPlaylistId)
    
return(
    <DisplayPlaylistContent playlistId={currentPlaylistId} userInfos={userInfos} />            
)
}