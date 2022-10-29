import "./App.css";
import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import axios from "axios";
import CountryDetails from "./components/CountryDetails";
import CountriesList from "./components/CountriesList";

function App() {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const filtered = countries.filter((country) =>
    country.name.common.toLowerCase().includes(query.toLowerCase())
  );

  function onQueryChange(event) {
    setQuery(event.target.value);
    setSelectedIndex(-1);
  }

  function handleClick(selectedIndex) {
    setSelectedIndex(selectedIndex);
  }

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setCountries(res.data);
    });
  }, []);

  return (
    <div>
      <SearchBar query={query} onChange={onQueryChange} />
      {filtered.length === 1 ? (
        <CountryDetails country={filtered[0]} />
      ) : filtered.length <= 10 ? (
        selectedIndex >= 0 ? (
          <CountryDetails country={filtered[selectedIndex]} />
        ) : (
          <CountriesList countries={filtered} onClick={handleClick} />
        )
      ) : (
        <p>Too many matches, please refine your search</p>
      )}
    </div>
  );
}

export default App;
