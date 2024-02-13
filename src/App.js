import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/Login";
import axios from "axios";
import Signup from "./components/Signup";
import Header from "./components/Header";
import Body from "./components/Body";
import Aboutus from "./components/Aboutus";
import Profile from "./components/Profile";
axios.defaults.withCredentials = true;

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Body />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/header" element={<Header />}></Route>
        <Route path="/aboutus" element={<Aboutus />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;
