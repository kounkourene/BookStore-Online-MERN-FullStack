import React, { useState } from "react";
import "./Register.css";
import axios from "axios";
import { Link } from "react-router-dom";
import logoImage from "../assets/images/BookstoreLogo.png";

const Register = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
      password: password,
    };
    try {
      await axios.post("http://localhost:5000/users/register", data);
      console.log("Registered successfully");
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <header className="header">
        <img src={logoImage} alt="bookstore-logo" className="image-logo" />
        <form>
          <input className="input-header" type="text" name="search" size="40" />
          <button className="header-button">Search</button>
        </form>

        <nav>
          <ul className="main-nav-list">
            <li>
              <Link to="/" className="main-nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/login" className="main-nav-link">
                Sign In
              </Link>
            </li>
            <li>
              <Link to="/register" className="main-nav-link">
                Register
              </Link>
            </li>
            <li>
              <Link to="/" className="main-nav-link">
                Cart
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <div className="wrapper">
        <form id="register-form">
          <div>
            <h4>Create your account</h4>
          </div>
          <label>First Name</label>
          <input
            type="text"
            name="firs-name"
            id="firs-name"
            value={firstName}
            onChange={(e) => setfirstName(e.target.value)}
            className="register-form"
            placeholder="Enter you first name"
          />
          <label>Last Name</label>
          <input
            type="text"
            name="Last Name"
            value={lastName}
            onChange={(e) => setlastName(e.target.value)}
            id="last-name"
            className="register-form"
            placeholder="Enter you last name"
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="register-form"
            placeholder="Enter your email"
          />
          <label>Phone Number</label>
          <input
            type="number"
            name="phone-number"
            id="phone-number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="register-form"
            placeholder="Enter you phone number"
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="register-form"
            placeholder="Enter you password"
          />
          <input
            onClick={handleRegister}
            type="submit"
            name="button"
            id="button-1"
            value="Create Account"
            className="register-form register"
          />
        </form>
      </div>

      <div className="footer">
        <footer>
          <p>Copyright &COPY; 2024 By Rene Kounkou</p>
        </footer>
      </div>
    </div>
  );
};

export default Register;
