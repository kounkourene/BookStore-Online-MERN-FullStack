import React from "react";
import "./Login.css";
import logoImage from "../assets/images/BookstoreLogo.png";

const Login = () => {
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
      </header>
      <div className="wrapper">
        <form action="POST" className="login-form">
          <div className="sign-in-account">
            <a href="register.html">New user: Create an Account</a>
          </div>

          <div className="input-container">
            <label>User Name</label>
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
              placeholder="Enter your password"
              className="login-btn"
              name="password"
              id="password"
            />
          </div>

          <input
            type="submit"
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
