import React, { useEffect, useState } from "react";
import ContactItem from "./ContactItem";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";

const ContactList = () => {
  const [filteredList, setFilteredList] = useState([]);
  const contact = useSelector((state) => state.contact);
  const searchQuery = useSelector((state) => state.searchQuery);

  console.log(contact, searchQuery);

  useEffect(() => {
    if (searchQuery !== "") {
      const list = contact.filter(
        ({ name, mobile }) =>
          name.includes(searchQuery) || mobile.includes(searchQuery)
      );
      setFilteredList(list);
    } else setFilteredList(contact);
  }, [searchQuery]);

  return (
    <>
      <h6>Friends List</h6>
      <SearchBar />
      {filteredList.map((contact, index) => (
        <ContactItem key={index} {...contact} />
      ))}
    </>
  );
};

export default ContactList;
