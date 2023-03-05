import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AboutInformation = () => {
    const recommendedTour = useLoaderData();
    const { place, cost, desc, detailsHeroImg, subTitle } = recommendedTour;

  
    return (
        <div>
            <div className='flex items-center gap-2 py-5'>
                <h1 className=' font-semibold text-2xl'>{place}</h1>
                <div className='flex items-end gap-1'>
                    <h1 className='text-xl font-semibold text-cyan-600'>{cost} / </h1>
                    <span className=''>Per Person</span>
                </div>
            </div>
            <div>
                <p className='text-left'>{desc}</p>
            </div>
            <div>

            </div>
        </div>

    );
};

export default AboutInformation;