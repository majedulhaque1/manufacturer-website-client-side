import React from 'react';
import Navbar from '../Shared/Navbar';

const Blogs = () => {
    return (
        <>
        <div className='bg-accent'>
            <Navbar></Navbar>
        </div>
        <div className='flex justify-between items-center flex-wrap'>
            <div className='w-72 text-center'>
                <h2 className='text-2xl text-accent'>How we improve react application perfomance?</h2>
                <p>1. we are not reapeating code any whare in react application.</p>
                <p>2. Handle unessary redering.</p>
                <p>3. Optimization.</p>
                <p>4. Optimize image</p>
            </div>
            <div className='w-72 text-center'>
                <h2 className='text-2xl text-accent'>what are the different ways to manage state in react application?</h2>
                <p>If we have so manny states in our application.Then how we manage this.We can use third party library like redux.we can manage states with the help of redux</p>
            </div>
            <div className='w-72 text-center'>
                <h2 className='text-2xl text-accent'>You have and array of products.Each products has a name, price, description etc. How will you implement a search fo find product by name?</h2>
                <p>If we want to implement search functionality.Then frist of all we can get all product title.Then we can store the title.Then we can get input from input box.Then we convert toLowerCase.And we write a loop function and check the title with help of include function.</p>
            </div>
            <div className='w-72 text-center'>
                <h2 className='text-2xl text-accent'>What is unit test.why we should write unit test?</h2>
                <p>Unit test is a proccess for test function. we write unit test functtion for test code mistakes and we can optimize code.And we can imporove performence.</p>
            </div>
        </div>
        </>
    );
};

export default Blogs;