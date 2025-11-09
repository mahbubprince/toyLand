import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./routes/Root.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Myprofile from "./pages/Myprofile.jsx";
import AllToy from "./pages/AllToy.jsx";
import About from "./pages/About.jsx";
import Navbar from "./componants/Navbar.jsx";
import { ToastContainer } from "react-toastify";
import AuthProvider from "./Context/AuthProvider.jsx";
// import { path } from "motion/react-client";
import ErrorPage from "./pages/ErrorPage.jsx";
import ToyDetailes from "./pages/ToyDetailes.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () => fetch("/PopularToys.json"),
      },
      {
        path: "/profile",
        element: <Myprofile></Myprofile>,
      },
      {
        path: "/allToy",
        element: <AllToy></AllToy>,
        loader: () => fetch("/Data.json"),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      { path: "/toydetailes", element: <ToyDetailes></ToyDetailes> },

      // {
      //   index: true,
      //   element: <Home></Home>,
      // },
    ],
  },
  { path: "/*", element: <ErrorPage></ErrorPage> },
  

  // {
  //   path: "/navbar",
  //   element: <Navbar></Navbar>,
  // },
  // {
  //   path: "/login",
  //   element: <Login></Login>,
  // },
  // {
  //   path: "/register",
  //   element: <Register></Register>,
  // },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer></ToastContainer>
    </AuthProvider>
  </StrictMode>
);
