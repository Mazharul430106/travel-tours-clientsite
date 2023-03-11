import React, { useEffect, useState } from 'react';
import TourHeroImg from '../../../assets/allTour-hero.jpg';
import { BsArrowDownUp } from 'react-icons/bs';
import { HiOutlineViewGrid } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import DisplayCheckOutTours from '../CheckOutTours/DisplayCheckOutTours';

const StandardTours = () => {
    const [allTours, setAllTours] = useState([]);
    const [isAsc, setIsAsc] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:5000/alltours?order=${isAsc ? 'asc' : 'dsc'}`)
            .then(res => res.json())
            .then(data => setAllTours(data))
    }, [isAsc])

    return (
        <div>
            <div>
                <img src={TourHeroImg} className='w-full' alt="" />
            </div>
            <div className='grid lg:grid-cols-3 mb:grid-cols-2 grid-cols-1 gap-5 px-[7%]'>
                <div className='lg:col-span-2'>
                    <div className='flex items-center gap-5 py-5'>
                        <div className='flex items-center gap-1'>
                            <BsArrowDownUp></BsArrowDownUp>
                            <button onClick={() => setIsAsc(!isAsc)}>{isAsc ? 'PriceLowToHigh' : 'PriceHighToLow'}</button>
                        </div>
                        <Link onClick=''><HiOutlineViewGrid></HiOutlineViewGrid></Link>
                    </div>
                    <div className='my-1'>
                        <hr className='border' />
                    </div>
                    <div>
                        {
                            allTours.map(singleTour => <DisplayCheckOutTours key={singleTour._id} singleTour={singleTour} ></DisplayCheckOutTours>)
                        }
                    </div>

                </div>
                <div className='lg:col-span-1 bg-fuchsia-600'>
                    <h1>One</h1>
                </div>
            </div>
        </div>
    );
};

export default StandardTours;