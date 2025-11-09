import React, { use, useRef, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  // signInWithEmailAndPassword,
  // signOut,
} from "firebase/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router"; // ✅ correct import
import { auth } from "../firebase/Firebase.config";
import { toast } from "react-toastify";
import { AuthContext } from "../Context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  // const [user, setUser] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const {
    signInWithEmailAndPasswordFunc,
    googleProviderFunc,
    githubProviderFunc,
    setLoading,
    setUser,
  } = use(AuthContext);
  // const [emailForReset, setEmailForReset] = useState("");
  const emailRef = useRef(null);

  const handleGoogleLogin = () => {
    // signInWithPopup(auth, googleProvider)
    googleProviderFunc()
      .then((result) => {
        setUser(result);
        setLoading(false);
        console.log(result.user);
        toast.success("Google login successful!");
      })
      .catch((error) => {
        toast.error(error.message);
        console.log(error.code);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    // signInWithEmailAndPassword(auth, email, password)
    signInWithEmailAndPasswordFunc(email, password)
      .then((result) => {
        setUser(result.user);
        toast.success("Login successful!");
        navigate("/");
      })
      .catch((error) => toast.error(error.message));
  };
  const handleGithubRegistation = () => {
    // signInWithPopup(auth, githubProvider)
    githubProviderFunc()
      .then((result) => {
        console.log(result.user);
        toast.success("register by github");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleForgotPassword = () => {
    const email = emailRef.current.value;
    console.log(email);
    sendPasswordResetEmail(auth, email)
      .then((result) => {
        console.log(result);
        toast.success("Password reset email sent!");
      })
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

        {/* {user ? (
          
        ) : ( */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              ref={emailRef}
              name="email"
              placeholder="Enter your email"
              // onChange={(e) => setEmailForReset(e.target.value)}
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
        {/* )} */}

        {/* {!user && (
          <> */}
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

        {/* github */}
        <button
          onClick={handleGithubRegistation}
          className="w-full mt-3 btn bg-black text-white border-black"
        >
          <svg
            aria-label="GitHub logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fill="white"
              d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
            ></path>
          </svg>
          Login with GitHub
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
        {/* </> */}
        {/* )} */}
      </div>
    </div>
  );
};

export default Login;
