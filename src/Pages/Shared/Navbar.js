import React from 'react';
import { Link } from 'react-router-dom';
import {useAuthState} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import {signOut} from 'firebase/auth';

const Navbar = () => {
    const [user] = useAuthState(auth);
    const logOut = () =>{
        signOut(auth);
        localStorage.removeItem('accessToken');
    }
    const menuItems = <>
    <li className='text-white text-xl'><Link to={'/'}>Home</Link></li>
    <li className='text-white text-xl'><Link to={'/'}>Tools</Link></li>
    <li className='text-white text-xl'><Link to={'/'}>Reviews</Link></li>
    <li className='text-white text-xl'><Link to={'/blogs'}>Blogs</Link></li>
    <li className='text-white text-xl'><Link to={'/myportfolio'}>My Portfolio</Link></li>
    {!user && <li className='btn text-white text-md border-2 mx-2 border-accent rounded-3xl bg-transparent'><Link to={'/login'}>Login</Link></li>}
    {!user && <li className='btn text-white text-md border-2 border-accent rounded-3xl bg-transparent'><Link to={'/signup'}>Sign Up</Link></li>}
    {user && <li className='btn text-white rounded-3xl border-2 mx-2 border-accent text-md'><Link to={'/dashboard'}>Dashboard</Link></li>}
    {user && <button onClick={logOut} className='btn rounded-3xl border-2 border-accent text-white'>Sign Out</button>}
    </>
    return (
        <div className='w-full'>
            <div className="navbar w-11/12 mx-auto">
                <div className="w-auto flex-start">
                    <div className="dropdown">
                        <label tabindex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-accent rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link className='text-2xl text-white' to={'/'}>Tools Manufacturer</Link>
                </div>
                <div className="w-auto ml-auto hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
                <div className='ml-auto lg:hidden'>
                <label for="my-drawer-2" className="btn btn-primary drawer-button lg:hidden"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg></label>
                </div>
            </div>
        </div>
    );
};

export default Navbar;