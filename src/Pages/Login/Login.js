import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content lg:w-[550px] w-full flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className='text-2xl font-bold pt-5 uppercase'>Login Now</h1>
                        <form action="">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <Link className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn border-none bg-cyan-700 ">Login</button>
                            </div>
                        </form>
                        <div className="flex flex-col w-full border-opacity-50">
                            <div className="divider">OR</div>
                        </div>
                        <div className="form-control">
                            <button className="btn border-none bg-cyan-700 ">Login With Google</button>
                        </div>
                        <div className="flex p-[1px] justify-between">
                            <span>Create a new account</span>
                            <span className='hover:text-red-400'> <Link to='/register'>Please register</Link></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;