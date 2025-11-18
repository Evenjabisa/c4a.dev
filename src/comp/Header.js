import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="myheader">
      <header className="hide-when-mobile Adel">
        <h1>
          <Link to="/">C4a.dev</Link>
        </h1>

        <ul className="flex">
          <li className="main-list">
            <NavLink className="main-link" to="/Html">
              HTML
            </NavLink>

            {/* <ul className="sub-ul">
              <li>
                <a href="#">Full Course</a>
              </li>
              <li>
                <a href="#">Crash Course</a>
              </li>
              <li>
                <a href="#">Learn in 1h</a>
              </li>
            </ul> */}
          </li>

          <li className="main-list">
            <NavLink className="main-link" to="/Css">
              CSS
            </NavLink>

            {/* <ul className="sub-ul">
              <li>
                <a href="#">Full Course</a>
              </li>
              <li>
                <a href="#">CSS Examples</a>
              </li>

              <li className="mini-projects">
                <a href="#">Mini Projects&nbsp;+</a>
                <ul className="sub-sub-ul">
                  <li>
                    <a href="#">Project 1</a>
                  </li>
                  <li>
                    <a href="#">Project 2</a>
                  </li>
                  <li>
                    <a href="#">Project 3</a>
                  </li>
                </ul>
              </li>
            </ul> */}
          </li>

          <li className="main-list">
            <NavLink className="main-link" to="/Javascript">
              JavaScript
            </NavLink>
            {/* <ul className="sub-ul sub-of-js">
              <li>
                <a href="#">Coming soon 🔥</a>
              </li>
            </ul> */}
          </li>
        </ul>
      </header>

      <header    className="show-when-mobile">
        <h1>
          <Link to="/">C4a.dev</Link>
        </h1>

        <label className="absolute" htmlFor="burger">
          <i className="fas fa-bars"></i>
        </label>

        <input id="burger" type="checkbox" />

        <div className="show-on-click">
          <div className="main-div">
            <label htmlFor="html">
              HTML <i className="fas fa-plus"></i>
            </label>
            <input id="html" type="checkbox" />

            <ul className="sub-div">
              <li>
                <a href="#">Full Course</a>
              </li>
              <li>
                <a href="#">Crash Course</a>
              </li>
              <li>
                <a href="#">Learn in 1h</a>
              </li>
            </ul>
          </div>

          <div className="main-div">
            <label htmlFor="css">
              CSS <i className="fas fa-plus"></i>
            </label>
            <input id="css" type="checkbox" />

            <ul className="sub-div">
              <li>
                <a href="#">Full Course</a>
              </li>
              <li>
                <a href="#">CSS Examples</a>
              </li>

              <li>
                <label className="mini-projects" htmlFor="mini">
                  Mini Projects <i className="fas fa-plus"></i>
                </label>
                <input id="mini" type="checkbox" />

                <ul className="sub-sub-div">
                  <li>
                    <a href="#">Project 1</a>
                  </li>
                  <li>
                    <a href="#">Project 2</a>
                  </li>
                  <li>
                    <a href="#">Project 3</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="main-div">
            <label htmlFor="js">
              JavaScript <i className="fas fa-plus"></i>
            </label>
            <input id="js" type="checkbox" />

            <ul className="sub-div">
              <li>
                <a href="#">Coming soon 🔥</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
