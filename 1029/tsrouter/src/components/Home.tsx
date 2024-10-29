import React, { useEffect } from "react";
import { users } from "../db";
import { Link, useSearchParams } from "react-router-dom";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const createParams = setTimeout(() => {
      setSearchParams({
        day: "today",
        tomorrow: "241030",
      });
    }, 3000);
    return () => clearTimeout(createParams);
  }, []);
  
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <Link to={`/users/${user.id}`}>{user.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Home;
