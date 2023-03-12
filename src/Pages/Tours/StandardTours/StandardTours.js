import React, { useEffect, useState } from 'react';
import TourHeroImg from '../../../assets/allTour-hero.jpg';
import { BsBoxArrowDown, BsBoxArrowUp } from 'react-icons/bs';
import { HiOutlineViewGrid } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import DisplayCheckOutTours from '../CheckOutTours/DisplayCheckOutTours';
import { FaSlidersH, FaTh } from 'react-icons/fa';

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
                    <div className='flex items-center justify-between gap-5 py-5'>
                        <div className='flex items-center gap-3'>
                            <div className='flex items-center gap-1'>
                                {/* <button onClick={() => setIsAsc(!isAsc)}>{isAsc ? 'PriceLowToHigh' : 'PriceHighToLow'}</button> */}
                                <BsBoxArrowUp></BsBoxArrowUp>
                                <button onClick={() => setIsAsc(true)}>PriceLowToHigh</button>
                            </div>
                            <div className='flex items-center gap-1'>
                                <BsBoxArrowDown></BsBoxArrowDown>
                                <button onClick={() => setIsAsc(false)}>PriceHighToLow </button>
                            </div>
                        </div>
                        <div className='flex items-center gap-3'>
                            <Link to='/standardTours' className='border w-8 h-8 flex justify-center items-center bg-cyan-100 hover:bg-cyan-700 hover:text-white'><FaSlidersH></FaSlidersH></Link>
                            <Link to='/boxesTours' className='border w-8 h-8 flex justify-center items-center  bg-cyan-100 hover:bg-cyan-700 hover:text-white '><HiOutlineViewGrid></HiOutlineViewGrid></Link>
                            <Link to='/toursGallery' className='border w-8 h-8 flex justify-center items-center bg-cyan-100 hover:bg-cyan-700 hover:text-white'><FaTh></FaTh></Link>
                        </div>
                    </div>
                    <div className='my-1'>
                        <hr className='border' />
                    </div>
                    <div className='pt-1'>
                        {
                            allTours.map(singleTour => <DisplayCheckOutTours key={singleTour._id} singleTour={singleTour} ></DisplayCheckOutTours>)
                        }
                    </div>

                </div>
                <div className='lg:col-span-1'>
                    <h1>One</h1>
                </div>
            </div>
        </div>
    );
};

export default StandardTours;