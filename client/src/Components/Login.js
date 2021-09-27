import React, { useState } from "react";
import { Link } from "react-router-dom"

function Login({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
              
          } else {
              r.json().then((data) => window.alert(data.error))
          }
      })
  }
  return (
    <div>
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
        <label htmlFor="password">Password:{" "}</label>
        <input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit"><Link to="/home">LogIn</Link ></button>
      </form>
    </div>
  );
}

export default Login;
