import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom"
import UserDetail from "./UserDetail";

function Users({ user, allUsers }) {
  // const [allUsers, setAllUsers] = useState([]);

  // useEffect(() => {
  //   fetch("/users")
  //     .then((res) => res.json())
  //     .then((data) => setAllUsers(data));
  // }, []);
  // console.log(allUsers);

  //do i neeed to do the same thing as i did before, i can pass down users.id through useparams 

  return (
    <>
      <h1>hello in users</h1>
      {allUsers
        .filter((users) => users.id != user.id)
        .map((users) => {
          return (
            <div>
              <h1>User: <Link to={`/users/${users.id}`}>{users.name}</Link></h1>
            </div>
          );
        })}
    </>
  );
}

export default Users;
