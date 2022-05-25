import React from 'react';
import {useQuery} from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const Users = () => {
    const {data: users, isLoading} = useQuery('users',() => fetch('http://localhost:5000/users').then(res => res.json()) );
    if(isLoading){
        return <Loading></Loading>;
    }
    return (
        <div>
            <table className='table w-full m-5 rounded-lg'>
                <thead>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th></th>
                </thead>
                {
                    users?.map(user => <UserRow key={user._id} userinfo={user}></UserRow>)
                }
            </table>
        </div>
    );
};

export default Users;