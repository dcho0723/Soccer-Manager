import React from "react";
import { useParams, useHistory } from "react-router-dom";


function TeamDetail({ teamData, fetchTeamPlayers, getTheData, user }) {
  const { id } = useParams();
  let history = useHistory();

  function handleDelete() {
    fetch(`/team/${id}/remove`, {
      method: "DELETE",
    });
    fetchTeamPlayers();
  }
  let currentPlayerBench;

  function handleBench() {
    fetch(`/players/${id}/update`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        bench: !currentPlayerBench,
      }),
    })
      .then((r) => r.json())
      .then((data) => console.log(data));

    getTheData();
    fetchTeamPlayers();
  }

  return (
    <div >
      <div>
        {teamData
          .filter((player) => player.id == id)
          .map((player) => {
            currentPlayerBench = player.bench;
            if (player.position == "Goalie") {
              return (
                <div className="teamPlayerDetail">
                <h1 className="teamPlayerName">{player.name}</h1>
                <div className="teamPlayerDetailPic">
                  <img src={player.image} style={{ width: "80%", marginBottom: "100px" }} />
                </div>
                <div className="teamPlayerDetailInfo">
                  <h1 style={{ textAlign: "center", fontSize: "40px" }}>
                    Rating: {player.rating}
                  </h1>
                  <div className="TeamPlayerDetailStat">
                    <h2>Position: {player.position}</h2>
                    <p>Diving: {player.pace}</p>
                    <p>Handling: {player.shot}</p>
                    <p>Kicking: {player.pass}</p>
                    <p>Reflexes: {player.dribble}</p>
                    <p>Speed: {player.defence}</p>
                    <p>Positioning: {player.physical}</p>
                  </div>
                  <div className="teamPlayerDetailAbout">
                    <h2>About</h2>
                    <p>Country: {player.country}</p>
                    <p>Number: {player.number}</p>
                    {player.name != user.name ? (
                      <p>Club: {player.club}</p>
                    ) : null}
                    <p>Date of Birth: {player.dob}</p>
                  </div>
                  <div className="teamplayerDetailButtons">
                    {player.name != user.name ? (
                      <button
                        className="playerDetailBtn"
                        onClick={handleDelete}
                      >
                        Remove From Team
                      </button>
                    ) : null}
                    {player.bench ? (
                      <button className="benchBtn" onClick={handleBench}>Start Player</button>
                    ) : (
                      <button
                        className="benchBtn"
                        onClick={handleBench}
                      >
                        Bench Player
                      </button>
                    )}
                  </div>
                </div>
              </div>
              );
            } else {
              return (
                <div className="teamPlayerDetail">
                  <h1 className="teamPlayerName">{player.name}</h1>
                  <div className="teamPlayerDetailPic">
                    <img src={player.image} style={{ width: "80%", marginBottom: "100px"  }} />
                  </div>
                  <div className="teamPlayerDetailInfo">
                    <h1 style={{ textAlign: "center", fontSize: "40px" }}>
                      Rating: {player.rating}
                    </h1>
                    <div className="TeamPlayerDetailStat">
                      <h2>Position: {player.position}</h2>
                      <p>Pace: {player.pace}</p>
                      <p>Shot: {player.shot}</p>
                      <p>Pass: {player.pass}</p>
                      <p>Dribble: {player.dribble}</p>
                      <p>Defence: {player.defence}</p>
                      <p>Physical: {player.physical}</p>
                    </div>
                    <div className="teamPlayerDetailAbout">
                      <h2>About</h2>
                      <p>Country: {player.country}</p>
                      <p>Number: {player.number}</p>
                      {player.name != user.name ? (
                        <p>Club: {player.club}</p>
                      ) : null}
                      <p>Date of Birth: {player.dob}</p>
                    </div>
                    <div className="teamplayerDetailButtons">
                      {player.name != user.name ? (
                        <button
                          className="playerDetailBtn"
                          onClick={handleDelete}
                        >
                          Remove From Team
                        </button>
                      ) : null}
                      {player.bench ? (
                        <button onClick={handleBench} className="benchBtn">Start Player</button>
                      ) : (
                        <button
                        className="benchBtn"
                          onClick={handleBench}
                        >
                          Bench Player
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            }
          })}
      </div>
    </div>
  );
}

export default TeamDetail;
