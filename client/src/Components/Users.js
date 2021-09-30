import React, { useEffect } from "react";
import { useState } from "react";

function Users({ user }) {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    fetch("/users")
      .then((res) => res.json())
      .then((data) => setAllUsers(data));
  }, []);
  console.log(allUsers);

  //do i neeed to do the same thing as i did before, i can pass down users.id through useparams 

  return (
    <>
      <h1>hello in users</h1>
      {allUsers
        .filter((users) => users.id != user.id)
        .map((users) => {
          return (
            <div>
              <h1>{users.name}'s Team</h1>
              {console.log(users.players[0])}
              {/* <li>{}</li> */}
            </div>
          );
        })}
    </>
  );
}

export default Users;
