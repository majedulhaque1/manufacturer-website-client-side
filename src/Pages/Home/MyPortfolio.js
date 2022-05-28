import React from 'react';
import Navbar from '../Shared/Navbar';

const MyPortfolio = () => {
    return (
        <>
        <div className='bg-accent'>
            <Navbar></Navbar>
        </div>
        <div className='w-4/5 mx-auto'>
            <div className='flex justify-between items-center'>
                <img className='w-72' src="" alt="" />
                <div className='w-72'>
                    <h2>Majedul Haque Rakib</h2>
                    <p>Email: majedulhaquerakib601@gmail.com</p>
                    <p>Phone: 01000000</p>
                </div>
            </div>
            <div>
                <div className='text-start mb-5 text-xl text-accent'>
                    <h2>Institute: Satirpara k k institute</h2>
                    <h3>Exam: SSC</h3>
                    <h3>Passing year: 2016</h3>
                    <h3>Study Group: Commerce</h3>
                    <h3>GPA: 3.94</h3>
                </div>
                <div className='text-start mb-5 text-xl text-accent'>
                    <h2>Institute: Narsingdi technical school and college</h2>
                    <h3>Diploma In engineering</h3>
                    <h3>Depertment: Computet Technology</h3>
                </div>
            </div>
            <div className='text-start mb-5 text-xl text-accent'>
                <h2>My Skill:</h2>
                <p>I know html, css, javascript and also i know React libray.I can build professional website with these technologies.</p>
            </div>
            <div className='my-5'>
                <h2>My Projects Link:</h2>
                <p>link</p>
                <p>link</p>
                <p>link</p>
                <p>link</p>
            </div>
        </div>
        </>
    );
};

export default MyPortfolio;