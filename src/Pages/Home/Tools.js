import React from 'react';
import Tool from './Tool';

const Tools = () => {
    return (
        <div className='w-screen h-auto py-12'>
            <div className='w-4/5 mx-auto'>
                <h2 className='text-3xl text-secondary my-5'>Recent Products</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-4/5 mx-auto'>
                <Tool></Tool>
                <Tool></Tool>
                <Tool></Tool>
                <Tool></Tool>
                <Tool></Tool>
                <Tool></Tool>
            </div>
        </div>
    );
};

export default Tools;