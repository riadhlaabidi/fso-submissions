import { useEffect, useState } from "react";
import Form from "./components/Form";
import ContactList from "./components/ContactList";
import Search from "./components/Search";
import "./App.css";
import Header from "./components/Header";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    console.log("Effect triggered");
    axios
      .get("http://localhost:3001/persons")
      .then((res) => setPersons(res.data));
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
