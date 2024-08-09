import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    isError: false,
  },
};

const slice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.contacts.items = state.contacts.items.filter(
        (item) => item.id !== action.payload
      );
    },
    setLoadingStatus: (state, action) => {
      state.isLoading = action.payload;
    },
    setErrorStatus: (state, action) => {
      state.isError = action.payload;
    },
    fetchData: (state, action) => {
      state.contacts.items = action.payload;
    },
  },
});

export const contactsReducer = slice.reducer;

export const {
  deleteContact,
  addContact,
  setLoadingStatus,
  setErrorStatus,
  fetchData,
} = slice.actions;
