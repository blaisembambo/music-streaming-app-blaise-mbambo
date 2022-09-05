import{MdLogout} from 'react-icons/md'
import { useNavigate } from 'react-router-dom';





export default function Logout({userInfos}){
    userInfos = {...userInfos}
    const navigate = useNavigate();

    let handleLogout = e => {
        window.localStorage.removeItem('token')
        navigate("/login", { replace: true });
    }
    return(
        <div className="user-logout">
            <img src="" alt="" />
            <span className="username">{userInfos.display_name ? userInfos.display_name.split(' ').slice(0,2).join(' '):""}</span>
            <span className="icon logout-icon" onClick={handleLogout}>
                <MdLogout/>
            </span>
        </div>
    )
}