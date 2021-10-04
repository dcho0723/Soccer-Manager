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
            }
          });
        });
      } else {
        r.json().then((data) => {
          setErrors(data.errors) 
          console.log(data.errors)});
      }
    });
  }

  return (
    <div>
      <h1>in create player</h1>
      {errors.length > 0 && (
        <div style={{ color: "red" }}>
          {errors.map((error) => (
            <p key={error} style={{ margin: "5px" }}>
              {error}
            </p>
          ))}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <label>
          Date of Birth
          <input
            type="text"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
          <br/>
        </label>
        <label>
          Country
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </label>
        <label>
          Image
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </label>
        <label>
          Rating
          <input
            type="number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </label>
        <label>
          Number
          <input
            type="integer"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
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
        </label>
        <label>
          Pace
          <input
            type="text"
            value={pace}
            onChange={(e) => setPace(e.target.value)}
          />
        </label>
        <label>
          Shot
          <input
            type="text"
            value={shot}
            onChange={(e) => setShot(e.target.value)}
          />
        </label>
        <label>
          Pass
          <input
            type="text"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </label>
        <label>
          Dribble
          <input
            type="text"
            value={dribble}
            onChange={(e) => setDribble(e.target.value)}
          />
        </label>
        <label>
          Defence
          <input
            type="text"
            value={defence}
            onChange={(e) => setDefence(e.target.value)}
          />
        </label>
        <label>
          Physical
          <input
            type="text"
            value={physical}
            onChange={(e) => setPhysical(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default CreatePlayer;

//didnt add name and bench. should be set as default
