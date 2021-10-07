import React from "react";
import PlayerCard from "./PlayerCard";
import SearchBar from "./SearchBar";
import { useState } from "react";

function PlayerContainer({
  players,
  user,
  teamData,
  setTeamData,
  addPlayersToTeam,
}) {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div>
      {user.show_user_players_length !== 0 ? 
      <>
      <SearchBar setSearchInput={setSearchInput} />
      <div className="playerContainer">
        {players
          .filter((player) =>
            player.name.toLowerCase().includes(searchInput.toLowerCase())
          )
          .map((player) => {
            return (
              <div key={player.id}>
                <PlayerCard
                  id={player.id}
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
                  user={user}
                  teamData={teamData}
                  setTeamData={setTeamData}
                  addPlayersToTeam={addPlayersToTeam}
                />
              </div>
            );
          })}
      </div>
      </>
      : <h1 style={{textAlign: "center"}}>Please Create A Player First!</h1>}
    </div>
  );
}

export default PlayerContainer;
