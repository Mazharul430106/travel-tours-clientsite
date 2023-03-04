import React from 'react';
import { Outlet } from 'react-router-dom';
import HeroTitle from '../Component/HeroTitle/HeroTitle';
import Footer from '../Pages/Shared/Footer';
import Header from '../Pages/Shared/Header';

const AboutLayout = () => {
    return (
        <div>
            <Header></Header>
            <HeroTitle></HeroTitle>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default AboutLayout;