import React from 'react';

const AboutReviews = () => {
    return (
        <section>
            <div>
                <h1 className='text-3xl text-gray-700 font-semibold text-left pt-5'>Tour Review Scores</h1>
                <p className='text-left py-2 text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias incidunt ducimus eos nisi assumenda, hic iste labore explicabo, dignissimos expedita facere culpa at cupiditate tempora veritatis quisquam possimus dolor voluptatum.</p>
            </div>
            <div>
                <h2 className='text-3xl text-left py-10 font-semibold text-gray-700'>Write a Review</h2>
                <form action="">
                    <div className='lg:flex flex-none items-center justify-between lg:gap-5'>
                        <input type="text" placeholder="name *" className="input input-bordered mb-6 lg:mb-0 w-full" />
                        <input type="email" placeholder="email *" className="input input-bordered w-full" />
                    </div>
                    <br />
                    <div>
                        <textarea className="textarea textarea-bordered rounded w-full" placeholder="message *" cols="30" rows="8"></textarea>
                    </div>
                    <div className='flex items-center gap-2 pt-4'>
                        <input type="checkbox" className='text-left' name="checkbox" id="checkbox"/>
                        <p>please fillup the checkbox</p>
                    </div>
                    <div className='text-left pt-4'>
                        <button className='btn w-36 rounded-none bg-cyan-700 border-none text-[16px]'>Submit</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default AboutReviews;