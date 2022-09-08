import TrackCard from './TrackCard'

export default function DisplayTracks({items,tracks}){
    const allTracks = tracks ? tracks : items
    return (
        <div className="tracks">
            <table>
                <tr className='table-header-row'>
                    <th>#</th>
                    <th>TITRE</th>
                    <th>ALBUM</th>
                    <th>&#x1F551;</th>
                </tr>
                {allTracks ? allTracks.map( (track,index) => <TrackCard {...track} key={index} index={index + 1} />) : ''}
            </table>
        </div>
    )
}