
/////////////refractor for userDetail

<div className="playerCard">
  <h1 className="playerName">{players.name}</h1>
  <h2 className="ratingName">Rating: {players.rating}</h2>
  <div style={{ textAlign: "center" }}>
    <img src={players.image} className="playerImg" />
    <h3 className="playerPosition">Position: {players.position}</h3>
  </div>
  {players.position == "Goalie" ? (
    <>
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
    </>
  ) : (
    <>
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
    </>
  )}
</div>;

/////////////////////////////////////////////////////////////////
