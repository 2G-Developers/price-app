import React , { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

function Navbar({isSecondary,class1="navbar-list", class2="navbar-list", class3="navbar-list",class4="navbar-list",color='#fff'}){
    const [showNav,setShownav ] = useState(false);
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 100) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeBackground)
        return () => {
            window.removeEventListener('scroll', changeBackground)
        }
    }, [])

    return(

    <div className="nav">

    <div className={navbar ? 'navbar active-nav': 'navbar'} style={{background: `${ navbar ? color : '#eee'}`}}>
        
        <Link className={class1} to="/">2G Developers</Link>
        {/* {isSecondary ? <Link to="/"><img className="logo" src={logo2} alt="logo"/></Link> : null } */}
        <div className="navbar-hamburg" onClick={()=>setShownav(!showNav)}>
            <div className="navbar-hamburg-bar" style={{background: `${navbar || isSecondary ? '#000': '#eee'}`}}></div>
            <div className="navbar-hamburg-bar" style={{background: `${navbar || isSecondary ? '#000': '#eee'}`}}></div>
            <div className="navbar-hamburg-bar" style={{background: `${navbar || isSecondary ? '#000': '#eee'}`}}></div>
        </div>
    </div>  
    <div className="navbar-page" style={{display: showNav ? 'block' : 'none' }}>
        <div id="mdiv" onClick={()=>setShownav(!showNav)}>
            <div className="mdiv">
                 <div className="md"></div>
             </div>
        </div>
        <div className="navbar-content">
            <Link to="/" className={class1}>Home</Link>
            <Link to="/login" className={class1}>Login</Link>
        </div>
    </div>
    </div>)
}
export default Navbar
