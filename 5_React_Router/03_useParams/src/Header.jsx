import React, { useEffect } from "react";
// modificando a classe ".active"
import './Header.css';
import { NavLink, Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  useEffect(() => {
    console.log('Mudou de rota');
  }, [location]);

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
