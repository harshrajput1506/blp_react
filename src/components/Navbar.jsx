import React, { useState } from "react";
import logo from "../assets/blp_logo.png";
import { navItems } from "../constants/Constant";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [sideNavOpen, setSideNavOpen] = useState(false);
  function toggleNavBar() {
    setSideNavOpen(!sideNavOpen);
  }
  return (
    <nav className="top-0 py-3">
      <div className="container px-4 mx-auto relative">
        <div className="flex justify-between items-center">
          <Link to="/">
            <div>
              <img src={logo} alt="logo" className=" h-16 w-16" />
            </div>
          </Link>
          <ul className=" hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => {
              return (
                <li key={index}>
                  <NavLink
                    className="font-medium text-lg hover:text-primary"
                    to={item.href}
                  >
                    {item.label}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <div className="hidden lg:flex justify-center items-center">
            <a
              className=" py-2 px-6 border-2 border-secondary text-secondary rounded-full font-semibold hover:bg-secondary hover:text-white transition-colors"
              href="/about"
            >
              Know More
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavBar}>
              {sideNavOpen ? (
                <X className="w-8 h-8" />
              ) : (
                <Menu className="h-8 w-8" />
              )}
            </button>
          </div>
        </div>

        {sideNavOpen && (
          <div className=" fixed right-0 z-20 bg-white w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <NavLink className="font-medium text-lg" to={item.href}>
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <a
                className="py-2 px-6 border-2 border-secondary text-secondary rounded-full font-semibold"
                href="/about"
              >
                Know More
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
