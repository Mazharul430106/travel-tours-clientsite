import React from 'react';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';

const HeroTitle = ({place_title}) => {
    return (
        <div className='flex justify-between gap-2 px-[7%] lg:text-xl py-10 bg-slate-200'>
            <h3 className='text-xl'>Travel Tours / {place_title}</h3>

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
    );
};

export default HeroTitle;