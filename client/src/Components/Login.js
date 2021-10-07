import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Credentials from "./Credentials";

function Login({
  setUser,
  addPlayersToTeam,
  fetchAllUsers,
  setPassword,
  password,
  getTheData,
}) {
  const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  let history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
        addPlayersToTeam();
        fetchAllUsers();
        getTheData();
        history.push("/welcome");
      } else {
        r.json().then((data) => window.alert(data.error));
      }
    });
  }

  return (
    <>
      <h1 className="myTeam">MyTeam</h1>
      <div id="loginForm">
        <form onSubmit={(e) => handleSubmit(e)}>
          <h3>Please Sign In</h3>
          <label htmlFor="username">UserName: </label>
          <input
            type="text"
            id="username"
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ marginLeft: "7px" }}
          />
          <br />
          <button type="submit" className="submitButton">
            LogIn
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
