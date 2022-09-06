import { useContext } from 'react';

import {currentAlbumIdContext} from '../App'

import DisplayAlbumContent from './Components/DisplayAlbumContent';


export default function AlbumContent({userInfos}){

    const {currentAlbumId,setCurrentAlbumId} = useContext(currentAlbumIdContext)
    
return(
    <DisplayAlbumContent albumId={currentAlbumId} userInfos={userInfos} />            
)
}