import axios from "axios"
import { useState } from "react"

export default function Home({logoutFunc, token,hrefAuthorizeLink}){
    let [searchKey, setSearchKey] = useState("")
    const [artists, setArtists] = useState([])


// const searchArtists = async (e) => {
//     e.preventDefault()
//     const {data} = await axios.get("https://api.spotify.com/v1/search", {
//         headers: {
//             Authorization: `Bearer ${token}`
//         },
//         params: {
//             q: searchKey,
//             type: "artist"
//         }
//     })

//     setArtists(data.artists.items)
    
// }

// const renderArtists = () => {
//     return artists.map(artist => (
//         <div key={artist.id}>
//             {artist.images.length ? <img width={"100%"} src={artist.images[0].url} alt=""/> : <div>No Image</div>}
//             {artist.name}
//         </div>
//     ))
// }


    return(
        <div>
            {/* home page
            <button onClick={logoutFunc}>Logout</button>
            <a className='login-btn' href={hrefAuthorizeLink}>CONNEXION</a>

        
        <form onSubmit={searchArtists}>
            <input type="text" onChange={e => setSearchKey(e.target.value)}/>
            <button type={"submit"}>Search</button>
        </form>
        {renderArtists()} */}
        </div>
    )
}




