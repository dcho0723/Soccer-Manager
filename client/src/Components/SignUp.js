import React, { useState } from "react";
import { useHistory, NavLink } from "react-router-dom";

function SignUp({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [name, setName] = useState("");
  const [errors, setErrors] = useState([]);
  let history = useHistory();


  function handleSubmit(e) {
    e.preventDefault();
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
        // r.json().then((user) => setUser(user));
        // history.push()
        window.alert("Thank You For Creating An Account")
        ShowAndHide()
        setErrors([])
      } else {
        r.json().then((data) => setErrors(data.errors));
      }
    });
    setUsername("")
    setPassword("")
    setPasswordConfirmation("")
    setName("")

    
  }

  //hiding sign up button
  function ShowAndHide() {
    let x = document.getElementById("showForm");
    let y = document.getElementById("loginForm")
    let b = document.getElementById("signUpButton");
    if (x.style.display === "none") {
      x.style.display = "block";
      b.style.display = "none";
      y.style.display = "none";
    } else if (y.style.display === "none") {
      y.style.display = "block";
      x.style.display = "none"
      b.style.display = "inline-block";
      b.style.textAlign = "center";
      b.style.alignItems = "flex-start";
    }
  }

  return (
    <div className="signUp">
      <h4>Don't Have An Account? </h4>
      <button id="signUpButton" onClick={ShowAndHide}>
        Sign Up
      </button>
      {errors.length > 0 && (
        <div style={{ color: "red" }}>
          {errors.map((error) => (
            <p key={error} style={{ margin: "5px" }}>
              {error}
            </p>
          ))}
        </div>
      )}
      <form
        onSubmit={(e) => handleSubmit(e)}
        id="showForm"
        style={{ display: "none" }}
      >
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br/>
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        <br/>
        <label htmlFor="password">Password Confirmation: </label>
        <input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
        <br/>
        <label htmlFor="name">Name :</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br/>
        <button type="submit" className="submitButton">Sign Up</button>
      </form>
    </div>
  );
}
export default SignUp;
