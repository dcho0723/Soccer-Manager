import React from "react";

function PlayerCard({
  dob,
  club,
  country,
  image,
  name,
  rating,
  position,
  pace,
  shot,
  pass,
  dribble,
  defence,
  physical,
  bench,
  id,
  user,
  setTeamData,
  teamData,
  addPlayersToTeam,
}) {
  function handleClick() {
    fetch("/userplayer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: user.id,
        player_id: id,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          setTeamData(...[teamData], [data.player]);
          addPlayersToTeam();
          window.alert(`${data.player.name} added to your team`);
        });
      }
    });
  }
  return (
    <>
      {position == "Goalie" ? (
        <div className="playerCard">
          <h1 className="playerName">{name}</h1>
          <h2 className="ratingName">Rating: {rating}</h2>
          <div style={{ textAlign: "center" }}>
            <img src={image} className="playerImg" />
            <h3 className="playerPosition">Position: {position}</h3>
          </div>
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
          <div className="playerButton">
            <button onClick={handleClick}>Add To Your Team</button>
          </div>
        </div>
      ) : (
        <div className="playerCard">
          <h1 className="playerName">{name}</h1>
          <h2 className="ratingName">Rating: {rating}</h2>
          <div style={{ textAlign: "center" }}>
            <img src={image} className="playerImg" />
            <h3 className="playerPosition">Position: {position}</h3>
          </div>
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
          <div className="playerButton">
            <button onClick={handleClick}>Add To Your Team</button>
          </div>
        </div>
      )}
    </>
  );
}

export default PlayerCard;
