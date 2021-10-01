import React from "react";
import PlayerCard from "./PlayerCard"
import SearchBar from "./SearchBar";
import { useState } from 'react'

function PlayerContainer({players, user, teamData, setTeamData, addPlayersToTeam}) {
  const [searchInput, setSearchInput] = useState("")
  console.log(searchInput)

  return (
    <div>

      <SearchBar setSearchInput={setSearchInput}/>

      {players.filter((player) => player.name.toLowerCase().includes(searchInput.toLowerCase()))
      .map((player) => {
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
              user={user}
              teamData={teamData}
              setTeamData={setTeamData}
              addPlayersToTeam={addPlayersToTeam}
            />
          </div>
        );
      })}
    </div>
  );
}

export default PlayerContainer;
