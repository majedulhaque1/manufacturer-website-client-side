import React from 'react';

const ContactUs = () => {
    return (
        <div className='flex justify-center items-center my-12'>
            <form className='lg:w-2/4 mx-w-xs' action="">
                <h2 className='text-accent text-4xl my-8 text-center'>Get In Touch</h2>
                <label htmlFor="">Name</label><br />
                <input className='input w-full input-bordered mx-w-xs' type="text" /><br />
                <label htmlFor="">Email</label><br />
                <input className='input w-full input-bordered mx-w-xs' type="text" /><br />
                <label htmlFor="">Phone</label><br />
                <input className='input w-full input-bordered mx-w-xs' type="text" /><br />
                <label htmlFor="">Subject</label><br />
                
                <br />
                
                <textarea className='input w-full input-bordered' name="" id="" cols="30" rows="4"></textarea>
                <input className='btn btn-accent block mx-auto mt-5' type="submit" value='Submit' />
            </form>
        </div>
    );
};

export default ContactUs;