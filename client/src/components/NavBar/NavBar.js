import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { TokenContext } from "../../context/TokenContext";
import "./NavBar.css";

const NavBar = () => {
  const { handleLogout } = useContext(TokenContext);
  const activeStyle = {
    padding: "0.6rem",
    borderRadius: "0.5rem",
    backgroundColor: "#f0f8ff",
    color: "#212926",
  };
  const classicStyle = {
    backgroundColor: "#7ba798",
    color: "#f0fffa",
  };
  return (
    <div className="navbar">
      <NavLink
        style={{ height: "100%", position: "absolute", left: "3rem" }}
        to="/"
      >
        <img
          src={require("../../images/logo2.png")}
          alt="logo"
          className="img"
        />
      </NavLink>
      <NavLink
        className="link"
        to="/quotes"
        style={({ isActive }) => (isActive ? activeStyle : classicStyle)}
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
