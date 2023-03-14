import React, { useEffect, useState } from 'react';

const Shop = () => {

    const [photos, setPhotos] = useState([]);
    console.log(photos)
    useEffect(() => {
        fetch('http://localhost:5000/galleryImages')
            .then(res => res.json())
            .then(data => setPhotos(data))
    }, [])



    return (
        <div>
            {
                photos.map(photo => <div>

                    {/* <img src={photo.tourGalleryPhotos.map(img=> console.log(img))} alt="" /> */}
                    <div className='grid lg:grid-cols-3 mb:grid-cols-2 grid-cols-1 gap-5'>
                        {
                            photo.tourGalleryPhotos.map(image => <img src={image} className='w-full h-full' alt="" />)
                        }
                    </div>

                </div>)
            }
        </div>
    );
};

export default Shop;