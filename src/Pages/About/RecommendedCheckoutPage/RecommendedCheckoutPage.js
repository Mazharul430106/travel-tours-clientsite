import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLoaderData } from 'react-router-dom';
import HeroTitle from '../../../Component/HeroTitle/HeroTitle';
import AboutNavigation from '../AboutNavigation/AboutNavigation';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaSmile, FaTwitter } from 'react-icons/fa';

const RecommendedCheckoutPage = () => {
    const recommendedTour = useLoaderData();
    const { _id, place, cost, desc, detailsHeroImg, subTitle } = recommendedTour;
    const [recommendedData, setRecommendedData] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const onChangeHandler = (value) => {
        setSelectedDate(value);
    }

    useEffect(() => {
        fetch('http://localhost:5000/recommended?title=thailand_sea')
            .then(res => res.json())
            .then(data => setRecommendedData(data))
    }, [])


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
                                            <button className="btn rounded-none border-none bg-cyan-700">Book Now</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className='py-10'>
                        {
                            recommendedData.map(recommended => <Link to={`/recommendedCheckoutPage/6401c65f3a8c840dd07d7664/`}>

                                <div className='relative'>
                                    <img src={recommended.img} alt="" />

                                    <div className='absolute bottom-4 px-8 py-5 '>
                                        <div className='flex items-center text-xl font-semibold gap-1 pb-3'>
                                            <FaSmile className='text-white '></FaSmile>
                                            <span className='text-white'>{recommended.ratting}</span>
                                        </div>
                                        <div className='flex items-center gap-32'>
                                            <span className='text-white text-xl font-semibold'>{recommended.place}</span>
                                            <span className='text-white text-xl font-bold'>{recommended.cost}</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            )
                        }
                    </div>

                    <div>
                        <h1 className='text-2xl font-semibold text-left'>Follow Us</h1>
                        <div className='flex items-center gap-5 py-4'>
                            <FaTwitter className='text-sky-500'></FaTwitter>
                            <h3>@travelTours Hi , can you please submit a ticket at </h3>
                        </div>
                        
                    </div>



                </div>

            </div>






        </section>
    );
};

export default RecommendedCheckoutPage;