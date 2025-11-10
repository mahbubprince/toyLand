import { useLocation, useNavigate } from "react-router";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import { auth } from "../firebase/Firebase.config";
import { sendPasswordResetEmail } from "firebase/auth";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const emailRef = useRef();

  const handleForgotPassword = () => {
    const email = emailRef.current.value;

    sendPasswordResetEmail(auth, email)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

 
  const [email, setEmail] = useState(location.state?.email || "");

  const handleReset = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("⚠️ Please enter your email address!");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      toast.success(`✅ Reset link sent to ${email}`);

      setTimeout(() => {
        window.location.href = "https://mail.google.com";
      }, 1000);
    } catch (error) {
      toast.error(`❌ ${error.message}`);
    }
  };

  return (
    <section className="max-w-md mx-auto py-10 px-4">
      <h2 className="text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
        Forgot Password
      </h2>

      <form
        onSubmit={handleReset}
        className="bg-white rounded-2xl shadow-lg p-6 space-y-5"
      >
        <p className="text-gray-600 text-sm mb-2">
          Enter your registered email address and we’ll send you a reset link.
        </p>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          ref={emailRef}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
          required
        />

        <button
          type="submit"
          onClick={handleForgotPassword}
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-md"
        >
          Reset Password
        </button>
      </form>

      <p
        onClick={() => navigate("/login")}
        className="text-blue-600 text-center mt-5 cursor-pointer underline hover:text-indigo-700"
      >
        ← Back to Login
      </p>
    </section>
  );
};

export default ForgotPassword;
