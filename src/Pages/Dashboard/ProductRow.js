import React from 'react';

const ProductRow = ({product}) => {
    const {_id, image, productName, price, minimumQuantity, quantity}  = product;
    const handleDelete = (id) =>{
        const procced = window.confirm('Are You want delete product');
        console.log(procced);
        if(procced === true){
            fetch(`http://localhost:5000/products/${id}`,{
                method: "DELETE",
                headers:{
                    authorization : `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        }
    }
    return (
            <tbody>
                <td><img className='w-12' src={image} alt="product img"/></td>
                <td>{productName}</td>
                <td>{price}</td>
                <td>{minimumQuantity}</td>
                <td>{quantity}</td>
                <td><button onClick={() => handleDelete(_id)} className='btn btn-error text-white'>Delete</button></td>
            </tbody>
    );
};

export default ProductRow;