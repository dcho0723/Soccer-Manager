import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import CreatePlayer from "./CreatePlayer";

function Home({ user, setPlayers, players, searchUserPlayer }) {
  //   const userPlayer = players.filter((player) => player.name === user.name);
  //   console.log(userPlayer);
  //   console.log(user.show_first_player)
  //   const userPlayerMap = userPlayer.map((player) => {
  //     return (<div key={player.id}>
  //         <h1>{player.name}</h1>
  //     </div>);
  //   });
  //   const userPlayerMap = user.show_first_player;

  useEffect(() => {
    fetch("/players")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, [setPlayers]);
  console.log(user.show_users_player)

  function searchUserPlayer() {
    if (user.show_user_players_length === 0) {
      return <Link to="/createplayer">Create Your Player</Link>;
    } else {
      return (
        <div>
          <h1>heres users player</h1>
          <h1>{user.show_users_player["name"]}</h1>
          <h1>{user.show_users_player["dob"]}</h1>
          <p>{user.show_users_player["pace"]}</p>
          {/* add users data here */}
        </div>
      );
    }
  }

  return (
    <div>
      <h1>hello in home</h1>
      {searchUserPlayer()}
      <Link to="/team">View Your Team</Link>
    </div>
  );
}

export default Home;
