import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import CreatePlayer from "./CreatePlayer";

function Home({ user, setPlayers, players, searchUserPlayer, setUser }) {

  useEffect(() => {
    fetch("/players")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, [setPlayers]);

  function searchUserPlayer() {
    if (user.show_user_players_length === 0) {
      return <Link to="/createplayer">Create Your Player</Link>;
    } else {
      return (
        <div>
          <h1>Your Teams Average Rating {user.get_users_average_rating}</h1>
          <h1>Name: {user.show_users_player_name}</h1>
          <h1>Rating: {user.show_users_player_rating}</h1>
          <h1>DOB: {user.show_users_player_dob}</h1>
          <p>Pace: {user.show_users_player_pace}</p> 
          <p>Shot: {user.show_users_player_shot}</p> 
          <p>Dribble: {user.show_users_player_dribble}</p> 
          <p>Pass: {user.show_users_player_pass}</p> 
          <p>Defence: {user.show_users_player_defence}</p> 
          <p>Physical: {user.show_users_player_physical}</p> 
        </div>
      );
    }
  }

  return (
    <div>
      {searchUserPlayer()}
      <Link to="/team">View Your Team</Link>
    </div>
  );
}

export default Home;
