import React, { useEffect } from "react";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts } from "../../redux/contacts/selectContacts";
import { selectFilter } from "../../redux/filters/selectFilter";
import { fetchTodosThunk } from "../../redux/contacts/operations";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filteredData = contacts.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodosThunk())
  }, [dispatch]);

  return (
    <div>
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
