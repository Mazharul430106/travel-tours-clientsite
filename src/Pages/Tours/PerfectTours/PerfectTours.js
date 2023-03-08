import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DisplayPerfectTours from './DisplayPerfectTours';

const PerfectTours = () => {
    const [perfectTours, setPerfectTours] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/perfectTours?title=perfect_tour')
            .then(res => res.json())
            .then(data => setPerfectTours(data))
    }, [])
    return (
        <div className=''>
            <div className='py-16'>
                <h3 className='text-4xl font-semibold text-gray-700'>Search Your Perfect Tour</h3>
                <p className=' text-gray-500 pt-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum illo praesentium vel sit, voluptate sunt temporibus suscipit  <br /> doloremque quibusdam, nobis rem est. Odit rerum modi vero quia dolor recusandae ex!</p>
            </div>
            <div className='grid lg:grid-cols-3 mb:grid-cols-2 grid-cols-1 gap-5 px-[7%] pb-16'>
                {
                    perfectTours.map(perfectTour => <DisplayPerfectTours key={perfectTour._id} perfectTour={perfectTour}></DisplayPerfectTours>)
                }
            </div>
            <div className='py-10'>
                <Link to='/checkOutAllTours'><button className='btn px-10 border-none rounded bg-cyan-700'>view all tours</button></Link>
            </div>
        </div>
    );
};

export default PerfectTours;