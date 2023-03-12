import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLoaderData } from 'react-router-dom';
import HeroTitle from '../../../Component/HeroTitle/HeroTitle';
import AboutNavigation from '../AboutNavigation/AboutNavigation';
import "react-datepicker/dist/react-datepicker.css";
import { FaSmile, FaTwitter } from 'react-icons/fa';
import BookingTourForm from '../../../Component/BookingTourForm/BookingTourForm';

const RecommendedCheckoutPage = () => {
    const recommendedTour = useLoaderData();
    let { place_title, heroImg, subTitle } = recommendedTour;
    const [recommendedData, setRecommendedData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/recommended?title=thailand_sea')
            .then(res => res.json())
            .then(data => setRecommendedData(data))
    }, [])


    return (
        <section>
            <div className='details-hero'>
                <img src={heroImg} className="details-hero-img w-full" alt="" />
                <div className='details-hero-text'>
                    <div>
                        <h1 className='text-white lg:text-6xl text-4xl font-semibold pb-5'>{place_title}</h1>
                        <h2 className='text-white lg:text-2xl uppercase font-semibold'>{subTitle}</h2>
                    </div>
                </div>
            </div>

            <HeroTitle place_title={place_title}></HeroTitle>
            <div className='px-[7%] py-16 grid lg:grid-cols-3 mb:grid-cols-2 grid-cols-1 gap-10'>
                <div className='lg:col-span-2'>
                    <AboutNavigation></AboutNavigation>
                    <hr className='border' />
                    <Outlet></Outlet>
                </div>
                <div className='lg:col-span-1'>

                    <BookingTourForm></BookingTourForm>

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