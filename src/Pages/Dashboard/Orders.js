import React from 'react';
import {useQuery} from 'react-query';
import Loading from '../Shared/Loading';

const Orders = () => {
    const {data: orders, isLoading} = useQuery('orders',() => fetch(`http://localhost:5000/orders?buyer=${email}`).then(res => res.json()) );
    if(isLoading){
        return <Loading></Loading>;
    }
    return (
        <div>
            <table className='table w-full'>
                <thead>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
        </div>
    );
};

export default Orders;