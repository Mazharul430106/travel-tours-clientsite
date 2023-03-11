import React from 'react';

const Newsletter = () => {
    return (
        <div className="hero bg-base-100">
            <div className="hero-content w-full flex-col p-0 lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <div className="card-body bg-black ">
                        <h1 className='text-3xl text-left font-semibold text-white'>Newsletter</h1>
                        <p className='text-left text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non cum.</p>
                        <form action="">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email *" className="input input-bordered rounded-none" />
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn bg-cyan-600 hover:bg-cyan-700 rounded-none">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;