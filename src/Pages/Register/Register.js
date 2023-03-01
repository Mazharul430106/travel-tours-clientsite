import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Register = () => {

    const { register, handleSubmit } = useForm();

    const {user, createUser} = useContext(AuthContext);
    console.log(user)
    const registerHandler = (data)=>{
        createUser(data.email, data.password)
        .then(result=> {
            const user = result.user;
            console.log(user);
            toast.success('User Created Successfully')
        })
        .catch(err=> {
            console.log(err);
        })
    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content lg:w-[550px] w-full flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className='text-2xl font-bold pt-5 uppercase'>Register Now</h1>
                        <form onSubmit={handleSubmit(registerHandler)} >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' {...register('name', {required: true})}  placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="url" name='url' {...register('url')}  placeholder="photo_url" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' {...register('email',{required: true})}  placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' {...register('password',{required: true})} placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <Link className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn border-none bg-cyan-700 ">Register</button>
                            </div>
                            <div className="flex p-[1px] mt-2 justify-between">
                                <span>All ready have an account</span>
                                <span className='hover:text-red-400'> <Link to='/login'>Please login</Link></span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;