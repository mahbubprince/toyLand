// import {
//   GoogleAuthProvider,
//   sendPasswordResetEmail,
//   signInWithEmailAndPassword,
//   signInWithPopup,
//   signOut,
// } from "firebase/auth";
// import React, { useState } from "react";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { Link } from "react-router";
// import { auth } from "../firebase/Firebase.config";
// import { toast } from "react-toastify";

// const Login = () => {
//   const [user, setUser] = useState(null);
//   const [showPassword, setShowPassword] = useState(false);

//   const googleProvidar = new GoogleAuthProvider();
//   const handelGoogleReg = () => {
//     signInWithPopup(auth, googleProvidar)
//       .then((result) => {
//         console.log(result.user);
//         setUser(result.user);
//       })
//       .catch((error) => console.log(error));
//   };
//   const handelLogOut = () => {
//     signOut(auth)
//       .then((result) => {
//         console.log(result);
//         toast.success("Logout successful");
//         setUser(null);
//       })
//       .catch((error) => {
//         console.log(error);
//         toast.error(error.message);
//       });
//   };

//   const handelSubmit = (e) => {
//     e.preventDefault();

//     const email = e.target.email.value;
//     const password = e.target.password.value;

//     signInWithEmailAndPassword(auth, email, password)
//       .then((result) => {
//         console.log(result.user);
//         toast.success("Login successfully");
//         setUser(result.user);
//       })
//       .catch((error) => {
//         console.log(error);
//         toast.error(error.message);
//       });
//     // console.log(email, password);
//   };
//   console.log(user);

//   const handelForgotPass = () => {
//     sendPasswordResetEmail(auth);
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-linear-to-br from-blue-50 to-blue-100 px-4">
//       <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
//         {/* Title */}
//         <h2 className="text-3xl font-bold text-center text-blue-700 mb-2">
//           Welcome Back
//         </h2>
//         <p className="text-center text-gray-500 mb-8">
//           Login to continue exploring amazing toys 🎲
//         </p>

//         {/* Form */}
//         {user ? (
//           <div className="text-center space-y-3">
//             <img
//               className="w-20 h-20 rounded-full mx-auto"
//               src={user?.photoURL || "photo.jpg"}
//               alt=""
//             />
//             <h2 className="text-xl font-semibold">{user?.displayName}</h2>
//             <h2 className="text-xl font-semibold">{user?.email}</h2>
//             <button
//               onClick={handelLogOut}
//               className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-300 shadow-md"
//             >
//               {" "}
//               Log Out
//             </button>
//           </div>
//         ) : (
//           <form onSubmit={handelSubmit} className="space-y-5">
//             {/* Email */}
//             <div>
//               <label className="block text-gray-700 font-medium mb-2">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Enter your email"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
//               />
//             </div>

//             {/* Password */}
//             <div className="relative">
//               <label className="block text-gray-700 font-medium mb-2">
//                 Password
//               </label>
//               <input
//                 type={showPassword ? "text" : "password"}
//                 name="password"
//                 placeholder="Enter your password"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
//               />
//               <span
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-3 top-10 text-gray-500 cursor-pointer"
//               >
//                 {showPassword ? <FaEyeSlash /> : <FaEye />}
//               </span>
//             </div>

//             {/* Forgot password */}
//             <div className="text-right">
//               <Link
//                 onClick={handelForgotPass}
//                 to="/forgot-password"
//                 className="text-sm text-blue-600 hover:underline"
//               >
//                 Forgot Password?
//               </Link>
//             </div>

//             {/* Login button */}
//             <button
//               type="submit"
//               className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-300 shadow-md"
//             >
//               Login
//             </button>
//           </form>
//         )}

//         {/* Divider */}
//         <div className="flex items-center my-6">
//           <div className="flex-1 border-t border-gray-300"></div>
//           <span className="px-3 text-gray-500 text-sm">or</span>
//           <div className="flex-1 border-t border-gray-300"></div>
//         </div>

