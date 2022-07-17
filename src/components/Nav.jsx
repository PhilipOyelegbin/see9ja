import React, {useState} from "react";
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { FaTimes } from 'react-icons/fa';
import logo from "../images/logo.png";

const Nav = () => {
  const [open, setOpen] = useState(false)

  const handleMenuContent = () => {
    setOpen(!open)
  }

  return (
    <nav className="flex justify-between items-center px-5 py-5">
      <img className="w-20 md:w-32 h-10" src={logo} alt="logo" />
      <button onClick={handleMenuContent}>
        <HiOutlineMenuAlt3 className={`lg:hidden h-6 w-6 ${open ? 'hidden' : 'block'}`}/>

        <FaTimes className={`h-6 w-6 ${open ? 'block' : 'hidden'}`}/>
      </button>
      <ul id='menuContent' className={`fixed lg:flex lg:items-center lg:static bg-white w-full lg:w-auto lg:py-0 py-4 top-14 transition-all ease-in-outduration-300 ${open ? 'right-0' : '-right-full'}`}>
        <li><a href="">Home</a></li>
        <li><a href="">Discover</a></li>
        <li><a href="">Search</a></li>
        <li><a href="">Community</a></li>
        <li><a href="">About Us</a></li>
        <div className="lg:hidden mt-3">
          <a href="#" className="bg-white hover:bg-slate-200 text-green px-5 py-2 border-[1px] border-solid border-green rounded-[10px] mx-3">Log In</a>
          <a href="#" className="bg-green hover:bg-lime-500  text-white px-5 py-2 border-solid border-white rounded-[10px]">Sign Up</a>
        </div>
      </ul>
      <div className="hidden lg:block">
        <a href="#" className="bg-white hover:bg-slate-200 text-green px-5 py-2 border-[1px] border-solid border-green rounded-[10px] md:mx-3">Log In</a>
        <a href="#" className="bg-green hover:bg-lime-500 text-white px-5 py-2 border-solid border-white rounded-[10px]">Sign Up</a>
      </div>
    </nav>
  );
};

export default Nav;
