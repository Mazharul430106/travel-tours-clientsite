import React from 'react';
import { FaSmile } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './RecommendedTours.css';

const RecommendedTours = ({ recommendedTour }) => {
    const { _id, img, place, ratting, cost } = recommendedTour;
    // console.log(recommendedTour);
    return (
        <Link to={`/recommendedCheckoutPage/${_id}`}>
            <div className="card overlay card-compact w-full relative rounded-none bg-base-100 shadow-xl  ">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body w-full absolute bottom-0">
                    <div className='flex items-center gap-2 text-xl text-white'>
                        <FaSmile className=' '></FaSmile>
                        <span className=''>{ratting}</span>
                    </div>
                    <div className='flex items-center justify-between text-white text-xl font-semibold'>
                        <span className="card-title">{place}</span>
                        <span>{cost}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default RecommendedTours;