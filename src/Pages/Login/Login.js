
import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Login = () => {
    const googleProvider = new GoogleAuthProvider();
    const { register, handleSubmit } = useForm();
    const { loginUser, providerLogin } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathName || "/";
    
    const handleLogin = (data) => {
        loginUser(data.email, data.password)
        .then(result=> {
            const user = result.user;
            console.log(user);
            toast.success('User Login Successfully');
            navigate(from, {replace: true})
        })
        .catch(error=> {
            console.log(error);
        })
    }

    const googleLogin = ()=>{
        providerLogin(googleProvider)
        .then(result=> {
            const user = result.user;
            console.log(user)
        })
        .catch(error=> console.log(error))
    }



    return (
        <div className="hero min-h-screen">
            <div className="hero-content lg:w-[550px] w-full flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className='text-2xl font-bold pt-5 uppercase'>Login Now</h1>
                        <form onSubmit={handleSubmit(handleLogin)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' {...register('email', { required: true })} placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' {...register('password', { required: true })} placeholder="password" className="input input-bordered" />
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
                            <button onClick={googleLogin} className="btn border-none bg-cyan-700 ">Login With Google</button>
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