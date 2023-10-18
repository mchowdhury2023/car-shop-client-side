import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Layout from './Layout/Layout.jsx';
import Home from './pages/Home/Home.jsx';
import Login from './pages/Login/Login.jsx';
import Register from './pages/Register/Register.jsx';
import AddProduct from './pages/AddProduct/AddProduct.jsx';
import Mycart from './pages/MyCart/Mycart.jsx';
import PageNotFound from './pages/PageNotFound/PageNotFound.jsx';
import PrivateRoute from './authentication/PrivateRoute.jsx';
import AuthProvider from './authentication/Authprovider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path:'/',
        element: <Home></Home>,
      },
      {
        path:'/login',
        element: <Login></Login>
      },
      {
        path:'/register',
        element: <Register></Register>
      },
      {
        path:'/addproduct',
        element:<PrivateRoute>
              <AddProduct></AddProduct>,
        </PrivateRoute>
     
      },
      {
        path:'/mycart',
        element: <PrivateRoute>
                    <Mycart></Mycart>
                </PrivateRoute>

      },
      {
        path: "*", 
        element: <PageNotFound></PageNotFound>
    }
      
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
  </React.StrictMode>,
)
