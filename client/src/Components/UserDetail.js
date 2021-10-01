import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";

function UserDetail({ allUsers, user }) {
  const { id } = useParams();
  let history = useHistory();

  //   if let playerId = user.show_users_player["id"]
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
    let statChange = Math.floor(Math.random() * 4);
    let ratingChange = Math.floor(Math.random() * 2);
    fetch(`/players/${playerId}/update`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({
            pace: pace += statChange, 
            shot: shot += statChange, 
            pass: pass += statChange, 
            dribble: dribble += statChange, 
            defence: defence += statChange, 
            physical: physical += statChange,
            rating: rating += ratingChange
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
