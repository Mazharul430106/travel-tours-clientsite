import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DisplayAllTours from './DisplayAllTours';

const Tours = () => {
    const allTours = useLoaderData();
    
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 px-[7%] py-20 pt-10'>
          {
            allTours.map(alltour=> <DisplayAllTours key={alltour._id} allTour={alltour}></DisplayAllTours>)
          }
        </div>
    );
};

export default Tours;