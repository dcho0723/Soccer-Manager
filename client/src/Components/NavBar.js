import React from "react";
import { useHistory, NavLink } from "react-router-dom";

function NavBar({ onLogOut }) {
    let history = useHistory();
    
  function handleLogoutClick() {
    fetch("/logout", {
      method: "DELETE",
    }).then(onLogOut);
    history.push('/')
  }

  return (
      <nav>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/players">Search For Players</NavLink>
        <NavLink to="/users">Search For Users</NavLink>
          <button onClick={handleLogoutClick}>Log Out</button>
      </nav>
  )
}

export default NavBar;
