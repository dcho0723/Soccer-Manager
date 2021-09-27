import React from "react";
import { Link } from "react-router-dom"
function Home({ user }) {
    console.log(user)
    console.log(user.show_user_players)
  return (
    <div>
      <h1>hello in home</h1>
      {/* <h1> please create a player</h1> */}
      {user.show_user_players === 0 ? <Link to="/createplayer">Create Your Player</Link> : <h1>render our player</h1>}
      {/* render show player if player player exist  */}

    </div>
  );
}

export default Home;
