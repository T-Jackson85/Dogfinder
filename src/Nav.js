import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

function Nav({ dogs }) {
  return (
    <nav>
      {dogs.map(dog => (
        <NavLink key={dog.name} to={`/dogs/${dog.name.toLowerCase()}`} className="nav-link">
          {dog.name}
        </NavLink>
      ))}
      <NavLink to="/dogs" className="nav-link">Home</NavLink>
    </nav>
  );
}

export default Nav;
