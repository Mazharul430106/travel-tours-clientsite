import React from 'react';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';


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

            <div className='flex justify-between gap-2 px-[7%] lg:text-xl py-10 bg-slate-200'>
                <h3 className='text-xl'>Travel Tours / {place}</h3>

                <div className='flex gap-3'>
                    <div className='flex items-center gap-2'>
                        <FaFacebookF className='text-blue-900'></FaFacebookF> 
                        <span>Facebook</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaTwitter className='text-sky-500'></FaTwitter>
                        <span>Twitter</span>
                    </div>
                </div>
            </div>


        </section>
    );
};

export default RecommendedCheckoutPage;