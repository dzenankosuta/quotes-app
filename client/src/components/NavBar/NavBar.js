import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { TokenContext } from "../../context/TokenContext";
import "./NavBar.css";

const NavBar = () => {
  const { handleLogout } = useContext(TokenContext);
  return (
    <div className="navbar">
      <NavLink
        style={{
          height: "100%",
          position: "absolute",
          left: "3rem",
          top: "0.3rem",
          alignSelf: "flex-end",
        }}
        to="/"
      >
        <img
          src={require("../../images/logo.png")}
          alt="logo"
          className="img"
        />
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "link-active" : "link")}
        to="/quotes"
      >
        QUOTES
      </NavLink>
      <button className="btn" onClick={handleLogout}>
        LOGOUT
      </button>
    </div>
  );
};

export default NavBar;
