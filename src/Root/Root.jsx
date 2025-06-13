import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';

const Root = () => {
    return (
      <div>
        <div className="">
          <Navbar/>
          <div className="min-h-[calc(90vh-64px)] mx-4 md:mx-8 lg:mx-14 xl:mx-20 2xl:max-w-10/12  2xl:mx-auto">
            <Outlet />
          </div>
        </div>
      </div>
    );
};

export default Root;