import React from 'react';
import {useForm} from 'react-hook-form';

const MyReview = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    return (
        <div>
            <div className='bg-white shadow-2xl rounded-lg p-8'>
                <form className='w-96' action="">
                    <div className='form-group w-full mx-w-xs'>
                        <label htmlFor="" className='label-text'>Name</label>
                        <input {...register("name", {required:true})} className='input input-bordered my-2 w-full mx-w-xs' type="text" />
                    </div>
                    <div className='form-group w-full mx-w-xs'>
                        <label htmlFor="" className='label-text'>Image</label>
                        <input {...register("image", {required:true})} className='input input-bordered my-2 w-full mx-w-xs' type="text" />
                    </div>
                    <label htmlFor="" className='label-text'>Description</label>
                    <textarea {...register("description", {required:true})} className='textarea textarea-bordered w-full mx-w-xs' name="" id="" cols="30" rows="4"></textarea>
                    <input className='btn btn-secondary mt-3 text-white' type="submit" value="Add New Item" />
                </form>
            </div>
        </div>
    );
};

export default MyReview;