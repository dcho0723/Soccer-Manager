import React from "react";

function TeamCard({
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
  user
}) {
  function handleClick() {
      console.log(user.id)
      console.log(id)
      // need to delete player from join table where user.id and id(player) is equal 
  }

  return (
    <div>
      <h1>{name}</h1>
      <button onClick={handleClick}>Remove From Team</button>
    </div>
  );
}

export default TeamCard;
