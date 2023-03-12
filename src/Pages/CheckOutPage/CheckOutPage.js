import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import BookingTourForm from '../../Component/BookingTourForm/BookingTourForm';
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

            <div className='grid lg:grid-cols-3 mb:grid-cols-2 grid-cols-1 gap-5 px-[7%]'>
                <div className='lg:col-span-2'>
                    <Navigation></Navigation>
                    <hr />
                    <Outlet></Outlet>
                </div>

                <div className='lg:col-span-1 pb-5'>
                    <div>
                        <BookingTourForm></BookingTourForm>
                    </div>
                    <div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default CheckOutPage;