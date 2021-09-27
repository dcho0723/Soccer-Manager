import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function CreatePlayer({ user }) {
  const [dob, setDob] = useState("");
  // const [club, setClub] = useState("")
  const [country, setCountry] = useState("");
  const [image, setImage] = useState("");
  const [rating, setRating] = useState(0);
  const [number, setNumber] = useState("");
  const [position, setPosition] = useState("");
  const [pace, setPace] = useState(0);
  const [shot, setShot] = useState(0);
  const [pass, setPass] = useState(0);
  const [dribble, setDrible] = useState(0);
  const [defence, setDefence] = useState(0);
  const [physical, setPhysical] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <h1>in create player</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Date of Birth
          <input
            type="text"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
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
          Date of Birth
          <input
            type="text"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </label>
        <label>
          Date of Birth
          <input
            type="text"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </label>
        <label>
          Date of Birth
          <input
            type="text"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </label>
        <label>
          Date of Birth
          <input
            type="text"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </label>
        <label>
          Date of Birth
          <input
            type="text"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </label>
        <label>
          Date of Birth
          <input
            type="text"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </label>
        <label>
          Date of Birth
          <input
            type="text"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </label>
        <label>
          Date of Birth
          <input
            type="text"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </label>

      </form>
    </div>
  );
}

export default CreatePlayer;

//didnt add name and bench. should be set as default
