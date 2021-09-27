import "./App.css";
import { useEffect, useState } from "react";
import { Switch, Route } from "react-router";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import PlayerContainer from "./Components/PlayerContainer";

function App() {
  const [user, setUser] = useState(false);
  const [players, setPlayers] = useState([])

  //fetch players
  useEffect(() => {
    fetch("/players")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  },[]);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  function onLogOut() {
    //also need to setPlayer state false
    setUser(false)
  }

  return (
    <div>
        <div>
          <NavBar onLogOut={onLogOut} />
          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/players">
              <PlayerContainer players={players}/>
            </Route>
          </Switch>
        </div>
        <Switch>
          <Route exact path="/">
            <Login setUser={setUser} />
            <SignUp setUser={setUser} />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
