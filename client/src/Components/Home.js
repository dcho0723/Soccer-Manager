import React, { useEffect } from "react";
import { Link } from "react-router-dom";
function Home({ user, setPlayers, players }) {
  console.log(user);

  const userPlayer = players.filter((player) => player.name === user.name);
//   console.log(userPlayer);
  console.log(user.show_first_player)
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

  return (
    <div>
      <h1>hello in home</h1>
      {user.show_user_players === 0 ? (
        <Link to="/createplayer">Create Your Player</Link>
      ) : (
        <div>
            <h1>heres users player</h1>
            <h1>{user.show_first_player["name"]}</h1>
            <h1>{user.show_first_player["dob"]}</h1>
            <p>{user.show_first_player["pace"]}</p>
            {/* add users data here */}
        </div>
      )}
    </div>
  );
}

export default Home;
