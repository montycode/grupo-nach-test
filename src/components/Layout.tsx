import { FC } from 'react';
import { Navbar, Footer } from '.';
import { Outlet } from "react-router-dom";

const Layout:FC<any> = () => {
  return (
    <div>
        <Navbar />
        <Outlet />
        <Footer/>
    </div>
  )
}

export default Layout;