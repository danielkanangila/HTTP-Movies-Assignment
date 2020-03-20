import React from "react"
import { Link } from "react-router-dom";
import './navbar.scss';
import SideNav from "./SideNav";

const NavBar = () => {
    const openSidenav = () => {
        document.getElementById("mySidenav").style.width = "350px";
    }
    return(
        <React.Fragment>
            <SideNav />
            <div onClick={openSidenav} className="navbar container">
                <div className="menu-icon">
                    <MenuIcon />
                </div>
                <div className="items">
                    <h1 className="logo">
                        <Link to="/">
                            HTTP-Movies
                        </Link>
                    </h1>
                </div>
            </div>
        </React.Fragment>
    )
}

const MenuIcon = () => {
    return <svg focusable="false" aria-label="Open Menu" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 14" height="20" width="28"><path d="M.64,12H16.36c.36,0,.64.43.64,1s-.28,1-.64,1H.64C.28,14,0,13.57,0,13s.28-1,.64-1M23.1,2H.9A.94.94,0,0,1,0,1,.94.94,0,0,1,.9,0H23.1A.94.94,0,0,1,24,1a.94.94,0,0,1-.9,1M.9,8A.94.94,0,0,1,0,7,.94.94,0,0,1,.9,6H23.1A.94.94,0,0,1,24,7a.94.94,0,0,1-.9,1Z" fill="#fff"></path></svg>
}

export default NavBar;