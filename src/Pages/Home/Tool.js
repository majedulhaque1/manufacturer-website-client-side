import React from 'react';

const Tool = ({product}) => {
    const {_id, productName, image, minimumQuantity, quantity, price , description } = product;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{productName}</h2>
                    <p>{description}</p>
                    <p>Minimum order: {minimumQuantity}</p>
                    <p>Available Quantity: {quantity}</p>
                    <p>Price Per Unit: ${price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tool;