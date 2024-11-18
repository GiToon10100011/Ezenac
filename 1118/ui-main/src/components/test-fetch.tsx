import React, { useEffect, useState } from "react";



const Page = () => {
  const [bookData, setBookData] = useState("");
  const fetchData = async () => {
    const response = await fetch("localhost:12345/book");
    const data = await response.json();
    setBookData(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return <div>{bookData}</div>;
};

export default Page;
