import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [profileInfo, setProfileInfo] = useState([]);
    const [user] = useAuthState(auth);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    useEffect(()=>{
        fetch('https://cryptic-citadel-18059.herokuapp.com/profile',{
            method: "GET",
        })
        .then(res => res.json())
        .then(data => setProfileInfo(data))
    },[])
    const onSubmit = (data) =>{
        console.log(data);
        const education = data.education;
        const city = data.city;
        const address = data.address;
        const linkedinProfile = data.linkedinProfile;
        const profile = {education, city, address, linkedinProfile};
        fetch('https://cryptic-citadel-18059.herokuapp.com/profile',{
            method: "POST",
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(profile)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
    return (
        <div>
            <div className='flex justify-between shadow-2xl rounded-lg w-4/5 mx-auto p-12 mt-5'>
                <div>
                    <img className='w-2/4 pr-5' src={user?.photoURL} alt="Product img" />
                </div>
                <div className='w-2/4'>
                    <h3 className='text-secondary'>{user?.displayName}</h3>
                    <p className='text-accent'>{user?.email}</p>
                    <p className='text-accent'>Education:<small>{profileInfo.education}</small></p>
                    <p className='text-accent'>City:<small>{profileInfo.city}</small></p>
                    <p className='text-accent'>Street adress:<small>{profileInfo.linkedinProfile}</small></p>
                </div>
            </div>
            <div className='w-4/5 mx-auto shadow-2xl rounded-lg p-12 mt-5'>
            <form onSubmit={handleSubmit(onSubmit)} className='flex justify-center' action="">
                    <div className='mr-6 w-2/4'>
                        <div className='form-group w-full mx-w-xs'>
                            <label htmlFor="" className='label-text'>Education</label>
                            <input {...register("education", { required: true })}  className='input input-bordered my-2 w-full mx-w-xs' type="text" />
                        </div>
                        <div className='form-group w-full mx-w-xs'>
                            <label htmlFor="" className='label-text'>City</label>
                            <input {...register("city", { required: true })}  className='input input-bordered my-2 w-full mx-w-xs' type="text" />
                        </div>
                    </div>
                    <div className='w-2/4'>
                        <div className='form-group w-full mx-w-xs'>
                            <label htmlFor="" className='label-text'>Address<small className='font-bold text-sm'></small></label>
                            <input {...register("address", { required: true })}  className='input input-bordered my-2 w-full mx-w-xs' type="text" />
                        </div>
                        <div className='form-group w-full mx-w-xs'>
                            <label htmlFor="" className='label-text'>Linkedin Profile</label>
                            <input {...register("linkedinProfile", { required: true })} className='input input-bordered my-2 w-full mx-w-xs' type="text" />
                        </div>
                        <input className='block ml-auto btn btn-secondary mt-3 text-white' type="submit" value="Update Profile" />
                    </div>

                </form>
            </div>
        </div>
    );
};

export default MyProfile;