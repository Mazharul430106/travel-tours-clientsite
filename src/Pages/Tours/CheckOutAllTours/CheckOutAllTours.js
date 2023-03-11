import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import DisplayCheckOutAllTours from './DisplayCheckOutAllTours';

import allToursHero from '../../../assets/allTour-hero.jpg';
import CheckOutTourNavigation from '../CheckOutTourNavigation/CheckOutTourNavigation';
import Newsletter from '../../../Component/Newsletter/Newsletter';

const CheckOutAllTours = () => {
    const allTours = useLoaderData();
    // console.log(allTours);
    return (
        <div>
            <div>
                <img src={allToursHero} className="w-full" alt="" />
            </div>
            <div className='grid lg:grid-cols-3 mb:grid-cols-2 grid-cols-1 lg:gap-20 gap-5 py-5 pt-16 px-[7%]'>
                <div className='lg:col-span-2 pb-5'>
                    <CheckOutTourNavigation></CheckOutTourNavigation>
                    <div className='pt-5 pb-10'>
                        <hr className='border' />
                    </div>
                    <Outlet></Outlet>
                </div>
                <div className='lg:col-span-1'>
                    
                   <Newsletter></Newsletter>

                    <div className='border h-24 mt-5'>
                        <h2>Travel Tips</h2>
                        <p>tour tips</p>
                    </div>
                    <div className='border h-24 mt-5'>
                        <h2>Flickr</h2>
                        <p>images gallery here</p>
                    </div>
                    <div className='border h-24 mt-5'>
                        <h2>Contact Us</h2>
                        <p>social links here</p>
                    </div>
                    <div className='border h-24 mt-5'>
                        <h4>some recommend tours here</h4>
                    </div>

                </div>
            </div>
            {
                allTours.map(tour => <DisplayCheckOutAllTours key={tour._id} tour={tour}></DisplayCheckOutAllTours>)
            }
        </div>
    );
};

export default CheckOutAllTours;