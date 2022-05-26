import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {useQuery} from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import OrderRow from '../Dashboard/OrderRow';

const Orders = () => {
    const [user] = useAuthState(auth);
    const email = user?.email;
    const {data: orders, isLoading} = useQuery(['orders', email],() => fetch(`http://localhost:5000/orders?buyer=${email}`,{
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
                    <th>Order Quantity</th>
                    <th>Phone</th>
                </thead>
                {
                    orders.map(order => <OrderRow key={order._id} order={order}></OrderRow>)
                }
            </table>
        </div>
    );
};

export default Orders;