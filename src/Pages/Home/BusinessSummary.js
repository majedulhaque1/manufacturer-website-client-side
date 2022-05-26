import React from 'react';
import { BsCurrencyDollar, BsPeopleFill } from 'react-icons/bs';

const BusinessSummary = () => {
    return (
        <>
            <div className='text-center'>
                <h2 className='text-center text-5xl font-semibold my-5'>Why Trust Us</h2>
            </div>
            <div className='flex justify-evenly items-center flex-wrap w-4/5 my-16 mx-auto'>
                <div className='card'>
                    <figure className='image-full'>
                        <p className='text-5xl mx-auto'><BsPeopleFill></BsPeopleFill></p>
                    </figure>
                    <div className='card-body'>
                        <p className='text-accent text-center text-4xl font-bold my-5'>100k</p>
                        <p className='text-secondary pt-[-20px] text-2xl text-center font-bold'>Happy clients</p>
                    </div>
                </div>
                <div className='card'>
                    <p className='text-5xl mx-auto'>
                        <BsCurrencyDollar></BsCurrencyDollar>
                    </p>
                    <div className='card-body'>
                        <p className='text-accent text-center text-4xl font-bold my-5'>100k</p>
                        <p className='text-secondary text-center text-2xl font-bold'>Anual revenue</p>
                    </div>
                </div>
                <div className='card hover:shadow-2xl rounded-lg'>
                    <figure>
                        <p className='text-xl mx-auto'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                        </p>
                    </figure>
                    <div className='card-body'>
                        <p className='text-accent text-center text-4xl font-bold my-5'>500+</p>
                        <p className='text-secondary text-2xl font-bold'>Complete orders</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BusinessSummary;