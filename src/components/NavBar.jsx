import React from "react";
import { NavLink } from "react-router-dom";
import LoginButton from "./loginButton";
import LogoutButton from "./LogoutButton";

export default function NavBar() {

  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light bg-dark py-3 shadow-sm">
      <div className="container">
        <NavLink className="navbar-brand" to="/">Ecommerce</NavLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <div className="navbar-nav">
            <NavLink className="nav-link active" aria-current="page" to="/"> Home </NavLink>
            <NavLink className="nav-link" to="/products"> Products </NavLink>
            <div className="nav-link buttons">
              <LoginButton />
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
