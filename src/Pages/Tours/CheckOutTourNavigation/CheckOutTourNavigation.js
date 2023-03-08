import React from 'react';
import { Link } from 'react-router-dom';

const CheckOutTourNavigation = () => {

    const tourMenuItemsLeft = <React.Fragment>
        <li className='list-none '><Link to='/checkOutAllTours/'>Price Low To High</Link></li>
        <li className='list-none px-5'><Link to='/checkOutAllTours/priceHighToLow'>Price High To Low</Link></li>
        <li className='list-none px-5'><Link to='/checkOutAllTours/allPricePage'>A-Z</Link></li>
    </React.Fragment>

    const tourMenuItemsRight = <React.Fragment>
        <li className='list-none px-5'><Link to=''>Item 3</Link></li>
        <li className='list-none px-5'><Link to=''>Item 4</Link></li>
        <li className='list-none '><Link to=''>Item 5</Link></li>

    </React.Fragment>

    return (
        <div className="lg:flex items-center justify-between">
            <div className="lg:flex">
                {tourMenuItemsLeft}
            </div>
            <div className="lg:flex">
                {tourMenuItemsRight}
            </div>

        </div>
    );
};

export default CheckOutTourNavigation;