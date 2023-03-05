import React, { useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import HeroTitle from '../../../Component/HeroTitle/HeroTitle';
import AboutNavigation from '../AboutNavigation/AboutNavigation';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const RecommendedCheckoutPage = () => {
    const recommendedTour = useLoaderData();
    const { place, cost, desc, detailsHeroImg, subTitle } = recommendedTour;

    const [selectedDate, setSelectedDate] = useState(new Date());

    const onChangeHandler =(value)=>{
        setSelectedDate(value);
    }

    return (
        <section>
            <div className='details-hero'>
                <img src={detailsHeroImg} className="details-hero-img w-full" alt="" />
                <div className='details-hero-text'>
                    <div>
                        <h1 className='text-white lg:text-6xl text-4xl font-semibold pb-5'>{place}</h1>
                        <h2 className='text-white lg:text-2xl uppercase font-semibold'>{subTitle}</h2>
                    </div>
                </div>
            </div>

            <HeroTitle place={place}></HeroTitle>
            <div className='px-[7%] py-16 grid lg:grid-cols-3 mb:grid-cols-2 grid-cols-1 gap-10'>
                <div className='lg:col-span-2'>
                    <AboutNavigation></AboutNavigation>
                    <hr className='border' />
                    <Outlet></Outlet>
                </div>
                <div className='lg:col-span-1'>
                    <div className="hero w-full lg:pt-16">
                        <div className="hero-content p-0 w-full flex-col lg:flex-row-reverse">
                            <div className="card rounded bg-slate-100 flex-shrink-0 w-full rounded-none bg-base-100">
                                <form action="">
                                    <div className="card-body">
                                        <h1 className='text-3xl font-semibold uppercase'>Book This Tour</h1>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Email</span>
                                            </label>
                                            <input type="text" placeholder="name *" className="input input-bordered rounded-none" />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Email</span>
                                            </label>
                                            <input type="text" placeholder="email *" className="input input-bordered rounded-none" />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Phone</span>
                                            </label>
                                            <input type="number" placeholder="number *" className="input input-bordered rounded-none" />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Date</span>
                                            </label>
                                            <DatePicker className='w-full p-3 border text-gray-400' selected={selectedDate} onChange={onChangeHandler} dateFormat={"dd MMM yyyy"}></DatePicker>
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Tickets</span>
                                            </label>
                                            <input type="number" placeholder="number of tickets *" className="input input-bordered rounded-none" />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Message</span>
                                            </label>
                                            <textarea className="textarea textarea-bordered rounded-none h-24" placeholder="message *"></textarea>
                                        </div>

                                        <div className="form-control mt-6">
                                            <button className="btn btn-primary">Book Now</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

           




        </section>
    );
};

export default RecommendedCheckoutPage;