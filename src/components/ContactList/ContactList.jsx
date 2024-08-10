import React, { useEffect } from "react";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading } from "../../redux/contacts/selectContacts";

import { fetchContactThunk } from "../../redux/contactsOps";
import { selectFilteredContacts } from "../../redux/contacts/contactsSlice";

const ContactList = () => {
  const isLoading = useSelector(selectIsLoading);
  const filteredData = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchContactThunk());
  // }, [dispatch]);

  return (
    <div>
      {isLoading && <h1>Loading...</h1>}

      <ul>
        {filteredData.map((item) => (
          <li className={s.li} key={item.id}>
            <Contact item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
