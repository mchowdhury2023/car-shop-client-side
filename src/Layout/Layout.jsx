import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
        <Navbar></Navbar>
        <div className="flex-grow">
            <Outlet></Outlet>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Layout