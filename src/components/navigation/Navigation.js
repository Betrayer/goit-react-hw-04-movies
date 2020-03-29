import React from "react";
import { NavLink } from "react-router-dom";
import css from "./navigation.module.css";

const Navigation = () => {
  return (
    <div className={css.navigationWrapper}>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink to="/movies">Movies</NavLink>
    </div>
  );
};

export default Navigation;
