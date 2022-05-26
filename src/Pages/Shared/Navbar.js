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
    <li><Link to={'/'}>Home</Link></li>
    <li><Link to={'/'}>Tools</Link></li>
    <li><Link to={'/'}>Reviews</Link></li>
    <li><Link to={'/login'}>Login</Link></li>
    <li><Link to={'/signup'}>Sign Up</Link></li>
    <li><Link to={'/dashboard'}>Dashboard</Link></li>
    {user && <button onClick={logOut} className='btn btn-secondary text-white'>Sign Out</button>}
    </>
    return (
        <div className='w-screen bg-yellow-400'>
            <div className="navbar w-4/5 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabindex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link className='text-2xl text-secondary' to={'/'}>Tools Manufacturer</Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;