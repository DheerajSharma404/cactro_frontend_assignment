import { Bell, ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { NAV_LINKS, USER_MENU } from "../constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <nav className="bg-[#2A2F3E] text-white w-full">
      <div className=" mx-auto px-4">
        <div className="flex justify-between h-16 ">
          {/* Logo and Desktop Navigation */}
          <div className="flex items-center justify-between  gap-28  border-amber-400">
            <Link to="/" className="flex-shrink-0">
              <span className="text-[#00BFA5] text-2xl font-bold">H</span>
              <span className="text-white text-2xl">OURS</span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:ml-10 md:flex md:space-x-8 md:justify-center md:flex-1 text-white  transition-all duration-100">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.id}
                  to={link.url}
                  className="px-3 py-2  hover:text-white border-b-2 border-transparent hover:border-[#00BFA5]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Side - Notifications and Profile */}
          <div className="flex items-center">
            {/* Notification Bell */}
            <button className="p-2 text-gray-300 hover:text-white  hover:bg-white/40 rounded-lg transition-all duration-75">
              <Bell size={20} />
            </button>

            {/* Profile Dropdown */}
            <div className="ml-4 relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-3 focus:outline-none"
              >
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="User avatar"
                />
                <span className="hidden md:block">Mario</span>
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {/* Profile Dropdown Menu */}
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                  {USER_MENU.map((item) => (
                    <Link
                      key={item.id}
                      to={item.url}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden ml-4 text-gray-300 hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.id}
                  to={link.url}
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
