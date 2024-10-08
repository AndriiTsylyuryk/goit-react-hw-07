import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/contactsSlice";
import { filterReducer } from "./filters/filtersSlice";

export const store = configureStore({
  reducer: {
    contactsData: contactsReducer,
    filter: filterReducer,
  },
});
