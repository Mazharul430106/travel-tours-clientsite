import React from 'react';
// import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { Outlet, useLoaderData } from 'react-router-dom';
import HeroTitle from '../../../Component/HeroTitle/HeroTitle';
import AboutNavigation from '../AboutNavigation/AboutNavigation';


const RecommendedCheckoutPage = () => {
    const recommendedTour = useLoaderData();
    const { place, cost, desc, detailsHeroImg, subTitle } = recommendedTour;

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
            <div className='px-[7%]'>
                <AboutNavigation></AboutNavigation>
            </div>
            <Outlet></Outlet>
        </section>
    );
};

export default RecommendedCheckoutPage;