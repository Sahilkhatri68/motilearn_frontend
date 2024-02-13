import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles/header.css";
import MenuIcon from "@mui/icons-material/Menu";
import axios from "axios";
import { API } from "./API/API";
function Header({ Children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("home");

  const [islogged, setIslogged] = useState(false); //to check user have token or not

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    closeMenu();
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // code to check if user is logged in or not
  // const navigate = useNavigate();

  const checklogin = () => {
    axios
      .get(`${API}/login/check_have_token`, {
        withCredentials: true,
      })
      .then((res) => {
        // console.log(res);
        if (res.data === true) {
          setIslogged(true);
        }
      })
      .catch((err) => {
        setIslogged(false);
        // console.log(err);
      });
  };

  useEffect(() => {
    checklogin();
  }, []);

  return (
    <div>
      <nav className={`navbar ${isOpen ? "open" : ""}`}>
        <div className="logo">Motilearn</div>
        <div
          className={`menu-toggle ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <MenuIcon
            sx={{
              color: "white",
            }}
          />
        </div>
        <ul className={`nav-list ${isOpen ? "open" : ""}`}>
          <li>
            <Link
              to="/"
              onClick={() => handleMenuClick("home")}
              className={activeMenu === "home" ? "active" : ""}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/aboutus"
              onClick={() => handleMenuClick("about")}
              className={activeMenu === "about" ? "active" : ""}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onClick={() => handleMenuClick("contact")}
              className={activeMenu === "contact" ? "active" : ""}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onClick={() => handleMenuClick("contact")}
              className={activeMenu === "contact" ? "active" : ""}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onClick={() => handleMenuClick("contact")}
              className={activeMenu === "contact" ? "active" : ""}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onClick={() => handleMenuClick("contact")}
              className={activeMenu === "contact" ? "active" : ""}
            >
              Projects
            </Link>
          </li>
          <li>
            {islogged === false ? (
              <Link
                to="/login"
                onClick={() => handleMenuClick("contact")}
                className={activeMenu === "contact" ? "active" : ""}
              >
                Login
              </Link>
            ) : (
              <Link
                to="/profile"
                onClick={() => handleMenuClick("contact")}
                className={activeMenu === "contact" ? "active" : ""}
              >
                Profile
              </Link>
            )}
          </li>
        </ul>
      </nav>
      <div>{Children}</div>
    </div>
  );
}

export default Header;
