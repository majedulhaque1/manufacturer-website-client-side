import React, { useState } from 'react';
import {useForm} from 'react-hook-form';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const MyReview = () => {
    const {register, handleSubmit,reset, formState: {errors}} = useForm();
    const [loading, setLoading] = useState(true);

    const imageStorageKey = '1a95b859d1b88e314e6743fe5f6083aa';
    const onSubmit = (data) => {
        console.log(data);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);

        const url =`https://api.imgbb.com/1/upload?key=${imageStorageKey}`;

        fetch(url,{
            method: 'POST',
            body: formData
        })
        .then(res =>res.json())
        .then(result => {
            if(result.success){
                const image = result.data.url;
                const review ={
                    name: data.name,
                    rating: data.rating,
                    image: image,
                    description: data.description
                }
                fetch('http://localhost:5000/reviews', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(review)
                })
                    .then(res => res.json())
                    .then(data =>{
                        if(data.insertedId){
                            toast.success('Review added sucessfully');
                            reset();
                        }
                    })
            }
        })
    }
    return (
        <div className='h-screen flex justify-center items-center'>
            <div className='bg-white w-96 shadow-2xl rounded-lg p-6'>
                <form onSubmit={handleSubmit(onSubmit)} className='' action="">
                    <div className='form-group w-full mx-w-xs'>
                        <label htmlFor="" className='label-text'>Name</label>
                        <input {...register("name", {required:true})} className='input input-bordered my-2 w-full mx-w-xs' type="text" />
                    </div>
                    <div className='form-group w-full mx-w-xs'>
                        <label htmlFor="" className='label-text'>Rating</label>
                        <input {...register("rating", {required:true})} className='input input-bordered my-2 w-full mx-w-xs' type="number" />
                    </div>
                    <label htmlFor="" className='label-text'>Description</label>
                    <textarea {...register("description", {required:true})} className='textarea textarea-bordered w-full mx-w-xs' name="description" id="" cols="30" rows="4"></textarea>
                    <div className='form-group w-full mx-w-xs'>
                        <label htmlFor="" className='label-text'>Image</label>
                        <input {...register("image", {required:true})} className='my-2 w-full mx-w-xs' type="file" />
                    </div>
                    <input className='btn btn-secondary mt-3 text-white' type="submit" value="Add Review" />
                </form>
            </div>
        </div>
    );
};

export default MyReview;