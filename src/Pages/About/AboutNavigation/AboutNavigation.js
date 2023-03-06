import React from 'react';
import { FaEye, FaMap, FaUsers, } from 'react-icons/fa';
import { CiLocationOn } from 'react-icons/ci';
import { GrGallery } from 'react-icons/gr';
import { Link, useLoaderData } from 'react-router-dom';

const AboutNavigation = () => {
    const { _id } = useLoaderData();

    const aboutMenuItems = <React.Fragment className="">
        <div className='flex items-center gap-1'>
            <FaEye className='text-gray-500'></FaEye>
            <li><Link to={`/recommendedCheckoutPage/${_id}/`}>Information</Link></li>
        </div>
        <div className='flex items-center gap-1 lg:pl-10 text-left'>
            <FaMap className='text-gray-500'></FaMap>
            <li className=''><Link to={`/recommendedCheckoutPage/${_id}/tourplan`}>Tour Plan</Link></li>
        </div>
        <div className='flex items-center gap-1 lg:pl-10 text-left'>
            <CiLocationOn className='text-gray-500'></CiLocationOn>
            <li className=''><Link to={`/recommendedCheckoutPage/${_id}/location`}>Location</Link></li>
        </div>
        <div className='flex items-center gap-1 lg:pl-10 text-left'>
            <GrGallery className='text-gray-500'></GrGallery>
            <li className=''><Link to={`/recommendedCheckoutPage/${_id}/gallery`}>Gallery</Link></li>
        </div>
        <div className='flex items-center gap-1 lg:pl-10 text-left'>
            <FaUsers className='text-gray-500'></FaUsers>
            <li className=''><Link to={`/recommendedCheckoutPage/${_id}/reviews`}>Reviews</Link></li>
        </div>

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