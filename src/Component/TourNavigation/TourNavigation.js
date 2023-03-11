import React from 'react';
import { Link } from 'react-router-dom';

const TourNavigation = () => {

    const toursMenuItemsLeft = <React.Fragment>
        <li className='pr-5 border lg:border-none m-3 lg:m-0'><Link to='/checkoutTours/priceHighToLow'>Price Hight To Low</Link></li>
        <li className='pr-5 border lg:border-none m-3 lg:m-0'><Link to='/checkoutTours/priceLowToHigh'>Price Low To High</Link></li>
        <li className='pr-5 border lg:border-none m-3 lg:m-0'><Link to='/checkoutTours/allPrice'>A-Z</Link></li>
    </React.Fragment>

    const toursMenuItemsRight = <React.Fragment>
        <li className='pl-5 border lg:border-none m-3 lg:m-0'><Link to=''></Link></li>
        <li className='pl-5 border lg:border-none m-3 lg:m-0'><Link to=''>Item 4</Link></li>
    </React.Fragment>

    return (
        <div>
            {/* <div className='grid lg:grid-cols-3 mb:grid-cols-2 grid-cols-1 py-5'>

                <ul className='lg:col-span-2 lg:flex flex-none'>
                    {toursMenuItemsLeft}
                </ul>
                <ul className='lg:col-span-1 lg:flex justify-end flex-none'>
                    {toursMenuItemsRight}
                </ul>

            </div> */}
            <hr className='' />
        </div>

    );
};

export default TourNavigation;