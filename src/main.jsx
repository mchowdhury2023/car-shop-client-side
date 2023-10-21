import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./Layout/Layout.jsx";
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import AddProduct from "./pages/AddProduct/AddProduct.jsx";
import Mycart from "./pages/MyCart/Mycart.jsx";
import PageNotFound from "./pages/PageNotFound/PageNotFound.jsx";
import PrivateRoute from "./authentication/PrivateRoute.jsx";
import AuthProvider from "./authentication/Authprovider.jsx";
import UpdateProducts from "./pages/UpdateProducts/UpdateProducts.jsx";
import BrandProducts from "./pages/BrandProducts/BrandProducts.jsx";
import { CartProvider } from "./authentication/CartProvider.jsx";
import TestimonialForm from "./pages/Testimonial/TestimonialForm.jsx";
import ProductDetails from "./pages/ProductDetails/ProductDetails.jsx";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "./authentication/ThemeState/ThemeContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/products/byBrand/:brandName",
        element: (
          <PrivateRoute>
            <BrandProducts></BrandProducts>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://brand-shop-server-gztp20rll-mahamudul-chowdhurys-projects.vercel.app/products/byBrand/${params.brandName}`),
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addproduct",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>,
          </PrivateRoute>
        ),
      },
      {
        path: "/updateProduct/:id",
        element: (
          <PrivateRoute>
            <UpdateProducts></UpdateProducts>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://brand-shop-server-gztp20rll-mahamudul-chowdhurys-projects.vercel.app/products/${params.id}`),
      },
      {
        path: "/mycart",
        element: (
          <PrivateRoute>
            <Mycart></Mycart>
          </PrivateRoute>
        ),
        loader:() => fetch("https://brand-shop-server-gztp20rll-mahamudul-chowdhurys-projects.vercel.app/cart")
      },
      {
        path: "/feedback",
        element: (
          <PrivateRoute>
            <TestimonialForm></TestimonialForm>
          </PrivateRoute>
        ),
      },
      {
        path: "/productDetails/:id",
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://brand-shop-server-gztp20rll-mahamudul-chowdhurys-projects.vercel.app/products/${params.id}`),
      },
      {
        path: "*",
        element: <PageNotFound></PageNotFound>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <ThemeProvider>
        <RouterProvider router={router} />
        </ThemeProvider>
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>
);
