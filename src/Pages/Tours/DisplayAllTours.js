import React from 'react';

const DisplayAllTours = ({ allTour }) => {
    const { cost, days, desc, img, place_title, ratting, title, years, _id } = allTour;
    return (
        <div className="card card-compact w-full rounded bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{place_title}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default DisplayAllTours;