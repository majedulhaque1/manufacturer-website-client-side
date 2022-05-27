import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-accent">
            <div className='footer p-10 text-base-content w-4/5 mx-auto'>
            <div>
                <span className="footer-title">Services</span>
                <Link className='link link-hover' to={'/'}>Home</Link>
                <Link className='link link-hover' to={'/'}>Tools</Link>
                <Link className='link link-hover' to={'/'}>Review</Link>
                <Link className='link link-hover' to={'/'}>Blogs</Link>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <Link className='link link-hover' to={'/'}>Home</Link>
                <Link className='link link-hover' to={'/'}>Home</Link>
                <Link className='link link-hover' to={'/'}>Home</Link>
                <Link className='link link-hover' to={'/'}>Home</Link>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <Link className='link link-hover' to={'/'}>Home</Link>
                <Link className='link link-hover' to={'/'}>Home</Link>
                <Link className='link link-hover' to={'/'}>Home</Link>
                <Link className='link link-hover' to={'/'}>Home</Link>
            </div>
            <div>
                <span className="footer-title">Newsletter</span>
                <div className="form-control w-80">
                    <label className="label">
                        <span className="label-text">Enter your email address</span>
                    </label>
                    <div className="relative">
                        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                    </div>
                </div>
            </div>
            </div>
        </footer>
    );
};

export default Footer;