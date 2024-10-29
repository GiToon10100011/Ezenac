import React from "react";
import { useParams, Outlet, Link } from "react-router-dom";
import { users } from "../db";

const User = () => {
  const { id } = useParams();
  return (
    <>
      <h1>
        User with id {id} is name: {users[Number(id) - 1].name}
      </h1>
      <hr />
      <Link to={"followers"}>See Followers</Link>
      <Outlet context={{ nameOfMyUsers: users[Number(id) - 1].name }} />
    </>
  );
};

export default User;
