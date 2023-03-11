import React from 'react';
import { Outlet } from 'react-router-dom';
import TourHeroImg from '../../../assets/allTour-hero.jpg';
import TourNavigation from '../../../Component/TourNavigation/TourNavigation';
const CheckOutTours = () => {
    return (
        <div>
            <div>
                <img src={TourHeroImg} className='w-full' alt="" />
            </div>
            <div className='grid lg:grid-cols-3 mb:grid-cols-2 grid-cols-1 gap-5 px-[7%]'>
                <div className='lg:col-span-2 '>
                    <TourNavigation></TourNavigation>
                    <Outlet></Outlet>
                </div>
                <div className='lg:col-span-1 bg-fuchsia-600'>
                    <h1>One</h1>
                </div>
            </div>
        </div>
    );
};

export default CheckOutTours;