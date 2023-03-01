import React from 'react';
import ImgOne from '../../assets/img1.jpg';
import ImgTwo from '../../assets/img2.jpg';
import ImgThree from '../../assets/img3.jpg';
import ImgFour from '../../assets/img4.jpg';
import ImgFive from '../../assets/img5.jpg';
import Slides from './Slides';

const Slider = () => {
    const sliderItems = [
        {
            image: ImgOne,
            id: 1,
            next: 2,
            prev: 5
        },
        {
            image: ImgTwo,
            id: 2,
            next: 3,
            prev: 1
        },
        
        {
            image: ImgThree,
            id: 3,
            next: 4,
            prev: 2
        },
        
        {
            image: ImgFour,
            id: 4,
            next: 5,
            prev: 3
        },
        
        {
            image: ImgFive,
            id: 5,
            next: 1,
            prev: 4
        },
        
    ]

    return (
        <div className='carousel'>
            {
                sliderItems.map(sliderItem=> <Slides key={sliderItem.id} sliderItem={sliderItem}></Slides>)
            }
        </div>
    );
};

export default Slider;