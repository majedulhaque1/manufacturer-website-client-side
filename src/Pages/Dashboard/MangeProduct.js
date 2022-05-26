import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import OrderRow from './OrderRow';

const MangeProduct = () => {
    const {data: products, isLoading} = useQuery('allProducts',() => fetch('http://localhost:5000/products',{
        method: "GET",
        headers:{
            'authorization' : `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()) );
    if(isLoading){
        return <Loading></Loading>;
    }
    return (
        <div className='w-screen h-auto py-12'>
            <table>
                <thead>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </thead>
                {
                    products?.map(product => <OrderRow key={product._id}
                        product={product}
                    ></OrderRow>)
                }
            </table>
        </div>
    );
};

export default MangeProduct;