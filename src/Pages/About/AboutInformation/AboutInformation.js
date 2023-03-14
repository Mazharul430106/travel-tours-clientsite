import React from 'react';
import { CiUndo } from 'react-icons/ci';
import { GiCheckMark } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx';
import { FiUser } from 'react-icons/fi';
import { useLoaderData } from 'react-router-dom';
import { BsPlusCircleDotted } from 'react-icons/bs';

const AboutInformation = () => {
    const singleTour = useLoaderData();
    console.log(singleTour)
    const { place_title, cost, desc, days, years, tourGalleryPhotos } = singleTour;

    return (
        <div className=''>
            <div className='flex items-center gap-2 py-5'>
                <h1 className=' font-semibold text-2xl'>{place_title}</h1>
                <div className='flex items-end gap-1'>
                    <h1 className='text-xl font-semibold text-cyan-600'>{cost} / </h1>
                    <span className=''>Per Person</span>
                </div>
            </div>
            <div>
                <p className='text-left'>{desc}</p>
            </div>
            <div className='flex items-center gap-20 py-10'>
                <div className='flex items-center gap-1'>
                    <CiUndo></CiUndo>
                    <span>{days}</span>
                </div>
                <div className='flex items-center gap-1'>
                    <FiUser></FiUser>
                    <span>{years}</span>
                </div>
            </div>

            <div className='pb-[40px]'>
                <div className='grid grid-cols-2  text-left border px-3 py-5 border-x-0'>
                    <p className='font-semibold'>Departure</p>
                    <p>Main City Square, Old Town</p>
                </div>
                <div className='grid grid-cols-2  text-left border border-t-0 px-3 py-5 border-x-0'>
                    <p className='font-semibold'>Departure Time</p>
                    <p>Please arrive by 8:15 AM for a prompt departure at 8:30 AM.</p>
                </div>
                <div className='grid grid-cols-2  text-left border border-t-0 px-3 py-5 border-x-0'>
                    <p className='font-semibold'>Return Time</p>
                    <p>Approximately 8:30 PM.</p>
                </div>
                <div className='grid grid-cols-2  text-left border border-t-0 px-3 py-5 border-x-0'>
                    <p className='font-semibold'>DressUp</p>
                    <p>Casual. Comfortable athletic clothing, hiking shoes, hat, light jacket.</p>
                </div>
                <div className='grid grid-cols-2  text-left border border-t-0 px-3 py-5 border-x-0'>
                    <div>
                        <p className='font-semibold'>Include</p>
                    </div>
                    <div className=''>
                        <div className='flex items-center justify-between pb-3'>
                            <div className='flex items-center gap-1'>
                                <GiCheckMark className='text-cyan-700'></GiCheckMark>
                                <p>5 Star Accommodation</p>
                            </div>
                            <div className='flex items-center gap-1'>
                                <GiCheckMark className='text-cyan-700'></GiCheckMark>
                                <p>Personal Guide</p>
                            </div>
                        </div>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-1'>
                                <GiCheckMark className='text-cyan-700'></GiCheckMark>
                                <p>Airport Transfers</p>
                            </div>
                            <div className='flex items-center gap-1'>
                                <GiCheckMark className='text-cyan-700'></GiCheckMark>
                                <p>Breakfast</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-2 text-left border border-t-0 px-3 mb-10 py-5 border-x-0'>
                    <div>
                        <p className='font-semibold'>Not Include</p>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-1'>
                            <RxCross2 className='text-red-500'></RxCross2>
                            <p>Departure Taxes</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <RxCross2 className='text-red-500'></RxCross2>
                            <p> Entry Fees</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className=''>
                <div className='text-left'>
                    <h3 className='text-3xl font-semibold'>Tours Gallery</h3>
                    <p className='text-[16px] text-gray-400 py-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab beatae, autem cumque minima incidunt libero eius illo quasi officia maxime hic laboriosam saepe rerum obcaecati unde aliquid rem! Porro, sunt.</p>
                </div>
                <div className='grid lg:grid-cols-3 mb:grid-cols-2 grid-cols-1 gap-5 pb-10'>
                    {
                        tourGalleryPhotos.map(photo=> <div className=''>

                            <img src={photo} className='w-full h-full border' alt="galleryImg Not Found" />

                            {/* <div className=' absolute top-1 left-0 bg-red-700 '>
                                <BsPlusCircleDotted className='text-black'></BsPlusCircleDotted>
                            </div> */}

                        </div>)
                    }
                </div>
            </div>

        </div>

    );
};

export default AboutInformation;