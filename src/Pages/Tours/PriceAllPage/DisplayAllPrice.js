import React from 'react';
import { CiUndo } from 'react-icons/ci';
import { FaFacebookF, FaSmile, FaTwitter } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const DisplayAllPrice = ({ tour }) => {
    const { img, cost, days, years, ratting, place_title, desc } = tour;
    return (
        <div className='grid lg:grid-cols-3 mb:grid-cols-2 grid-cols-1 border border-r-0 border-l-0 border-t-0 mb-10'>
            <div className='lg:col-span-1'>
                <img src={img} className='h-full' alt="" />
            </div>
            <div className='lg:col-span-2 px-5'>
                <h1 className='text-left text-2xl font-semibold py-3'>{place_title}</h1>
                <div className='flex items-center gap-1 pt-2'>
                    <FaSmile></FaSmile>
                    <p>{ratting}</p>
                </div>
                <p className='text-left py-5'>{desc.length > 50 ? <>{desc.slice(0, 130) + '...'} <Link to=''>read more</Link> </> : <>{desc}</>}</p>

                <div className='flex items-center justify-between'>

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
                    <div className='flex items-end gap-2'>
                        <h3 className='text-xl text-cyan-600 font-semibold'>{cost}</h3>
                        <span>per person</span>
                    </div>
                    <div className='flex items-center gap-5'>
                        <FaFacebookF className='text-sky-900'></FaFacebookF>
                        <FaTwitter className='text-sky-600'></FaTwitter>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DisplayAllPrice;