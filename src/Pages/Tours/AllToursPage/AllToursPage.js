import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DisplayAllToursPage from './DisplayAllToursPage';

const AllToursPage = () => {
    const alltours = useLoaderData();
    console.log(alltours);
    return (
        <div className='mb-20'>
            {
                alltours.map(singleTour=> <DisplayAllToursPage key={singleTour._id} singleTour={singleTour}></DisplayAllToursPage>)
            }
        </div>
    );
};

export default AllToursPage;