import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import ContactForm from '../../components/ContactForm';
import Filter from '../../components/Filter';
import ContactList from '../../components/ContactList';

import css from './Contacts.module.css';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <div className={css.content}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm />
      </div>

      <div className={css.content}>
        <h2 className={css.title}>Contacts</h2>
        <Filter />
        {isLoading && !error && (
          <b className={css.subtitle}>Request in progress...</b>
        )}
        <ContactList />
      </div>
    </div>
  );
}
