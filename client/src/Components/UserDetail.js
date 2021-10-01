import React from "react";
import { useParams, useHistory } from "react-router-dom";

function UserDetail({ allUsers }) {
  const { id } = useParams();
  let history = useHistory();

  let userAverage = allUsers
    .filter((otherUser) => otherUser.id == id)
    .map((otherUser) => {
      let sum = 0;
      for (let i = 0; i < otherUser.players.length; i++) {
        sum += otherUser.players[i].rating;
      }
      return Math.round(sum / otherUser.players.length);
    });

  return (
    <div>
      {allUsers
        .filter((otherUser) => otherUser.id == id)
        .map((otherUser) => {
          return (
            <div key={otherUser.id}>
              <h1>Name: {otherUser.name}</h1>
              <p>
                {otherUser.name} Teams Average Rating {userAverage}
              </p>
              <button>Challenge?</button>
              {otherUser.players.map((players) => {
                return (
                  <div>
                    <h1>{players.name}</h1>
                    <h1>{players.rating}</h1>
                  </div>
                );
              })}
            </div>
          );
        })}
    </div>
  );
}

export default UserDetail;
