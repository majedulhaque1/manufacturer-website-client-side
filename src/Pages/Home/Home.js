import React from 'react';
import AddProduct from '../Dashboard/AddProduct';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Reviews from './Reviews';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <Reviews></Reviews>
            <BusinessSummary></BusinessSummary>
            <AddProduct></AddProduct>
        </div>
    );
};

export default Home;