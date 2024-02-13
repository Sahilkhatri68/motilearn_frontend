import React, { useEffect, useState } from "react";
import axios from "axios";
import { API } from "./API/API";
import IconButton from "@mui/material/IconButton";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Link, useNavigate } from "react-router-dom";
const logo = require("./images/Trans_Logo_Golden.png");
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // code to show and hide password
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const HandleLogin = (e) => {
    e.preventDefault();

    axios
      .post(
        `${API}/person_login`,
        {
          email: email,
          password: password,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res.status);
        if ((res.status = 200)) {
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
        alert(err.response.data.message);
      });
  };

  // code to stop right click on div
  useEffect(() => {
    const handleContextMenu = (event) => {
      event.preventDefault();
    };

    const ele = document.getElementById("no_right_click");
    ele.addEventListener("contextmenu", handleContextMenu);

    // Cleanup the event listener when the component is unmounted
    return () => {
      ele.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);
  return (
    <div>
      <div
        id="no_right_click"
        className="flex items-center min-h-screen p-4 bg-gray-100 justify-center"
      >
        <div className="flex flex-col overflow-hidden justify-center bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
          <div className="p-4 py-6 text-white bg-[#0F1131] md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
            <img src={logo} alt="" />
          </div>
          <div className="p-5 bg-white md:flex-1">
            <h3 className="my-4 text-2xl font-semibold text-gray-700">
              Account Login
            </h3>
            <form action="#" className="flex flex-col space-y-5">
              <div className="flex flex-col space-y-1">
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-gray-500"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-sm font-semibold text-gray-500"
                  >
                    Password
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="px-4 w-full py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                  />
                  <span className="flex justify-center">
                    <IconButton
                      onClick={togglePasswordVisibility}
                      aria-label="delete"
                      size="small"
                    >
                      {showPassword ? (
                        <RemoveRedEyeIcon fontSize="inherit" />
                      ) : (
                        <VisibilityOffIcon fontSize="inherit" />
                      )}
                    </IconButton>
                  </span>
                </div>
              </div>

              <div>
                <button
                  onClick={HandleLogin}
                  className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-[#0F1131] rounded-md shadow hover:bg-[#EDA22D] focus:outline-none focus:ring-blue-200 focus:ring-4"
                >
                  Log in
                </button>
              </div>
              <div className="flex flex-col space-y-5">
                <span className="flex items-center justify-center space-x-2">
                  <span className="h-px bg-gray-400 w-14" />
                  <span className="font-normal text-gray-500">
                    Don't have account ?
                  </span>
                  <span className="h-px bg-gray-400 w-14" />
                </span>
                <div className="flex flex-col space-y-4">
                  <Link to="/signup">
                    <button className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-[#0F1131] rounded-md shadow hover:bg-[#EDA22D] focus:outline-none focus:ring-blue-200 focus:ring-4">
                      Create account
                    </button>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
