import React from "react";
import Header from "./Header";
const heroimg = require("./images/hero.png");
const about = require("./images/aboutus.png");

function Aboutus({ Children }) {
  return (
    <div>
      <Header
        Children={
          <div>
            {" "}
            <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
              <div className="mr-auto place-self-center lg:col-span-7">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
                  About Us <br />
                </h1>
                <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                  Welcome to <b>Motilearn</b>, where [briefly describe what your
                  company does or offers]. We are [briefly highlight your
                  company's main focus or mission].
                </p>
              </div>
              <div className="lg:mt-0 lg:col-span-5 lg:flex">
                <img src={about} alt="hero image" />
              </div>
            </div>
          </div>
        }
      ></Header>
    </div>
  );
}

export default Aboutus;
