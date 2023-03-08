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
            <div className='grid lg:grid-cols-3 mb:grid-cols-2 grid-cols-1 lg:gap-20 gap-5 py-5 pt-16 px-[7%]'>
                <div className='lg:col-span-2 pb-5'>
                    <CheckOutTourNavigation></CheckOutTourNavigation>
                    <div className='pt-5 pb-10'>
                        <hr className='border' />
                    </div>
                    <Outlet></Outlet>
                </div>
                <div className='lg:col-span-1'>
                    <div className="hero bg-base-100">
                        <div className="hero-content w-full flex-col p-0 lg:flex-row-reverse">
                            <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                                <div className="card-body bg-black ">
                                    <h1 className='text-3xl text-left font-semibold text-white'>Newsletter</h1>
                                    <p className='text-left text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non cum.</p>
                                    <form action="">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Email</span>
                                            </label>
                                            <input type="email" placeholder="Email *" className="input input-bordered rounded-none" />
                                        </div>

                                        <div className="form-control mt-6">
                                            <button className="btn bg-cyan-600 hover:bg-cyan-700 rounded-none">Subscribe</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
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