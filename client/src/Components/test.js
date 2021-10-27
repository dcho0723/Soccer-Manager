
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
