import React from 'react';

const BusinessSummary = () => {
    return (
        <div style={{height: '500px'}} className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-5 w-4/5 pt-32 mx-auto'>
            <div className='text-center'>
                <p>icon</p>
                <p className='text-accent text-4xl font-bold my-5'>100k</p>
                <p className='text-secondary text-xl'>Happy clients</p>
            </div>
            <div className='text-center'>
                <p>icon</p>
                <p className='text-accent text-4xl font-bold my-5'>100k</p>
                <p className='text-secondary text-xl'>Happy clients</p>
            </div>
            <div className='text-center'>
                <p>icon</p>
                <p className='text-accent text-4xl font-bold my-5'>100k</p>
                <p className='text-secondary text-xl'>Happy clients</p>
            </div>
            <div className='text-center'>
                <p>icon</p>
                <p className='text-accent text-4xl font-bold my-5'>100k</p>
                <p className='text-secondary text-xl'>Happy clients</p>
            </div>
        </div>
    );
};

export default BusinessSummary;