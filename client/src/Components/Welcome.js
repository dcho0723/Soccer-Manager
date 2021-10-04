import React, { useState, useEffect } from "react";

function Welcome({ user, password }) {
  const [club, setClub] = useState("");
  const [leagueData, setLeagueData] = useState([]);
  const [usersClub, setUsersClub] = useState("");

  let soccerClubs = [
    "Chelsea",
    "Liverpool",
    "Manchester Utd",
    "Manchester City",
    "Everton",
    "Brighton",
    "Brentford",
    "Tottenham",
    "West Ham",
    "Aston Villa",
    "Arsenal",
    "Wolves",
    "Leicester",
    "Crystal Palace",
    "Watford",
    "Leeds",
    "Southampton",
    "Burnley",
    "Newcastle",
    "Norwich",
  ];

  useEffect(() => {
    fetch(
      `https://data.football-api.com/v3/standings/1204?Authorization=cfnR6LWc4i4MDFLlPJrajoa465c4qjF594kpIy4b`
    )
      .then((r) => r.json())
      .then((data) => setLeagueData(data));
  }, [user, club]);

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/users/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        favoriteclub: club,
        password: password,
      }),
    })
      .then((r) => r.json())
      .then((data) => {
        setUsersClub(data.favoriteclub);
        chooseClub();
      });
  }

  function chooseClub() {
    if (user.favoriteclub !== null || usersClub !== "") {
      return (
        <>
          <div
            style={{ linearGradient: "(rgb(0, 83, 160), rgb(253,190,17))" }}
          ></div>
          <div className="premier-table">
            <img
              className="league-logo"
              src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Premier_League_Logo.svg/1200px-Premier_League_Logo.svg.png"
              alt="premier-league-logo"
            />
            <h1 className="premier-league">Premier League Table 2021/2022</h1>
            {leagueData.map((league) => {
              if (
                league.team_name == user.favoriteclub ||
                league.team_name == usersClub
              ) {
                return (
                  <h1
                    key={league.team_id}
                    className="each-team"
                    style={{ textAlign: "center" }}
                  >
                    {" "}
                    {league.position}. {league.team_name} {league.overall_w}W{" "}
                    {league.overall_d}D {league.overall_l}L {league.gd}GD{" "}
                    {league.points}PTS
                  </h1>
                );
              } else {
                return (
                  <h3
                    key={league.team_id}
                    className="each-team"
                    style={{ textAlign: "center" }}
                  >
                    {" "}
                    {league.position}. {league.team_name} {league.overall_w}W{" "}
                    {league.overall_d}D {league.overall_l}L {league.gd}GD{" "}
                    {league.points}PTS
                  </h3>
                );
              }
            })}
          </div>
        </>
      );
    } else {
      return (
        <div>
          <form onSubmit={handleSubmit}>
            <label>
              Choose Your Favorite Club
              <select value={club} onChange={(e) => setClub(e.target.value)}>
                {soccerClubs.map((clubs) => (
                  <option value={clubs}>{clubs}</option>
                ))}
              </select>
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      );
    }
  }

  return (
    <div>
      <h1>hello in welcome</h1>
      {chooseClub()}
    </div>
  );
}

export default Welcome;
