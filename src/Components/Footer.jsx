import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer_main  pt-5 mt-5">
          <div className="footer_tag">
            <h2>Location</h2>
            <hr className="w-25 mx-auto border-dark" />
            <p>Sri Lanka</p>
            <p>USA</p>
            <p>India</p>
            <p>Japan</p>
            <p className="mb-4">Italy</p>
          </div>

          <div className="footer_tag">
            <h2 className="quicklink">Quick Link</h2>
            <hr className="w-25 mx-auto border-dark" />
            <NavLink to="/">
              <p>Home</p>
            </NavLink>
            <NavLink to="/services">
              <p>Services</p>
            </NavLink>
            <NavLink to="/contact">
              <p>Contact - Us</p>
            </NavLink>
            <NavLink to="about">
              <p className="mb-4">About</p>
            </NavLink>
          </div>

          <div className="footer_tag">
            <h2>Contact</h2>
            <hr className="w-25 mx-auto border-dark" />
            <p>+94 12 3456 789</p>
            <p>+94 25 5568456</p>
            <p>Uddan@gmail.com</p>
            <p className="mb-4">Uddan@gmail.com</p>
          </div>
        </div>

        <p className="end mb-2 pb-4">
          Design by :
          <span>
            <span>Uddan.Com</span>
          </span>
        </p>
      </footer>
    </>
  );
};

export default Footer;
