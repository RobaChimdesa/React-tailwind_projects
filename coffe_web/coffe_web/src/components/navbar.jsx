import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import coffe from "../assets/download.jpeg";
import Button from "../layouts/Button";
import { Link } from "react-scroll";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
function Navbar() {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
    console.log(menu);
  };
  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div className="">
      <div>
        <div className=" flex flex-row justify-between p-5  px-5 lg:px-32 bg-slate-50 py-7 shadow-md">
          <div className="flex flex-row items-center gap-2  cursor-pointer ">
            <span>
              <img src={coffe} alt="logo" className="w-12 h-12 rounded-full " />
            </span>
            <h1 className="text-2xl font-semibold">coffe</h1>
          </div>
          <nav className=" hidden md:flex flex-row items-center text-lg font-medium gap-8">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block hover:text-amber-600 cursor-pointer hover:underline"
            >
              Home
            </Link>
            <Link
              to="menu"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block hover:text-amber-600 cursor-pointer hover:underline"
            >
              Menu
            </Link>

            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block hover:text-amber-600 cursor-pointer hover:underline"
            >
              About Us
            </Link>
            <Link
              to="products"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block hover:text-amber-600 cursor-pointer hover:underline"
            >
              Products
            </Link>

            <Link
              to="reviews"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block hover:text-amber-600 cursor-pointer hover:underline"
            >
              Reviews
            </Link>
          </nav>
          <div className="hidden lg:flex">
            <Button title="Login" />
          </div>
          <div className="flex md:hidden items-center">
            {menu ? (
              <CloseIcon onClick={handleMenu} />
            ) : (
              <MenuIcon onClick={handleMenu} />
            )}
          </div>
          <div
            className={`${
              menu ? "translate-x-0" : "-translate-x-full"
            } md:hidden flex flex-col absolute text-white bg-black 
             left-0 top-24 font-semibold text-3xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
          >
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block hover:text-amber-600 cursor-pointer hover:underline"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              to="menu"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block hover:text-amber-600 cursor-pointer hover:underline"
              onClick={closeMenu}
            >
              Menu
            </Link>

            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block hover:text-amber-600 cursor-pointer hover:underline"
              onClick={closeMenu}
            >
              About Us
            </Link>
            <Link
              to="products"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block hover:text-amber-600 cursor-pointer hover:underline"
              onClick={closeMenu}
            >
              Products
            </Link>

            <Link
              to="reviews"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block hover:text-amber-600 cursor-pointer hover:underline"
              onClick={closeMenu}
            >
              Reviews
            </Link>

            <Button title="Login" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
