import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {Outlet, Link} from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import Navbar from '../Shared/Navbar';
const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    console.log(admin);
    return (
        <div>
            <div className='bg-accent'>

            <Navbar></Navbar>
            </div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <label for="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet/>
                </div>
                <div className="drawer-side">
                    <label for="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-accent text-base-content">
                        {admin && <li><Link to={'/dashboard'}>Add Product</Link></li>}
                        <li><Link to={'/dashboard/orders'}>My Orders</Link></li>
                        <li><Link to={'/dashboard/myreview'}>Add Review</Link></li>
                        <li><Link to={'/dashboard/myprofile'}>My Profile</Link></li>
                        {admin && <li><Link to={'/dashboard/users'}>All Users</Link></li>}
                        {admin && <li><Link to={'/dashboard/allproducts'}>Mange Products</Link></li>}
                        {admin && <li><Link to={'/dashboard/allorders'}>Mange Orders</Link></li>}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;