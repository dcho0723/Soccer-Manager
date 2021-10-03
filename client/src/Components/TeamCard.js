import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function TeamCard({ teamData, setTeamData }) {

  useEffect(() => {
    fetch("/team")
      .then((res) => res.json())
      .then((data) => setTeamData(data));
  }, []);

  let forwardPlayers = teamData.map((player) => {
    if (!player.bench && player.position == "Forward") {
      return (
        <div key={player.id}>
          <h1>
            Name: <Link to={`/team/${player.id}`}>{player.name}</Link>
          </h1>
          <p>Position: {player.position}</p>
        </div>
      );
    }
  });

  let midfielderPlayers = teamData.map((player) => {
    if (!player.bench && player.position == "Midfielder") {
      return (
        <div key={player.id}>
          <h1>
            Name: <Link to={`/team/${player.id}`}>{player.name}</Link>
          </h1>
          <p>Position: {player.position}</p>
        </div>
      );
    }
  });
  let defencePlayers = teamData.map((player) => {
    if (!player.bench && player.position == "Defender") {
      return (
        <div key={player.id}>
          <h1>
            Name: <Link to={`/team/${player.id}`}>{player.name}</Link>
          </h1>
          <p>Position: {player.position}</p>
        </div>
      );
    }
  });
  let goaliePlayers = teamData.map((player) => {
    if (!player.bench && player.position == "Goalie") {
      return (
        <div key={player.id}>
          <h1>
            Name: <Link to={`/team/${player.id}`}>{player.name}</Link>
          </h1>
          <p>Position: {player.position}</p>
        </div>
      );
    }
  });
  let benchPlayers = teamData.map((player) => {
    if (player.bench) {
      return (
        <div key={player.id}>
          <h1>
            Name: <Link to={`/team/${player.id}`}>{player.name}</Link>
          </h1>
          <p>Position: {player.position}</p>
        </div>
      );
    }
  });

  return (
    <div>
      <div>
        <h1>Forward Players</h1>
        {forwardPlayers}
      </div>
      <div>
        <h1>Midfield Players</h1>
        {midfielderPlayers}
      </div>
      <div>
        <h1>Defence Players</h1>
        {defencePlayers}
      </div>
      <div>
        <h1>Goalie Players</h1>
        {goaliePlayers}
      </div>
      <div>
        <h1>Bench</h1>
        {benchPlayers}
      </div>

      {/* {teamData.map(player => {
          if (!player.bench && player.position == "Forward") {
            return (
            <div key={player.id}>
              <h1>forward</h1>
                <h1>Name: <Link to={`/team/${player.id}`}>{player.name}</Link></h1>
                <p>Position: {player.position}</p>
                <button onClick={(player) => handleBenchClick(player)}>Bench</button>
            </div>
            )
          } else if (!player.bench && player.position == "Midfielder") {
            return (
              <div key={player.id}>
                  <h1>Name: <Link to={`/team/${player.id}`}>{player.name}</Link></h1>
                  <p>Position: {player.position}</p>
              </div>
              )
          } else if(!player.bench && player.position == "Defence") {
            return (
              <div key={player.id}>
                  <h1>Name: <Link to={`/team/${player.id}`}>{player.name}</Link></h1>
                  <p>Position: {player.position}</p>
              </div>
              )
        } else if (!player.bench && player.position == "Goalie"){
          return (
            <div key={player.id}>
                <h1>Name: <Link to={`/team/${player.id}`}>{player.name}</Link></h1>
                <p>Position: {player.position}</p>
            </div>
            )
        } else{
          return (
            <div key={player.id}>
                <h1>Name: <Link to={`/team/${player.id}`}>{player.name}</Link></h1>
                <p>Position: {player.position}</p>
                <button onClick={handleBenchClick}>Bench</button>
            </div>
            )
        }
        }
        )} */}
    </div>
  );
}

export default TeamCard;

// dob,
// club,
// country,
// image,
// name,
// rating,
// position,
// pace,
// shot,
// pass,
// dribble,
// defence,
// physical,
// bench,
// id,
// user
