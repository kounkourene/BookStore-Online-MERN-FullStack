import React from "react";
import "./homepage.css";
import logoImage from "../assets/images/BookstoreLogo.png";
import image1 from "../assets/images/1.jpg";
import image2 from "../assets/images/2.jpg";
import image3 from "../assets/images/3.jpg";
import image4 from "../assets/images/4.jpg";
import image5 from "../assets/images/5.jpg";
import image6 from "../assets/images/6.jpg";
import image7 from "../assets/images/7.webp";
import image8 from "../assets/images/8.webp";
import image9 from "../assets/images/9.webp";
import image10 from "../assets/images/10.webp";
import image11 from "../assets/images/11.webp";
import image12 from "../assets/images/12.webp";
import image13 from "../assets/images/13.webp";
import image14 from "../assets/images/14.webp";
import image15 from "../assets/images/15.webp";
import image16 from "../assets/images/16.webp";
import image17 from "../assets/images/17.webp";
import image18 from "../assets/images/18.webp";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <section>
      <div>
        <header className="header">
          <img src={logoImage} alt="bookstore-logo" className="image-logo" />

          <form>
            <input
              className="input-header"
              type="text"
              name="search"
              size="40"
            />
            <button className="header-button">Search</button>
          </form>

          <nav>
            <ul className="main-nav-list">
              <li>
                <Link to="" className="main-nav-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="login" className="main-nav-link">
                  Sign In
                </Link>
              </li>
              <li>
                <Link to="register" className="main-nav-link">
                  Register
                </Link>
              </li>
              <li>
                <Link to="" className="main-nav-link">
                  Cart
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <section className="section-header">
          <div className="book-list-detail">
            <div className="book-description">
              <p className="home-text">
                Find your place at Evergreen online Bookstore. Over 1 million
                books ready to ship, 1.5 million eBooks and 100,000 audiobooks
                to download right now.
              </p>
            </div>
          </div>
        </section>
      </div>{" "}
      <div className="book-details1">
        <div className="general-section1-division">
          <div className="ul-list-books1">
            <ul className="list-books-images">
              <li>
                <dv>
                  <dv>
                    <a href="#">
                      <img
                        src={image1}
                        width="150"
                        height="200"
                        alt="image 1"
                      />
                    </a>
                  </dv>
                  <div>
                    <p className="book-price">$17.25 USD</p>
                    <input
                      className="add-to-cart"
                      type="submit"
                      value="Add to cart"
                    />
                  </div>
                </dv>
              </li>
              <li>
                <dv>
                  <dv>
                    <a href="#">
                      <img
                        src={image2}
                        alt="image 2"
                        width="170"
                        height="207"
                      />
                    </a>
                  </dv>
                  <div>
                    <p className="book-price">$32.50 USD</p>
                    <input
                      className="add-to-cart"
                      type="submit"
                      value="Add to cart"
                    />
                  </div>
                </dv>
              </li>
              <li>
                <dv>
                  <dv>
                    <a href="#">
                      <img
                        src={image3}
                        width="150"
                        height="200"
                        alt=" Image 3"
                      />
                    </a>
                  </dv>
                  <div>
                    <p className="book-price">$17.25 USD</p>
                    <input
                      className="add-to-cart"
                      type="submit"
                      value="Add to cart"
                    />
                  </div>
                </dv>
              </li>
              <li>
                <dv>
                  <dv>
                    <a href="#">
                      <img
                        src={image4}
                        width="150"
                        height="200"
                        alt="Image 4"
                      />
                    </a>
                  </dv>
                  <div>
                    <p className="book-price">$17.25 USD</p>
                    <input
                      className="add-to-cart"
                      type="submit"
                      value="Add to cart"
                    />
                  </div>
                </dv>
              </li>
              <li>
                <dv>
                  <dv>
                    <a href="#">
                      <img
                        src={image5}
                        width="150"
                        height="200"
                        alt="Image 5"
                      />
                    </a>
                  </dv>
                  <div>
                    <p className="book-price">$50.40 USD</p>
                    <input
                      className="add-to-cart"
                      type="submit"
                      value="Add to cart"
                    />
                  </div>
                </dv>
              </li>
              <li>
                <dv>
                  <dv>
                    <a href="#">
                      <img
                        src={image6}
                        width="150"
                        height="200"
                        alt="Image 6"
                      />
                    </a>
                  </dv>
                  <div>
                    <p className="book-price">$20.25 USD</p>
                    <input
                      className="add-to-cart"
                      type="submit"
                      value="Add to cart"
                    />
                  </div>
                </dv>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="book-details2">
        <div className="general-section2-division">
          <div className="ul-list-books2">
            <ul className="list-books-images2">
              <li>
                <dv>
                  <dv>
                    <a href="#">
                      <img
                        src={image7}
                        width="150"
                        height="200"
                        alt="Image 7"
                      />
                    </a>
                  </dv>
                  <div>
                    <p className="book-price">$17.25 USD</p>
                    <input
                      className="add-to-cart"
                      type="submit"
                      value="Add to cart"
                    />
                  </div>
                </dv>
              </li>
              <li>
                <dv>
                  <dv>
                    <a href="#">
                      <img
                        src={image8}
                        width="150"
                        height="200"
                        alt="Image 8"
                      />
                    </a>
                  </dv>
                  <div>
                    <p className="book-price">$32.50 USD</p>
                    <input
                      className="add-to-cart"
                      type="submit"
                      value="Add to cart"
                    />
                  </div>
                </dv>
              </li>
              <li>
                <dv>
                  <dv>
                    <a href="#">
                      <img src={image10} width="150" height="200" alt="10" />
                    </a>
                  </dv>
                  <div>
                    <p className="book-price">$17.25 USD</p>
                    <input
                      className="add-to-cart"
                      type="submit"
                      value="Add to cart"
                    />
                  </div>
                </dv>
              </li>
              <li>
                <dv>
                  <dv>
                    <a href="#">
                      <img
                        src={image11}
                        width="150"
                        height="200"
                        alt="Image 11"
                      />
                    </a>
                  </dv>
                  <div>
                    <p className="book-price">$17.25 USD</p>
                    <input
                      className="add-to-cart"
                      type="submit"
                      value="Add to cart"
                    />
                  </div>
                </dv>
              </li>
              <li>
                <dv>
                  <dv>
                    <a href="#">
                      <img
                        src={image12}
                        width="150"
                        height="200"
                        alt="Image 12"
                      />
                    </a>
                  </dv>
                  <div>
                    <p className="book-price">$50.40 USD</p>
                    <input
                      className="add-to-cart"
                      type="submit"
                      value="Add to cart"
                    />
                  </div>
                </dv>
              </li>
              <li>
                <dv>
                  <dv>
                    <a href="#">
                      <img
                        src={image13}
                        width="150"
                        height="200"
                        alt="Image 13"
                      />
                    </a>
                  </dv>
                  <div>
                    <p className="book-price">$20.25 USD</p>
                    <input
                      className="add-to-cart"
                      type="submit"
                      value="Add to cart"
                    />
                  </div>
                </dv>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="general-section3-division">
        <div className="ul-list-books3">
          <ul className="list-books-images3">
            <li>
              <dv>
                <dv>
                  <a href="#">
                    <img
                      src={image14}
                      width="150"
                      height="200"
                      alt="Image 14"
                    />
                  </a>
                </dv>
                <div>
                  <p className="book-price">$17.25 USD</p>
                  <input
                    className="add-to-cart"
                    type="submit"
                    value="Add to cart"
                  />
                </div>
              </dv>
            </li>
            <li>
              <dv>
                <dv>
                  <a href="#">
                    <img
                      src={image15}
                      width="170"
                      height="207"
                      alt="Image 15"
                    />
                  </a>
                </dv>
                <div>
                  <p className="book-price">$32.50 USD</p>
                  <input
                    className="add-to-cart"
                    type="submit"
                    value="Add to cart"
                  />
                </div>
              </dv>
            </li>
            <li>
              <dv>
                <dv>
                  <a href="#">
                    <img
                      src={image16}
                      width="150"
                      height="200"
                      alt="Image 16"
                    />
                  </a>
                </dv>
                <div>
                  <p className="book-price">$17.25 USD</p>
                  <input
                    className="add-to-cart"
                    type="submit"
                    value="Add to cart"
                  />
                </div>
              </dv>
            </li>
            <li>
              <dv>
                <dv>
                  <a href="#">
                    <img
                      src={image17}
                      width="150"
                      height="200"
                      alt="Image 17"
                    />
                  </a>
                </dv>
                <div>
                  <p className="book-price">$17.25 USD</p>
                  <input
                    className="add-to-cart"
                    type="submit"
                    value="Add to cart"
                  />
                </div>
              </dv>
            </li>
            <li>
              <dv>
                <dv>
                  <a href="#">
                    <img
                      src={image18}
                      width="150"
                      height="200"
                      alt="Image 18"
                    />
                  </a>
                </dv>
                <div>
                  <p className="book-price">$50.40 USD</p>
                  <input
                    className="add-to-cart"
                    type="submit"
                    value="Add to cart"
                  />
                </div>
              </dv>
            </li>
            <li>
              <dv>
                <dv>
                  <a href="#">
                    <img src={image9} width="150" height="200" alt="Image 9" />
                  </a>
                </dv>
                <div>
                  <p className="book-price">$20.25 USD</p>
                  <input
                    className="add-to-cart"
                    type="submit"
                    value="Add to cart"
                  />
                </div>
              </dv>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer">
        <footer>
          <p className="footer-text">Copyright; 2024 By Rene Kounkou</p>
        </footer>
      </div>
    </section>
  );
};

export default Homepage;
