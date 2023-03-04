import React from 'react';
import { Outlet } from 'react-router-dom';

const AboutLayout = () => {
    return (
        <div>
           
            <Outlet></Outlet>
        </div>
    );
};

export default AboutLayout;