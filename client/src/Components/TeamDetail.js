import React from "react";
import { useParams, useHistory } from "react-router-dom";

function TeamDetail({ teamData }) {
  const { id } = useParams();
  let history = useHistory()


  function handleDelete() {
      fetch(`/team/${id}/remove`, {
          method: "DELETE"
      }).then(res => res.json())
      //should call team data function 
      console.log("delete has been done")
      history.push('/team')
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
