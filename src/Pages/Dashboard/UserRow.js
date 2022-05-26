import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({userinfo}) => {
    const {email, role} = userinfo;
    const makeAdmin =() =>{
        fetch(`http://localhost:5000/users/admin/${email}`,{
            method: "PUT",
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                toast.success('Successfully make admin');
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