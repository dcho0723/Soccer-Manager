import React, { useState } from "react";
import { useHistory, NavLink } from "react-router-dom";

function SignUp({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [name, setName] = useState("");
  const [errors, setErrors] = useState([]);
//   let history = useHistory();

  function handleSubmit(e) {
    e.prevent.default();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
        name: name,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
        // history.push("/");
      } else {
        r.json().then((data) => setErrors(data.errors));
      }
    });
  }

  return (
    <div>
      {errors.length > 0 && (
        <div style={{ color: "red" }}>
          {errors.map((error) => (
            <p key={error} style={{ margin: "5px" }}>
              {error}
            </p>
          ))}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        <label htmlFor="password">Password Confirmation: </label>
        <input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
        <label htmlFor="name">Name :</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
export default SignUp;
