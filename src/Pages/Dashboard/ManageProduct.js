import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import OrderRow from './OrderRow';
import ProductRow from './ProductRow';

const MangeProduct = () => {
    const { data: products, isLoading } = useQuery('allProducts', () => fetch('https://cryptic-citadel-18059.herokuapp.com/products', {
        method: "GET",
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>;
    }
    return (
        <table className='table w-full'>
            <thead>
                <th>Image</th>
                <th>Product Name</th>
                <th>Price Per unit</th>
                <th>Minnimum quantity</th>
                <th>Quantity</th>
                <th>Delete</th>
            </thead>
            {
                products?.map(product => <ProductRow key={product._id}
                    product={product}
                ></ProductRow>)
            }
        </table>
    );
};

export default MangeProduct;