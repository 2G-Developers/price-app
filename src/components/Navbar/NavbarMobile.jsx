import React,{useState, useEffect} from 'react'

const NavbarMobile = ({isSecondary}) => {
    const [collapse, setCollapse]= useState(false)
    const myUrl = window.location.href;

    const [navbar, setNavbar] = useState(false);

    const scrollBackground = () => {
        if(window.scrollY >= 100) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollBackground)
        return () => {
            window.removeEventListener('scroll', scrollBackground)
        }
    }, [])

    

    return (
        <nav className={`${collapse ? 'navbar-mobile navbar-mobile--white': 'navbar-mobile'}`} style={{background: `${ navbar ? '#fff' : 'transparent'}`}}>
            <div className="navbar-mobile__wrapper">

                <a href="/">2G Developers</a> 

                <div className="navbar-mobile__hamburg" onClick={() => setCollapse(prevState => !prevState)}>
                    <div className={`${collapse ? "navbar-hamburg-bar navbar-mobile--black": "navbar-hamburg-bar"}`} style={{background: `${navbar || isSecondary ? '#000': '#fff'}`}}></div>
                    <div className={`${collapse ? "navbar-hamburg-bar navbar-mobile--black": "navbar-hamburg-bar"}`} style={{background: `${navbar || isSecondary ? '#000': '#fff'}`}}></div>
                    <div className={`${collapse ? "navbar-hamburg-bar navbar-mobile--black": "navbar-hamburg-bar"}`} style={{background: `${navbar || isSecondary ? '#000': '#fff'}`}}></div>
                </div>
            </div>

            <div className={`${collapse ? 'navbar-mobile__collapse navbar-mobile__collapse--show': 'navbar-mobile__collapse'}`}>
                <ul className="navbar-mobile__item">
                    <li className={`${myUrl.endsWith("/")? 'navbar-mobile__list navbar-mobile__list--active': 'navbar-mobile__list'}`}><a href="/" className="navbar-mobile__link">Home</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavbarMobile
