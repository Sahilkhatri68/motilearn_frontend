import React, { useEffect } from "react";
import "./styles/Body.css";
import axios from "axios";
import { API } from "./API/API";
import { useNavigate } from "react-router-dom";

function Body() {
  // const logincheck = true;
  const navigate = useNavigate();

  const checklogin = () => {
    axios
      .get(`${API}/person_login/check_have_token`, {
        withCredentials: true,
      })
      .then((res) => {
        // console.log(res);
        if (res.data !== true) return navigate("/login");
      })
      .catch((err) => {
        navigate("/login");
        console.log(err);
      });
  };

  useEffect(() => {
    checklogin();
  }, []);
  console.log(API);
  const Handle_person_logout = ({ API }) => {
    axios
      .get(`${API}/personlogout`, {
        withCredentials: true,
      })
      .then((res) => {
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <>
        <meta charSet="utf-8" />
        <meta name="description" content="HTML/CSS" />
        <meta name="author" content="Anil" />
        <title>Website -Template</title>
        <link rel="stylesheet" href="css/style.css" />
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          integrity="sha256-eZrrJcwDc/3uDhsdt61sL2oOBY362qM3lon1gyExkL0="
          crossOrigin="anonymous"
        />
        <div className="header" id="topheader">
          <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
            <div className="container text-uppercase p-2">
              <a className="navbar-brand font-weight-bold text-white" href="#">
                Motilearn
              </a>

              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">
                      Home <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#servicediv">
                      Services
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#pricingdiv">
                      Price
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#newsletterdiv">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contactdiv">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <section className="header-section">
            <div className="center-div">
              <h1 className="font-weight-bold">We are the web developers</h1>
              <p>We creates the world best websites</p>
              <div className="header-buttons">
                <a href="#newsletterdiv">AboutUs</a>
                <a href="#contactdiv">ContactUs</a>
                <div
                  style={{
                    marginTop: 40,
                  }}
                >
                  <button className="p-2" onClick={Handle_person_logout}>
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* ***************** header part end ************************** */}
        {/* ********************* three extra header div starts ******************** */}
        <section className="header-extradiv">
          <div className="container">
            <div className="row">
              <div className="extradiv col-lg-4 col-md-4 col-12">
                <a href="#">
                  <i className="fa-3x fa fa-desktop" />
                </a>
                <h2>EASY TO USE</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.{" "}
                </p>
              </div>
              <div className="extradiv col-lg-4 col-md-4 col-12">
                <a href="#">
                  <i className="fa-3x fa fa-trophy" />
                </a>
                <h2>AWESOME DESIGN</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.{" "}
                </p>
              </div>
              <div className="extradiv col-lg-4 col-md-4 col-12">
                <a href="#">
                  <i className="fa-3x fa fa-magic" />
                </a>
                <h2>EASY TO CUSTOMIZE</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.{" "}
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* ********************* three extra header div starts ******************** */}
        {/* ********************* offer section starts ****************************** */}
        <section className="serviceoffers" id="servicediv">
          <div className="container headings text-center">
            <h1 className="text-center font-weight-bold">WHAT DO WE OFFER</h1>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-10 offset-lg-0 offset-1">
                <div className="names my-3">
                  <h1>HTML</h1>
                  <div className="progress w-75">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      aria-valuenow={100}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "100%" }}
                    >
                      100%
                    </div>
                  </div>
                </div>
                <div className="names my-3">
                  <h1>CSS</h1>
                  <div className="progress w-75">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                      role="progressbar"
                      aria-valuenow={90}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "90%" }}
                    >
                      90%
                    </div>
                  </div>
                </div>
                <div className="names my-3">
                  <h1>JAVASCRIPT</h1>
                  <div className="progress w-75">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
                      role="progressbar"
                      aria-valuenow={80}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "80%" }}
                    >
                      80%
                    </div>
                  </div>
                </div>
                <div className="names my-3">
                  <h1>REACTJS</h1>
                  <div className="progress w-75">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated bg-info"
                      role="progressbar"
                      aria-valuenow={50}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "50%" }}
                    >
                      50%
                    </div>
                  </div>
                </div>
                <div className="names my-3">
                  <h1>NODEJS</h1>
                  <div className="progress w-75">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated bg-danger"
                      role="progressbar"
                      aria-valuenow={40}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "40%" }}
                    >
                      40%
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12 servicediv">
                <div className="row">
                  <div className="col-lg-2 col-2 service-icons">
                    <i className="fa-3x fa fa-desktop" />
                  </div>
                  <div className="col-lg-10 col-10">
                    <h2>Website Development</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      sed do eiusmod tempor incididunt.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-2 col-2 service-icons">
                    <i className="fa-3x fa fa-wifi" />
                  </div>
                  <div className="col-lg-10 col-10">
                    <h2>Digital Marketing</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      sed do eiusmod tempor incididunt.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-2 col-2 service-icons">
                    <i className="fa-3x fa fa-phone" />
                  </div>
                  <div className="col-lg-10 col-10">
                    <h2>Support 24/7</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      sed do eiusmod tempor incididunt.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ********************* offer section ends ****************************** */}
        {/* ********************* project (completed) starts ****************************** */}
        <section className="project-work">
          <div className="container headings text-center">
            <p className="text-center font-weight-bold">
              MORE THAN 2,000 WEBSITES CREATED
            </p>
          </div>
          <div className="container d-flex justify-content-around align-items-center text-center">
            <div>
              <h1 className="count">1500</h1>
              <p>CMS Installation</p>
            </div>
            <div>
              <h1 className="count">2500</h1>
              <p>Awards Won</p>
            </div>
            <div>
              <h1 className="count">700</h1>
              <p>Happy Clients</p>
            </div>
            <div>
              <h1 className="count">500</h1>
              <p>Working On</p>
            </div>
          </div>
        </section>
        {/* ********************* project (completed) ends ****************************** */}
        {/* ********************* our pricing start ****************************** */}
        <section className="pricing" id="pricingdiv">
          <div className="container headings text-center">
            <h1 className="text-center font-weight-bold text-white">
              OUR BEST PRICING
            </h1>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-12">
                <div className="card text-center">
                  <div className="card-header">BASIC</div>
                  <div className="card-body">
                    <li>
                      $<span className="money">20</span>/website
                    </li>
                    <li>Responsive Websites</li>
                    <li>Domain Name Free</li>
                    <li>Mobile Friendly</li>
                    <li>Webmail Support</li>
                    <li>Customer Support 24/7</li>
                  </div>
                  <div className="card-footer">
                    <a href="#">Purchase</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-12 card-second">
                <div className="card text-center">
                  <div className="card-header">STANDARD</div>
                  <div className="card-body">
                    <li>
                      $<span className="money">40</span>/website
                    </li>
                    <li>Responsive Websites</li>
                    <li>Domain Name Free</li>
                    <li>Mobile Friendly</li>
                    <li>Webmail Support</li>
                    <li>Customer Support 24/7</li>
                  </div>
                  <div className="card-footer">
                    <a href="#">Purchase</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-12">
                <div className="card text-center">
                  <div className="card-header">UNLIMITED</div>
                  <div className="card-body">
                    <li>
                      $<span className="money">60</span>/website
                    </li>
                    <li>Responsive Websites</li>
                    <li>Domain Name Free</li>
                    <li>Mobile Friendly</li>
                    <li>Webmail Support</li>
                    <li>Customer Support 24/7</li>
                  </div>
                  <div className="card-footer">
                    <a href="#">Purchase</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ********************* our pricing end ****************************** */}
        {/* ********************* our happy clients starts ****************************** */}
        <section className="happyclients">
          <div className="container headings text-center">
            <h1 className="text-center font-weight-bold">OUR HAPPY CLIENTS</h1>
            <p className="text-center text-captalize pt-1">
              Our Satisfied Customer Says
            </p>
          </div>
          <div id="demo" className="carousel slide" data-ride="carousel">
            {/* Indicators */}
            <ul className="carousel-indicators">
              <li data-target="#demo" data-slide-to={0} className="active" />
              <li data-target="#demo" data-slide-to={1} />
              <li data-target="#demo" data-slide-to={2} />
            </ul>
            {/* The slideshow */}
            <div className="carousel-inner container">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-12">
                    <div className="box">
                      <a href="#">
                        <img
                          src="https://t4.ftcdn.net/jpg/02/45/56/35/360_F_245563558_XH9Pe5LJI2kr7VQuzQKAjAbz9PAyejG1.jpg"
                          className="img-fluid img-thumbnail"
                        />
                      </a>
                      <p className="m-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                      </p>
                      <h1>Anil Swami</h1>
                      <h2>Web Developer</h2>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-12">
                    <div className="box">
                      <img
                        src="https://t4.ftcdn.net/jpg/02/45/56/35/360_F_245563558_XH9Pe5LJI2kr7VQuzQKAjAbz9PAyejG1.jpg"
                        className="img-fluid img-thumbnail"
                      />
                      <p className="m-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                      </p>
                      <h1>Anil Swami</h1>
                      <h2>Web Developer</h2>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-12">
                    <div className="box">
                      <a href="#">
                        <img
                          src="https://t4.ftcdn.net/jpg/02/45/56/35/360_F_245563558_XH9Pe5LJI2kr7VQuzQKAjAbz9PAyejG1.jpg"
                          className="img-fluid img-thumbnail"
                        />
                      </a>
                      <p className="m-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                      </p>
                      <h1>Anil Swami</h1>
                      <h2>Web Developer</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-12">
                    <div className="box">
                      <a href="#">
                        <img
                          src="image/clients-thumb.jpg"
                          className="img-fluid img-thumbnail"
                        />
                      </a>
                      <p className="m-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                      </p>
                      <h1>Anil Swami</h1>
                      <h2>Web Developer</h2>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-12">
                    <div className="box">
                      <a href="#">
                        <img
                          src="image/clients-thumb.jpg"
                          className="img-fluid img-thumbnail"
                        />
                      </a>
                      <p className="m-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                      </p>
                      <h1>Anil Swami</h1>
                      <h2>Web Developer</h2>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-12">
                    <div className="box">
                      <a href="#">
                        <img
                          src="image/clients-thumb.jpg"
                          className="img-fluid img-thumbnail"
                        />
                      </a>
                      <p className="m-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                      </p>
                      <h1>Anil Swami</h1>
                      <h2>Web Developer</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-12">
                    <div className="box">
                      <a href="#">
                        <img
                          src="image/clients-thumb.jpg"
                          className="img-fluid img-thumbnail"
                        />
                      </a>
                      <p className="m-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                      </p>
                      <h1>Anil Swami</h1>
                      <h2>Web Developer</h2>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-12">
                    <div className="box">
                      <a href="#">
                        <img
                          src="image/clients-thumb.jpg"
                          className="img-fluid img-thumbnail"
                        />
                      </a>
                      <p className="m-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                      </p>
                      <h1>Anil Swami</h1>
                      <h2>Web Developer</h2>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-12">
                    <div className="box">
                      <a href="#">
                        <img
                          src="image/clients-thumb.jpg"
                          className="img-fluid img-thumbnail"
                        />
                      </a>
                      <p className="m-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                      </p>
                      <h1>Anil Swami</h1>
                      <h2>Web Developer</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Left and right controls */}
            <a className="carousel-control-prev" href="#demo" data-slide="prev">
              <span className="carousel-control-prev-icon" />
            </a>
            <a className="carousel-control-next" href="#demo" data-slide="next">
              <span className="carousel-control-next-icon" />
            </a>
          </div>
        </section>
        {/* ********************* our happy clients end ****************************** */}
        {/* ********************* contact us starts ****************************** */}
        <section className="contactus" id="contactdiv">
          <div className="container headings text-center">
            <h1 className="text-center font-weight-bold">CONTACT US</h1>
            <p className="text-center text-captalize pt-1">
              We're here to help and answer any question you might have. we look
              forward to hearing from you.
            </p>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-8 col-10 offset-lg-2 offset-md-2 offset-1">
                <form action="/action_page.php">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Your Name"
                      id="username"
                      autoComplete="off"
                      required=""
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter Email"
                      id="email"
                      autoComplete="off"
                      required=""
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Enter Mobile Number"
                      id="mobile"
                      autoComplete="off"
                      required=""
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      rows={4}
                      placeholder="Enter Your Message"
                      id="comment"
                      defaultValue={""}
                    />
                  </div>
                  <div className="d-flex justify-content-center form-button">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* ********************* contact us ends ****************************** */}
        {/* ********************* newsletter starts ****************************** */}
        <section className="newsletter" id="newsletterdiv">
          <div className="container headings text-center">
            <h1 className="text-center font-weight-bold">
              SUBSCRIBE TO OUR NEWS LETTER
            </h1>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2 col-12 ">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control newsletter-input"
                    placeholder="Your Email"
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">Subscribe</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ********************* newsletter ends ****************************** */}
        {/* ********************* foter starts ****************************** */}
        <footer className="footersection" id="footerdiv">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12 footer-div">
                <div>
                  <h3>ABOUT ANIWEB</h3>
                  <p>
                    The world has become so fast paced that people don't want to
                    stand by reading a page of information to be they would much
                    rather look at a presentstion and understand the message.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 footer-div">
                <div className="footer-navlinks">
                  <h3>NAVIGATION LINKS</h3>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Price</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-12 footer-div">
                <div>
                  <h3>NEWSLETTER</h3>
                  <p>
                    For business professionals caught between high OEM price and
                    mediocre print and graphic output.
                  </p>
                  <div className="container newsletter-main">
                    <div className="row">
                      <div className="col-lg-12 col-12 ">
                        <div className="input-group mb-3">
                          <input
                            type="text"
                            className="form-control newsletter-input"
                            placeholder="Your Email"
                          />
                          <div className="input-group-append">
                            <span className="input-group-text">Subscribe</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* ********************* footer ends ****************************** */}
      </>
    </div>
  );
}

export default Body;
