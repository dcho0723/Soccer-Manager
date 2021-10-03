import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";

function UserDetail({ allUsers, user }) {
  const { id } = useParams();
  let history = useHistory();

  let playerId, pace, shot, pass, dribble, defence, physical, rating;
  if (user.show_user_players_length > 0) {
    playerId = user.show_users_player["id"];
    pace = user.show_users_player["pace"]
    shot = user.show_users_player["shot"]
    pass = user.show_users_player["pass"]
    dribble = user.show_users_player["dribble"]
    defence = user.show_users_player["defence"]
    physical = user.show_users_player["physical"]
    rating = user.show_users_player["rating"]
  }


  let userAverage = allUsers
    .filter((otherUser) => otherUser.id == id)
    .map((otherUser) => {
      let sum = 0;
      for (let i = 0; i < otherUser.players.length; i++) {
        sum += otherUser.players[i].rating;
      }
      return Math.round(sum / otherUser.players.length);
    });

  function handleClickChallenge() {

    fetch(`/players/${playerId}/update`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({
            pace: pace += Math.floor(Math.random() * 4), 
            shot: shot += Math.floor(Math.random() * 4), 
            pass: pass += Math.floor(Math.random() * 4), 
            dribble: dribble += Math.floor(Math.random() * 4), 
            defence: defence += Math.floor(Math.random() * 4), 
            physical: physical += Math.floor(Math.random() * 4),
            rating: rating += Math.floor(Math.random() * 2)
        })
    })
    .then((r) => r.json())
    .then((data) => console.log(data))
  }

  return (
    <div>
      {allUsers
        .filter((otherUser) => otherUser.id == id)
        .map((otherUser) => {
            if(otherUser.players.length > 0) {
          return (
            <div key={otherUser.id}>
              <h1>Name: {otherUser.name}</h1>
              <p>
                {otherUser.name} Teams Average Rating {userAverage}
              </p>
              <button onClick={handleClickChallenge}>Challenge?</button>
              {otherUser.players.map((players) => {
                return (
                  <div>
                    <h1>{players.name}</h1>
                    <h1>{players.rating}</h1>
                    <img src={players.image} />
                  </div>
                );
              })}
            </div>
          );
            } else {
                return (
                    <h1>{otherUser.name} hasn't created a team yet</h1>
                )
            }
        }

        )}
    </div>
  );
}

export default UserDetail;
