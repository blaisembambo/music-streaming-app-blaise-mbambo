import headphoneImg from '../images/headphones-transparent-png-16 1.png'

export default function Login({hrefAuthorizeLink}) {

    return (
        <div className="login">
            <div className='login-content'>
                <div className='headphone-img-container'>
                    <img src={headphoneImg} alt="" className='headphone-img'/>
                </div>
                <div className="login-side">
                    <div className='login-side-texts'>
                        <h2 className='hit-bit-title'>HIT BIT</h2>
                        <h1 className='intro-message'>La plateforme la plus complète
        en terme de musique.</h1>
                    </div>
                    <div className='login-btn-container'>
                        <a className='login-btn' href={hrefAuthorizeLink}>CONNEXION</a>
                    </div>
                </div>
            </div>
        </div>
    )
}