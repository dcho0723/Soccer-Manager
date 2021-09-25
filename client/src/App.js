import "./App.css";
import { useEffect, useState } from "react";
import { Switch, Route } from "react-router";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";

function App() {
  const [user, setUser] = useState(false);

  // useEffect(() => {
  //   fetch("/players")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // });
  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      }
    })
  }, []);

  return (
    <div>
      {/* <NavBar user={user} setUser={setUser} onLogOut={onLogOut} /> */}
      {user ? (
        <div>
          <Switch></Switch>
        </div>
      ) : (
        <>
          <Login setUser={setUser} />
          <SignUp />
        </>
      )}
    </div>
  );
}

export default App;
