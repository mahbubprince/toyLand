// import React, { useState } from "react";
// import { Link, NavLink } from "react-router";
// import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "Toys", path: "/allToy" },
//     { name: "About", path: "/about" },
//     { name: "My Profile", path: "/profile" },
//   ];

//   // const navLinks=<>
//   // <li><NavLink to='/'>Home</NavLink></li>
//   // </>

//   return (
//     <nav className="bg-white shadow-md sticky top-0 z-50">
//       <div className="w-11/12 mx-auto px-6 py-4 flex justify-between items-center">
//         {/* Logo */}
//         <div className="text-3xl font-bold text-blue-600 cursor-pointer">
//           ToyLand
//         </div>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex space-x-10 font-medium text-gray-800">
//           {navLinks.map((link) => (
//             <li key={link.name}>
//               <NavLink
//                 to={link.path}
//                 className={({ isActive }) =>
//                   isActive
//                     ? "text-blue-700 border-b-2 border-blue-600 pb-1 "
//                     : "hover:text-blue-600 transition duration-300"
//                 }
//               >
//                 {link.name}
//               </NavLink>
//             </li>
//           ))}
//           {/* {navLinks} */}
//         </ul>

//         {/* User Icon + Login */}
//         <div className="hidden md:flex items-center space-x-4">
//           <FaUserCircle className="text-2xl text-gray-700 cursor-pointer" />
//           <Link to='/login' className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium shadow-md transition duration-300">
//             Login
//           </Link>
//         </div>

//         {/* Mobile Hamburger */}
//         <div
//           className="md:hidden text-gray-800 text-2xl cursor-pointer"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? <FaTimes /> : <FaBars />}
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <ul className="md:hidden bg-white px-6 py-4 space-y-4 font-medium text-gray-800 shadow-lg">
//           {navLinks.map((link) => (
//             <li key={link.name}>
//               <NavLink
//                 to={link.path}
//                 className={({ isActive }) =>
//                   isActive
//                     ? "text-blue-700 font-semibold block"
//                     : "hover:text-blue-600 transition block duration-300"
//                 }
//                 onClick={() => setIsOpen(false)}
//               >
//                 {link.name}
//               </NavLink>
//             </li>
//           ))}
//           <li className="flex items-center space-x-3 mt-2">
//             <FaUserCircle className="text-2xl text-gray-700" />
//             <Link
//               to="/login"
//               className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium shadow-md transition duration-300"
//             >
//               Login
//             </Link>
//           </li>
//         </ul>
//       )}
//     </nav>
//   );
// };


// export default Navbar;




import React, { useState } from "react";
import { Link, NavLink } from "react-router"; // ✅ Correct import
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="w-11/12 mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          className="text-3xl font-bold text-blue-600 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ToyLand
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 font-medium text-gray-800">
          {navLinks.map((link) => (
            <motion.li key={link.name} whileHover={{ scale: 1.1 }}>
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
            </motion.li>
          ))}
        </ul>

        {/* User Icon + Login */}
        <motion.div
          className="hidden md:flex items-center space-x-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <FaUserCircle className="text-2xl text-gray-700 cursor-pointer" />
          <Link
            to="/login"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium shadow-md transition duration-300"
          >
            Login
          </Link>
        </motion.div>

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
              <motion.li
                key={link.name}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
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
              </motion.li>
            ))}
            <motion.li
              className="flex items-center space-x-3 mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <FaUserCircle className="text-2xl text-gray-700" />
              <Link
                to="/login"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium shadow-md transition duration-300"
              >
                Login
              </Link>
            </motion.li>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
