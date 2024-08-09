import { Formik, Field, Form } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filters/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Formik>
        <Form>
          <label>
            <span>Search</span>
            <Field
              name="search"
              onChange={(e) => {
                dispatch(changeFilter(e.target.value));
              }}
            />
          </label>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchBox;
