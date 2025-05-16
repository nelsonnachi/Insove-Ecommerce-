import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import {FaBars, FaBarsStaggered} from 'react-icons/fa6'
import {TbUserCircle} from 'react-icons/tb'
import {RiUserLine} from 'react-icons/ri'

const Header = () => {

  const [menuOpened, setmenuOpened] = useState(false)

  const toggleMenu = () => setmenuOpened((prev)=> !prev)


  return (
    <header className="max-w-[1440px] mx-auto px-6 w-full mb-2">
      <div className="flex justify-between items-center py-6">
        {/* Logo */}
        <Link to={"/"} className="text-[28px] font-[700] leading-[120%] flex flex-1 gap ">
          Insove
        </Link>

        {/* Navbar */}
        <div className="flex-1">
          <Navbar containerStyles={`${menuOpened ? "flex items-start flex-col gap-y-8 fixed top-16 right-6 p-5 bg-white rounded-xl shadow-md w-60 ring-1 ring-slate-900/5 x-50 z-[999]" : "hidden lg:flex item-center justify-center gap-x-5 lg:gap-x-7 text-[15px] font-[500] ring-slate-900/5 bg-[#f4f4f7] rounded-full p-1"}`}/>
        </div>

        {/* Button */}
        <div className="flex flex-1 items-center justify-end  gap-x-8">
          {/* Menu toggle */}
          <>
            {menuOpened ? <FaBarsStaggered onClick={toggleMenu}
            className="lg:hidden cursor-pointer text-xl"/> 
            : 
            <FaBars onClick={toggleMenu}
            className="lg:hidden cursor-pointer text-xl"/>  }
          </>
          {/* Cart */}
          <Link to={'/cart'} className="flex relative">
            <div className="text-[18px] font-[700] ring-1 rint-slate-900 rounded-full px-3">
              Cart <span className="bg-[#222529] text-white text-[12px] font-semibold absolute -top-3.5 -right-2 flex items-center justify-center w-4 h-4 rounded-full shadow-md">0</span>
              </div>
          </Link>
          {/* user profile */}
          <div className="group relative ">
            <button className="flex items-center justify-center gap-x-2 bg-[#222529] text-white ring-1 ring-[#222529]  px-2 py-1 md:px-7 md:py-2.5 rounded-full">
              Login <RiUserLine className="text-xl"/>
              </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
