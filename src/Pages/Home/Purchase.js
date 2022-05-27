import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {toast} from 'react-toastify';
import {useAuthState} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
// import image from '../../Assets/Images/Group 33091.png';

const Purchase = () => {
    const {ProductId} = useParams();
    const [product, setProduct] = useState({});
    const [minquantity, setMinQuantity] = useState();
    const [user] = useAuthState(auth);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    // console.log(product);
    const {image, productName, price, minimumQuantity, quantity, description} = product;
    useEffect(() =>{
        fetch(`http://localhost:5000/products/${ProductId}`)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[ProductId])

    // const timeOut = setTimeout(handleChange,500);
    const handleChange = (e) =>{
        const minquantity = e.target.value;
        setMinQuantity(minquantity);
        console.log(quantity);
        if(quantity < minimumQuantity){
            toast.success(`Your can not order bellow minimum order`);
        }
        else if(minquantity > quantity){
            toast.error('You can not order more than avaiable quantity');
        }
    }
    // const timeOut = setTimeout(handleChange,2000);
    // clearTimeout(timeOut);
    const handleOrders = (data) =>{
        console.log(data);
        const name = user?.displayName;
        const email = user?.email;
        const minimumQuantity = minquantity;
        const phone = data.phone;
        const order = {name, email, minimumQuantity, phone};
        console.log(order);

        fetch('http://localhost:5000/orders',{
            method: "POST",
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                toast.success('Succecsfully place order');
            }
        })
    }
    return (
        <div>
            <div className='flex justify-between flex-wrap shadow-2xl rounded-lg w-4/5 mx-auto p-12 mt-5'>
                <div>
                    <img className='w-2/4 pr-5' src={image} alt="Product img" />
                </div>
                <div className='w-2/4'>
                    <h3 className='text-secondary'>{productName}</h3>
                    <p className='text-accent'>{description}</p>
                    <p className='text-accent'>Minimum Orders: <small>{minimumQuantity}</small></p>
                    <p className='text-accent'>Available Quantity: <small>{quantity}</small></p>
                    <p className='text-accent'>Price $ <small>{price}</small></p>
                </div>
            </div>
            <div className='w-4/5 mx-auto shadow-2xl rounded-lg p-12 mt-5'>
            <form onSubmit={handleSubmit(handleOrders)} className='flex justify-center flex-wrap' action="">
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
                            <label htmlFor="" className='label-text'>Minimum order quantity <small className='font-bold text-sm'>{minimumQuantity}</small></label>
                            <input onBlur={handleChange} className='input input-bordered my-2 w-full mx-w-xs' type="number" />
                        </div>
                        <div className='form-group w-full mx-w-xs'>
                            <label htmlFor="" className='label-text'>Phone Number</label>
                            <input {...register("phone", { required: true })} className='input input-bordered my-2 w-full mx-w-xs' type="number" />
                        </div>
                        <input disabled={minquantity < 200 || minquantity > 8000} className='block ml-auto btn btn-secondary mt-3 text-white' type="submit" value="Add New Item" />
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Purchase;