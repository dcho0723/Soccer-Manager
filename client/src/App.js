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
import TeamDetail from "./Components/TeamDetail"
import Welcome from "./Components/Welcome"
import { useHistory } from "react-router-dom"
import UserDetail from "./Components/UserDetail";

function App() {
  const [user, setUser] = useState(false);
  const [players, setPlayers] = useState([])
  const [teamData, setTeamData] = useState([])
  let history = useHistory()
  const [allUsers, setAllUsers] = useState([]);

  // fetch all players
  useEffect(() => {
    fetch("/players")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, [setPlayers]);

  // fetch players for team
  useEffect(() => {
    fetch("/team")
      .then((res) => res.json())
      .then((data) => setTeamData(data));
  }, [setTeamData]);

  ////
  const fetchTeamPlayers = async () => {
    try {
      const response = await fetch("/team");
      if (!response.ok) throw Error();
      const data = await response.json();
      setTeamData(data)
    } catch (err) {
      console.log(err);
    }
    history.push('/team')
  };

  useEffect(() => {
    fetch("/users")
      .then((res) => res.json())
      .then((data) => setAllUsers(data));
  }, []);

  const addPlayersToTeam = async () => {
    try {
      const response = await fetch("/team");
      if (!response.ok) throw Error();
      const data = await response.json();
      setTeamData(data)
    } catch (err) {
      console.log(err);
    }
  };

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
  }, [setUser, players]);

  function onLogOut() {
    setPlayers([])
    setTeamData([])
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
              <PlayerContainer players={players} user={user} setTeamData={setTeamData} teamData={teamData} addPlayersToTeam={addPlayersToTeam}/>
            </Route>
            <Route exact path="/users">
              <Users user={user} allUsers={allUsers}/>
            </Route>
            <Route exact path="/users/:id">
              <UserDetail allUsers={allUsers}/>
            </Route>
            <Route exact path="/createplayer">
              <CreatePlayer user={user} setPlayers={setPlayers} players={players} getTheData={getTheData}/>
            </Route>
            <Route exact path="/team">
              <Team teamData={teamData} setTeamData={setTeamData} user={user}/>
            </Route>
            <Route exact path="/team/:id">
              <TeamDetail teamData={teamData} user={user} setTeamData={setTeamData} fetchTeamPlayers={fetchTeamPlayers}/>
            </Route>
            <Route exact path="/welcome">
              <Welcome/>
            </Route>
          </Switch>
        </div>
        {!user ? 
        <Switch>
          <Route exact path="/">
            <Login setUser={setUser} addPlayersToTeam={addPlayersToTeam}/>
            <SignUp setUser={setUser} />
          </Route>
        </Switch>
        : null}
    </div>
  );
}

export default App;
