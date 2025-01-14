import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Help = () => (
  <div>
    <nav className="bg-gray-200 p-4 mb-6">
      <ul className="flex justify-center space-x-8 text-gray-700 font-medium">
        <li>
          <NavLink
            to="faq"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "hover:text-blue-500"
            }
          >
            FAQ
          </NavLink>
        </li>
        <li>
          <NavLink
            to="contact-us"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "hover:text-blue-500"
            }
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
    </nav>
    <div>
      <Outlet />
    </div>
  </div>
);

export default Help;
