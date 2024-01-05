import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  useEffect(() => {
    console.log('Mudou a rota');
  }, [location])


  return (
    <div>
      <NavLink activeStyle={{ color: "tomato" }} to="/">
        Home
      </NavLink>{" "}
      |{" "}
      <NavLink activeStyle={{ color: "tomato" }} to="/sobre">
        Sobre
      </NavLink>{" "}
      |{" "}
      <NavLink activeStyle={{ color: "tomato" }} to="/login">
        Login
      </NavLink>
    </div>
  );
};

export default Header;
