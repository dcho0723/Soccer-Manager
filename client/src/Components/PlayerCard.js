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
            //why is it adding the set arrray each time into user_player
            
            //figure out what to do here, right now, we are just console log created player. does it need to pushed to a state or what. if i update data. do i need to put it into state.
        }
    })

  }

  return (
    <div>
      <h1>{name}</h1>
      <button onClick={handleClick}>Add To Your Team</button>
    </div>
  );
}

export default PlayerCard;
