import React from 'react';

const OrderRow = ({order}) => {
    const {_id, name, email, minimumQuantity, phone} = order;
    return (
        <tbody>
            <td>{name}</td>
            <td>{email}</td>
            <td>{minimumQuantity}</td>
            <td>{phone}</td>
        </tbody>
    );
};

export default OrderRow;