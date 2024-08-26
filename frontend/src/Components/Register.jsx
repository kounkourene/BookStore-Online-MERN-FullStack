import React, { useState } from "react";
import "./Register.css";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
//import logoImage from "../assets/images/BookstoreLogo.png";

const Register = () => {
  return (
    <div>
      {/* <header className="header">
        <img src={logoImage} alt="bookstore-logo" className="image-logo" />
        <form>
          <input className="input-header" type="text" name="search" size="40" />
          <button className="header-button">Search</button>
        </form>

        <nav>
          <ul className="main-nav-list">
            <li>
              <a className="main-nav-link" href="homepage.html">
                Home
              </a>
            </li>
            <li>
              <a className="main-nav-link" href="login.html">
                Sign In
              </a>
            </li>
            <li>
              <a className="main-nav-link" href="register.html">
                Register
              </a>
            </li>
            <li>
              <a className="main-nav-link" href="#Addtocart">
                Cart
              </a>
            </li>
          </ul>
        </nav>
      </header> */}
      <div>
        <h2>Fill out this form to create your account</h2>
      </div>
      <div className="wrapper">
        <form id="register-form">
          <label>First Name</label>
          <input
            type="text"
            name="firs-name"
            id="firs-name"
            className="register-form"
          />
          <label>Last Name</label>
          <input
            type="text"
            name="Last Name"
            id="last-name"
            className="register-form"
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="register-form"
          />
          <label>Phone Number</label>
          <input
            type="number"
            name="phone-number"
            id="phone-number"
            className="register-form"
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="register-form"
          />
          <label>Confirm Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="register-form"
          />
          <input
            type="submit"
            name="button"
            id="button-1"
            value="Create Account"
            className="register-form"
          />
        </form>
        <Link to="/">Login Page</Link>
      </div>

      {/* <div className="footer">
        <footer>
          <p>Copyright &COPY; 2024 By Rene Kounkou</p>
        </footer>
      </div> */}
    </div>
  );
};

export default Register;
