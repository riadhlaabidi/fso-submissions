import { useState } from "react";
import Form from "./components/form/Form";
import ContactList from "./components/contact-list/ContactList";
import Search from "./components/search/Search";
import "./App.css";
import Header from "./components/header/Header";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
    { name: "Kevin Hellas", number: "040-123456", id: 1 },
    { name: "Marie Lovelace", number: "39-44-5323523", id: 2 },
    { name: "John Abramov", number: "12-43-234345", id: 3 },
    { name: "Jess Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [query, setQuery] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  };

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const addName = (event) => {
    event.preventDefault();
    const input = name.trim();
    const found = persons.find((person) => person.name === input);
    found
      ? alert(`${name} is already added to phonebook`)
      : setPersons([...persons, { name: name, number: number }]);
  };

  const entries = query
    ? persons.filter((person) => {
        return person.name.toLowerCase().includes(query.toLowerCase());
      })
    : persons;

  // TODO: change layout so it's like dashboard cards:
  // 1 for contact list and search in top
  // 1 for adding new contact

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
            onSubmit={addName}
          />
        </div>
        <div className="right-search">
          <h2>Numbers</h2>
          <Search query={query} onChange={handleQueryChange} />
          <ContactList entries={entries} />
        </div>
      </div>
    </div>
  );
};

export default App;
