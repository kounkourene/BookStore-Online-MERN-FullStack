import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { Link } from "react-router-dom";

import logoImage from "../assets/images/BookstoreLogo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const data = {
      email: email,
      password: password,
    };
    try {
      await axios.post("http://localhost:5000/users/login", data);
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
        <form className="login-form">
          <div className="sign-in-account">
            <Link to="/register">New user: Create an Account</Link>
          </div>

          <div className="input-container">
            <label>Email</label>
            <input
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Enter your email"
              className="login-btn"
              name="user-name"
              id="user-name"
            />
            <label>Password</label>
            <input
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Enter your password"
              className="login-btn"
              name="password"
              id="password"
            />
          </div>

          <input
            type="submit"
            onClick={handleLogin}
            name="button"
            value="Sign In"
            className="login-btn login"
            id="sign-in"
          />
          <div id="remember-me">
            <input type="checkbox" name="remember-me" value="remember-me" />
            <label>Remember me</label>
          </div>
        </form>
      </div>
      <div>
        <div className="footer">
          <footer>
            <p>Copyright &COPY; 2024 By Rene Kounkou</p>
          </footer>
        </div>
      </div>
      ;
    </div>
  );
};

export default Login;
