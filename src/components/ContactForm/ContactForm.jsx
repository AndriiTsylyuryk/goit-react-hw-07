import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import s from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/contactsSlice";
import { addContactThunk } from "../../redux/contactsOps";

const ContactForm = () => {
  const schema = Yup.object({
    name: Yup.string()
      .required("This field is required")
      .min(3, "add more")
      .max(50, "too much chars"),

    number: Yup.string("please add only numbers")
      .required("This field is required")
      .min(3, "add more")
      .max(50, "too much chars"),
  });

  const initialValues = {
    name: "",
    number: "",
    id: "",
  };

  const dispatch = useDispatch();

  const handleSubmit = (data, options) => {
    const newItem = {
      name: data.name,
      number: data.number,
    };
    dispatch(addContactThunk(newItem));
    options.resetForm();
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Form className={s.wrapper}>
          <label className={s.label}>
            <span>Name</span>
            <Field name="name" />
            <ErrorMessage name="name" component="span" className={s.span} />
          </label>
          <label>
            <span>Number</span>
            <Field name="number" />
            <ErrorMessage name="number" component="span" className={s.span} />
          </label>
          <button type="submit">Add Contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
