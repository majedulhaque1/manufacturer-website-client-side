import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import OrderRow from './OrderRow';

const MangeOrders = () => {
    const {data: orders, isLoading} = useQuery('allorders',() => fetch(`https://cryptic-citadel-18059.herokuapp.com/allorders`,{
        method: "GET",
        headers:{
            authorization : `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()) );
    if(isLoading){
        return <Loading></Loading>;
    }
    return (
        <div>
            <table className='table w-full'>
                <thead>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Min Quantity</th>
                    <th>Phone</th>
                </thead>
                {
                    orders.map(order => <OrderRow key={order._id} order={order}></OrderRow>)
                }
            </table>
        </div>
    );
};

export default MangeOrders;