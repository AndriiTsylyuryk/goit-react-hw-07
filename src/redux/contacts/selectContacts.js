export const selectContacts = (state) => state.contactsData.contacts.items;
export const selectIsLoading = (state) => state.contactsData.contacts.isLoading;
export const selectIsError = (state) => state.contactsData.contacts.isError;
