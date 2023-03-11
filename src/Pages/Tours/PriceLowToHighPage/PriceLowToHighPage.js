import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DisplayPriceLowToHighPage from './DisplayPriceLowToHighPage';

const PriceLowToHighPage = () => {
    const allTours = useLoaderData();
    return (
        <div>
            {
                allTours.map(singleTour=> <DisplayPriceLowToHighPage key={singleTour._id} singleTour={singleTour}></DisplayPriceLowToHighPage>)
            }
        </div>
    );
};

export default PriceLowToHighPage;