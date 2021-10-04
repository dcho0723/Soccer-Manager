import React from "react";
import { useHistory, NavLink } from "react-router-dom";

function NavBar({ onLogOut, user }) {
  let history = useHistory();

  function handleLogoutClick() {
    fetch("/logout", {
      method: "DELETE",
    }).then(onLogOut);
    history.push("/");
  }

  return (
    <div>
      {user ? (
        <nav className="navBar">
          <NavLink style={{textDecoration: "none"}} to="/home"> Home </NavLink>
           |
          <NavLink style={{textDecoration: "none"}} to="/players"> Search For Players </NavLink>
           |
          <NavLink style={{textDecoration: "none"}} to="/users"> Search For Users </NavLink>
          <button onClick={handleLogoutClick} className="logoutBtn">Log Out</button>
        </nav>
      ) : null}
    </div>
  );
}

export default NavBar;
