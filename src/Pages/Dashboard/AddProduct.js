import React from 'react';
import {useForm} from 'react-hook-form';

const AddProduct = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const handleAddProduct =(data) =>{
        console.log(data);
    }
    return (
        <div className='h-screen flex justify-center items-center'>
            <div className='bg-white shadow-2xl rounded-lg p-8'>
                <form onSubmit={handleSubmit(handleAddProduct)} className='w-96' action="">
                    <div className='form-group w-full mx-w-xs'>
                        <label htmlFor="" className='label-text'>Product Title</label>
                        <input {...register("title", {required:true})} className='input input-bordered my-2 w-full mx-w-xs' type="text" />
                    </div>
                    <div className='form-group w-full mx-w-xs'>
                        <label htmlFor="" className='label-text'>Price</label>
                        <input {...register("price", {required:true})} className='input input-bordered my-2 w-full mx-w-xs' type="number" />
                    </div>
                    <div className='form-group w-full mx-w-xs'>
                        <label htmlFor="" className='label-text'>Quantity</label>
                        <input {...register("quantity", {required:true})} className='input input-bordered my-2 w-full mx-w-xs' type="number" />
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

export default AddProduct;