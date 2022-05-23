import React, { useEffect, useState } from 'react';
import {useForm} from 'react-hook-form';
import {Link, useNavigate} from 'react-router-dom';
import {useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const SignUp = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [createUserWithEmailAndPassword, sUser, sLoading, sError] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [updateProfile, updating, uError] = useUpdateProfile(auth);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() =>{
        if(sError || gError){
            return setError(sError?.message || gError?.message);
        }
    },[sError, gError])
    
    if(sUser || gUser){
        navigate('/');
    }

    if(sLoading || gLoading){
        return <Loading></Loading>;
    }

    
    const handleSignUp = async (data) =>{
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({displayName: data.name});
    }
    return (
        <div className='w-screen h-screen flex justify-center items-center'>
            <div className='bg-white border-l-8 border-accent shadow-2xl p-8'>
                <form className='w-80' onSubmit={handleSubmit(handleSignUp)} action="">
                    <h2 className='text-2xl text-center text-secondary font-bold'>Sign Up</h2>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input {...register("name", {required: true})} type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
                        <label class="label">
                            <span class="label-text-alt">{errors.name?.type === 'required' &&"Name is required"}</span>
                        </label>
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input {...register("email", {required: true})} type="email" placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
                        <label class="label">
                            <span class="label-text-alt">{errors.name?.type === 'required' &&"Name is required"}</span>
                        </label>
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Password</span>
                        </label>
                        <input {...register("password", {required: true})} type="password" placeholder="Password" class="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            <span className="label-text-alt">{errors.name?.type === 'required' &&"Name is required"}</span>
                        </label>
                    </div>
                    <p className='text-red-400'>{error}</p>
                    <input className='btn btn-secondary w-full mx-w-xs' type="submit" value="Sign Up" />
                </form>
                <p className='mt-3'>Already have an account please <Link className='btn-link' to={'/login'}>login</Link></p>
                <div className='divider'>OR</div>
                <div>
                    <button onClick={() => signInWithGoogle()} className='btn btn-outline w-full mx-w-xs'>Continue with google</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;