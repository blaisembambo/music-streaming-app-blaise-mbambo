import { Outlet,Link } from "react-router-dom";

export default function Layout() { 
return(
    <div className="layout-container">
        <div className="header-container">
            <p className="" style={{color:'white'}}>{window.location.pathname}</p>
        </div>
        <div className="left-sidebar-content">
                <nav >
                    <ul>
                        <li><Link to='/' >Accueil</Link></li>
                        <li><Link to='/search'>Recherche</Link></li>
                        <li><Link to='/library'>Bibliothèque</Link></li>
                    </ul>
                </nav>
        </div>
        <div className="main-content">
            <Outlet/>
        </div>
        <div className="player-container">
            <p className="">Player container</p>
        </div>
    </div>
)
}