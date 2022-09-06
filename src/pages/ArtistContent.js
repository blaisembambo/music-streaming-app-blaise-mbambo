import { useContext } from 'react';

import {currentArtistIdContext} from '../App'

import DisplayArtistContent from './Components/DisplayArtistContent';


export default function ArtistContent({userInfos}){

    const {currentArtistId,setCurrentArtistId} = useContext(currentArtistIdContext)
    
return(
    <DisplayArtistContent artistId={currentArtistId} userInfos={userInfos} />            
)
}