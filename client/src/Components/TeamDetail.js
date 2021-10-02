import React from "react";
import { useParams, useHistory } from "react-router-dom";

function TeamDetail({ teamData, fetchTeamPlayers }) {
  const { id } = useParams();
  let history = useHistory();

  function handleDelete() {
    fetch(`/team/${id}/remove`, {
      method: "DELETE",
    });
    fetchTeamPlayers();
  }
  return (
    <div>
      <div>
        {teamData
          .filter((player) => player.id == id)
          .map((player) => {
            if (player.position == "Goalie") {
              return (
                <div>
                  <h1>{player.name}</h1>
                  <img src={player.image} />
                  <h2>Rating: {player.rating}</h2>
                  <p>Diving: {player.pace}</p>
                  <p>Handling: {player.shot}</p>
                  <p>Kicking: {player.pass}</p>
                  <p>Reflexes: {player.dribble}</p>
                  <p>Speed: {player.defence}</p>
                  <p>Positioning: {player.physical}</p>
                  <button onClick={handleDelete}>Remove From Team</button>
                </div>
              );
            } else {
              return (
                <div>
                  <h1>{player.name}</h1>
                  <img src={player.image} />
                  <h2>Rating: {player.rating}</h2>
                  <p>Pace: {player.pace}</p>
                  <p>Shot: {player.shot}</p>
                  <p>Pass: {player.pass}</p>
                  <p>Dribble: {player.dribble}</p>
                  <p>Defence: {player.defence}</p>
                  <p>Physical: {player.physical}</p>
                  <button onClick={handleDelete}>Remove From Team</button>
                </div>
              );
            }

            // return (
            //   <div key={player.id}>
            //     <h1>Name: {player.name}</h1>
            //     <h1>Rating: {player.rating}</h1>
            //     <button onClick={handleDelete}>Remove From Team</button>
            //   </div>
            // );
          })}
      </div>
    </div>
  );
}

export default TeamDetail;
