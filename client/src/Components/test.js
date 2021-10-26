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
                  {player.name != user.name ? <p>Club: {player.club}</p> : null}
                  <p>Date of Birth: {player.dob}</p>
                </div>
                <div className="teamplayerDetailButtons">
                  {player.name != user.name ? (
                    <button className="playerDetailBtn" onClick={handleDelete}>
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
        })}
    </div>
  </div>
);

////////////////////////////////////////////////////////////////

//// refractor in users

return (
  <div>
    <div className="playerCard">
      <h1 className="playerName">{users.show_users_player.name}</h1>
      <h2 className="ratingName">Rating: {users.show_users_player.rating}</h2>
      <div style={{ textAlign: "center" }}>
        <img src={users.show_users_player.image} className="playerImg" />
        <h3 className="playerPosition">
          Position: {users.show_users_player.position}
        </h3>
      </div>
      {users.show_users_player.position === "Goalie" ? (
        <>
          <div className="goalieStat">
            <p>Diving: {users.show_users_player.pace}</p>
            <p>Handling: {users.show_users_player.shot}</p>
            <p>Kicking: {users.show_users_player.pass}</p>
          </div>
          <div>
            <p>Reflexes: {users.show_users_player.dribble}</p>
            <p>Speed: {users.show_users_player.defence}</p>
            <p>Positioning: {users.show_users_player.physical}</p>
          </div>
        </>
      ) : (
        <>
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
        </>
      )}
      <Link className="linkToUserTeam" to={`/users/${users.id}`}>
        <button className="viewTeamBtn">View {users.name}'s Team</button>
      </Link>
    </div>
  </div>
);

/////////////////////////////

//////returnPlayer in Home ///////////////////////
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
          {user.favoriteclub ? <p>Favorite Club: {user.favoriteclub}</p> : null}
          <p>Number: {user.show_users_player_number}</p>
          <p>Date of Birth: {user.show_users_player_dob}</p>
        </div>
      </div>
    </div>
  );
}

/////////////////////////////////////////////////

/////////return in PlayerCard////////////////////
return (
  <div className="player">
    <div className="playerCard">
      <h1 className="playerName">{name}</h1>
      <h2 className="ratingName">Rating: {rating}</h2>
      <div style={{ textAlign: "center" }}>
        <img src={image} className="playerImg" />
        <h3 className="playerPosition">Position: {position}</h3>
      </div>

      {position == "Goalie" ? (
        <>
          <div className="goalieStat">
            <p>Diving: {pace}</p>
            <p>Handling: {shot}</p>
            <p>Kicking: {pass}</p>
          </div>
          <div>
            <p>Reflexes: {dribble}</p>
            <p>Speed: {defence}</p>
            <p>Positioning: {physical}</p>
          </div>
        </>
      ) : (
        <>
          <div className="playerStat">
            <p>Pace: {pace}</p>
            <p>Shot: {shot}</p>
            <p>Pass: {pass}</p>
          </div>
          <div>
            <p>Dribble: {dribble}</p>
            <p>Defence: {defence}</p>
            <p>Physical: {physical}</p>
          </div>
        </>
      )}
      <div className="playerButton">
        <button onClick={handleClick} className="addPlayerBtn">
          Add To Your Team
        </button>
      </div>
    </div>
  </div>
);

//////////////////////////////////////////////////////////////

/////////////refractor for userDetail

<div className="playerCard">
  <h1 className="playerName">{players.name}</h1>
  <h2 className="ratingName">Rating: {players.rating}</h2>
  <div style={{ textAlign: "center" }}>
    <img src={players.image} className="playerImg" />
    <h3 className="playerPosition">Position: {players.position}</h3>
  </div>
  {players.position == "Goalie" ? (
    <>
      <div className="goalieStat">
        <p>Diving: {players.pace}</p>
        <p>Handling: {players.shot}</p>
        <p>Kicking: {players.pass}</p>
      </div>
      <div>
        <p>Reflexes: {players.dribble}</p>
        <p>Speed: {players.defence}</p>
        <p>Positioning: {players.physical}</p>
      </div>
    </>
  ) : (
    <>
      <div className="playerStat">
        <p>Pace: {players.pace}</p>
        <p>Shot: {players.shot}</p>
        <p>Pass: {players.pass}</p>
      </div>
      <div>
        <p>Dribble: {players.dribble}</p>
        <p>Defence: {players.defence}</p>
        <p>Physical: {players.physical}</p>
      </div>
    </>
  )}
</div>;

/////////////////////////////////////////////////////////////////
