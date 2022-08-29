import {TiArrowSortedDown} from 'react-icons/ti'


export default function Logout({userInfos}){
    userInfos = {...userInfos}

    let handleLogout = e => {
        window.localStorage.removeItem('token')
        window.location.reload(true)
    }
    return(
        <div className="user-logout">
            <img src="" alt="" />
            <span className="username">{userInfos.display_name ? userInfos.display_name.split(' ').slice(0,2).join(' '):""}</span>
            <span className="arrow">
                <TiArrowSortedDown/>
            </span>
            <button className="logout-button" onClick={handleLogout}>Déconnexion</button>
        </div>
    )
}