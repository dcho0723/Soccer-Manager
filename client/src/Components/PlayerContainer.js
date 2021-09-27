import React from "react";
import PlayerCard from "./PlayerCard"

function PlayerContainer({players}) {
//   console.log(players);
  return (
    <div>
      <h1>hello</h1>
      {players.map((player) => {
        return (
          <div key={player.id}>
            <PlayerCard
              id={player.id}
              dob={player.dob}
              club={player.club}
              country={player.country}
              image={player.image}
              name={player.name}
              rating={player.rating}
              number={player.number}
              position={player.position}
              pace={player.pace}
              shot={player.shot}
              pass={player.pass}
              dribble={player.dribble}
              defence={player.defence}
              physical={player.physical}
              bench={player.bench}
            />
          </div>
        );
      })}
    </div>
  );
}

export default PlayerContainer;
