import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DisplayDestinations from './DisplayDestinations';

const Destinations = () => {
    const allTours = useLoaderData();

    return (
        <div className=''>
            <div>
                <h1 className='text-4xl font font-semibold my-10'>Find your Best Destination</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, facere. Tenetur, mollitia voluptate. <br /> Corrupti optio quos iste deleniti dolor fugit? Doloribus enim explicabo vero inventore.</p>
            </div>
            <div className='grid lg:grid-cols-3 mb:grid-cols-2 grid-cols-1 gap-5 py-10 px-[7%]'>
                {
                    allTours.map(singleTour => <DisplayDestinations key={singleTour._id} singleTour={singleTour}></DisplayDestinations>)
                }
            </div>
        </div>
    );
};

export default Destinations;