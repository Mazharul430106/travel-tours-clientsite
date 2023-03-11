import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import HeroTitle from '../../Component/HeroTitle/HeroTitle';
import Navigation from '../../Component/Navigation/Navigation';

const CheckOutPage = () => {
    const perfectTours = useLoaderData();
    const { heroImg, place_title } = perfectTours;
    return (
        <div>
            <div>
                <img src={heroImg} className='w-full' alt="" />
            </div>
            <HeroTitle place_title={place_title}></HeroTitle>
            
            <div className='px-[7%]'>
                <Navigation></Navigation>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default CheckOutPage;