import React from "react";
import "./App.css";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
// import Login from './pages/Login'
import {
  BiHomeAlt,
  BiUser,
  BiPackage,
  BiShoppingBag,
  BiLogOut,
  BiLogIn,
  BiFolder
} from "react-icons/bi"; // Importing suitable icons

import Home from "./pages/Home";
import Product from "./pages/Product";
import User from "./pages/User";
import Orders from "./pages/Orders";
import AddProducts from "./pages/AddProducts";
import Login from "./pages/Login";
import EditProduct from "./pages/EditProduct";
import Category from "./pages/Category";
import { useDispatch } from "react-redux";
import { adminLogout } from "./redux/user/userSlice";

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAdminLogout=()=>{
    dispatch(adminLogout());
    localStorage.removeItem("token");
    navigate("/login");

  }
  return (
    <>
      {/* <Login/> */}
      <div className="container-fluid">
        <div className="row">
          {/* side navigation */}
          <div className="col-md-3  sidebar">
            <div className="sidebar-sticky">
            <h3 className="text-light text-center border-bottom  py-3 fw-bolder">RJ-Decor</h3>
              <ul className="nav flex-column ">
                <li className="nav-item ">
                  <Link to="/" className="nav-link" activeClassName="active">
                    <BiHomeAlt className="me-2 fs-4"/> Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/users" className="nav-link" activeClassName="active">
                    <BiUser className="me-2 fs-4"/> Users
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/products" className="nav-link" activeClassName="active">
                    <BiPackage className="me-2 fs-4"/> Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/category" className="nav-link" activeClassName="active">
                    <BiFolder  className="me-2 fs-4"/> Category
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/orders" className="nav-link" activeClassName="active">
                    <BiShoppingBag className="me-2 fs-4"/> Orders
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/login" className="nav-link" activeClassName="active">
                    <BiLogIn className="me-2 fs-4"/> Login
                  </Link>
                </li>
                <li className="nav-item">
                  <button className="nav-link" onClick={handleAdminLogout}>
                    <BiLogOut className="me-2 fs-4"/> Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* page content */}
          <div className="col-md-9  ml-sm-auto px-4 bg-body-secondary ">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Product />} />
              <Route path="/addproducts" element={<AddProducts />} />
              <Route path="/editproduct/:id" element={<EditProduct />} />
              <Route path="/users" element={<User />} />
              <Route path="/category" element={<Category />} />
              <Route path="/login" element={<Login/>} />
              <Route path="/orders" element={<Orders />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
