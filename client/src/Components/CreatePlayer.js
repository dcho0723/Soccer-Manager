import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function CreatePlayer({
  user,
  setPlayers,
  players,
  getTheData,
  addPlayersToTeam,
}) {
  const [dob, setDob] = useState("");
  const [country, setCountry] = useState("");
  const [image, setImage] = useState("");
  const [rating, setRating] = useState(0);
  const [number, setNumber] = useState("");
  const [position, setPosition] = useState("");
  const [pace, setPace] = useState(0);
  const [shot, setShot] = useState(0);
  const [pass, setPass] = useState(0);
  const [dribble, setDribble] = useState(0);
  const [defence, setDefence] = useState(0);
  const [physical, setPhysical] = useState(0);
  const [errors, setErrors] = useState([]);
  let history = useHistory()

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/players/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        dob,
        country,
        image,
        rating,
        number,
        position,
        pace,
        shot,
        pass,
        dribble,
        defence,
        physical,
        name: user.name,
        bench: true,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          setPlayers([...players, data]);
          //start our post to join table
          fetch("/userplayer", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              user_id: user.id,
              player_id: data.id,
            }),
          }).then((r) => {
            if (r.ok) {
              r.json().then((data) => setPlayers(...players, data));
              getTheData();
              addPlayersToTeam();
              e.target.reset()
              window.alert("Player Created!")
              history.push('/home')
            }
          });
        });
      } else {
        r.json().then((data) => setErrors(data.errors));
      }
    });
  }

  return (
    <div className="createPlayer">
      <h1>Customize Your Own Player</h1>
      {errors.length > 0 && (
        <div style={{ color: "red" }}>
          {errors.map((error) => (
            <p key={error} style={{ margin: "5px" }}>
              {error}
            </p>
          ))}
        </div>
      )}
      <form onSubmit={handleSubmit} className="createForm">
        <label>
          Date of Birth
          <input
            type="text"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
          <br />
        </label>
        <label>
          Country
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          <br />
        </label>
        <label>
          Image
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <br />
        </label>
        <label>
          Position
          <select
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          >
            <option value=""></option>
            <option value="Goalie">Goalie</option>
            <option value="Defender">Defender</option>
            <option value="Midfielder">Midfielder</option>
            <option value="Forward">Forward</option>
          </select>
          <br />
        </label>
        <label>
          Number
          <input
            type="integer"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <br />
        </label>
        <label>
          Rating
          <input
            type="integer"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
          <br />
        </label>
        <label>
          Pace
          <input
            type="text"
            value={pace}
            onChange={(e) => setPace(e.target.value)}
          />
          <br />
        </label>
        <label>
          Shot
          <input
            type="text"
            value={shot}
            onChange={(e) => setShot(e.target.value)}
          />
          <br />
        </label>
        <label>
          Pass
          <input
            type="text"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <br />
        </label>
        <label>
          Dribble
          <input
            type="text"
            value={dribble}
            onChange={(e) => setDribble(e.target.value)}
          />
          <br />
        </label>
        <label>
          Defence
          <input
            type="text"
            value={defence}
            onChange={(e) => setDefence(e.target.value)}
          />
          <br />
        </label>
        <label>
          Physical
          <input
            type="text"
            value={physical}
            onChange={(e) => setPhysical(e.target.value)}
          />
          <br />
        </label>
        <button type="submit" className="createSubmit">
          Create
        </button>
      </form>
    </div>
  );
}

export default CreatePlayer;