//         {/* Google Login */}
//         {user ? (
//           <div className="text-center space-y-3">
//             <img
//               className="w-20 h-20 rounded-full mx-auto"
//               src={user?.photoURL || "photo.jpg"}
//               alt=""
//             />
//             <h2 className="text-xl font-semibold">{user?.displayName}</h2>
//             <h2 className="text-xl font-semibold">{user?.email}</h2>
//             <button
//               onClick={handelLogOut}
//               className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-300 shadow-md"
//             >
//               {" "}
//               Log Out
//             </button>
//           </div>
//         ) : (
//           <div>
//             <button
//               onClick={handelGoogleReg}
//               className="border border-gray-300 w-full btn bg-white text-black hover:bg-gray-100"
//             >
//               <svg
//                 aria-label="Google logo"
//                 width="16"
//                 height="16"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 512 512"
//               >
//                 <g>
//                   <path d="m0 0H512V512H0" fill="#fff"></path>
//                   <path
//                     fill="#34a853"
//                     d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
//                   ></path>
//                   <path
//                     fill="#4285f4"
//                     d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
//                   ></path>
//                   <path
//                     fill="#fbbc02"
//                     d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
//                   ></path>
//                   <path
//                     fill="#ea4335"
//                     d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
//                   ></path>
//                 </g>
//               </svg>
//               Login with Google
//             </button>
//           </div>
//         )}

//         {/* Register link */}
//         <p className="text-center text-sm text-gray-600 mt-6">
//           Don’t have an account?{" "}
//           <Link
//             to="/register"
//             className="text-blue-600 hover:underline font-medium"
//           >
//             Create one
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import {
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router"; // ✅ correct import
import { auth } from "../firebase/Firebase.config";
import { toast } from "react-toastify";

const Login = () => {
  const [user, setUser] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [emailForReset, setEmailForReset] = useState("");

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        toast.success("Google login successful!");
      })
      .catch((error) => {toast.error(error.message)
        console.log(error.code)
        
      });
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        toast.success("Logout successful!");
      })
      .catch((error) => toast.error(error.message));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        toast.success("Login successful!");
      })
      .catch((error) => toast.error(error.message));
  };

  const handleForgotPassword = () => {
    if (!emailForReset) {
      toast.error("Please enter your email first!");
      return;
    }
    sendPasswordResetEmail(auth, emailForReset)
      .then(() => toast.success("Password reset email sent!"))
      .catch((error) => toast.error(error.message));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-2">
          Welcome Back 👋
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Login to continue exploring amazing toys 🎲
        </p>

        {user ? (
          <div className="text-center space-y-3">
            <img
              className="w-20 h-20 rounded-full mx-auto border"
              src={user.photoURL || "https://via.placeholder.com/100"}
              alt="user"
            />
            <h2 className="text-xl font-semibold">{user.displayName}</h2>
            <p className="text-gray-600">{user.email}</p>
            <button
              onClick={handleLogout}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-300 shadow-md"
            >
              Log Out
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                onChange={(e) => setEmailForReset(e.target.value)}
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
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-10 text-gray-500 cursor-pointer"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            {/* Forgot password */}
            <div className="text-right">
              <button
                type="button"
                onClick={handleForgotPassword}
                className="text-sm text-blue-600 hover:underline"
              >
                Forgot Password?
              </button>
            </div>

            {/* Login button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-300 shadow-md"
            >
              Login
            </button>
          </form>
        )}

        {!user && (
          <>
            <div className="flex items-center my-6">
              <div className="flex-1 border-t border-gray-300"></div>
              <span className="px-3 text-gray-500 text-sm">or</span>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>

            <button
              onClick={handleGoogleLogin}
              className="border border-gray-300 w-full bg-white text-black py-2 rounded-lg hover:bg-gray-100 flex items-center justify-center space-x-2"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="Google"
                className="w-5 h-5"
              />
              <span>Login with Google</span>
            </button>

            <p className="text-center text-sm text-gray-600 mt-6">
              Don’t have an account?{" "}
              <Link
                to="/register"
                className="text-blue-600 hover:underline font-medium"
              >
                Create one
              </Link>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
