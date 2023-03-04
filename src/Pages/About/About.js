import React from 'react';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import AboutImg from '../../assets/aboutUs.jpg';
import RecommendedTours from './RecommendedTours';

const About = () => {
    const recommendedTours = useLoaderData();

    return (
        <section>
            <div className='about-hero'>
                <img src={AboutImg} className='w-full' alt="" />
            </div>
            <div className='flex justify-between py-10 bg-slate-200 lg:text-xl px-[7%]'>
                <h1>Travel Tours / About Us</h1>
                <div className='flex gap-3'>
                    <div className='flex items-center gap-2'>
                        <FaFacebookF className='text-blue-900'></FaFacebookF>
                        <span>Facebook</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaTwitter className='text-sky-500'></FaTwitter>
                        <span>Twitter</span>
                    </div>
                </div>
            </div>
            <div className='grid lg:grid-cols-3 px-[7%] py-20 gap-10'>
                <div className='lg:col-span-2'>
                    <h1 className='text-4xl py-5 font-semibold lg:text-left'>About us</h1>
                    <div>
                        <p className='text-left lg:text-[18px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis eius iusto, quae placeat nemo iste mollitia doloremque autem neque soluta voluptatem vitae! Natus officia sed laboriosam quos rem laborum nobis at voluptas quas modi, cumque quia repellendus tempora pariatur similique ad delectus rerum et quod. Provident, obcaecati. Hic aut iure inventore consequuntur recusandae accusantium laboriosam, doloremque assumenda nostrum, reprehenderit voluptatibus porro, ullam possimus earum molestias.</p> <br />
                        <p className='text-left lg:text-[18px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus ab sequi, blanditiis ea nihil soluta accusantium dolores in saepe perferendis quod dolorum eligendi, quos nam atque mollitia numquam eum, eos non recusandae consequatur. Distinctio fugit sed voluptate porro cupiditate totam.</p> <br />
                        <p className='text-left lg:text-[18px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis eius iusto, quae placeat nemo iste mollitia doloremque autem neque soluta voluptatem vitae! Natus officia sed laboriosam quos rem laborum nobis at voluptas quas modi, cumque quia repellendus tempora pariatur similique ad delectus rerum et quod. Provident, obcaecati. Hic aut iure inventore consequuntur recusandae accusantium laboriosam, doloremque assumenda nostrum, reprehenderit voluptatibus porro, ullam possimus earum molestias.</p>
                    </div>
                </div>
                <div className='lg:col-span-1'>
                    <div>
                        <iframe className='w-full lg:min-h-[300px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.82239749035!2d90.27919580478637!3d23.780887453399934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1677760077319!5m2!1sen!2sbd" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                    <div className='office-details text-left leading-8'>
                        <h1 className='text-3xl font-semibold text-left py-3'>Paris Office</h1>
                        <div className='text-[18px]'>
                            <p>Uttara Sector-7 Road-12</p>
                            <p>Phone : +880 1766 - 430106</p>
                            <p>Fax : +88 2784 000 25463</p>
                            <p>Email: travelTours123@gmail.com</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className='px-[7%]'>
                <h1 className='text-4xl font-semibold pb-10 lg:text-left'>Recommended</h1>
                <hr className='pb-10'/>

                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 pb-16'>
                    {
                        recommendedTours.map(recommendedTour => <RecommendedTours
                            key={recommendedTour._id}
                            recommendedTour={recommendedTour}
                        ></RecommendedTours>)
                    }
                </div>

            </div>

        </section>
    );
};

export default About;