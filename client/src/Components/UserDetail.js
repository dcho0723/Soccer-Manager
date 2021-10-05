import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";

function UserDetail({ allUsers, user }) {
  const { id } = useParams();
  let history = useHistory();

  let playerId, pace, shot, pass, dribble, defence, physical, rating;
  if (user.show_user_players_length > 0) {
    playerId = user.show_users_player["id"];
    pace = user.show_users_player["pace"];
    shot = user.show_users_player["shot"];
    pass = user.show_users_player["pass"];
    dribble = user.show_users_player["dribble"];
    defence = user.show_users_player["defence"];
    physical = user.show_users_player["physical"];
    rating = user.show_users_player["rating"];
  }

  let userAverage = allUsers
    .filter((otherUser) => otherUser.id == id)
    .map((otherUser) => {
      let sum = 0;
      for (let i = 0; i < otherUser.players.length; i++) {
        sum += otherUser.players[i].rating;
      }
      return Math.round(sum / otherUser.players.length);
    }
    );

    // console.log(userAverage[0])
    // console.log(user.get_users_average_rating)
    // console.log(user.get_users_average_rating - userAverage[0])
    // let x = user.get_users_average_rating - userAverage[0]
    // let y = Math.floor(Math.random() * x)
    // console.log(y)
    // console.log(user.name)

    function handleClickChallenge() {
        let ratingDifference = user.get_users_average_rating - userAverage[0]
        if  (ratingDifference <= 10 && ratingDifference >= -10) {
            ratingDifference *= 4
        } else {
            ratingDifference = user.get_users_average_rating - userAverage[0]
        }

        let randomNumberForDifference = Math.floor(Math.random() * ratingDifference)
        let randomPlayer = user.players[Math.floor(Math.random() * user.players.length)].name
        
        let winningArr = [`What a game! ${randomPlayer} played at his best`, `${randomPlayer} played well today!`, `${randomPlayer} let his team to victory`, `${randomPlayer} played a big role in todays win! `]

        let losingArr = [`Tough lose. ${randomPlayer} wasn't at their best`, `${randomPlayer} mistake led to a costly lost.`, `Rough night for ${randomPlayer}.`, `${randomPlayer} couldn't seem to get a control of the game.`]

        let winningStr = winningArr[Math.floor(Math.random() * winningArr.length)]

        let losingStr = losingArr[Math.floor(Math.random() * losingArr.length)]

        let firstRandomScore = Math.floor(Math.random() * 4)
        let secondRandomScore = firstRandomScore + Math.floor(Math.random() * 3) + 1 

        if (randomNumberForDifference<=10 && randomNumberForDifference >= -10) {
        // console.log("i won")
        window.alert(`${winningStr} ${user.name} won ${secondRandomScore} - ${firstRandomScore}!`)
        winningPatch()
        } else {
            window.alert(`${losingStr} ${user.name} lost ${firstRandomScore} - ${secondRandomScore}!`)
            // console.log("you lost")
            losingPatch()
        }
    }



    function winningPatch() {
        fetch(`/players/${playerId}/update`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            pace: (pace += Math.floor(Math.random() * 4)),
            shot: (shot += Math.floor(Math.random() * 4)),
            pass: (pass += Math.floor(Math.random() * 4)),
            dribble: (dribble += Math.floor(Math.random() * 4)),
            defence: (defence += Math.floor(Math.random() * 4)),
            physical: (physical += Math.floor(Math.random() * 4)),
            rating: (rating += Math.floor(Math.random() * 2)),
          }),
        })
          .then((r) => r.json())
          .then((data) => console.log(data));
      }
      function losingPatch() {
        fetch(`/players/${playerId}/update`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            pace: (pace -= Math.floor(Math.random() * 4)),
            shot: (shot -= Math.floor(Math.random() * 4)),
            pass: (pass -= Math.floor(Math.random() * 4)),
            dribble: (dribble -= Math.floor(Math.random() * 4)),
            defence: (defence -= Math.floor(Math.random() * 4)),
            physical: (physical -= Math.floor(Math.random() * 4)),
            rating: (rating -= Math.floor(Math.random() * 2)),
          }),
        })
          .then((r) => r.json())
          .then((data) => console.log(data));
      }

  return (
    <div>
      {allUsers
        .filter((otherUser) => otherUser.id == id)
        .map((otherUser) => {
          if (otherUser.players.length > 0) {
            return (
              <div key={otherUser.id}>
                <h1>Name: {otherUser.name}</h1>
                <p>
                  {otherUser.name} Teams Average Rating {userAverage}
                </p>
                <button onClick={handleClickChallenge}>Challenge?</button>
                {/* <button onClick={test}>test?</button> */}
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
            return <h1>{otherUser.name} hasn't created a team yet</h1>;
          }
        })}
    </div>
  );
}

export default UserDetail;
