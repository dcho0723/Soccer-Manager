import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Home({ user, setPlayers }) {
  //will rerender average rating

  useEffect(() => {
    fetch("/players")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);
  //refractor user serializer

  function returnPlayer() {
    return (
      <div className="teamPlayerDetail">
        <h1 className="teamPlayerName">{user.show_users_player_name}</h1>
        <div className="teamPlayerDetailPic">
          <img src={user.show_users_player_image} style={{ width: "80%" }} />
        </div>
        <div className="teamPlayerDetailInfo">
          <h1 style={{ textAlign: "left", fontSize: "40px" }}>
            Rating: {user.show_users_player_rating}
          </h1>

          {user.show_users_player_position == "Goalie" ? (
            <div className="TeamPlayerDetailStat">
              <h2>Position: {user.show_users_player_position}</h2>
              <p>Diving: {user.show_users_player_pace}</p>
              <p>Handling: {user.show_users_player_shot}</p>
              <p>Kicking: {user.show_users_player_pass}</p>
              <p>Reflexes: {user.show_users_player_dribble}</p>
              <p>Speed: {user.show_users_player_defence}</p>
              <p>Positioning: {user.show_users_player_physical}</p>
            </div>
          ) : (
            <div className="TeamPlayerDetailStat">
              <h2>Position: {user.show_users_player_position}</h2>
              <p>Pace: {user.show_users_player_pace}</p>
              <p>Shot: {user.show_users_player_shot}</p>
              <p>Pass: {user.show_users_player_pass}</p>
              <p>Dribble: {user.show_users_player_dribble}</p>
              <p>Defence: {user.show_users_player_defence}</p>
              <p>Physical: {user.show_users_player_physical}</p>
            </div>
          )}

          <div className="teamPlayerDetailAbout">
            <h2>About</h2>
            {user.favoriteclub ? (
              <p>Favorite Club: {user.favoriteclub}</p>
            ) : null}
            <p>Number: {user.show_users_player_number}</p>
            <p>Date of Birth: {user.show_users_player_dob}</p>
          </div>
        </div>
      </div>
    );
  }

  function searchUserPlayer() {
    if (user.show_user_players_length === 0) {
      return (
        <div className="homePage">
          <h1>Lets Get Started</h1>
          <h3>To create your own team, you must create a player first!</h3>
          <Link to="/createplayer" style={{ textDecoration: "none" }}>
            Please Create Your Own Player
          </Link>
        </div>
      );
    } else {
      return (
        <div className="userPlayer">
          <h1>
            {user.show_users_player_name}'s Team Average Rating{" "}
            {user.get_users_average_rating}
          </h1>
          <Link to="/team">
            <button className="viewTeamBtn">View Your Team</button>
          </Link>
          {returnPlayer()}
        </div>
      );
    }
  }

  return <div>{searchUserPlayer()}</div>;
}

export default Home;
