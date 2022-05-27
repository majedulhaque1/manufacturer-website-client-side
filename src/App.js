import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyProfile from './Pages/Dashboard/MyProfile';
import AddProduct from './Pages/Dashboard/AddProduct';
import MyReview from './Pages/Dashboard/MyReview';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Purchase from './Pages/Home/Purchase';
import Users from './Pages/Dashboard/Users';
import Orders from './Pages/Dashboard/Orders';
import MangeProduct from './Pages/Dashboard/MangeProduct';
import Blogs from './Pages/Home/Blogs';
import MyPortfolio from './Pages/Home/MyPortfolio';
import NotFound from './Pages/Shared/NotFound';

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/myportfilio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/product/:ProductId' element={<Purchase></Purchase>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}>
          <Route index element={<AddProduct></AddProduct>}></Route>
          <Route path='/dashboard/myreview' element={<MyReview></MyReview>}></Route>
          <Route path='/dashboard/myprofile' element={<MyProfile></MyProfile>}></Route>
          <Route path='/dashboard/users' element={<Users></Users>}></Route>
          <Route path='/dashboard/orders' element={<Orders></Orders>}></Route>
          <Route path='/dashboard/allorders' element={<MangeProduct></MangeProduct>}></Route>
        </Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;
