import React, { useState, useEffect } from 'react';
import { v4 as uuId } from 'uuid';
import Form from './Forms/Forms';
import Filter from './Filter/Filter';
import Contact from './Contacts/Contacts';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem('contacts')) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
    );
  });
  const [filter, setFilter] = useState('');

  const formSubmitHandler = (name, number) => {
    const id = uuId();

    const contCheck = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    contCheck
      ? alert(`${name} is olready in contacts`)
      : setContacts(() => [...contacts, { id, name, number }]);
  };

  const deleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  const changeFilter = () => {
    setFilter(e => e.currentTarget.value);
  };

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <Form onSubmit={formSubmitHandler} />
      <Filter filter={filter} onChange={changeFilter} />
      <h2>Contacts</h2>
      <Contact
        onDelete={deleteContact}
        contacts={
          filter === ''
            ? contacts
            : contacts.filter(cont =>
                cont.name.toLowerCase().includes(filter.toLowerCase())
              )
        }
      />
    </div>
  );
}
