import "./App.css";
import { useEffect, useState } from "react";
import { Switch, Route } from "react-router";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import PlayerContainer from "./Components/PlayerContainer";
import Users from "./Components/Users"
import CreatePlayer from "./Components/CreatePlayer";
import Team from "./Components/Team";

function App() {
  const [user, setUser] = useState(false);
  const [players, setPlayers] = useState([])
  const [teamData, setTeamData] = useState([])

  // fetch all players
  useEffect(() => {
    fetch("/players")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, [setPlayers]);

  //fetch players for team
  useEffect(() => {
    fetch("/team")
      .then((res) => res.json())
      .then((data) => setTeamData(data));
  }, [setTeamData]);
  //////
  // const searchTeam = async () => {
  //   try {
  //     const response = await fetch("team");
  //     if (!response.ok) throw Error();
  //     const data = await response.json();
  //     console.log(data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const getTheData = async () => {
    try {
      const response = await fetch("players");
      if (!response.ok) throw Error();
      const data = await response.json();
      setPlayers(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);


  function onLogOut() {
    //also need to setPlayer state false
    setPlayers([])
    setUser(false)
  }

  return (
    <div>
      
        <div>
          <NavBar onLogOut={onLogOut} />
          <Switch>
            <Route exact path="/home">
              <Home user={user} players={players} setPlayers={setPlayers}/>
            </Route>
            <Route exact path="/players">
              <PlayerContainer players={players} user={user} setTeamData={setTeamData} teamData={teamData}/>
            </Route>
            <Route exact path="/users">
              <Users />
            </Route>
            <Route exact path="/createplayer">
              <CreatePlayer user={user} setPlayers={setPlayers} players={players} getTheData={getTheData}/>
            </Route>
            <Route exact path="/team">
              <Team teamData={teamData} setTeamData={setTeamData}/>
            </Route>
          </Switch>
        </div>
        <Switch>
          <Route exact path="/">
            <Login setUser={setUser}/>
            <SignUp setUser={setUser} />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
