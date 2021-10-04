import React, { useState } from "react";

function Welcome({ user }) {
  const [club, setClub] = useState("");
  // now we prevents the user state to render before we log in, now we just need to fix the add players to team functionality.

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
  console.log(user.favoriteclub);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(club);
    console.log(user.favoriteclub);
    fetch(`/users/${user.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            favoriteclub: club
        }),
    })
    .then((r) => r.json())
    .then((data) => console.log(data))
  }

  function chooseClub() {
    if (user.club == null) {
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
