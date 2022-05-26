import React from 'react';
import {Outlet, Link} from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <label for="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet/>
                </div>
                <div className="drawer-side">
                    <label for="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-yellow-400 text-base-content">
                        <li><Link to={'/dashboard'}>Add Product</Link></li>
                        <li><Link to={'/dashboard/myreview'}>My Review</Link></li>
                        <li><Link to={'/dashboard/myprofile'}>My Profile</Link></li>
                        <li><Link to={'/dashboard/users'}>All Users</Link></li>
                        <li><Link to={'/dashboard/orders'}>My Orders</Link></li>
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;