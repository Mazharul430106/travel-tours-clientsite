import React from 'react';
import { FaFacebookF, FaSmile, FaTwitter } from 'react-icons/fa';
import { CiUndo } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { FiUser } from 'react-icons/fi';

const DisplayCheckOutTours = ({ singleTour }) => {
    const { cost, days, years, img, place_title, desc, ratting, _id } = singleTour;

    return (
        <div className='grid lg:grid-cols-3 mb:grid-cols-2 grid-cols-1 gap-2 border border-t-0 border-r-0 border-l-0 mt-4 mb-5  '>
            <div className='col-span-1'>
               <Link to={`/checkoutPage/${_id}`}><img src={img} className='h-full' alt="Image Not Found" /></Link>
            </div>
            <div className='col-span-2 px-3'>
                <h2 className='text-2xl text-left font-semibold pt-4'>{place_title}</h2>
                <div className='flex items-center gap-1 mt-3 text-gray-500'>
                    <FaSmile></FaSmile>
                    <span>{ratting}</span>
                </div>
                <p className='text-left py-5'>{desc.length > 50 ? <>{desc.slice(0, 130) + '....'} <Link className='hover:text-red-400'>read more</Link>  </> : <>{desc}</>}</p>

                <div className='flex items-center gap-10 '>
                    <div className='flex items-center gap-1'>
                        <CiUndo></CiUndo>
                        <span>{days}</span>
                    </div>

                    <div className='flex items-center gap-1'>
                        <FiUser></FiUser>
                        <span>{years}</span>
                    </div>
                </div>
                <div className='py-5'>
                    <hr />
                </div>
                <div className='flex items-center justify-between pb-5'>
                    <div className='flex gap-1 items-end '>
                        <span className='text-cyan-700 font-semibold text-xl'>${cost}</span>
                        <span>per person</span>
                    </div>
                    <div className='flex items-center gap-5'>
                        <FaFacebookF className='text-blue-400'></FaFacebookF>
                        <FaTwitter className='text-sky-500'></FaTwitter>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplayCheckOutTours;