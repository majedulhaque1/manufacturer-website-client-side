import React from 'react';
import {useForm} from 'react-hook-form';
import {Link} from 'react-router-dom';

const Login = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const handleSignUp = (data) =>{
        console.log(data)
    }
    return (
        <div className='h-screen flex justify-center items-center'>
            <div className='bg-white border-l-8 border-accent shadow-2xl p-8'>
                <form className='w-80' onSubmit={handleSubmit(handleSignUp)} action="">
                    <h1 className='text-2xl text-center text-secondary font-bold'>Login</h1>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input {...register("email", {required: true})} type="email" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            <span className="label-text-alt">{errors.name?.type === 'required' &&"Name is required"}</span>
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input {...register("password", {required: true})} type="password" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            <span className="label-text-alt">{errors.name?.type === 'required' &&"Name is required"}</span>
                        </label>
                    </div>
                    <input className='btn btn-secondary w-full mx-w-xs text-white' type="submit" value="Login" />
                </form>
                <p className='mt-3'>New to website <Link className='btn-link' to={'/signup'}>Create an account</Link></p>
                <button className='btn-link mt-2'>Forgot Password</button>
                <div className='divider'>OR</div>
                <div>
                    <button className='btn btn-outline w-full'>Continue with google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;