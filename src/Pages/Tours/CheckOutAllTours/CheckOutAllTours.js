import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import DisplayCheckOutAllTours from './DisplayCheckOutAllTours';

import allToursHero from '../../../assets/allTour-hero.jpg';
import CheckOutTourNavigation from '../CheckOutTourNavigation/CheckOutTourNavigation';

const CheckOutAllTours = () => {
    const allTours = useLoaderData();
    // console.log(allTours);
    return (
        <div>
            <div>
                <img src={allToursHero} className="w-full" alt="" />
            </div>
            <div className='grid lg:grid-cols-3 mb:grid-cols-2 grid-cols-1 gap-5 py-5 pt-16 px-[7%]'>
                <div className='lg:col-span-2 pb-5'>
                    <CheckOutTourNavigation></CheckOutTourNavigation>
                    <div className='pt-5 pb-10'>
                        <hr className='border' />
                    </div>
                    <Outlet></Outlet>
                </div>
                <div className='lg:col-span-1'>
                    aside
                </div>
            </div>
            {
                allTours.map(tour => <DisplayCheckOutAllTours key={tour._id} tour={tour}></DisplayCheckOutAllTours>)
            }
        </div>
    );
};

export default CheckOutAllTours;