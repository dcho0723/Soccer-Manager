import React, { useEffect } from "react";
import { Link } from "react-router-dom";
function Home({ user, setPlayers, players }) {
  console.log(user);

  const userPlayer = players.filter((player) => player.name === user.name);
  console.log(userPlayer);
  const userPlayerMap = userPlayer.map((player) => {
    return (<div key={player.id}>
        <h1>{player.name}</h1>
    </div>);
  });

  useEffect(() => {
    fetch("/players")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, [setPlayers]);

  return (
    <div>
      <h1>hello in home</h1>
      {user.show_user_players === 0 ? (
        <Link to="/createplayer">Create Your Player</Link>
      ) : (
        <>{userPlayerMap}</>
      )}
    </div>
  );
}

export default Home;
