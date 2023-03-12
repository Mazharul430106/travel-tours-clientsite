import React from 'react';
import { FaSmile } from 'react-icons/fa';
import { CiUndo } from 'react-icons/ci';
import { FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';


const DisplayBoxesTours = ({ singleTour }) => {
    const { cost, days, years, img, place_title, desc, ratting, _id } = singleTour;
    return (
        <div className="card card-compact w-full rounded bg-base-100 shadow-xl">
            <Link to={`/checkoutPage/${_id}`}><img src={img} alt="Shoes" /></Link>
            <div className="card-body">
                <div className='flex items-center justify-between'>
                    <h2 className="card-title ">{place_title}</h2>
                    <h2 className='font-semibold text-xl text-cyan-600'>${cost}</h2>
                </div>
                <div className='flex items-center gap-2 text-[16px] text-gray-500'>
                    <FaSmile></FaSmile>
                    <span>{ratting}</span>
                </div>
                <p className='text-left text-[16px] text-gray-500 py-3 leading-6'>
                    {desc.length > 50 ? <>{desc.slice(0, 65) + '....'} <Link to='' className='hover:text-red-400'>read more</Link> </> : <>{desc}</>}
                </p>

                <hr className='' />

                <div className='flex items-center gap-10 text-xl py-2 text-gray-600'>
                    <div className='flex items-center gap-2'>
                        <CiUndo></CiUndo>
                        <span>{days}</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <FiUser></FiUser>
                        <span>{years}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplayBoxesTours;