import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase/Firebase.config";
import { toast } from "react-toastify";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const googleProvidar = new GoogleAuthProvider();

  const handelGoogleReg = () => {
    signInWithPopup(auth, googleProvidar)
      .then((result) => console.log(result.user))
      .catch((error) => console.log(error));
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photoURl = e.target.photoURl.value;
    const name = e.target.name.value;
    if (!/(?=.*[A-Z])/.test(password)) {
      toast.error("Password must contain at least one uppercase letter.");
      return;
    } else if (!/(?=.*[a-z])/.test(password)) {
      toast.error("Password must contain at least one lowercase letter.");
      return;
    } else if (password.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Login successfully");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
    console.log(email);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-linear-to-br from-blue-50 to-blue-100 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-2">
          Create an Account
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Join ToyLand and discover amazing local toys 🎁
        </p>

        {/* Register Form */}
        <form onSubmit={handelSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Photo URL
            </label>
            <input
              type="text"
              name="photoURl"
              placeholder="Paste your profile photo link"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Create a password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-10 text-gray-500 cursor-pointer"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-300 shadow-md"
          >
            Register
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="px-3 text-gray-500 text-sm">or</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        {/* Google Register */}
        {/* <button className="w-full border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-2 rounded-lg transition duration-300">
          Continue with Google
        </button> */}
        <button
          onClick={handelGoogleReg}
          className="border border-gray-300 w-full btn bg-white text-black hover:bg-gray-100"
        >
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>

        {/* Already have account */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600 hover:underline font-medium"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

// import React, { useState } from "react";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { Link } from "react-router"; // ✅ Correct import
// import { motion } from "framer-motion";

// const Register = () => {
//   const [showPassword, setShowPassword] = useState(false);

//   // Animation Variants
//   const containerVariants = {
//     hidden: { opacity: 0, scale: 0.9, y: 50 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut",
//         when: "beforeChildren",
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 15 },
//     visible: { opacity: 1, y: 0 },
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 px-4">
//       <motion.div
//         className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         {/* Title */}
//         <motion.h2
//           className="text-3xl font-bold text-center text-blue-700 mb-2"
//           variants={itemVariants}
//         >
//           Create an Account
//         </motion.h2>

//         <motion.p
//           className="text-center text-gray-500 mb-8"
//           variants={itemVariants}
//         >
//           Join ToyLand and discover amazing local toys 🎁
//         </motion.p>

//         {/* Register Form */}
//         <motion.form className="space-y-5">
//           {/* Full Name */}
//           <motion.div variants={itemVariants}>
//             <label className="block text-gray-700 font-medium mb-2">
//               Full Name
//             </label>
//             <input
//               type="text"
//               name="name"
//               placeholder="Enter your full name"
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
//             />
//           </motion.div>

//           {/* Email */}
//           <motion.div variants={itemVariants}>
//             <label className="block text-gray-700 font-medium mb-2">
//               Email
//             </label>
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter your email"
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
//             />
//           </motion.div>

//           {/* Photo URL */}
//           <motion.div variants={itemVariants}>
//             <label className="block text-gray-700 font-medium mb-2">
//               Photo URL
//             </label>
//             <input
//               type="text"
//               name="photoUrl"
//               placeholder="Paste your profile photo link"
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
//             />
//           </motion.div>

//           {/* Password */}
//           <motion.div className="relative" variants={itemVariants}>
//             <label className="block text-gray-700 font-medium mb-2">
//               Password
//             </label>
//             <input
//               type={showPassword ? "text" : "password"}
//               name="password"
//               placeholder="Create a password"
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
//             />
//             <span
//               onClick={() => setShowPassword(!showPassword)}
//               className="absolute right-3 top-10 text-gray-500 cursor-pointer"
//             >
//               {showPassword ? <FaEyeSlash /> : <FaEye />}
//             </span>
//           </motion.div>

//           {/* Register Button */}
//           <motion.button
//             type="submit"
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg shadow-md"
//             whileHover={{ scale: 1.03 }}
//             whileTap={{ scale: 0.97 }}
//             variants={itemVariants}
//           >
//             Register
//           </motion.button>
//         </motion.form>

//         {/* Divider */}
//         <motion.div className="flex items-center my-6" variants={itemVariants}>
//           <div className="flex-1 border-t border-gray-300"></div>
//           <span className="px-3 text-gray-500 text-sm">or</span>
//           <div className="flex-1 border-t border-gray-300"></div>
//         </motion.div>

//         {/* Google Register */}
//         <motion.button
//           className="w-full border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-2 rounded-lg transition duration-300"
//           whileHover={{ scale: 1.03 }}
//           whileTap={{ scale: 0.97 }}
//           variants={itemVariants}
//         >
//           Continue with Google
//         </motion.button>

//         {/* Already have an account */}
//         <motion.p
//           className="text-center text-sm text-gray-600 mt-6"
//           variants={itemVariants}
//         >
//           Already have an account?{" "}
//           <Link
//             to="/login"
//             className="text-blue-600 hover:underline font-medium"
//           >
//             Login here
//           </Link>
//         </motion.p>
//       </motion.div>
//     </div>
//   );
// };

// export default Register;
