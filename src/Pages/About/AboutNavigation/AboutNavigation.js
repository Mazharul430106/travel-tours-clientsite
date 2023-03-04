import React from 'react';
import { Link } from 'react-router-dom';

const AboutNavigation = () => {

    const aboutMenuItems = <React.Fragment className="">
        <li><Link to='/information'>Information</Link></li>
        <li><Link to='/tourplan'>Tour Plan</Link></li>
        <li><Link to='/location'>Location</Link></li>
        <li><Link to='/gallery'>Gallery</Link></li>
        <li><Link to='/reviews'>Reviews</Link></li>

    </React.Fragment>


    return (
        <div className="navbar bg-base-100">
            <div className="flex-none">
                <ul className="menu lg:menu-horizontal menu-virtical px-1">
                    {aboutMenuItems}
                </ul>
            </div>
        </div>
    );
};

export default AboutNavigation;