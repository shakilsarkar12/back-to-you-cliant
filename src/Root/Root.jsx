import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';

const Root = () => {
    return (
        <div className="">
          <Navbar/>
          <div className="min-h-[calc(90vh-64px)] mx-4 md:mx-6">
            <Outlet />
          </div>
          <Footer/>
      </div>
    );
};

export default Root;