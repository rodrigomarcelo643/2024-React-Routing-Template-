import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => (
  <div>
    <nav className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-4">
      <ul className="flex justify-center space-x-8 text-white font-bold">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-yellow-300" : "hover:text-yellow-300"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-yellow-300" : "hover:text-yellow-300"
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/help"
            className={({ isActive }) =>
              isActive ? "text-yellow-300" : "hover:text-yellow-300"
            }
          >
            Help
          </NavLink>
        </li>
      </ul>
    </nav>
    <div className="container mx-auto p-8">
      <Outlet />
    </div>
  </div>
);

export default Navbar;
