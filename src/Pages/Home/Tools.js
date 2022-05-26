import React from 'react';
import Tool from './Tool';
import {useQuery} from 'react-query';
import Loading from '../Shared/Loading';

const Tools = () => {
    const {data: products, isLoading} = useQuery('allProducts',() => fetch('http://localhost:5000/products',{
        method: "GET",
        headers:{
            authorization : `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()) );

    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div className='w-screen h-auto py-12'>
            <div className='w-4/5 mx-auto'>
                <h2 className='text-3xl text-secondary my-5'>Recent Products</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-4/5 mx-auto'>
                {
                    products?.map(product => <Tool key={product._id}
                        product={product}
                    ></Tool>)
                }
                
            </div>
        </div>
    );
};

export default Tools;