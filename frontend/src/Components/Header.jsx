import React from "react";
import "./homepage.css";
import logoImage from "../assets/images/BookstoreLogo.png";

const Header = () => {
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
              <a className="main-nav-link" href="#Home">
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
    </div>
  );
};

export default Header;
