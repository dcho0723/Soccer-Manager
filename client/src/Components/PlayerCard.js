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
  addPlayersToTeam
}) {

  function handleClick() {
      fetch("/userplayer", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            user_id: user.id,
            player_id: id
        })
    }).then((r) => {
        if (r.ok) {
            r.json().then(data => setTeamData(...[teamData], [data.player]))
            addPlayersToTeam()
        }
    })
  }
  return (
    <div>
      <h1>{name}</h1>
      <img src={image} />
      <button onClick={handleClick}>Add To Your Team</button>
    </div>
  );
}

export default PlayerCard;
