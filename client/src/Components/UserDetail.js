import React from "react";
import { useParams, useHistory } from "react-router-dom";

function UserDetail({ allUsers }) {
  const { id } = useParams();
  let history = useHistory();

  console.log(allUsers);

  return (
    <div>
      {allUsers
        .filter((otherUser) => otherUser.id == id)
        .map((otherUser) => {
          return (
            <div key={otherUser.id}>
              <h1>Name: {otherUser.name}</h1>
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
