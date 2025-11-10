import React from "react";
import { Link, useRouteError } from "react-router";
import { motion } from "framer-motion";
import { FaHome } from "react-icons/fa";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-linear-to-br from-blue-50 via-white to-pink-100 text-gray-800 px-6">
      <title>ToyLand-Error404</title>
      {/* Animated Number */}
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="text-[150px] font-extrabold text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-pink-500 select-none"
      >
        404
      </motion.h1>

      {/* Subtext */}
      <motion.h2
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-3xl font-bold mb-4"
      >
        Oops! Page Not Found
      </motion.h2>

      <motion.p
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-gray-600 max-w-md text-center mb-8"
      >
        The page you’re looking for doesn’t exist or was moved somewhere else.
        <br />
        {error?.statusText || error?.message ? (
          <span className="block mt-2 text-sm text-gray-500">
            <i>{error.statusText || error.message}</i>
          </span>
        ) : null}
      </motion.p>

      {/* Button */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Link
          to="/"
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md transition-all duration-300 hover:scale-105"
        >
          <FaHome />
          Back to Home
        </Link>
      </motion.div>

      {/* Floating Shapes for fun visual appeal */}
      <motion.div
        className="absolute top-20 left-10 w-16 h-16 bg-pink-400 rounded-full opacity-30 blur-2xl"
        animate={{ y: [0, 30, 0], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-20 h-20 bg-blue-400 rounded-full opacity-30 blur-2xl"
        animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      />
    </div>
  );
};

export default ErrorPage;
