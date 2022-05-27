import React from 'react';
import image from '../../Assets/Images/doctor-with-co-workers-analyzing-x-ray.jpg';
import Navbar from '../Shared/Navbar';
import Banner from './Banner';

const Header = () => {
    return (
        <div style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${image})`,backgroundSize: 'cover'}} className='w-full h-screen'>
            <Navbar style={{backgroundColor: 'transparent'}} className='border-t-4 border-b-4'></Navbar>
            <Banner></Banner>
        </div>
    );
};

export default Header;