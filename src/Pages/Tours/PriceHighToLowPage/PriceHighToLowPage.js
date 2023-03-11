import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DisplayPriceHighToLowPage from './DisplayPriceHighToLowPage';
const PriceHighToLowPage = () => {
    const allTours = useLoaderData();
    return (
        <div>
            {
                allTours.map(singleTour=> <DisplayPriceHighToLowPage key={singleTour._id} singleTour={singleTour}></DisplayPriceHighToLowPage>)
            }
        </div>
    );
};

export default PriceHighToLowPage;