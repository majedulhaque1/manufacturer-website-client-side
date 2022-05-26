import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) =>{
        console.log(data);
    }
    return (
        <div>
            <div className='flex justify-between shadow-2xl rounded-lg w-4/5 mx-auto p-12 mt-5'>
                <div>
                    <img className='w-2/4 pr-5' src=''} alt="Product img" />
                </div>
                <div className='w-2/4'>
                    <h3 className='text-secondary'></h3>
                    <p className='text-accent'></p>
                    <p className='text-accent'>Minimum Orders: <small></small></p>
                    <p className='text-accent'>Available Quantity: <small></small></p>
                    <p className='text-accent'>Price $ <small></small></p>
                </div>
            </div>
            <div className='w-4/5 mx-auto shadow-2xl rounded-lg p-12 mt-5'>
            <form onSubmit={handleSubmit(onSubmit)} className='flex justify-center' action="">
                    <div className='mr-6 w-2/4'>
                        <div className='form-group w-full mx-w-xs'>
                            <label htmlFor="" className='label-text'>Name</label>
                            <input value={user?.displayName} readOnly className='input input-bordered my-2 w-full mx-w-xs' type="text" />
                        </div>
                        <div className='form-group w-full mx-w-xs'>
                            <label htmlFor="" className='label-text'>Email</label>
                            <input value={user?.email} readOnly className='input input-bordered my-2 w-full mx-w-xs' type="email" />
                        </div>
                    </div>
                    <div className='w-2/4'>
                        <div className='form-group w-full mx-w-xs'>
                            <label htmlFor="" className='label-text'>Minimum order quantity <small className='font-bold text-sm'></small></label>
                            <input className='input input-bordered my-2 w-full mx-w-xs' type="number" />
                        </div>
                        <div className='form-group w-full mx-w-xs'>
                            <label htmlFor="" className='label-text'>Phone Number</label>
                            <input {...register("phone", { required: true })} className='input input-bordered my-2 w-full mx-w-xs' type="number" />
                        </div>
                        <input className='block ml-auto btn btn-secondary mt-3 text-white' type="submit" value="Add New Item" />
                    </div>

                </form>
            </div>
        </div>
    );
};

export default MyProfile;