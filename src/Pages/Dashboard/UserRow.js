import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({userinfo,refetch}) => {
    const {email, role} = userinfo;
    const makeAdmin =() =>{
        fetch(`https://cryptic-citadel-18059.herokuapp.com/users/admin/${email}`,{
            method: "PATCH",
            headers:{
                authorization : `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                toast.success('Successfully make admin');
                refetch();
            }
        })
    }
    return (
        <tbody>
            <td>{userinfo.index}</td>
            <td>name</td>
            <td>{userinfo.email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className='btn btn-secondary btn-sm'>Make Admin</button>}</td>
        </tbody>
    );
};

export default UserRow;