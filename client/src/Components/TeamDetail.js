import React from "react";
import { useParams, useHistory } from "react-router-dom";

function TeamDetail({ teamData, fetchTeamPlayers }) {
  const { id } = useParams();
  let history = useHistory()


  function handleDelete() {
      fetch(`/team/${id}/remove`, {
          method: "DELETE"
      })
      fetchTeamPlayers()
  }
  return (
    <div>
      <div>
        {teamData
          .filter((player) => player.id == id)
          .map((player) => {
            return (
              <div key={player.id}>
                <h1>Name: {player.name}</h1>
                <h1>Rating: {player.rating}</h1>
                <button onClick={handleDelete}>Remove From Team</button>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default TeamDetail;
