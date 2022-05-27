import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Header from './Header';
import Reviews from './Reviews';
import Tools from './Tools';
import ContactUs from './ContactUs';
import Offer from './Offer';

const Home = () => {
    return (
        <div>
            {/* <Banner></Banner> */}
            <Header></Header>
            <Tools></Tools>
            <Reviews></Reviews>
            <Offer></Offer>
            <BusinessSummary></BusinessSummary>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;