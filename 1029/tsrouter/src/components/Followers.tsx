import React from "react";
import { useOutletContext } from "react-router-dom";

interface IFollowersContext {
  nameOfMyUsers: string;
}

const Followers = () => {
  const { nameOfMyUsers } = useOutletContext<IFollowersContext>();

  console.log(nameOfMyUsers);

  return <h1>Here are {nameOfMyUsers}의 Followers</h1>;
};

export default Followers;
