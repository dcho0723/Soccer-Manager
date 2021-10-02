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
        r.json().then((data) => setTeamData(...[teamData], [data.player]));
        addPlayersToTeam();
      }
    });
  }
  return (
    <div>
      {position == "Goalie" ? (
        <div>
          <h1>{name}</h1>
          <img src={image} />
          <h2>Rating: {rating}</h2>
          <p>Diving: {pace}</p>
          <p>Handling: {shot}</p>
          <p>Kicking: {pass}</p>
          <p>Reflexes: {dribble}</p>
          <p>Speed: {defence}</p>
          <p>Positioning: {physical}</p>
        </div>
      ) : (
        <div>
          <h1>{name}</h1>
          <img src={image} />
          <h2>Rating: {rating}</h2>
          <p>Pace: {pace}</p>
          <p>Shot: {shot}</p>
          <p>Pass: {pass}</p>
          <p>Dribble: {dribble}</p>
          <p>Defence: {defence}</p>
          <p>Physical: {physical}</p>
        </div>
      )}

      <button onClick={handleClick}>Add To Your Team</button>
    </div>
  );
}

export default PlayerCard;
