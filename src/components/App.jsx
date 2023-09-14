// App.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectIsLoading, selectError } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import './App.css';

export function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contactsFromState = useSelector(selectContacts);

  return (
    <div className="main-wrapper">
      <Section className="addContactSection" title="Phonebook">
        <ContactForm />
      </Section>
      {isLoading && !error && (
        <p style={{ textAlign: 'center', color: 'orange' }}>
          Request in progress...
        </p>
      )}
      {error && (
        <p style={{ textAlign: 'center', color: 'red' }}>
          Ooops! Something went wrong, please try again...
        </p>
      )}
      {contactsFromState.length !== 0 && (
        <Section className="contactListSection" title="Contacts">
          <Filter />
          <ContactList />
        </Section>
      )}
    </div>
  );
}