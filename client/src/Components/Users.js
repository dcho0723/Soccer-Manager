import React from "react";
import { Link } from "react-router-dom";

function Users({ user, allUsers }) {
  return (
    <>
      {user.show_user_players_length !== 0 ? (
        <div>
          <h1 style={{ textAlign: "center" }}>Browse Profiles In MyTeam</h1>
          <div className="playerContainer">
            {allUsers
              .filter((users) => users.id != user.id)
              .map((users) => {
                if (users.show_users_player) {
                  return (
                    <div>
                      {users.show_users_player.position === "Goalie" ? (
                        <div className="playerCard">
                          <h1 className="playerName">
                            {users.show_users_player.name}
                          </h1>
                          <h2 className="ratingName">
                            Rating: {users.show_users_player.rating}
                          </h2>
                          <div style={{ textAlign: "center" }}>
                            <img
                              src={users.show_users_player.image}
                              className="playerImg"
                            />
                            <h3 className="playerPosition">
                              Position: {users.show_users_player.position}
                            </h3>
                          </div>
                          <div className="goalieStat">
                            <p>Diving: {users.show_users_player.pace}</p>
                            <p>Handling: {users.show_users_player.shot}</p>
                            <p>Kicking: {users.show_users_player.pass}</p>
                          </div>
                          <div>
                            <p>Reflexes: {users.show_users_player.dribble}</p>
                            <p>Speed: {users.show_users_player.defence}</p>
                            <p>
                              Positioning: {users.show_users_player.physical}
                            </p>
                          </div>
                          <Link
                            className="linkToUserTeam"
                            to={`/users/${users.id}`}
                          >
                            <button className="viewTeamBtn">
                              View {users.name}'s Team
                            </button>
                          </Link>
                        </div>
                      ) : (
                        <div className="playerCard">
                          <h1 className="playerName">
                            {users.show_users_player.name}
                          </h1>
                          <h2 className="ratingName">
                            Rating: {users.show_users_player.rating}
                          </h2>
                          <div style={{ textAlign: "center" }}>
                            <img
                              src={users.show_users_player.image}
                              className="playerImg"
                            />
                            <h3 className="playerPosition">
                              Position: {users.show_users_player.position}
                            </h3>
                          </div>
                          <div className="playerStat">
                            <p>Pace: {users.show_users_player.pace}</p>
                            <p>Shot: {users.show_users_player.shot}</p>
                            <p>Pass: {users.show_users_player.pass}</p>
                          </div>
                          <div>
                            <p>Dribble: {users.show_users_player.dribble}</p>
                            <p>Defence: {users.show_users_player.defence}</p>
                            <p>Physical: {users.show_users_player.physical}</p>
                          </div>
                          <Link
                            className="linkToUserTeam"
                            to={`/users/${users.id}`}
                          >
                            <button className="viewTeamBtn">
                              View {users.name}'s Team
                            </button>
                          </Link>
                        </div>
                      )}
                    </div>
                  );
                } else {
                  return (
                    <div className="playerCard">
                      <h1
                        className="playerName"
                        style={{ marginLeft: "30px", marginRight: "30px" }}
                      >
                        {users.name}
                      </h1>
                      <h3 className="noTeamMessage">
                        {users.name} has not created a team yet
                      </h3>
                      <Link to={`/users/${users.id}`}>
                        <button className="viewTeamBtn">
                          View {users.name}'s Team
                        </button>
                      </Link>
                    </div>
                  );
                }
              })}
          </div>
        </div>
      ) : (
        <h1 style={{ textAlign: "center" }}>Please Create A Player First!</h1>
      )}
    </>
  );
}

export default Users;
