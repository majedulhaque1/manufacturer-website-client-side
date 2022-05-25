import React from 'react';

const UserRow = ({userinfo}) => {
    return (
        <tbody>
            <td>{userinfo.index}</td>
            <td>name</td>
            <td>{userinfo.email}</td>
            <td><button className='btn btn-secondary btn-sm'>Make Admin</button></td>
        </tbody>
    );
};

export default UserRow;