import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { AuthContext } from "../Context/AuthContext";
import { FaBars, FaTimes } from "react-icons/fa";
// import { toast } from "react-toastify";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { CircleLoader } from "react-spinners";
// import { toast } from "react-toastify";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { user, loading, logOut } = useContext(AuthContext);
  // console.log(navLoading)
  const handleLogout = () => {
    logOut()
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));
  };
  // console.log(motion)
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Toys", path: "/allToy" },
    { name: "About", path: "/about" },
    { name: "My Profile", path: "/profile" },
  ];

  return (
    <motion.nav
      className="bg-white shadow-md sticky top-0 z-50"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-11/12 mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold text-blue-600">
          ToyLand
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 font-medium text-gray-800">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-700 border-b-2 border-blue-600 pb-1"
                    : "hover:text-blue-600 transition duration-300"
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right Section */}
        <div className="hidden md:flex items-center space-x-4 relative">
          {loading ? (
            <CircleLoader color="#6e1b1b" />
          ) : user ? (
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 focus:outline-none"
              >
                <img
                  src={user.photoURL || "https://via.placeholder.com/40"}
                  title={user.displayName || "User"}
                  alt="User"
                  className="w-10 h-10 rounded-full border cursor-pointer"
                />
                <span className="font-medium text-gray-800 flex items-center">
                  {user.displayName || "User"}
                  {dropdownOpen ? (
                    <RiArrowDropUpLine size={34} />
                  ) : (
                    <RiArrowDropDownLine size={34} />
                  )}
                </span>
              </button>

              {/* Dropdown */}
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-3 w-44 bg-white shadow-lg rounded-lg py-2 border"
                  >
                    <Link
                      to="/profile"
                      onClick={() => setDropdownOpen(false)}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
                    >
                      My Profile
                    </Link>
                    <button
                      onClick={() => {
                        handleLogout();
                        setDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100 transition"
                    >
                      Logout
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <Link
              to="/login"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium shadow-md transition duration-300"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Hamburger */}
        <div
          className="md:hidden text-gray-800 text-2xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className="md:hidden bg-white px-6 py-4 space-y-4 font-medium text-gray-800 shadow-lg"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-700 font-semibold block"
                      : "hover:text-blue-600 transition block duration-300"
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}

            {/* User in Mobile View */}
            {loading ? (
              <span className="loading loading-dots loading-md"></span>
            ) : user ? (
              <div className="text-center space-y-3 mt-4">
                <img
                  src={user.photoURL || "https://via.placeholder.com/100"}
                  alt="User"
                  className="w-20 h-20 rounded-full mx-auto border"
                />
                <h2 className="text-xl font-semibold">{user.displayName}</h2>
                <p className="text-gray-600 text-sm">{user.email}</p>
                <button
                  onClick={handleLogout}
                  className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg transition duration-300 shadow-md"
                >
                  Log Out
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium text-center shadow-md transition duration-300"
              >
                Login
              </Link>
            )}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
