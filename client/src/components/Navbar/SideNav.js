import React from 'react';
import { Link } from 'react-router-dom';

const closeSideNav = () => {
    document.getElementById("mySidenav").style.width = "0";
}

const SideNav = () => {
    return(
        <div id="mySidenav" className="sidenav">
            <span onClick={closeSideNav} className="closebtn">&times;</span>
            {/* <div className="clearfix"></div> */}
            <SideNavLink to="/">Home</SideNavLink>
            <SideNavLink to="/add-movie">Add Movie</SideNavLink>
        </div>
    );
}

const SideNavLink = ({to, children}) => {
    return <Link onClick={closeSideNav} to={to}>{children}</Link>
}

export default SideNav;