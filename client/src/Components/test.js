//refractored for teamdetail 

return (
  <div>
    <div>
      {teamData
        .filter((player) => player.id == id)
        .map((player) => {
          currentPlayerBench = player.bench;

        //   if (player.position == "Goalie") {
            return (
              <div className="teamPlayerDetail">
                <h1 className="teamPlayerName">{player.name}</h1>
                <div className="teamPlayerDetailPic">
                  <img
                    src={player.image}
                    style={{ width: "80%", marginBottom: "100px" }}
                  />
                </div>
                <div className="teamPlayerDetailInfo">
                  <h1 style={{ textAlign: "left", fontSize: "40px" }}>
                    Rating: {player.rating}
                  </h1>
                  {player.position == "Goalie" ? (
                    <div className="TeamPlayerDetailStat">
                      <h2>Position: {player.position}</h2>
                      <p>Diving: {player.pace}</p>
                      <p>Handling: {player.shot}</p>
                      <p>Kicking: {player.pass}</p>
                      <p>Reflexes: {player.dribble}</p>
                      <p>Speed: {player.defence}</p>
                      <p>Positioning: {player.physical}</p>
                    </div>
                  ) : (
                    <div className="TeamPlayerDetailStat">
                      <h2>Position: {player.position}</h2>
                      <p>Pace: {player.pace}</p>
                      <p>Shot: {player.shot}</p>
                      <p>Pass: {player.pass}</p>
                      <p>Dribble: {player.dribble}</p>
                      <p>Defence: {player.defence}</p>
                      <p>Physical: {player.physical}</p>
                    </div>
                  )}
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
                      <button className="benchBtn" onClick={handleBench}>
                        Start Player
                      </button>
                    ) : (
                      <button className="benchBtn" onClick={handleBench}>
                        Bench Player
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          }
        )}
    </div>
  </div>
);
