import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import OrderRow from './OrderRow';

const MangeOrders = () => {
    const {data: orders, isLoading} = useQuery('allorders',() => fetch(`http://localhost:5000/allorders`,{
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
            <table>
                <thead>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </thead>
                {
                    orders.map(order => <OrderRow key={order._id} order={order}></OrderRow>)
                }
            </table>
        </div>
    );
};

export default MangeOrders;