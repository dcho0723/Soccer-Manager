import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ".././Team.css";

function TeamCard({ teamData, setTeamData }) {
  useEffect(() => {
    fetch("/team")
      .then((res) => res.json())
      .then((data) => setTeamData(data));
  }, []);
  //refractor

  ///test out adding player return to variable
  let playerReturn = (
    <div className="cardBorder" key={player.id}>
      <Link to={`/team/${player.id}`} style={{ textDecoration: "none" }}>
        <div className="smallDivPlayer">
          <h3>{player.name}</h3>
          <img src={player.image} className="smallPlayerImg" />
        </div>
      </Link>
    </div>
  );

  /////////

  let forwardPlayers = teamData.map((player) => {
    if (!player.bench && player.position == "Forward") {
      return (
        // <div className="cardBorder" key={player.id}>
        //   <Link to={`/team/${player.id}`} style={{ textDecoration: "none" }}>
        //     <div className="smallDivPlayer">
        //       <h3>{player.name}</h3>
        //       <img src={player.image} className="smallPlayerImg" />
        //     </div>
        //   </Link>
        // </div>

      );
    }
  });

  let midfielderPlayers = teamData.map((player) => {
    if (!player.bench && player.position == "Midfielder") {
      return (
        <div className="cardBorder" key={player.id}>
          <Link to={`/team/${player.id}`} style={{ textDecoration: "none" }}>
            <div className="smallDivPlayer">
              <h3>{player.name}</h3>
              <img src={player.image} className="smallPlayerImg" />
            </div>
          </Link>
        </div>
      );
    }
  });

  let defencePlayers = teamData.map((player) => {
    if (!player.bench && player.position == "Defender") {
      return (
        <div className="cardBorder" key={player.id}>
          <Link to={`/team/${player.id}`} style={{ textDecoration: "none" }}>
            <div className="smallDivPlayer">
              <h3>{player.name}</h3>
              <img src={player.image} className="smallPlayerImg" />
            </div>
          </Link>
        </div>
      );
    }
  });

  let goaliePlayers = teamData.map((player) => {
    if (!player.bench && player.position == "Goalie") {
      return (
        <div
          className="cardBorder"
          key={player.id}
          style={{ marginTop: "30px" }}
        >
          <Link to={`/team/${player.id}`} style={{ textDecoration: "none" }}>
            <div className="smallDivPlayer">
              <h3>{player.name}</h3>
              <img src={player.image} className="smallPlayerImg" />
            </div>
          </Link>
        </div>
      );
    }
  });

  let benchPlayers = teamData.map((player) => {
    if (player.bench) {
      return (
        <Link to={`/team/${player.id}`} style={{ textDecoration: "none" }}>
          <div
            key={player.id}
            style={{ marginTop: "25px" }}
            className="smallBenchPlayer"
          >
            <h4 style={{ marginBottom: "10px" }}>{player.name}</h4>
            <p style={{ margin: "0px" }}>{player.position}</p>
            <img
              src={player.image}
              className="smallPlayerImg"
              style={{ marginBottom: "10px" }}
            />
          </div>
        </Link>
      );
    }
  });

  return (
    <div className="soccerField">
      <div>
        <div className="fieldPlayers" style={{ paddingTop: "50px" }}>
          {forwardPlayers}
        </div>
        <div className="fieldPlayers">{midfielderPlayers}</div>
        <div className="fieldPlayers">{defencePlayers}</div>
        <div className="fieldPlayers">{goaliePlayers}</div>
      </div>
      <div
        className="benchPlayers"
        style={{ marginTop: "20px", paddingBottom: "20px" }}
      >
        {benchPlayers}
      </div>
    </div>
  );
}

export default TeamCard;
