import React from "react";
import { useParams } from "react-router-dom";
import UserDetailForm from "./UserDetailForm"

function UserDetail({ allUsers, user, getTheData }) {
  const { id } = useParams();


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
    });

  function handleClickChallenge() {
    let ratingDifference = user.get_users_average_rating - userAverage[0];
    if (ratingDifference <= 10 && ratingDifference >= -10) {
      ratingDifference *= 4;
    } else {
      ratingDifference = user.get_users_average_rating - userAverage[0];
    }

    let randomNumberForDifference = Math.floor(
      Math.random() * ratingDifference
    );
    let randomPlayer =
      user.players[Math.floor(Math.random() * user.players.length)].name;

    let winningArr = [
      `What a game! ${randomPlayer} played at his best`,
      `${randomPlayer} played well today!`,
      `${randomPlayer} let his team to victory`,
      `${randomPlayer} played a big role in todays win! `,
    ];

    let losingArr = [
      `Tough loss. ${randomPlayer} wasn't at their best`,
      `${randomPlayer} mistake led to a costly lost.`,
      `Rough night for ${randomPlayer}.`,
      `${randomPlayer} couldn't seem to get a control of the game.`,
    ];

    let winningStr = winningArr[Math.floor(Math.random() * winningArr.length)];
    let losingStr = losingArr[Math.floor(Math.random() * losingArr.length)];

    let firstRandomScore = Math.floor(Math.random() * 4);
    let secondRandomScore =
      firstRandomScore + Math.floor(Math.random() * 3) + 1;

    if (randomNumberForDifference <= 10 && randomNumberForDifference >= -10) {
      window.alert(
        `${winningStr} ${user.name} won ${secondRandomScore} - ${firstRandomScore}!`
      );
      winningPatch();
    } else {
      window.alert(
        `${losingStr} ${user.name} lost ${firstRandomScore} - ${secondRandomScore}!`
      );
      losingPatch();
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
      .then((data) => {
        console.log(data);
        getTheData();
      });
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
      .then((data) => {
        console.log(data);
        getTheData();
      });
  }

  return (
    <div>
      {allUsers
        .filter((otherUser) => otherUser.id == id)
        .map((otherUser) => {
          if (otherUser.players.length > 0) {
            return (
              <div key={otherUser.id} className="userPlayers">
                <h1>
                  {otherUser.name}'s Team Average Rating: {userAverage}
                </h1>
                <button
                  onClick={handleClickChallenge}
                  className="challengeBttn"
                >
                  Challenge?
                </button>
                <br />
                {otherUser.players.map((players) => {
                  return (
//////////////////// refractor in test/////////////////////////

                    <>
                      {players.position == "Goalie" ? (
                        <div className="playerCard">
                          <h1 className="playerName">{players.name}</h1>
                          <h2 className="ratingName">
                            Rating: {players.rating}
                          </h2>
                          <div style={{ textAlign: "center" }}>
                            <img src={players.image} className="playerImg" />
                            <h3 className="playerPosition">
                              Position: {players.position}
                            </h3>
                          </div>
                          <div className="goalieStat">
                            <p>Diving: {players.pace}</p>
                            <p>Handling: {players.shot}</p>
                            <p>Kicking: {players.pass}</p>
                          </div>
                          <div>
                            <p>Reflexes: {players.dribble}</p>
                            <p>Speed: {players.defence}</p>
                            <p>Positioning: {players.physical}</p>
                          </div>
                        </div>
                      ) : (
                        <div className="playerCard">
                          <h1 className="playerName">{players.name}</h1>
                          <h2 className="ratingName">
                            Rating: {players.rating}
                          </h2>
                          <div style={{ textAlign: "center" }}>
                            <img src={players.image} className="playerImg" />
                            <h3 className="playerPosition">
                              Position: {players.position}
                            </h3>
                          </div>
                          <div className="playerStat">
                            <p>Pace: {players.pace}</p>
                            <p>Shot: {players.shot}</p>
                            <p>Pass: {players.pass}</p>
                          </div>
                          <div>
                            <p>Dribble: {players.dribble}</p>
                            <p>Defence: {players.defence}</p>
                            <p>Physical: {players.physical}</p>
                          </div>
                        </div>
                      )}
                    </>

////////////////////////////////////////////////////////////////

                  );
                })}
              </div>
            );
          } else {
            return (
              <UserDetailForm otherUser={otherUser}/>
            );
          }
        })}
    </div>
  );
}

export default UserDetail;
