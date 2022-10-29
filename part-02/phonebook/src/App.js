import "./App.css";
import { useEffect, useState } from "react";
import Form from "./components/Form";
import ContactList from "./components/ContactList";
import Search from "./components/Search";
import Header from "./components/Header";

import contactService from "./services/contact";
import Notification from "./components/Notification";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [query, setQuery] = useState("");
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    contactService.getAll().then((data) => setContacts(data));
  }, []);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  };

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const createContact = (event) => {
    event.preventDefault();
    const input = name.trim();
    const found = contacts.find((contact) => contact.name === input);
    if (!found) {
      contactService.create({ name, number }).then((data) => {
        setContacts(contacts.concat(data));
        setNotification({ message: `Added ${name}`, type: "success" });
        setTimeout(() => {
          setNotification(null);
        }, 2500);
        setName("");
        setNumber("");
      });
    } else {
      const confirmed = window.confirm(
        `${found.name} is already added to phonebook \n` +
          `Would you like to replace the old number ?`
      );
      if (confirmed) {
        const updatedContact = { ...found, number };
        contactService
          .update(found.id, updatedContact)
          .then((data) => {
            setContacts(
              contacts.map((contact) =>
                contact.id !== found.id ? contact : data
              )
            );
            setNotification({ message: `Updated ${name}`, type: "success" });
            setTimeout(() => {
              setNotification(null);
            }, 2500);
          })
          .catch((error) => {
            setNotification({
              message: `Information of ${name} has already been removed from server`,
              type: "error",
            });
            setTimeout(() => {
              setNotification(null);
            }, 2500);
          });
      }
    }
  };

  const deleteContact = (contact) => {
    const confirmed = window.confirm(`Delete ${contact.name} ?`);
    if (confirmed) {
      contactService
        .deleteOne(contact.id)
        .then(() => {
          setNotification({
            message: `Deleted ${contact.name}`,
            type: "success",
          });
          setTimeout(() => {
            setNotification(null);
          }, 2500);
        })
        .catch((error) => {
          setNotification({
            message: `Contact ${contact.name} already deleted `,
            type: "error",
          });
          setTimeout(() => {
            setNotification(null);
          }, 2500);
        });
      setContacts(contacts.filter((c) => c.id !== contact.id));
    }
    setTimeout(() => {
      setNotification(null);
    }, 2500);
  };

  const filtered = query
    ? contacts.filter((contact) => {
        return contact.name.toLowerCase().includes(query.toLowerCase());
      })
    : contacts;

  return (
    <div className="container">
      <Header />
      <div className="split">
        <div className="left-form">
          <h2>Add new entry</h2>
          <Form
            name={name}
            number={number}
            onNameChange={handleNameChange}
            onNumberChange={handleNumberChange}
            onSubmit={createContact}
          />
          {notification && <Notification {...notification} />}
        </div>
        <div className="right-search">
          <h2>Numbers</h2>
          <Search query={query} onChange={handleQueryChange} />
          <ContactList contacts={filtered} handleDelete={deleteContact} />
        </div>
      </div>
    </div>
  );
};

export default App;
