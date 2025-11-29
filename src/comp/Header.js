import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import "../theme.css";
// level II
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="myheader">
      <header className="hide-when-mobile Adel">
        <h1>
          <Link to="/">C4a.dev</Link>
        </h1>
        {/* <button
          onClick={() => {
            toggleTheme(theme === "Light" ? "Dark" : "Light");
          }}
          className="theme-btn"
        >
          {theme}
        </button> */}
        <i
          onClick={() => {
            toggleTheme(theme === "Light" ? "Dark" : "Light");
          }}
          className="fa-solid fa-moon"
        ></i>
        <i
          onClick={() => {
            toggleTheme(theme === "Light" ? "Dark" : "Light");
          }}
          className="fa-solid fa-sun"
        ></i>
        <li className="main-list">
          <NavLink className="main-link" to="/Signin">
            Sign In
          </NavLink>
        </li>
        <li className="main-list">
          <NavLink className="main-link" to="/Signup">
            Sign Up
          </NavLink>
        </li>

        <ul className="flex">
          <li className="main-list">
            <NavLink className="main-link" to="/html">
              HTML
            </NavLink>

            <ul className="sub-ul">
              <li>
                <NavLink to="/html">Full Course</NavLink>
              </li>
              <li>
                <NavLink to="#">Crash Course</NavLink>
              </li>
              <li>
                <NavLink to="#">Learn in 1h</NavLink>
              </li>
            </ul>
          </li>

          <li className="main-list">
            <NavLink className="main-link" to="/javascript">
              JavaScript
            </NavLink>
            <ul className="sub-ul sub-of-js">
              <li>
                <NavLink to="#">Coming soon 🔥</NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </header>

      <header className="show-when-mobile Adel">
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
                <NavLink to="/html">Full Course</NavLink>
              </li>
              <li>
                <NavLink to="#">Crash Course</NavLink>
              </li>
              <li>
                <NavLink to="#">Learn in 1h</NavLink>
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
                <NavLink to="/css">Full Course</NavLink>
              </li>
              <li>
                <NavLink to="#">CSS Examples</NavLink>
              </li>

              <li>
                <label className="mini-projects" htmlFor="mini">
                  Mini Projects <i className="fas fa-plus"></i>
                </label>
                <input id="mini" type="checkbox" />

                <ul className="sub-sub-div">
                  <li>
                    <NavLink to="#">Project 1</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">Project 2</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">Project 3</NavLink>
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
                <NavLink to="/javascript">Coming soon 🔥</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
