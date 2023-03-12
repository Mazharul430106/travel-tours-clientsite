import React from 'react';
import { FaSmile } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const DisplayToursGallery = ({ singleTour }) => {
    const { cost, days, years, img, place_title, desc, ratting, _id } = singleTour;
    return (
        <div className="w-ful lg:min-h-[230px] relative rounded bg-base-100 shadow-xl">
            <Link to={`/checkoutPage/${_id}`}><img src={img} className="lg:h-full w-full" alt="Image Not Found" /></Link>
            <div className=" absolute bottom-4 text-white px-5 ">
                <div className='flex items-center gap-2 text-[16px]'>
                    <FaSmile></FaSmile>
                    <span>{ratting}</span>
                </div>
                <h2 className="card-title">{place_title}</h2>
            </div>
        </div>
    );
};

export default DisplayToursGallery;