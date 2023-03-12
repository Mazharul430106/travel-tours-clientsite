import React from 'react';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import ContactHeroImg from '../../assets/contacHero.jpg';

const Contact = () => {
    return (
        <div>
            <div>
                <img src={ContactHeroImg} className='w-full' alt=""/>
            </div>
            <div className='flex justify-between py-10 bg-slate-200 lg:text-xl px-[7%]'>
                <h1>Travel Tours / Contact Us</h1>
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

            <div className='grid lg:grid-cols-2 grid-cols-1 gap-5 px-[7%] py-10' >
                <div>
                    <div className='text-left'>
                        <h1 className='text-3xl font-semibold'>Contact Us</h1>
                        <p className='py-5 text-[18px] text-gray-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt molestiae animi quisquam numquam, mollitia distinctio .</p>
                    </div>

                    <div className=''>
                        <form action="">
                            <input type="text" placeholder="Name *" className="input input-bordered rounded-none w-full mb-4 " />
                            <input type="text" placeholder="Email *" className="input input-bordered w-full rounded-none mb-4 " />
                            <input type="password" placeholder="Password *" className="input input-bordered rounded-none w-full mb-4 " />
                            <textarea className="textarea border input-bordered w-full rounded-none" rows='8' placeholder="Message *"></textarea>
                            <div className='text-left mt-4'>
                                <button className="btn rounded-none bg-cyan-600 hover:bg-cyan-500 border-0 px-12">submit</button>
                            </div>
                        </form>
                    </div>

                </div>
                <div className='mt-5'>
                    <iframe className='w-full min-h-[362px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44380.52628555644!2d-74.05245025940084!3d40.69970287794516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1678645435096!5m2!1sen!2sbd" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                    <div className='lg:flex items-center justify-between py-10'>
                        <div className='text-left'>
                            <h1 className='text-2xl font-semibold mb-5'>New York Office</h1>
                            <p className='mt-3 text-gray-400'>198 West 21th Street, New York</p>
                            <p className='mt-3 text-gray-400'>Phone: +88 (0) 214 000 0000 001 </p>
                            <p className='mt-3 text-gray-400'>Email: travelTour123@gmail.com</p>
                        </div>

                        <div className='text-left mt-5 lg:mt-0'>
                            <h1 className='text-2xl font-semibold mb-5'>Paris Office</h1>
                            <p className='mt-3 text-gray-400'>198 West 21th Street, New York</p>
                            <p className='mt-3 text-gray-400'>Phone: +88 (0) 214 000 0000 001 </p>
                            <p className='mt-3 text-gray-400'>Email: travelTour123@gmail.com</p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;