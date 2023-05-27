import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilterQuery = state => state.filter.query;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilterQuery],
  (contacts, query) => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(query.toLowerCase())
    );
  }
);
