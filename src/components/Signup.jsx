import Cookie from "js-cookie";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import IconButton from "@mui/material/IconButton";
import axios from "axios";
import { API } from "./API/API";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const logo = require("./images/Trans_Logo_Golden.png");
function Signup() {
  // code to register persons/students in DB with usestate
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone_no, setPhone_no] = useState();
  const [confirmPassword, setConfirmPassword] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState();
  const [email_otp, setEmail_otp] = useState("");
  const [modalAction, setModalAction] = useState(false); // state for handling popup box for OTP input
  const [emailotpbox, setEmailotpbox] = useState(false);
  // code to hadnle Modal
  const handleotp = (e) => {
    setEmailotpbox(true);
  };
  // code to show and hide password
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  //for handling gender input
  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };
  // code to post data into DB
  const HandleSubmitData = (e) => {
    e.preventDefault(); //for stop reloading

    if (password === confirmPassword) {
      handleotp();
      axios
        .post(
          `${API}/newperson`,
          {
            name: name,
            email: email,
            password: password,
            phone_no: phone_no,
            gender: gender,
            dob: dob,
            email_otp: email_otp,
          },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          alert("Resigster Success");
          setTimeout(() => {
            if (res.data.status === "success") {
              // window.location.href = "/login";
            }
          }, 1000);
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    } else {
      alert("Password does not matched");
    }
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

  // style for modal popup
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "1px  #000",
    boxShadow: 24,
    p: 2,
  };

  // code to open and close modal
  const handleOpenModal = () => {
    setModalAction(true);
  };
  const handleCloseModal = () => {
    setModalAction(false);
  };

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
              Account Register
            </h3>
            <form action="#" className="flex flex-col space-y-5">
              <div className="flex flex-col space-y-1">
                <label
                  htmlFor="name"
                  className="text-sm font-semibold text-gray-500"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name={name}
                  onChange={(e) => setName(e.target.value)}
                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>
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
              {emailotpbox === true ? (
                <>
                  <div className="flex flex-col space-y-1">
                    <label
                      htmlFor="email"
                      className="text-sm font-semibold text-gray-500"
                    >
                      Enter OTP
                    </label>
                    <input
                      type="number"
                      id="email_otp"
                      name={email_otp}
                      onChange={(e) => setEmail_otp(e.target.value)}
                      className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                    />
                  </div>
                </>
              ) : null}

              <div className="flex flex-col space-y-1">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-sm font-semibold text-gray-500"
                  >
                    Password
                  </label>
                </div>
                <div>
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
              </div>
              <div className="flex flex-col space-y-1">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-sm font-semibold text-gray-500"
                  >
                    Confirm Password
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="confirm-password"
                    name={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
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
              <div className="flex flex-col space-y-1">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-semibold text-gray-500">
                    Date of birth
                  </label>
                </div>
                <input
                  type="date"
                  name={dob}
                  onChange={(e) => setDob(e.target.value)}
                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-semibold text-gray-500">
                    Phone No.
                  </label>
                </div>
                <input
                  type="number"
                  id="number"
                  name={phone_no}
                  onChange={(e) => setPhone_no(e.target.value)}
                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-semibold text-gray-500">
                    Gender
                  </label>
                </div>
                <select
                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                  value={gender}
                  onChange={handleGenderChange}
                >
                  <option>Select...</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Transgender">Transgender</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="flex flex-col space-y-5">
                <div className="flex flex-col space-y-4">
                  <button
                    onClick={HandleSubmitData}
                    className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-[#0F1131] rounded-md shadow hover:bg-[#EDA22D] focus:outline-none focus:ring-blue-200 focus:ring-4"
                  >
                    Create account
                  </button>
                </div>
                <span className="flex items-center justify-center space-x-2">
                  <span className="h-px bg-gray-400 w-14" />
                  <span className="font-normal text-gray-500">
                    Already have account ?
                  </span>
                  <span className="h-px bg-gray-400 w-14" />
                </span>
                <div className="flex flex-col space-y-4">
                  <Link to="/">
                    <button className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-[#0F1131] rounded-md shadow hover:bg-[#EDA22D] focus:outline-none focus:ring-blue-200 focus:ring-4">
                      Back to login
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

export default Signup;
