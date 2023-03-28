import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../view/layout/main/Main";
import Error from "../view/layout/error/Error";
import Home from "../view/pages/main/Home";
import SignUp from "../view/pages/main/SignUp";
import ProductDetails from "../view/pages/main/ProductDetails";
import Login from "../view/pages/main/Login";
import Cart from "../view/pages/main/Cart";
import WishList from "../view/pages/main/WishList";
import Dashboard from "../view/layout/Dashboard/Dashboard";
import AdminDashboard from "../view/pages/dashboard/adminDashboard/AdminDashboard";
import MerchantDashboard from "../view/pages/dashboard/merchantDashboard/MerchantDashboard";
import AddProduct from "../view/pages/dashboard/AddProduct";
import AllProduct from "../view/pages/dashboard/AllProduct";
import MakeAdmin from "../view/pages/dashboard/MakeAdmin";

export const routes = createBrowserRouter([
  // main layout
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "product/:id",
        element: <ProductDetails />,
      },
      {
        path: "signUWp",
        element: <SignUp />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "wishlist",
        element: <WishList />,
      },
    ],
  },
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <Error />,
    children: [
      {
        path: "admin-dashboard",
        element: <AdminDashboard />,
      },
      {
        path: "merchant-dashboard",
        element: <MerchantDashboard />,
      },
      {
        path: "add-product",
        element: <AddProduct />,
      },
      {
        path: "all-product",
        element: <AllProduct />,
      },
      {
        path: "make-admin",
        element: <MakeAdmin />,
      },
    ],
  },
]);
