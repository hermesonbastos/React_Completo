import React from "react";
// modificando a classe ".active"
import './Header.css';
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <NavLink activeStyle={{ color: "tomato" }} to="/" end>
        Home
      </NavLink>{" "}
      |{" "}
      <NavLink activeStyle={{ color: "tomato" }} to="sobre">
        Sobre
      </NavLink>{" "}
      |{" "}
      <NavLink activeStyle={{ color: "tomato" }} to="login">
        Login
      </NavLink>
    </div>
  );
};

export default Header;
