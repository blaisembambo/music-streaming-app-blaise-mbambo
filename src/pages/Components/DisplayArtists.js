import ArtistCard from './ArtistCard'

export default function DisplayArtists({items}){
    const artists = items
    return (
        <div className="artists cards-wrapper">
            {artists ? artists.map( (artist,index) => <ArtistCard {...artist} key={index} />) : ''}
        </div>
    )
}