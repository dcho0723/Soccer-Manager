import React, { useEffect } from "react";
import { Link } from "react-router-dom"
function Home({ user, setPlayers, players }) {

    console.log(user)

    useEffect(() => {
        fetch("/players")
          .then((res) => res.json())
          .then((data) => setPlayers(data));
      },[]);
    
  return (
    <div>
      <h1>hello in home</h1>
      {user.show_user_players === 0 ? <Link to="/createplayer">Create Your Player</Link> : <h1>render our player</h1>}
    </div>
  );
}

export default Home;