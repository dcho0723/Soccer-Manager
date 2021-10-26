//refractored for teamdetail 

return (
  <div>
    <div>
      {teamData
        .filter((player) => player.id == id)
        .map((player) => {
          currentPlayerBench = player.bench;
            return (
              <div className="teamPlayerDetail">
                <h1 className="teamPlayerName">{player.name}</h1>
                <div className="teamPlayerDetailPic">
                  <img
                    src={player.image}
                    style={{ width: "80%", marginBottom: "100px" }}
                  />
                </div>
                <div className="teamPlayerDetailInfo">
                  <h1 style={{ textAlign: "left", fontSize: "40px" }}>
                    Rating: {player.rating}
                  </h1>
                  {player.position == "Goalie" ? (
                    <div className="TeamPlayerDetailStat">
                      <h2>Position: {player.position}</h2>
                      <p>Diving: {player.pace}</p>
                      <p>Handling: {player.shot}</p>
                      <p>Kicking: {player.pass}</p>
                      <p>Reflexes: {player.dribble}</p>
                      <p>Speed: {player.defence}</p>
                      <p>Positioning: {player.physical}</p>
                    </div>
                  ) : (
                    <div className="TeamPlayerDetailStat">
                      <h2>Position: {player.position}</h2>
                      <p>Pace: {player.pace}</p>
                      <p>Shot: {player.shot}</p>
                      <p>Pass: {player.pass}</p>
                      <p>Dribble: {player.dribble}</p>
                      <p>Defence: {player.defence}</p>
                      <p>Physical: {player.physical}</p>
                    </div>
                  )}
                  <div className="teamPlayerDetailAbout">
                    <h2>About</h2>
                    <p>Country: {player.country}</p>
                    <p>Number: {player.number}</p>
                    {player.name != user.name ? (
                      <p>Club: {player.club}</p>
                    ) : null}
                    <p>Date of Birth: {player.dob}</p>
                  </div>
                  <div className="teamplayerDetailButtons">
                    {player.name != user.name ? (
                      <button
                        className="playerDetailBtn"
                        onClick={handleDelete}
                      >
                        Remove From Team
                      </button>
                    ) : null}
                    {player.bench ? (
                      <button className="benchBtn" onClick={handleBench}>
                        Start Player
                      </button>
                    ) : (
                      <button className="benchBtn" onClick={handleBench}>
                        Bench Player
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          }
        )}
    </div>
  </div>
);

////////////////////////////////////////////////////////////////


//// refractor in users
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