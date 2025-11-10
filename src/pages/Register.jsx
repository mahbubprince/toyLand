import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router";

import { toast } from "react-toastify";
import { AuthContext } from "../Context/AuthContext";

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const {
    createUserWithEmailAndPasswordFunc,
    googleProviderFunc,
    updateProfilefunc,
    githubProviderFunc,
    logOut,
    setUser,
    setLoading,
  } = useContext(AuthContext);

  const handelGoogleReg = () => {
    // signInWithPopup(auth, googleProvidar)
    googleProviderFunc()
      .then((result) => {
        setLoading(false);
        console.log(result.user);
        toast.success(" Login successful with Google");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => console.log(error));
  };
  const handleGithubRegistation = () => {
    // signInWithPopup(auth, githubProvider)
    githubProviderFunc()
      .then((result) => {
        setLoading(false);
        console.log(result.user);
        toast.success(" Login successful with Github");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photoURL = e.target.photoURl.value;
    const displayName = e.target.name.value;

    // ✅ Basic validation
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

    createUserWithEmailAndPasswordFunc(email, password)
      .then((result) => {
        const newUser = result.user;
        // toast.success("Please login to continue!");

        return updateProfilefunc(displayName, photoURL)
          .then(() => {
            setUser({ ...newUser, displayName, photoURL });
            toast.success("Successfully registered. please login to continue!");

            return logOut()
              .then(() => {
                navigate("/login");
              })
              .catch((error) => {
                toast.error(error.message);
              });
          })
          .then(() => {
            setUser(null);
          });
      })
      .catch((error) => {
        console.error("Error:", error.message);
        toast.error(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-linear-to-br from-blue-50 to-blue-100 px-4 py-7">
      <title>ToyLand-Register</title>
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-2">
          Create an Account
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Join ToyLand and discover amazing local toys 🎁
        </p>

        {/* Register Form */}
        <form onSubmit={handelSubmit} className="space-y-3 ">
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              required
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
              required
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
              required
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
              required
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
        {/* GitHub */}
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
