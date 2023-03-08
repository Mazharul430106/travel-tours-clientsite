import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DisplayAllPrice from '../PriceAllPage/DisplayAllPrice';

const PriceHighToLowPage = () => {
    const allTours = useLoaderData();
    return (
        <div>
           {
                allTours.map(tour=> <DisplayAllPrice key={tour._id} tour={tour}></DisplayAllPrice>)
            }
        </div>
    );
};

export default PriceHighToLowPage;