import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const AddProduct = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(true);


    const imageStorageKey = '1a95b859d1b88e314e6743fe5f6083aa';
    const onSubmit = (data) => {
        console.log(data)
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
                const product ={
                    productName: data.name,
                    image: image,
                    price: data.price,
                    minimumQuantity: data.minimumQuantity,
                    quantity: data.quantity,
                    description: data.description
                }
                fetch('http://localhost:5000/products', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(product)
                })
                    .then(res => res.json())
                    .then(data =>{
                        if(data.insertedId){
                            toast.success('Product added sucessfully');
                            // setLoading(false);
                            reset();
                        }
                    })
            }
        })
    }
    return (
        <div className='h-auto flex justify-center items-center'>
            <div className='bg-white w-full m-12 shadow-2xl rounded-lg p-8'>
                <form onSubmit={handleSubmit(onSubmit)} className='flex justify-center' action="">
                    <div className='mr-6 w-2/4'>
                        <div className='form-group w-full mx-w-xs'>
                            <label htmlFor="" className='label-text'>Product Title</label>
                            <input {...register("name", { required: true })} className='input input-bordered my-2 w-full mx-w-xs' type="text" />
                        </div>
                        <div className='form-group w-full mx-w-xs'>
                            <label htmlFor="" className='label-text'>Price</label>
                            <input {...register("price", { required: true })} className='input input-bordered my-2 w-full mx-w-xs' type="number" />
                        </div>
                        <div className='form-group w-full mx-w-xs'>
                            <label htmlFor="" className='label-text'>Minimum Quantity</label>
                            <input {...register("minimunQuantity", { required: true })} className='input input-bordered my-2 w-full mx-w-xs' type="number" />
                        </div>
                        <div className='form-group w-full mx-w-xs'>
                            <label htmlFor="" className='label-text'>Quantity</label>
                            <input {...register("quantity", { required: true })} className='input input-bordered my-2 w-full mx-w-xs' type="number" />
                        </div>
                    </div>
                    <div className='w-2/4'>
                        
                        
                        <label htmlFor="" className='label-text'>Description</label>
                        <textarea {...register("description", { required: true })} className='textarea textarea-bordered w-full mt-2 mx-w-xs' name="description" id="" cols="30" rows="2"></textarea>
                        <div className='form-group w-full mx-w-xs'>
                            <label htmlFor="" className='label-text'>Image</label>
                            <input {...register("image", { required: true })} className='my-2 w-full mx-w-xs' type="file" />
                        </div>
                        <input className='block ml-auto btn btn-secondary mt-3 text-white' type="submit" value="Add New Item" />
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddProduct;