import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AboutNavigation = () => {
    const {_id} = useLoaderData();
    
    const aboutMenuItems = <React.Fragment className="">
        <li><Link to={`/recommendedCheckoutPage/${_id}/information`}>Information</Link></li>
        <li className='lg:pl-10 text-left'><Link to={`/recommendedCheckoutPage/${_id}/tourplan`}>Tour Plan</Link></li>
        <li className='lg:pl-10 text-left'><Link to={`/recommendedCheckoutPage/${_id}/location`}>Location</Link></li>
        <li className='lg:pl-10 text-left'><Link to={`/recommendedCheckoutPage/${_id}/gallery`}>Gallery</Link></li>
        <li className='lg:pl-10 text-left'><Link to={`/recommendedCheckoutPage/${_id}/reviews`}>Reviews</Link></li>

    </React.Fragment>

    return (
        <div className="navbar bg-base-100 px-0">
            <div className="flex-none">
                <ul className="lg:menu-horizontal menu-virtical">
                    {aboutMenuItems}
                </ul>
            </div>
        </div>
    );
};

export default AboutNavigation;