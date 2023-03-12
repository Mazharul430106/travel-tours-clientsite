import React from 'react';
import { Link } from 'react-router-dom';

const DisplayDestinations = ({ singleTour }) => {
    const { img, place_title, _id } = singleTour;
    return (
        <div>
            <Link className='' to={`/checkoutPage/${_id}`}>
                <div className='relative'>
                    <img src={img} className='rounded hover:skew-x-1' alt="" />
                    <div className=' absolute top-[50%] left-[50%] translate-x-[-50%]'>
                        <h2 className='text-2xl font-bold text-white'>{place_title}</h2>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default DisplayDestinations;