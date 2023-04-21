import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginButton from "./loginButton";
import LogoutButton from "./LogoutButton";
// import { useAuth0 } from "@auth0/auth0-react";
// import LoginButton from "./Login";

export default function NavBar() {
  const state = useSelector((state) => state.handleCart);
  
  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light bg-dark py-3 shadow-sm">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          AmCart
        </NavLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <div className="navbar-nav">
            <NavLink className="nav-link active" aria-current="page" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/products">
              Products
            </NavLink>
            {/* <NavLink className="nav-link" to="/about">
              About
            </NavLink>
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink> */}
            <div className="nav-link buttons">
              {/* <NavLink to="/login" className="btn btn-outline-dark">
                <i className="fa fa-sign-in me-1"></i> Login
              </NavLink> */}
              <LoginButton />
              {/* <button className="btn btn-outline-dark" onClick={(e) => onMyClick(e)}>
                <i className="fa fa-sign-in me-1"></i> Login
              </button> */}
              {/* <NavLink to="/register" className="btn btn-outline-dark ms-2">
                <i className="fa fa-user-plus me-1"></i> Register
              </NavLink> */}
              
              {/* <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                <i className="fa fa-shopping-cart me-1"></i> Cart (
                {state.length})
              </NavLink> */}
            </div>
            <div className="nav-link buttons">
              <LogoutButton />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
