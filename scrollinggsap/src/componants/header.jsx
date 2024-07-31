import "../App.css";
import { useState } from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="nav">
      <div className="nav-container">
        <div className="navbar">
          <div className="logo-container">SCROLLING</div>
          <div
            className="menu-toggle"
            onClick={() => {
              setShow(!show);
            }}
          >
            <div className={show ? "hamBox homBoxOpen" : "hamBox"}>
              <span className={show ? "lineTop spin" : "lineTop"}></span>
              <span className={show ? "lineBottom spin" : "lineBottom"}></span>
            </div>
          </div>
        </div>
        <div
          className="nav-overlay"
          style={{
            top: show ? "0" : "-100%",
          }}
        >
          <ul className="nav-links">
            <li className="nav-link">
              <Link
                to="/home"
                onClick={() => {
                  setShow(!show);
                }}
                style={{
                  opacity: show ? 1 : 0,
                  top: show ? 0 : "120px",
                  transitionDelay : show ? "0.8s" : "0s"
                }}
              >
                Home
              </Link>
            </li>
            <li className="nav-link">
              <Link
                to="/project"
                onClick={() => {
                  setShow(!show);
                }}
                style={{
                  opacity: show ? 1 : 0,
                  top: show ? 0 : "120px",
                  transitionDelay : show ? "1s" : "0s"
                }}
              >
                Poject
              </Link>
            </li>
            <li className="nav-link">
              <Link
                to="/about"
                onClick={() => {
                  setShow(!show);
                }}
                style={{
                  opacity: show ? 1 : 0,
                  top: show ? 0 : "120px",
                  transitionDelay : show ? "1.2s" :" 0s"
                }}
              >
                About
              </Link>
            </li>
            <li className="nav-link">
              <Link
                to="/contact"
                onClick={() => {
                  setShow(!show);
                }}
                style={{
                  opacity: show ? 1 : 0,
                  top: show ? 0 : "120px",
                  transitionDelay : show ? "1.4s" : "0s"
                }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Nav;
