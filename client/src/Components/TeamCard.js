import React from "react";
import { Link } from 'react-router-dom'

function TeamCard({ teamData }) {

//   function handleClick() {
//       console.log(user.id)
//       console.log(id)
      /////
//  change name of params to player id aka id
      ///
      // need to delete player from join table where user.id and id(player) is equal 

//   }
// console.log(teamData)
  return (
    <div>
        <h1>hello in team card</h1>
        {teamData.map(player => {
            return (
            <div key={player.id}>
                <h1>Name: <Link to={`/team/${player.id}`}>{player.name}</Link></h1>
            </div>
            )
        })}
      {/* <h1>Name:<Link to="/team/${name}">{name}</Link></h1> */}
      {/* <button onClick={handleClick}>Remove From Team</button> */}
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